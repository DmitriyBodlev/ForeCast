import styled, { css } from 'react-emotion';
import { space, width, fontSize } from 'styled-system';

export const Button = styled.button`
  composes: ${space} ${width} ${fontSize};

  border: none;
  cursor: pointer;
  outline: 0;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

const FormActionsBtnsStyles = css`
  border-radius: 2px;
  font-weight: 500;
  float: right;
  height: 40px;
`;

export const FormCancelButton = styled(Button)`
  ${FormActionsBtnsStyles};

  background-color: ${({theme}: Object) => theme.buttons.cancelBtn.bgColor};
  color: ${({theme}: Object) => theme.buttons.cancelBtn.textColor};
`;

export const FormSaveButton = styled(Button)`
  ${FormActionsBtnsStyles};

  min-width: 100px;
  width: auto;

  background-color: ${({theme}: Object) => theme.buttons.saveBtn.bgColor};
  color: ${({theme}: Object) => theme.buttons.saveBtn.textColor};
`;
