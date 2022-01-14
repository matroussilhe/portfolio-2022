import { Theme } from "theme-ui";

export const theme: Theme = {
  config: {
    useCustomProperties: true,
    initialColorModeName: "light",
    printColorModeName: "light",
    useRootStyles: true,
    useColorSchemeMediaQuery: "system",
    useBorderBox: false,
    useLocalStorage: true,
  },
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
    "primary-50": "#E0E0E0",
    "primary-100": "#B3B3B3",
    "primary-200": "#808080",
    "primary-300": "#4D4D4D",
    "primary-400": "#262626",
    "primary-500": "#000000",
    "primary-600": "#000000",
    "primary-700": "#000000",
    "primary-800": "#000000",
    "primary-900": "#000000",
    "secondary-50": "#FDFDFD",
    "secondary-100": "#FBFBFB",
    "secondary-200": "#F9F9F9",
    "secondary-300": "#F6F6F6",
    "secondary-400": "#F4F4F4",
    "secondary-500": "#F2F2F2",
    "secondary-600": "#F0F0F0",
    "secondary-700": "#EEEEEE",
    "secondary-800": "#ECECEC",
    "secondary-900": "#E8E8E8",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    "on-primary-50": "#FFFFFF",
    "on-primary-100": "#FFFFFF",
    "on-primary-200": "#FFFFFF",
    "on-primary-300": "#FFFFFF",
    "on-primary-400": "#FFFFFF",
    "on-primary-500": "#FFFFFF",
    "on-primary-600": "#FFFFFF",
    "on-primary-700": "#FFFFFF",
    "on-primary-800": "#FFFFFF",
    "on-primary-900": "#FFFFFF",
    "on-secondary-50": "#000000",
    "on-secondary-100": "#000000",
    "on-secondary-200": "#000000",
    "on-secondary-300": "#000000",
    "on-secondary-400": "#000000",
    "on-secondary-500": "#000000",
    "on-secondary-600": "#000000",
    "on-secondary-700": "#000000",
    "on-secondary-800": "#000000",
    "on-secondary-900": "#000000",
    "on-background": "#000000",
    "on-surface": "#000000",
    "on-error": "#FFFFFF",
    modes: {
      dark: {
        "primary-50": "#FDFDFD",
        "primary-100": "#FBFBFB",
        "primary-200": "#F9F9F9",
        "primary-300": "#F6F6F6",
        "primary-400": "#F4F4F4",
        "primary-500": "#F2F2F2",
        "primary-600": "#F0F0F0",
        "primary-700": "#EEEEEE",
        "primary-800": "#ECECEC",
        "primary-900": "#E8E8E8",
        "secondary-50": "#E0E0E0",
        "secondary-100": "#B3B3B3",
        "secondary-200": "#808080",
        "secondary-300": "#4D4D4D",
        "secondary-400": "#262626",
        "secondary-500": "#000000",
        "secondary-600": "#000000",
        "secondary-700": "#000000",
        "secondary-800": "#000000",
        "secondary-900": "#000000",
        background: "#000000",
        surface: "#000000",
        error: "#B00020",
        "on-primary-50": "#000000",
        "on-primary-100": "#000000",
        "on-primary-200": "#000000",
        "on-primary-300": "#000000",
        "on-primary-400": "#000000",
        "on-primary-500": "#000000",
        "on-primary-600": "#000000",
        "on-primary-700": "#000000",
        "on-primary-800": "#000000",
        "on-primary-900": "#000000",
        "on-secondary-50": "#FFFFFF",
        "on-secondary-100": "#FFFFFF",
        "on-secondary-200": "#FFFFFF",
        "on-secondary-300": "#FFFFFF",
        "on-secondary-400": "#FFFFFF",
        "on-secondary-500": "#FFFFFF",
        "on-secondary-600": "#FFFFFF",
        "on-secondary-700": "#FFFFFF",
        "on-secondary-800": "#FFFFFF",
        "on-secondary-900": "#FFFFFF",
        "on-background": "#FFFFFF",
        "on-surface": "#FFFFFF",
        "on-error": "#000000",
      },
    },
  },
  fonts: {
    heading: "Signifier, serif",
    body: "Scto Grotesk A, sans-serif",
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
      letterSpacing: "heading",
      color: "on-background",
    },
    heading2: {
      fontFamily: "heading",
      fontSize: "heading2",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading3: {
      fontFamily: "heading",
      fontSize: "heading3",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading4: {
      fontFamily: "heading",
      fontSize: "heading4",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading5: {
      fontFamily: "heading",
      fontSize: "heading5",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading6: {
      fontFamily: "heading",
      fontSize: "heading6",
      fontWeight: "medium",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    body1: {
      fontFamily: "body",
      fontSize: "body1",
      fontWeight: "medium",
      lineHeight: "body",
      letterSpacing: "body",
      color: "on-background",
    },
    body2: {
      fontFamily: "body",
      fontSize: "body2",
      fontWeight: "medium",
      lineHeight: "body",
      letterSpacing: "body",
      color: "on-background",
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
      fontFamily: "body",
      lineHeight: "body",
      letterSpacing: "body",
    },
    primary: {
      variant: "buttons.default",
      color: "on-primary-500",
      backgroundColor: "primary-500",
      "&:hover": {
        backgroundColor: "primary-300",
      },
    },
    secondary: {
      variant: "buttons.default",
      color: "on-secondary-500",
      backgroundColor: "secondary-500",
      "&:hover": {
        backgroundColor: "secondary-300",
      },
    },
  },
};
