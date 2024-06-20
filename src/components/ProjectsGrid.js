import React from "react";
import styled from "styled-components";
import hubble from "../assets/hubble.png";
import futureNatures from "../assets/future-natures.png";
import studioAugusto from "../assets/studio-augusto.png";
import francisAugusto from "../assets/francis-augusto.png";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 100px 0;

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

function ProjectsGrid() {
  return (
    <Container>
      <Paragraph>Here's some stuff I've recently worked on...</Paragraph>
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
    </Container>
  );
}

export default ProjectsGrid;
