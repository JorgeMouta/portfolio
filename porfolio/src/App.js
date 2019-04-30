import React, { Component } from "react";
import NavBar from "./NavBar/NavBarContainer";
import AboutMe from "./AboutMe/AboutMeContainer";
import Welcome from "./Welcome/WelcomeContainer";
import Contacts from "./Contacts/ContactsContainer";
import Footer from "./Footer/FooterContainer";
import Projects from "./Projects/ProjectsContainer";
import Form from "./Form/FormContainer";

class App extends Component {
  state = {
    showContact: false
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ showContact: true });
  };

  handleClosure = () => {
    event.preventDefault();
    this.setState({ showContact: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.showContact ? (
          <Form
            handleSubmit={this.handleSubmit}
            handleClosure={this.handleClosure}
          />
        ) : null}
        <NavBar handleClick={this.handleClick} />
        <Welcome handleClick={this.handleClick} />
        <AboutMe />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
