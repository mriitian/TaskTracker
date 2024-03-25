import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

export default function TaskOpt({
  taskId,
  taskName,
  setTasks,
  tasks,
  editshow,
  setEditShow,
}) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [Modalshow, ModalsetShow] = useState(false);

  const handleClose = () => ModalsetShow(false);
  const handleShow = () => ModalsetShow(true);

  const handleEditShow = () => {
    setEditShow(true);
    setShow(false);
  };
  const deleteTask = () => {
    // Filter out the task with the matching taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    handleClose(); // Close the modal after deletion
  };
  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            <Button onClick={handleEditShow} variant="success">
              Edit
            </Button>
            <hr />
            <Button onClick={handleShow} variant="danger">
              Delete
            </Button>
          </Tooltip>
        )}
      </Overlay>
      <Modal
        show={Modalshow}
        onHide={handleClose}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete {taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure You want to delete??</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="primary" onClick={deleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
