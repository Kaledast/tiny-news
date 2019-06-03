import React from "react";
import loadingHorse from "../news/images/HorseLoading.svg";
import styled from "styled-components";

const Icon = styled.div`
  background: url(${loadingHorse}) no-repeat center;
  width: 180px;
  height: 160px;
  border-radius: 10%;

  animation: rotation 2.8s ease infinite;

  @keyframes rotation {
    20% {
      transform: rotate(-30deg);
    }

    50% {
      transform: rotate(20deg);
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function LoadingIcon() {
  return (
    <Container>
      <h1>loading...</h1>
      <Icon />
    </Container>
  );
}
