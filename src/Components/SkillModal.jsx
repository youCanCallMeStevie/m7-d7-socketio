import React, { useEffect, useState } from "react";
import { Container, Form, Modal, Button } from "react-bootstrap";
import {
  postNewSkill,
  editSkill,
  deleteSkill,
} from "../Lib/fetches/skills";


const SkillModal = ({
    toggleSkillModal,
  showModal,
  userId,
  selectedSkill,
}) => {
  const [state, setState] = useState({
    validated: false,
    setValidated: false,
    skills: {
      text: "",
    },
    selectedSkill: "",
  });

  useEffect(() => {
    console.log("selectedSkill", selectedSkill);
    if (selectedSkill || selectedSkill !== []) {
      delete selectedSkill.__v;
      setState({ skills: selectedSkill });
    }
  }, [selectedSkill]);

  const updateSkill = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setState({ validated: true });
    }
  };
  

  const handleChange = (e) => {
    let newSkill = { ...state.skills };
    console.log("newSkill///", newSkill)
    newSkill[e.target.name] = e.target.value;
    setState({ skills: newSkill });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    let res = "";
    let message = "There was an error with your submission";
    if (selectedSkill === "") {
      res = await postNewSkill(state.skills);
      message = "New skill created";
      console.log("res//////", res)
    } else {
      res = await editSkill(state.skills._id, state.skills);
      message = "Your skill has been edited";
    }
    if (res) {
      
      alert(message);
      toggleSkillModal();
    }
  };

  const handleDelete = async () => {
    console.log("clicke");
    try {
      const res = await deleteSkill(state.skills._id);
      if (res === 201) {
        alert("skills deleted");
        toggleSkillModal("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={toggleSkillModal}
      backdrop="static"
      keyboard={false}
    >
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedSkill !== "" ? "Edit skills" : "Add skills"}
          </Modal.Title>
        </Modal.Header>
        <Container className="text-body mt-5">
          <Form.Text className="text-muted">Skill *</Form.Text>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Ex: Karate"
              name="skill"
              value={state.skills && state.skills.text}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Container>
        <Modal.Header>
          <div className="w-100 d-flex justify-content-end">
            {selectedSkill !== "" && (
              <Button
                className="mr-3"
                variant="danger"
                onClick={() => handleDelete()}
              >
                Delete
              </Button>
            )}
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Modal.Header>
      </Form>
    </Modal>
  );
};

export default SkillModal;
