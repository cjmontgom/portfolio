import React from "react";
import styled from "styled-components";
import breakpoints from "../shared/breakpoints";

const Container = styled.div`
  margin: auto;
  padding: 80px 0px 100px;
  max-width: 900px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ZanyIntroFont = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-style: italic;
  font-weight: 400;
  font-size: 2.8rem;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

const IntroFont = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  font-size: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 3rem;
  }
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
    </>
  );
};

export default Intro;
