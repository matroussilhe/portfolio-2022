import { Theme } from "theme-ui";

export const theme: Theme = {
  breakpoints: [
    // "0rem", //     0 ≥ screen < 600px  | sm | mobile
    "37.5rem", // 600px ≥ screen < 960px  | md | tablet
    "60rem", //   960px ≥ screen < 1440px | lg | wide tablet/small desktop
    "90rem", //  1440px ≥ screen          | xl | wide desktop
  ],
  space: [
    0, // 0
    8, // 1
    16, // 2
    24, // 3
    32, // 4
    40, // 5
    48, // 6
    56, // 7
    64, // 8
    72, // 9
    80, // 10
    88, // 11
    96, // 12
    104, // 13
    112, // 14
    120, // 15
    128, // 16
    136, // 17
    144, // 18
    152, // 19
    160, // 20
    168, // 21
    176, // 22
    184, // 23
    192, // 24
    200, // 25
    208, // 26
    216, // 27
    224, // 28
    232, // 29
    240, // 30
    248, // 31
    256, // 32
  ],
  colors: {
    background: "#FFFFFF",
    primary: "#DB7093",
    text: "#000000",
  },
  fonts: {
    heading: "Helvetica, sans-serif",
    body: "Arial, sans-serif",
  },
  fontSizes: {
    heading1: "15.25rem", // 244 px
    heading2: "5rem", //      80 px
    heading3: "2.625rem", //  42 px
    heading4: "1.625rem", //  26 px
    heading5: "1.375rem", //  22 px
    heading6: "1rem", //      16 px
    body1: "1rem", //         16 px
    body2: "0.875rem", //     14 px
  },
  fontWeights: {
    black: 900,
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300,
    thin: 100,
  },
  lineHeights: {
    heading: 1.5,
    body: 1.5,
  },
  letterSpacings: {
    heading: "normal",
    body: "normal",
  },
  text: {
    heading1: {
      fontFamily: "heading",
      fontSize: "heading1",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    heading2: {
      fontFamily: "heading",
      fontSize: "heading2",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    heading3: {
      fontFamily: "heading",
      fontSize: "heading3",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    heading4: {
      fontFamily: "heading",
      fontSize: "heading4",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    heading5: {
      fontFamily: "heading",
      fontSize: "heading5",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    heading6: {
      fontFamily: "heading",
      fontSize: "heading6",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacings: "heading",
      color: "text",
    },
    body1: {
      fontFamily: "body",
      fontSize: "body1",
      fontWeight: "medium",
      lineHeight: "body",
      letterSpacings: "body",
      color: "text",
    },
    body2: {
      fontFamily: "body",
      fontSize: "body2",
      fontWeight: "medium",
      lineHeight: "body",
      letterSpacings: "body",
      color: "text",
    },
  },
};
