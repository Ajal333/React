import React from "react";
import { Card } from "antd";
// import "antd/dist/antd.css";

const { Meta } = Card;

const Cards = (props) => {
  const profile = props;
  return (
    <div>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        {" "}
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={profile.avatar_url} />}
        >
          <Meta title={profile.name} description={profile.login} />
        </Card>
      </a>
    </div>
  );
};

export default Cards;
