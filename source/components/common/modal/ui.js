import styled, { css, keyframes } from 'react-emotion';

export const animation = (props: Object) => {
  const from = props.params.position.split('-')[0];

  const moves = {
    top: keyframes`
      0% { top: -${props.params.height}px }
      100% { top: 0 }
    `,
    bottom: keyframes`
      0% { bottom: -${props.params.height}px }
      100% { bottom: 0 }
    `,
  };

  return moves[from];
};

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(53, 53, 53, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span`
`;

export const ModalContent = styled.div`
  padding: 15px;
  position: fixed;
  border-radius: 2px;
  width: ${({params}: Object) => params.width}px;
  height: ${({params}: Object) => params.height}px;
  background-color: grey;
  box-shadow: 0 0 8px 1px black;
  animation: ${(props: Object) => animation(props)} 0.2s linear;
`;

export const Header = styled.div`
  font-weight: bold;
  color: black;
  font-size: 17px;
  align-items: center;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid;
  height: 55px;
  padding: 10px 15px;
`;

const topLeft = css`
  top: 0;
  left: 0;
`;
const topCenter = css`
  top: 0;
  right: 50%;
  transform: translateX(50%);
`;
const topRight = css`
  top: 0;
  right: 0;
`;

const bottomLeft = css`
  bottom: 0;
  left: 0;
`;

const bottomCenter = css`
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
`;

const bottomRight = css`
  bottom: 0;
  right: 0;
`;

const classStyles = {
  'top-left': topLeft,
  'top-center': topCenter,
  'top-right': topRight,
  'bottom-left': bottomLeft,
  'bottom-center': bottomCenter,
  'bottom-right': bottomRight,
};

export default classStyles;
