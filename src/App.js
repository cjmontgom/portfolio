import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import hubble from "./assets/hubble.png";
import futureNatures from "./assets/future-natures.png";
import studioAugusto from "./assets/studio-augusto.png";
import francisAugusto from "./assets/francis-augusto.png";
import DarkThemeToggle from "./DarkThemeToggle";

const lightTheme = {
  background: "#F3E8EB",
  text: "#433E49",
};

const darkTheme = {
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

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItem = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: inherit;

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <DarkThemeToggle
          toggleTheme={toggleTheme}
          isChecked={theme === darkTheme}
        />
        <Heading>Chloe Montgomery</Heading>
        <p>
          Football player, woodworker, baseball enthusiast, Orca aficionado, and
        </p>
        <MainHeading>Software Developer</MainHeading>
        <MainHeading>extraordinaire</MainHeading>

        <p>Here's a few thing's I've recently worked on</p>
        <Grid>
          <GridItem>
            <a
              href="https://www.francisaugusto.co.uk/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={francisAugusto} alt="Francis Augusto's website" />
            </a>
          </GridItem>
          <GridItem>
            <a
              href="https://hubblehq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={hubble} alt="Hubble's website" />
            </a>
          </GridItem>
          <GridItem>
            <a
              href="https://futurenatures.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={futureNatures} alt="Future Nature's website" />
            </a>
          </GridItem>
          <GridItem>
            <a
              href="https://www.studioaugusto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={studioAugusto} alt="Studio Augusto's website" />
            </a>
          </GridItem>
        </Grid>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
