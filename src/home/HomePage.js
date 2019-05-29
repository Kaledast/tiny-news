import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons.js";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  height: 100%;
  padding: 30px;
`;

const ButtonContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  height: 50%;
`;

export default function HomePage({ onTopicSelect }) {
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
      <ButtonContainer>
        {topics.map(topic => (
          <Buttons key={topic.id} topic={topic} onSelect={onTopicSelect} />
        ))}
      </ButtonContainer>
    </HomeBody>
  );
}
