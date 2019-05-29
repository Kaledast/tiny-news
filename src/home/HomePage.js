import React from "react";
import styled from "styled-components";
import Buttoncontainer from "./Buttoncontainer.js";

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
    { id: "entertainment", img: require("../news/images/EntertainButton.svg") },
    { id: "general", img: require("../news/images/GeneralButton.svg") },
    { id: "business", img: require("../news/images/BusinessButton.svg") },
    { id: "health", img: require("../news/images/HealthButton.svg") },
    { id: "science", img: require("../news/images/ScienceButton.svg") },
    { id: "sports", img: require("../news/images/SportsButton.svg") },
    { id: "technology", img: require("../news/images/TechnologyButton.svg") }
  ];

  return (
    <HomeBody>
      <Buttoncontainer topics={topics} />
    </HomeBody>
  );
}
