import { darkTheme, lightTheme } from "./theme";
import { useEffect, useState } from "react";

import GlobalTheme from "./globals";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalTheme />
        <Container>
          <Title>Tema {theme === "light" ? "light" : "dark"}!</Title>
          <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
        </Container>
      </>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
`;

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 10px;
`;

export default App;
