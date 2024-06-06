import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-size: 3rem;
  max-width: 1000px;
  font-family: Plus Jakarta Sans;
`;

const Span = styled.span``;

const Heading = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  width: 100%;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.text};
`;

const Intro = () => {
  return (
    <Container>
      <Paragraph>
        I'm a football player, woodworker, baseball enthusiast, and
        <br />
        <Span> Software Developer </Span> extraordinaire
      </Paragraph>

      <HorizontalRule />
    </Container>
  );
};

export default Intro;
