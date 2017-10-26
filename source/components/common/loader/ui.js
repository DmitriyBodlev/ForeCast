import styled, { keyframes } from 'react-emotion';

export const LoaderWrapper = styled.div`
  align-items: center;
  background: rgba(53, 53, 53, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const DimmerWrapper = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 11;

  background-color: white;
`;

export const TitleRectangle = styled.div`
  height: 20px;
  margin: 20px 10px;
  width: 50px;

  background-color: grey;
`;

export const Rectangle = styled.div`
  height: 20px;
  margin-bottom: 20px;
  width: 100%;

  background-color: grey;
`;

export const TableRectangle = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 550px;

  background-color: lightgrey;
`;

export const squareRotate = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

export const LoaderContent = styled.div`
  height: 40px;
  padding: 15px;
  border-radius: 2px;
  position: fixed;
  width: 40px;

  background-color: red;

  animation: ${squareRotate} 1.2s infinite ease-in-out;
  
`;
