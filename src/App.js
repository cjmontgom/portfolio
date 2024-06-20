import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Intro, NavBar, ProjectsGrid, ContactAndSocials } from "./components";

const fonts = {
  primary: "Plus Jakarta Sans",
  secondary: "Cormorant Garamond, serif",
  weight: {
    normal: "300",
  },
};

// if you change these theme colours, you also need to change them in the index.html file
export const lightTheme = {
  background: "#f2e9f4",
  text: "#212529",
  fonts: fonts,
};

export const darkTheme = {
  background: "#212529",
  text: "#f2e9f4",
  fonts: fonts,
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }
`;

const HorizontalRule = styled.hr`
  height: 1px;
  width: 90%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.text};
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
      <HorizontalRule />
      <ProjectsGrid />
      <HorizontalRule />
      <ContactAndSocials />
    </ThemeProvider>
  );
}

export default App;
