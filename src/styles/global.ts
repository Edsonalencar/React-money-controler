import { createGlobalStyle } from "styled-components";

export const GblobalStyle = createGlobalStyle`

  :root {
    --text-body: #969CB3;
    --text-title: #363F5F;

    --background: #F0F2F5;
    --shape: #FFFFFF;

    --blue: #5429CC;
    --blue-light: #6933FF;
    --red: #E62E4D;
    --green: #33CC95;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    border-radius: .25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`;