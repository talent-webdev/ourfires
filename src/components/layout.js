import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/react";
//
import TopBar from "./topbar.js";
import Footer from "./Footer.js";

// *** GLOBAL STYLES ***
const globalStyle = (isHome) => css`
  body {
    background-color: "#1c1922";
    background-color: ${!isHome ? "white" : "#1c1922"};
    font-family: "Overpass Mono";
  }

  #___gatsby {
    /* sticky footer */
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .navigationMenu {
    a:hover {
      color: #7c0320;
    }
  }
  /* h1{color:blue}; */
  .wrapped {
    max-width: 1440px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    transition: all 0.15s ease;
  }
  a:hover {
    transition: all 0.25s ease;
  }
`;

// *** STYLES ***

// *** MARKUP ***
export default function Layout({ path, children }) {
  const isHome = path === "/" ? true : false;
  console.log("isHome : ", isHome);

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );
  // console.log(site);



  return (
    <React.Fragment>
      <Global styles={globalStyle(isHome)} />

      <TopBar isHome={isHome} />
      {children}
      <Footer />
    </React.Fragment>
  );
}
