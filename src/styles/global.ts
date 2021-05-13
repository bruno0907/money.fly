import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-blue: #5429CC;
    --color-blue-light: #6933FF;
    --color-green: #33CC95;
    --color-red: #E52E4D;
    --color-text-title: #363F5F;
    --color-text-body: #969CB3;
    --color-background: #F0F2F5;
    --color-white: #FFFFFF;
  };

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
  }
  
  html{
    @media(max-width: 1080px){ font-size: 93.75%; }
    @media(max-width: 720px){ font-size: 87.5%; }    
  }

  body{
    background-color: var(--color-background);  
    color: var(--color-title);
    -webkit-font-smoothing: antialiased;
  };
  
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }  

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{ cursor: pointer; }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .global-modal-content{
    width: 100%;
    max-width: 576px;    
    background: var(--color-background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .global-modal-overlay{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close-button{
    background: transparent;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
    border: none;
    transition: filter 150ms;

    :hover{
      filter: brightness(90%);
    }
  }


`