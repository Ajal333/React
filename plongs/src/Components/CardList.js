import React from "react";
import Card from "./Card";
import "./index.css";

const CardList = (props) => {
  return (
    <div className="card">
      {props.profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
