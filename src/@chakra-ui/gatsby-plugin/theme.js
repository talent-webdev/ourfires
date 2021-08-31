import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "550px",
  md: "832px",
});

const theme = {
  //theme tokens
  colors: {
    // brand colors
    black: "#1C1922",
    gray1: "#343038",
    gray2: "#5F5B66",
    gray3: "#9794A0",
    gray4: "#DCD9E2",
    gray5: "#F5F6F6",
    deep: "#160B36",
    warmGray: "#362B55",
    violet: "#5D37C9",
    primary: "#EC184B",
    primaryInk: "#7C0320",
    whitePaper: "#FDFDFE",
  },

  space: {
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
    9: "56px",
    10: "64px",
    11: "80px",
    12: "96px",
    13: "104px",
    14: "128px",
    15: "160px",
    16: "224px",
  },

  sizes: {
    0: "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
    9: "56px",
    10: "64px",
    11: "80px",
    12: "96px",
    13: "104px",
    14: "128px",
    15: "160px",
    16: "224px",
  },

  fonts: { base: "Overpass Mono" },
  fontSizes: {
    small: "14px",
    body: "16px",
    big: "18px",
    maxi: "28px",
    titleSmall: "20px",
    title: "24px",
    titleBig: "40px",
    titleMaxi: "56px",
    titleHero: "160px",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },

  letterSpacings: {
    tight: "-0.085em",
    normal: "0",
  },

  radii: { base: "4px", double: "16px", max: "28px", full: "9999px" },
  borderWidths: [1, 2, 3],

  breakpoints: breakpoints,

  config: {
    cssVarPrefix: "of",
  },
};

export default extendTheme(theme);
