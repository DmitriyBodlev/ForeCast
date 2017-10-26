/* eslint-disable */
// write global styles here

import { injectGlobal } from 'react-emotion';
import { fontFace } from 'react-emotion';
import colors from '../../themes/colors'

fontFace`
  font-family: 'HelveticaNeue Regular';
  src: url(https://s3.amazonaws.com/amous-front-dev/fonts/helvetica-neue-regular-594a964f578e4.ttf) format('ttf');
`

fontFace`
  font-family: 'HelveticaNeue Medium';
  src: url(https://s3.amazonaws.com/amous-front-dev/fonts/helvetica-neue-medium-594a96118f07f.ttf) format('ttf');
`

fontFace`
  font-family: 'HelveticaNeue Bold';
  src: url(https://s3.amazonaws.com/amous-front-dev/fonts/helvetica-neue-bold-594a96217d4c5.ttf) format('ttf');
`

injectGlobal`
  * {
    box-sizing: border-box;
    z-index: 10;
  }

  *::-webkit-scrollbar-track
  {
    background-color: transparent;
  }
  
  *::-webkit-scrollbar
  {
    width: 8px;
  }
  
  *::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    background-color: ${colors.light.darkGrey};
  }

  body {
    color: black;
    margin: 0;
    font-family: 'HelveticaNeue Regular, Helvetica, Arial, sans-serif';
  }
`;
/* eslint-enable */
