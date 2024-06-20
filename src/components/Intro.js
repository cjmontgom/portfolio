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
  font-size: 4rem;
  font-weight: 400;

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

const IntroFont = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
  font-size: 3rem;
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
