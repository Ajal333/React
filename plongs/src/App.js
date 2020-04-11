import React, { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

const App = () => {
  const [profile, setProfile] = useState([]);

  const addNewProfile = (newData) => {
    setProfile([...profile, newData]);
  };

  return (
    <div>
      <div>
        <h1>The Github Cards App</h1>
      </div>
      <div>
        <Form addData={addNewProfile} />
      </div>
      <CardList profiles={profile} />
    </div>
  );
};

export default App;
