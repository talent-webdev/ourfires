import * as React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

const About = ({ data }) => {
  return (
    <AboutWrapper className="wrapped">
      <div>
        <h1>{<data className="datoCmsAboutPage sectionOneTitle"></data>} GG</h1>
        <img className="logo" alt="logo" src=""></img>
        <h1>About Ourfires</h1>
        <p>Ourfires is an independent and distributed consulting and digital product design studio.</p>
        <p>
          For over ten years we have partnered with Businesses and Brands, to help them design, build and grow digital products, communicate ideas and emotions
          through visuals, and create meaningful experiences.
        </p>
        <p>
          We do so creating project specific cross-disciplinary teams, that blur the lines of design and engineering, and can support your business, and guide
          your in-house team, in jumpstart, design, and ship strategically critical work.
        </p>
        <p>We'd love to hear from you about your next project. Get in touch, email us.</p>
      </div>
      <div>
        <img className="logo" alt="logo" src=""></img>
        <h2>Services</h2>
        <p>We are a design-driven studio, and we create digital products and experiences.</p>
        <p>Wether it’s a website, an “app”, a game or an installation. We design and build that for you,</p>
        <p>A digital product is never finished, so in the end we’ll give you all the tools you need to integrate our work into your process and</p>
        <p>Take a look a some of our past projects</p>
      </div>
    </AboutWrapper>
  );
};
export default About;

const AboutWrapper = styled.div`
  padding: 0 32px;
`;

export const query = graphql`
  query AboutQuery($slug: String!) {
    datoCmsAboutPage(slug: { eq: $slug }) {
      sectionOneTitle
    }
  }
`;
