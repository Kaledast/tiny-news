import React from "react";
import styled from "styled-components";
import Buttoncontainer from "./Buttoncontainer.js";
import General from "../news/images/GeneralButt.svg";
import Business from "../news/images/BusinessButt.svg";
import Health from "../news/images/HealthButt.svg";
import Science from "../news/images/ScienceButt.svg";
import Sports from "../news/images/SportsButt.svg";
import Technology from "../news/images/TechnologyButt.svg";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  height: 100%;
  padding: 30px;
`;

export default function HomePage() {
  const topics = [
    {
      id: "entertainment",
      img: require("../news/images/entertainButt.svg")
    },
    { id: "general", img: General },
    { id: "business", img: Business },
    { id: "health", img: Health },
    { id: "science", img: Science },
    { id: "sports", img: Sports },
    { id: "technology", img: Technology }
  ];

  return (
    <HomeBody>
      <Buttoncontainer topics={topics} />
    </HomeBody>
  );
}
