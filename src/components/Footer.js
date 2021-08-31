import React from "react";
import { Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";

// *** MARKUP ***
export default function Footer(props) {

  const datad = useStaticQuery(graphql`
  query NasvbarQuery {
    allDatoCmsMenuItem {
      edges {
        node {
          path
        }
      }
    }
  }
`);

console.log(datad);
  return (
    <Box bg="#191c22">
      <Box className="wrapped" display="flex" justifyContent="space-between" padding="40px 40px">
        <img src={"logo_footer.svg"} alt="logo" />
        <a href="https://www.instagram.com/ourfires/" bg="black">
          Instagram
        </a>
      </Box>
    </Box>
  );
}
