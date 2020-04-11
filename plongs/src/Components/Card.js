import React from "react";

const Card = (props) => {
  const profile = props;
  return (
    <div>
      <img src={profile.avatar_url} alt="Profile" />
      <div style={{ display: "inline-block" }}>
        <div>
          <h1>{profile.name}</h1>
        </div>
        <div>{profile.login} </div>
      </div>
    </div>
  );
};

export default Card;
