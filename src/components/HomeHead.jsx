import React from "react";

export default function HomeHead() {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Task Tracker</h2>
      <div className="profile">
        <i
          class="fa-solid fa-user"
          style={{
            fontSize: "35px",
            padding: "10px 12px",
            border: "1px solid",
            borderRadius: "50%",
          }}
        ></i>
      </div>
    </div>
  );
}
