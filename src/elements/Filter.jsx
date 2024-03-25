import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Filter({ onFilter }) {
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    const filters = {
      assignee,
      priority,
      startDate,
      endDate,
    };
    console.log(startDate);
    console.log(endDate);
    onFilter(filters);
  };

  return (
    <div>
      {" "}
      <h5>Filters:</h5>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="assignee">
            <Form.Label>Assignee</Form.Label>
            <Form.Control
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="All">All</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Apply Filters
        </Button>
      </Form>
    </div>
  );
}
