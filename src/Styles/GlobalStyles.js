import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  /* Colors */
  :root {
    --color-primary: #2D3142;
    --color-secondary: #EE6C4D;
    --color-background: #D8F3DC;
    --color-text: #4F5D75;
    --color-warning: #FFC107;
    --color-affirmative: #7ABD30;
  }

  /* Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text);
  }

  body {
    background-color: var(--color-background);
    user-select: none;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
  }
  
  header {
    &:hover {
      color: var(--color-primary);
    }
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
    h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* Links */
  a {
    color: var(--color-secondary);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  /* Buttons */
  button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-secondary);
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-primary);
    }
  }

  /* Forms */
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  
    .map-img {
        height: 450px;
        width: 1000px;
    }  

    .map-selected {
        fill: var(--color-secondary);
    }
    
    .map-unselected {
        fill: var(--color-primary);
    }
    
    .map-unselected:hover {
        fill: var(--color-secondary);
    }
    
    .map-selected:hover, .map-unselected:hover {
        cursor: pointer;
    }
    

`;

export default GlobalStyle;