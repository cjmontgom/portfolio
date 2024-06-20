import React from "react";
import styled from "styled-components";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../assets/socials";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 100px 15px;

  svg {
    fill: ${({ theme }) => theme.text};
    transition: fill 0.3s ease;
    width: 100%;
    height: 100%;
  }
`;

const ContactAndSocials = () => {
  return (
    <Container>
      <IconWrapper>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chloe-montgomery01/"
        >
          <LinkedInIcon />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a rel="noopener noreferrer" href="https://github.com/cjmontgom">
          <GitHubIcon />
        </a>
      </IconWrapper>
      <IconWrapper>
        <a rel="noopener noreferrer" href="mailto:chloemontgomery01@gmail.com">
          <EmailIcon />
        </a>
      </IconWrapper>
    </Container>
  );
};

export default ContactAndSocials;
