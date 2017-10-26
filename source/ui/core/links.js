import styled from 'react-emotion';
import { space, width, fontSize } from 'styled-system';
import { Link } from 'react-router-dom';


export const LinkTo = styled(Link)`
  composes: ${space} ${width} ${fontSize};

  text-decoration: initial;

  &:focus {
    outline: none;
  }
`;
