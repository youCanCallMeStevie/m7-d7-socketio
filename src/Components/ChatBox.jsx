import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ChatBox.css";
import io from "socket.io-client";
import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";
import AppContext from "../Context/app-context";

/**
 *  
 *  1- in cdm join with your username , current active users
 *  2- fetch previous messages and set to state
 *  3- when user selected save it to satte , send message with bmsg event
 * 
 */
function ChatBox(user,users) {
  const connOpt = {
    transports: ["websocket"],
  };

  let socket = io("https://striveschool-api.herokuapp.com", connOpt);

  const [username, setUsername] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState ([]);
  const [showModal, setShowModal] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null)
  const [allUsers, setAllUsers] = useState([]);

   

  const { appState } = useContext(AppContext);


  useEffect(() => {
   
    socket.on("bmsg", msg => setMessages(messages => messages.concat(msg)));

    socket.on("connect", () => console.log("connected to socket"));
  }, [currentUser, allUsers]);

  const handleMessage = e => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = e => {
    e.preventDefault();
    if (message !== "") {
      socket.emit("bmsg", {
        user: username,
        message: message,
      });

      setMessage("");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div>
        <ul id="messages">
          {messages.map((msg, i) => (
            <li
              key={i}
              className={msg.user === username ? "ownMessage" : "message"}
            >
              <strong>{msg.user}</strong> {msg.message}
            </li>
          ))}
        </ul>
        <form id="chat" onSubmit={sendMessage}>
          <input autoComplete="off" value={message} onChange={handleMessage} />
          <Button type="submit" className="rounded-0">
            Send
          </Button>
        </form>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={toggleModal}
      >
        <Modal.Header>
          <Modal.Title>Set username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              onChange={e => setUsername(e.currentTarget.value)}
            ></FormControl>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChatBox;
