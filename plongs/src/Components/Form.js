import React, { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button>Add Card</button>
    </form>
  );
};

export default Form;
