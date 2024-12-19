import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0071ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${SpinnerAnimation} 1s linear infinite;
`;
