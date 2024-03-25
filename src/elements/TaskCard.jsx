import React, { useState } from "react";
import TaskOpt from "./TaskOpt";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Task = ({ task, onStatusChange, onPriorityChange, tasks, setTasks }) => {
  const [editshow, setEditShow] = useState(false);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  const handleChangeStatus = () => {
    // Call the onStatusChange and onPriorityChange functions with updated task object
    onStatusChange(task.id, status, priority);
    onPriorityChange(task.id, priority);
    if (task.status === "Completed" && status !== "Completed") {
      setTasks((prevTasks) =>
        prevTasks.map((prevTask) =>
          prevTask.id === task.id ? { ...prevTask, endDate: null } : prevTask
        )
      );
    }
    if (status === "Completed") {
      const currentDate = new Date().toISOString().split("T")[0];
      setTasks((prevTasks) =>
        prevTasks.map((prevTask) => {
          if (prevTask.id === task.id) {
            return {
              ...prevTask,
              endDate: currentDate,
            };
          }
          return prevTask;
        })
      );
    }
  };

  const handleClose = () => {
    handleChangeStatus();
    setEditShow(false);
  };
  return (
    <div className="task">
      <div className="card-head">
        <h5>{task.title}</h5>
        <p
          style={{ padding: "5px", backgroundColor: "#000000", color: "white" }}
        >
          <b>{priority}</b>
        </p>
      </div>
      <hr style={{ margin: "0", opacity: "1" }} />
      <p>Description: {task.description}</p>
      <p>
        Start Date: <b>{task.startDate}</b>{" "}
      </p>
      {task.endDate && (
        <p>
          End Date: <b>{task.endDate}</b>{" "}
        </p>
      )}
      <div className="opt-flex">
        <p>
          Assignee: <b>{task.assignee}</b>{" "}
        </p>

        <TaskOpt
          taskId={task.id}
          taskName={task.title}
          setTasks={setTasks}
          tasks={tasks}
          editshow={editshow}
          setEditShow={setEditShow}
        />
      </div>
      <b
        style={{
          backgroundColor: "#00005b",
          padding: "5px 0",
          textAlign: "center",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {status}
      </b>
      <Button
        onClick={handleChangeStatus}
        variant="outline-success"
        style={{ padding: "5px !important" }}
      >
        Save
      </Button>
      <Modal show={editshow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Task Title"
                  name="title"
                  disabled
                  value={task.title}
                />
              </Form.Group>
            </Row>
            ``
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                disabled
                value={task.description}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTeam">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Team Name"
                  name="team"
                  disabled
                  value={task.team}
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
                  disabled
                  value={task.assignee}
                />
              </Form.Group>
            </Row>
            <Row
              className="mb-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Group
                as={Col}
                controlId="formGridPriority"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ margin: "0" }}>
                  {" "}
                  <b>Priority:</b>
                </Form.Label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="P0">P0</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                </select>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridStatus"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ margin: "0" }}>
                  {" "}
                  <b>Status:</b>
                </Form.Label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deferred">Deferred</option>
                  <option value="Deployed">Deployed</option>
                  {/* Add more status options as needed */}
                </select>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
