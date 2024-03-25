import React from "react";
import TaskManager from "../components/TaskManager";
import HomeHead from "../components/HomeHead";

export default function Home() {
  return (
    <div className="home-page">
      <HomeHead />
      <TaskManager />
    </div>
  );
}
