import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  .App {
    width: 960px;
    margin: 0 auto;
  }

  .content {
    text-align: left;
  }

  body {
    font-family: sans-serif;
    background: #222;
    color: #ddd;
    text-align: center;
  }

  h1 {
    color: #ffff57;
    font-size: 4em;
    letter-spacing: 2px;
  }

  button {
    margin: 0 10px;
    background: transparent;
    border: 3px solid #ccc;
    border-radius: 20px;
    padding: 10px;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

  @media(max-width: 760px) {
    .App {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
  }

`;