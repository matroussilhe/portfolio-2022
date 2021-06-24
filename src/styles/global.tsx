export const rootEm = 16;

export const globalStyle = `
  html,
  body {
    font-size: ${rootEm}px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
  
  abbr {
    text-decoration: none;
  }

  img {
    pointer-events: none;
    user-select: none;
  }
`;
