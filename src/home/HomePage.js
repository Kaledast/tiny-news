import React from "react";
import styled from "styled-components";
import Buttoncontainer from "./Buttoncontainer.js";
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

export default function HomePage({ rubrikFunktion }) {
  const rubrikArray = [
    { id: 1, val: "entertainment", img: Entertainment },
    { id: 2, val: "general", img: General },
    { id: 3, val: "business", img: Business },
    { id: 4, val: "health", img: Health },
    { id: 5, val: "science", img: Science },
    { id: 6, val: "sports", img: Sports },
    { id: 7, val: "technology", img: Technology }
  ];

  return (
    <HomeBody>
      <Buttoncontainer rubrikFunktion={rubrikFunktion} rubriken={rubrikArray} />
    </HomeBody>
  );
}
/*
        <NavLink to="/news">
          <EntertainmentButton
            onClick={() => rubrikFunktion("entertainment")}
          />
        </NavLink>
        <NavLink to="/news">
          <GeneralButton onClick={() => rubrikFunktion("general")} />
        </NavLink>
        <NavLink to="/news">
          <BusinessButton onClick={() => rubrikFunktion("business")} />
        </NavLink>
        <NavLink to="/news">
          <HealthButton onClick={() => rubrikFunktion("health")} />
        </NavLink>
        <NavLink to="/news">
          <ScienceButton onClick={() => rubrikFunktion("science")} />
        </NavLink>
        <NavLink to="/news">
          <SportsButton onClick={() => rubrikFunktion("sports")} />
        </NavLink>
        <NavLink to="/news">
          <TechnologyButton onClick={() => rubrikFunktion("technology")} />
        </NavLink>
        */
