import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Modal,
  Button,
  Image,
  NavDropdown,
} from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NoteIcon from "@material-ui/icons/Note";
import { Divider } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { toBase64 } from "../utils";
import {
  deletePost,
  editPost,
  postNewPost,
  uploadPicture,
} from "../Lib/fetches/posts";
import AppContext from "../Context/app-context";

export default function PostFeedModal({
  toggleModal,
  showModal,
  selectedPost,
  user,
}) {
  const [post, setPost] = useState({});

  const [postImage, setPostImage] = useState("");
  const [imageThumb, setImageThumb] = useState("");
  const [postId, setPostId] = useState("");
  const { appState } = useContext(AppContext);

  useEffect(() => {
    console.log(appState);
    setPost(selectedPost);
    setPostId({ id: selectedPost?._id });
    console.log(postId);
    console.log(selectedPost);
  }, [selectedPost]);
  useEffect(() => {
    setPost(selectedPost);
    setPostId(selectedPost?._id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = "";
    let message = "Something went wrong";
    if (selectedPost == "") {
      res = await postNewPost(post);
      message = "Post sucessfully created";
    } else {
      console.log(postId);
      res = await editPost(appState.selectPost._id, post);
      message = "Post sucessfully edited";
    }
    if (res) {
      console.log(res);
      if (res.status == 201 || res.status == 200) {
        const data = res.data;
        const post_id = data._id;
        console.log(post_id);
        if (postImage != "") {
          const imageSent = await uploadPicture(post_id, postImage);
          if (imageSent) {
            if (imageSent.ok) {
              console.log("success");
            }
          }
        }
      }
      alert(message);
      toggleModal("");
    }
  };

  const handleChange = (e) => {
    console.log(post);
    const text = e.target.value;
    setPost({ text });
  };
  const handleChangeImage = async (e) => {
    // const formData = new FormData();
    // formData.append('post',e.target.files[0])
    setPostImage(e.target.files[0]);
    let encodedImage = await toBase64(e.target.files[0]);
    setImageThumb(encodedImage);
    console.log(postImage);
    console.log(imageThumb);
  };
  const handleDeletePost = async () => {
    const res = await deletePost(post._id);
    alert("Post Successfully Deleted");
    toggleModal("");
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => toggleModal("")}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedPost == "" ? "Create a post" : "Edit Post"}
          </Modal.Title>
        </Modal.Header>

        <Container style={{ padding: "1rem" }}>
          <div className="triangle-up"></div>

          <Row>
            <Col md={3}>
              <Image
                src={user?.image}
                roundedCircle
                className="mr-3 img-fluid"
              />
            </Col>
            <Col md={4} className="mt-4">
              {" "}
              <Button
                variant="outline-secondary"
                className="rounded-pill"
                style={{ width: "180px", fontSize: "12px" }}
              >
                <PersonIcon />
                {user?.name}
                {user?.surname} ▾{" "}
              </Button>
            </Col>
            <Col md={2} className="ml-4 mt-4">
              <Button
                variant="outline-secondary"
                className="rounded-pill"
                style={{ width: "150px", fontSize: "12px" }}
              >
                <Row className="d-flex justify-content-around">
                  <PublicIcon className="ml-4" /> Anyone{" "}
                  <NavDropdown>
                    <NavDropdown.Item>
                      <p>
                        <strong>Who can see your post?</strong>
                      </p>
                    </NavDropdown.Item>

                    <Row className="d-flex justify-content-between">
                      <Col className="ml-3">
                        <Form.Check type="radio" label="Anyone"></Form.Check>{" "}
                      </Col>
                      <Col className="ml-2">
                        <PublicIcon />
                      </Col>{" "}
                    </Row>

                    <NavDropdown.Divider />

                    <Row className="d-flex justify-content-between">
                      <Col className="ml-3">
                        <Form.Check
                          type="radio"
                          label="Anyone + Twitter"
                        ></Form.Check>{" "}
                      </Col>
                      <Col className="ml-2">
                        <PublicIcon />
                      </Col>{" "}
                    </Row>

                    <NavDropdown.Divider />

                    <Row className="d-flex justify-content-between">
                      <Col className="ml-3">
                        <Form.Check
                          type="radio"
                          label="Connections only"
                        ></Form.Check>{" "}
                      </Col>
                      <Col className="ml-2">
                        <PersonAddIcon />
                      </Col>{" "}
                    </Row>

                    <NavDropdown.Divider />

                    <Row className="d-flex justify-content-between">
                      <Col className="ml-3">
                        <Form.Check
                          type="radio"
                          label="Group Members"
                        ></Form.Check>{" "}
                      </Col>
                      <Col className="ml-2">
                        <GroupIcon />
                      </Col>{" "}
                    </Row>

                    <NavDropdown.Divider />

                    <Row className="d-flex justify-content-between">
                      <Col className="ml-3">
                        <Form.Check
                          type="radio"
                          label="Advance Settings"
                        ></Form.Check>{" "}
                      </Col>
                      <Col>
                        <SettingsIcon />
                      </Col>{" "}
                    </Row>
                  </NavDropdown>
                </Row>
              </Button>
            </Col>
            <Col md={3}></Col>
          </Row>

          <Form className="text-white mt-5" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <Form.Control
                required
                name="text"
                value={post?.text}
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={5}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Row className="d-flex justify-content-start">
              <Col
                md={3}
                style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}
              >
                Add Hastag
              </Col>
              <Col
                md={3}
                style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}
              >
                #programming
              </Col>
              <Col
                md={3}
                style={{ color: "rgb(12, 102, 194)", fontSize: "12px" }}
              >
                #computerscience
              </Col>
              <Col md={3}></Col>
            </Row>
            <Row>
              <Col>
                <Row
                  md={4}
                  className="d-flex d-flex justify-content-between mt-5"
                >
                  <label for="image-post" className="d-flex">
                    <AddIcon className="ml-3" style={{ color: "blue" }} />{" "}
                    {imageThumb !== "" && selectedPost == "" ? (
                      <Image
                        src={imageThumb}
                        className="mr-3 img-fluid post__thumb"
                      />
                    ) : (
                      <PhotoSizeSelectActualOutlinedIcon
                        style={{ color: "grey" }}
                      />
                    )}
                  </label>
                  <input
                    id="image-post"
                    type="file"
                    className="d-none"
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <VideoLibraryIcon style={{ color: "grey" }} />
                  <NoteIcon style={{ color: "grey" }} />
                </Row>
              </Col>
              <Col>
                <Row md={8} className="d-flex justify-content-end py-3">
                  {selectedPost !== "" && (
                    <Button
                      onClick={() => handleDeletePost()}
                      variant="danger"
                      className="rounded-pill mr-4"
                      style={{ width: "75px", fontSize: "12x" }}
                    >
                      Delete
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-pill mr-4"
                    style={{ width: "75px", fontSize: "12x" }}
                  >
                    {selectedPost == "" ? "Post" : "Edit"}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>

          <Divider light />

          <Container className="fluid" style={{ padding: "0px" }}>
            <Row style={{ backgroundColor: "#eeecec" }}>
              <Col md={6} className="d-flex justify-content-around mt-3">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Celebrate an occasion
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-3">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Share the you're hiring
                </Button>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "#eeecec" }}>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Find an expert
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Create a poll
                </Button>
              </Col>
            </Row>

            <Row style={{ backgroundColor: "#eeecec", paddingBottom: "15px" }}>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Add a profile
                </Button>
              </Col>
              <Col md={6} className="d-flex justify-content-around mt-2">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  style={{ width: "175px", fontSize: "12px" }}
                >
                  Offer help
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Modal>
    </div>
  );
}
