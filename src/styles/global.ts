import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  /* dark mode */
  
  html {
    filter: invert(1) hue-rotate(180deg);
    background-color: #fff;
  }

  img, picture, video {
    filter: invert(1) hue-rotate(180deg)
  }

  /* dark mode */

  button {
    cursor: pointer;
  }

  #root {
    max-width: 100vw;
    margin: 0 auto;
    padding: 20px 40px;

    @media screen and (min-width:768px) {
      padding: 80px 40px;
    }
  }
`;
