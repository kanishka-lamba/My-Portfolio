import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import "./Projects.css";
import {
  mobileProject,
  springProject,
  reactProject,
  angularProject,
  featured,
} from "./Data";

function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "reactjs",
      title: "React JS",
    },
    {
      id: "mobileapp",
      title: "Mobile App",
    },
    {
      id: "spring",
      title: "Spring",
    },
    {
      id: "angular",
      title: "Angular",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featured);
        break;
      case "mobileapp":
        setData(mobileProject);
        break;
      case "spring":
        setData(springProject);
        break;
      case "reactjs":
        setData(reactProject);
        break;
      case "angular":
        setData(angularProject);
        break;

      default:
        break;
    }
  }, [selected]);

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <ul>
          {list.map((item) => {
            return (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            );
          })}
        </ul>
      </div>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="not found" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
