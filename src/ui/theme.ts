import { css } from "styled-components";

export const theme = css`
  html[data-theme="light"] {
    --Primary: #313037;
    --Primary_Light: #5b5a62;
    --Secondary: #a8a8a8;
    --White: #ffffff;
    --Gray: #e7e7e7;
    --Light: #f7f7f7;
    --Red: #fc857f;
    --Blue: #d7e4fd;
    --Green: #caeff0;
    --Orange: #fee9e2;
    --Purple: #f4eefd;
  }
  html[data-theme="dark"] {
    --Primary: #f9f9eb;
    --Primary_Light: #ffffff;
    --Secondary: #eef1c2;
    --White: #575757;
    --Gray: #e7e7e7;
    --Light: #f7f7f7;
    --Red: #fc857f;
    --Blue: #d7e4fd;
    --Green: #caeff0;
    --Orange: #fee9e2;
    --Purple: #f4eefd;
  }
`;
