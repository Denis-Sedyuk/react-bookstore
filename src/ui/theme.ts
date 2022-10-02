import { css } from "styled-components";

export const theme = css`
  html[data-theme="light"] {
    --primary: #313037;
    --primary_Light: #5b5a62;
    --secondary: #a8a8a8;
    --white: #ffffff;
    --gray: #e7e7e7;
    --light: #f7f7f7;
    --red: #fc857f;
    --blue: #d7e4fd;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #f4eefd;
    --violet: #461e57;
  }
  html[data-theme="dark"] {
    --primary: #f9f9eb;
    --primary_Light: #ffffff;
    --secondary: #eef1c2;
    --white: #313037;
    --gray: #e7e7e7;
    --light: #f7f7f7;
    --red: #fc857f;
    --blue: #fee9e2;
    --green: #caeff0;
    --orange: #fee9e2;
    --purple: #5b5a62;
    --violet: #461e57;
  }
`;
