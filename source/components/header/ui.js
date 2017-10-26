import styled, { css } from 'react-emotion';

export const Divider = styled.span`
  display: inline-block;
  background-color: black;
  height: 32px;
  width: 1px;
  margin: auto 7px;
`;

export const HeaderWrapper = styled.div`
  background-color: grey;
  height: 100px;
  padding-right: 15px;
  width: 100%;
`;

export const Logo = styled.img`
  max-height: 70px;
  max-width: 100%;
  vertical-align: middle;
`;

const helperStyle = css`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const logoStyle = css`
  float: left;
  margin-right: 3%;
  height: 70px;
  max-width: 15%;
  text-align: center;
  white-space: nowrap;
`;

const brandStyle = css`
  height: inherit;
  padding: 15px;
  position: relative;
`;

const textStyle = css`
  display: inline-block;
  height: 70px;
  line-height: 70px;
  text-align: left;
  vertical-align: middle;
  width: 39%;
`;

const menuStyle = css`
  display: flex;
  justify-content: flex-end;
  float: right;
  line-height: 15px;
  height: 30px;
  margin: 20px 0;
  width: 42%;
`;

const classStyle = {
  brand: brandStyle,
  helper: helperStyle,
  logo: logoStyle,
  menu: menuStyle,
  text: textStyle,
};

export default classStyle;
