import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
	display: flex;
    flex-flow: column nowrap;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
	font-family: "IBM Plex Mono", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans;
	background: ${({ theme }) => theme.colors.background};
	font-weight: 400;
    font-size: 18px;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.text};
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #__next {
    flex: 1;
    width: 100%;
    height: auto;
	display: flex;
}

a {
	color: ${({ theme }) => theme.colors.text};
	font-family: "Open Sans", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans;
	font-weight: 600;
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
	z-index: 2;

	&:hover,:focus,:active {
		text-decoration: none;
		outline: 0;
	}
  }

  button:focus {
    outline: 0;
}

* {
    box-sizing: border-box;
  }

  ::selection {
	background: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.accent};
  }
`;

export default GlobalStyle;
