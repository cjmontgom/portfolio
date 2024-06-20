import React, { useEffect } from "react";
import DarkThemeToggle from "../DarkThemeToggle";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../App";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Heading = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const NavBar = ({ theme, setTheme }) => {
  useEffect(() => {
    const themeName = theme === darkTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <Container>
      <Heading>Chloe Montgomery</Heading>
      <DarkThemeToggle
        toggleTheme={toggleTheme}
        isChecked={theme === darkTheme}
      />
    </Container>
  );
};

export default NavBar;
