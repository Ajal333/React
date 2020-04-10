import React from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

class App extends React.Component {
  state = {
    profile: [],
  };

  addNewProfile = (newData) => {
    this.setState((prevState) => ({
      profile: [...prevState.profile, newData],
    }));
  };

  render() {
    return (
      <div>
        <div>
          <h1>The Github Cards App</h1>
        </div>
        <div>
          <Form addData={this.addNewProfile} />
        </div>
        <CardList profiles={this.state.profile} />
      </div>
    );
  }
}

export default App;
