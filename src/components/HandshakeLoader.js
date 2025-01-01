import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for shaking animation
const shake = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-5px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

// Styled components for the hands
const HandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Hand = styled.div`
  width: 50px;
  height: 80px;
  background-color: ${(props) => (props.isGirl ? "#FFB6C1" : "#87CEEB")};
  border-radius: 30% 30% 20% 20%;
  position: relative;
  transform: rotate(${(props) => (props.isGirl ? "-30deg" : "30deg")});
  animation: ${shake} 1s infinite;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 60px;
    height: 20px;
    background-color: ${(props) => (props.isGirl ? "#FFB6C1" : "#87CEEB")};
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const Arm = styled.div`
  width: 20px;
  height: 100px;
  background-color: ${(props) => (props.isGirl ? "#FF69B4" : "#4682B4")};
  position: relative;
  margin: ${(props) => (props.isGirl ? "0 10px 0 0" : "0 0 0 10px")};
`;

// The HandshakeLoader component
const HandshakeLoader = () => {
  return (
    <HandContainer>
      {/* Girl's hand */}
      <Arm isGirl />
      <Hand isGirl />

      {/* Boy's hand */}
      <Hand />
      <Arm />
    </HandContainer>
  );
};

export default HandshakeLoader;
