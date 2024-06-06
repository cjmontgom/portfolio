import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ProjectsGrid from "./components/ProjectsGrid";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

export const lightTheme = {
  background: "#F3E8EB",
  text: "#433E49",
};

export const darkTheme = {
  background: "#433E49",
  text: "#F3E8EB",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s linear;
  }
`;

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar theme={theme} setTheme={setTheme} />
      <Intro />
      <ProjectsGrid />
    </ThemeProvider>
  );
}

export default App;
