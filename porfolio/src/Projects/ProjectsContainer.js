import React, { Component } from "react";
import ProjectsComponent from "./ProjectsComponent";
import ProjectsIntro from "./ProjectsIntro";
import placeHolder from "../Images/placeholder.png";
import placeHolder2 from "../Images/placeholder2.png";
import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        show: false,
        name: "Landing Page",
        description:
          "Just a simple Landing Page made as one of the freeCodeCamp exercises.",
        img: placeHolder2,
        alt: "something1",
        url: "https://codepen.io/Mouta/full/oOymWm",
        gitUrl: "http://www.google.com"
      },
      {
        id: 2,
        show: false,
        name: "Project2",
        description: "",
        img: placeHolder,
        alt: "",
        url: "",
        gitUrl: ""
      },
      {
        id: 3,
        show: false,
        name: "Project2",
        description: "",
        img:
          "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png",
        alt: "",
        url: "",
        gitUrl: ""
      },
      {
        id: 4,
        show: false,
        name: "Project2",
        description: "",
        img:
          "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png",
        alt: "",
        url: "",
        gitUrl: ""
      },
      {
        id: 5,
        show: false,
        name: "Project2",
        description: "",
        img:
          "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png",
        alt: "",
        url: "",
        gitUrl: ""
      },
      {
        id: 6,
        show: false,
        name: "Project2",
        description: "",
        img:
          "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png",
        alt: "",
        url: "",
        gitUrl: ""
      }
    ]
  };

  handleMouseOver = id => {
    this.setState(prevState => {
      const updated = prevState.projects.map(x => {
        if (x.id === id) {
          x.show = true;
        }
        return x;
      });

      return {
        projects: updated
      };
    });
  };

  handleMouseOut = id => {
    this.setState(prevState => {
      const updated = prevState.projects.map(x => {
        if (x.id === id) {
          x.show = false;
        }
        return x;
      });

      return {
        projects: updated
      };
    });
  };

  render() {
    const displayProjects = this.state.projects.map(x => (
      <ProjectsComponent
        handleMouseOut={this.handleMouseOut}
        handleMouseOver={this.handleMouseOver}
        key={x.id}
        projects={x}
      />
    ));
    return (
      <div id="projectslink" className="ProjectsContainer">
        <ProjectsIntro />

        {displayProjects}
      </div>
    );
  }
}

export default Projects;
