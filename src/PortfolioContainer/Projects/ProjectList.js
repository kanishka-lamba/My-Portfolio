import React from "react";
import "./Projects.css";

function ProjectList({ id, title, active, setSelected }) {
  return (
    <li className={active ? "active" : ""} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}

export default ProjectList;
