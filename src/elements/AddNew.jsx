import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

export default function AddNew({ tasksData, setTasks }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "P0", // Default priority
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleAdd(e) {
    e.preventDefault();
    const newTask = {
      id: tasksData.length + 1, // Generate unique ID for the new task
      title: formData.title,
      description: formData.description,
      startDate: new Date().toISOString().slice(0, 10), // Set start date to today
      endDate: null,
      status: "Pending",
      assignee: formData.assignee,
      priority: formData.priority,
    };
    // Add the new task to the tasksData array
    setTasks([...tasksData, newTask]);
    handleClose(); // Close the modal
  }

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        Add New
      </Button>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Task Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTeam">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Team Name"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAssignee">
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Assignee"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
