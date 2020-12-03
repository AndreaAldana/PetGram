import {css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}

to {
    filter: blur(0);
    opacity: 1;
}
`

export const fadeIn = ({time = '1s', type= 'ease'} = {}) => css`


animation: ${time} ${fadeInKeyframes} ${type};`

const scaleDown = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.5);
    }
`;
const scale = ({time = "1s", type = "ease"} = {}) => css`animation: ${time} ${scaleDown} ${type}`;


const positionDownKeyFrames = keyframes`
    0%{
      margin-top:-100px;
    }

    100%{
      margin-top:0;

    }
`

// Rebote
export const positionDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${positionDownKeyFrames} ${type}`

  const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};`