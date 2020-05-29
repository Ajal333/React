import React, { useState } from "react";
import axios from "axios";
// import "antd/dist/antd.css";
import { Button } from "antd";
import "./index.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    props.addData(response.data);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        type="text"
        placeholder="GitHub userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <Button className="btn" htmlType="submit" type="primary">
        Add Card
      </Button>
    </form>
  );
};

export default Form;
