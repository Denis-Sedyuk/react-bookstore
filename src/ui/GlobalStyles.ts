import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./reset";
import { theme } from "./theme";

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
