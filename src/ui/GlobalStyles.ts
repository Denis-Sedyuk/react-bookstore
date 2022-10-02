import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${theme}

body{
   background-color: var(--White);
   color: var(--Primary);

/* не работает если Enum colors задавать через var() */

   /* background: ${Color.White};
   color: ${Color.Primary}; */
}
`;
