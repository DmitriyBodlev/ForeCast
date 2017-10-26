import styled from 'react-emotion';

export const BunnerWrapper = styled.div`
  background: #ffffff url(${(props: Object) => props.image}) no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: auto;
  }
`;

export const BlaBla = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
  color: white;
`;
