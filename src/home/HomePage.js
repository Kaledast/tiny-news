import React from "react";
import styled from "styled-components";
import Entertainment from "../news/images/entertainButt.svg";
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

const Header = styled.h2`
  color: white;
`;

const SubHeader = styled.h3`
  color: white;
`;

const EntertainmentButton = styled.button`
  background: url(${Entertainment}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;
const GeneralButton = styled.button`
  background: url(${General}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const BusinessButton = styled.button`
  background: url(${Business}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const HealthButton = styled.button`
  background: url(${Health}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const ScienceButton = styled.button`
  background: url(${Science}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const SportsButton = styled.button`
  background: url(${Sports}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const TechnologyButton = styled.button`
  background: url(${Technology}) no-repeat center;
  width: 80px;
  height: 50px;
  border-radius: 10%;
`;

const Buttoncontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  width: auto;
  height: 50%;
`;

export default function HomePage({ props, rubrikFunktion }) {
  return (
    <HomeBody>
      <Header>Welcome HOME little pony</Header>
      <SubHeader>Choose your destination wisely...</SubHeader>
      <Buttoncontainer>
        <EntertainmentButton onClick={() => rubrikFunktion("entertainment")} />
        <GeneralButton onClick={() => rubrikFunktion("general")} />
        <BusinessButton onClick={() => rubrikFunktion("business")} />
        <HealthButton onClick={() => rubrikFunktion("health")} />
        <ScienceButton onClick={() => rubrikFunktion("science")} />
        <SportsButton onClick={() => rubrikFunktion("sports")} />
        <TechnologyButton onClick={() => rubrikFunktion("technology")} />
      </Buttoncontainer>
    </HomeBody>
  );
}
