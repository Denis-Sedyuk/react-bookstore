import { createGlobalStyle } from "styled-components";
import { Color, resetCSS, theme } from "./index";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${theme}

body{
   background: ${Color.White};
   color: ${Color.Primary};
}

a{
   color: ${Color.Primary};
}
`;
