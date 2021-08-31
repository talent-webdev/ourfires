import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import theme from "../@chakra-ui/gatsby-plugin/theme.js";
import { MenuIcon, CloseIcon, OurfiresLogo } from "./icons";

export default function TopBar(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const data = useStaticQuery(graphql`
  query MyQuery {
    allDatoCmsMenuItem {
      edges {
        node {
          path
          title
        }
      }
    }
  }
`);
  // -------------------------------------------------------------------

  return (
    <Flex as="nav" py="8" px="6" bg={props.isHome ? "black" : "white"} top={0} w="100%"
      justify="space-between" display="flex" alignItems="center" position="relative">
      {/* LOGO */}
      <Box>
        <Link to="/">
          {/* <Box as="img" src={"logo_footer.svg"} className="logo" /> */}
          <OurfiresLogo color={props.isHome ? "white" : "black"} />
        </Link>
      </Box>

      {/* DRAWER MENU TOGGLE*/}
      <Box display={{ base: "block", sm: "none", md: "none" }} zIndex="100" onClick={toggleMobileMenu} cursor="pointer">
        {isMenuOpen ? <CloseIcon /> : <MenuIcon color={props.isHome ? "white" : "black"} />}
      </Box>

      {/* MENU */}
      <Box bg={{ base: "black", sm: "transparent" }} position={{ base: "absolute", sm: "relative" }}
        display={{
          base: isMenuOpen ? "block" : "none",
          sm: "block",
          md: "block",
        }}
        top={{ base: "0", sm: "1" }} left={{ base: "0", sm: "auto" }} width={{ base: "100%", sm: "auto" }} height={{ base: "100vh", sm: "auto" }}>

        <Stack className="navigationMenu"
          /* for hover state */
          fontSize={{ base: "titleBig", sm: "small" }} fontWeight="bold"
          color={props.isHome ? "gray2" : "gray1"}
          spacing={6}
          align="center"
          display="flex"
          direction={{ base: "column", sm: "row" }}
          w="100%"
          pt={{ base: "16", sm: "0" }}>

          {data.allDatoCmsMenuItem.edges.map((menuItem, key) => (
            <Link key={key} to={menuItem.node.path} activeStyle={{ color: theme.colors.primary }}>
              <Text>{menuItem.node.title}</Text>
            </Link>
          ))}

        </Stack>
      </Box>
    </Flex>
  );
};

// export default TopBar;
