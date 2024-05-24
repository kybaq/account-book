import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  /* display: flex; */
  height: 100vh;
  width: 100vw;
`;

export default GlobalStyle;
