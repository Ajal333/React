import React, { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList";
import Form from "./Components/Form";
// import axios from "axios";
// import { Button } from "antd";

const App = () => {
  const [profile, setProfile] = useState([]);
  // let resp = "";

  const addNewProfile = (newData) => {
    setProfile([...profile, newData]);
  };

  // const api = async () => {
  //   const response = await axios.get("https://localhost:8000/api/");
  //   resp = response;
  // };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: 60 }}>
          The Github Cards App
        </h1>
      </div>
      <div>
        <Form addData={addNewProfile} />
      </div>
      <CardList profiles={profile} />
      {/* <Button htmlType="submit" type="primary" onClick={api}>
        Show Api
      </Button>
      <h1>{resp}</h1> */}
    </div>
  );
};

export default App;
