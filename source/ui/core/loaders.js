import styled, { keyframes } from 'react-emotion';

const spin = keyframes`
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
`;

export const MainLoader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 120px;
  width: 120px;
  z-index: 1;
  animation: ${spin} 2s linear infinite;
`;
