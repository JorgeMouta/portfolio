import React from "react";

function ProjectsComponent(props) {
  return (
    <div
      onMouseOver={() => props.handleMouseOver(props.projects.id)}
      onMouseOut={() => props.handleMouseOut(props.projects.id)}
      style={{
        background: props.projects.show
          ? "#6932ea"
          : `url(${props.projects.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "2s"
      }}
      className="Projects"
    >
      <div
        className="ProjectsContent"
        style={{
          display: props.projects.show ? "inline-block" : "none",
          transition: "1s"
        }}
      >
        <h1>{props.projects.name}</h1>
        <p>{props.projects.description}</p>
        <div className="buttons">
          <a
            href={props.projects.url}
            className="visitButton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
          <a
            href={props.projects.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
