import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  padding: 80px 0px 100px;
  max-width: 900px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ZanyIntroFont = styled.span`
  font-size: 4rem;
  font-family: Cormorant Garamond, serif;
  font-weight: 400;
  font-style: italic;
`;

const IntroFont = styled.span`
  font-size: 3rem;
  font-weight: 300;
  font-family: Plus Jakarta Sans;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  width: 90%;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.text};
`;

const Intro = () => {
  return (
    <>
      <Container>
        <IntroFont>
          Hello, I'm Chloe... football<ZanyIntroFont> player</ZanyIntroFont>,
          woodworker, baseball
          <ZanyIntroFont> enthusiast</ZanyIntroFont>, and <br />
          <ZanyIntroFont> Software Developer </ZanyIntroFont>extraordinaire
        </IntroFont>
      </Container>
      <HorizontalRule />
    </>
  );
};

export default Intro;
