/* eslint-disable max-len */
import * as React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link, useStaticQuery, graphql } from "gatsby";

const sendMail = (e) => {
  e.preventDefault();
  const subject = "soggetto";
  const body = "corpo";
  const mailto = `mailto:start@ourfir.es?subject=${subject}&body=${body}`;
  window.location.href = mailto;
};
// markup
const IndexPage = () => {
  return (
    <Box color="#eff0f7" fontSize={16} lineHeight={2} maxWidth={538} margin="0 auto" fontWeight={300}>
      <Box display="block" margin="125px auto 80px" w={118}>
        <img className="logo" alt="logo" src={"ourifres_logo_glow.svg"} />
      </Box>
      <Box>
        <Text color="test">Ourfires is an independent and distributed consulting and digital product design studio.</Text>
        <br />
        <Text>
          For over ten years we have partnered with Businesses and Brands, to help them design, build and grow digital products, communicate ideas and emotions
          through visuals, and create meaningful experiences.
        </Text>
        <br />
        <Text>
          We do so creating project specific cross-disciplinary teams, that blur the lines of design and engineering, and can support your business, and guide
          your in-house team, in jumpstart, design, and ship strategically critical work.
        </Text>
        <br />
        <Text>We&apos;d love to hear from you about your next project.</Text>
        <br />
        <Text>
          {" "}
          Get in touch,{" "}
          <Link color="inherit" textDecoration="none" onClick={sendMail} to="#email">
            email us
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
