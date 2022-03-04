import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body {
  background: ${({ theme }) => (theme as any).body};
  color: ${({ theme }) => (theme as any).text};
}
`;
