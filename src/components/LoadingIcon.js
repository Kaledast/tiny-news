import styled from "styled-components";
import { loadingIcon } from "../components/themes/theme.js";

const Icon = styled.div`
  background: ${loadingIcon} no-repeat center;
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

export default Icon;
