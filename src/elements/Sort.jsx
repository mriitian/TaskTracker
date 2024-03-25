import React from "react";
import Form from "react-bootstrap/Form";

export default function Sort({ onSelectSort }) {
  const handleChange = (e) => {
    onSelectSort(e.target.value);
  };

  return (
    <div className="sort">
      <h5 style={{ margin: "0" }}>Sorting: </h5>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option>Default</option>
        <option value="priority">Priority</option>
        <option value="startDate">Start Date</option>
        <option value="endDate">End Date</option>
      </Form.Select>
    </div>
  );
}
