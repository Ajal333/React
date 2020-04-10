import React, { Component } from "react";

class Card extends Component {
  render() {
    const profile = this.props;
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
  }
}

export default Card;
