import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  width: 40px;
  z-index: 1;
`;

const Switch = styled.input.attrs({ type: "checkbox" })`
  visibility: hidden;
  position: absolute;
  margin-left: -9999px;
`;

const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  padding: 2px;
  width: 40px;
  height: 20px;
  background-color: #000000;
  border-radius: 20px;
  transition: background 0.4s;

  &:before,
  &:after {
    display: block;
    position: absolute;
    content: "";
  }

  &:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #fff;
    border-radius: 20px;
    transition: background 0.4s;
  }

  &:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 16px;
    background-color: #000000;
    border-radius: 12px;
    transition: margin 0.4s, background 0.4s;
  }

  ${Switch}:checked + & {
    background-color: white;
  }

  ${Switch}:checked + &:before {
    background-color: black;
  }

  ${Switch}:checked + &:after {
    margin-left: 20px;
    background-color: white;
  }
`;

const DarkThemeToggle = ({ toggleTheme, isChecked }) => (
  <SwitchContainer>
    <Switch id="darkThemeToggle" onChange={toggleTheme} checked={isChecked} />
    <Label htmlFor="darkThemeToggle"></Label>
  </SwitchContainer>
);

export default DarkThemeToggle;
