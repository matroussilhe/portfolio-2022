import { Theme as ThemeUITheme } from "theme-ui";

export type Theme = typeof theme;
export type ThemeColor = keyof typeof theme.colors;

const getTheme = <T extends ThemeUITheme>(theme: T): T => theme;

const palette = {
  "grayscale-1000": "#000000",
  "grayscale-900": "#141414",
  "grayscale-800": "#1E1E1E",
  "grayscale-700": "#272727",
  "grayscale-600": "#515151",
  "grayscale-500": "#7B7B7B",
  "grayscale-400": "#D5D5D5",
  "grayscale-300": "#E6E6E6",
  "grayscale-200": "#F2F2F2",
  "grayscale-100": "#F6F6F6",
  "grayscale-50": "#FCFCFC",
  "grayscale-0": "#FFFFFF",
  "red-700": "#53261C",
  "green-700": "#333E34",
  "blue-700": "#4C58A4",
};

export const theme = getTheme({
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
    0, //    0
    8, //    1
    16, //   2
    24, //   3
    32, //   4
    40, //   5
    48, //   6
    56, //   7
    64, //   8
    72, //   9
    80, //  10
    88, //  11
    96, //  12
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
  sizes: {
    col12: {
      1: "8.3333%",
      2: "16.6666%",
      3: "25%",
      4: "33.3333%",
      5: "41.6666%",
      6: "50%",
      7: "58.3333%",
      8: "66.6666%",
      9: "75%",
      10: "83.3333%",
      11: "91.6666%",
      12: "100%",
    },
    paragraph: {
      "sm": "560px",
      "md": "640px",
      "lg": "720px",
    },
  },
  colors: {
    ...palette,
    "primary-700": palette["grayscale-900"],
    "primary-500": palette["grayscale-700"],
    "primary-200": palette["grayscale-500"],
    "secondary-700": palette["grayscale-200"],
    "secondary-500": palette["grayscale-0"],
    "secondary-200": palette["grayscale-0"],
    "background": palette["grayscale-0"],
    "surface": palette["grayscale-100"],
    "on-primary-700": palette["grayscale-100"],
    "on-primary-500": palette["grayscale-0"],
    "on-primary-200": palette["grayscale-0"],
    "on-secondary-700": palette["grayscale-1000"],
    "on-secondary-500": palette["grayscale-1000"],
    "on-secondary-200": palette["grayscale-1000"],
    "on-background": palette["grayscale-1000"],
    "on-surface": palette["grayscale-1000"],
    modes: {
      dark: {
        ...palette,
        "primary-700": palette["grayscale-300"],
        "primary-500": palette["grayscale-0"],
        "primary-200": palette["grayscale-0"],
        "secondary-700": palette["grayscale-1000"],
        "secondary-500": palette["grayscale-800"],
        "secondary-200": palette["grayscale-600"],
        "background": palette["grayscale-800"],
        "surface": palette["grayscale-900"],
        "on-primary-700": palette["grayscale-1000"],
        "on-primary-500": palette["grayscale-1000"],
        "on-primary-200": palette["grayscale-1000"],
        "on-secondary-700": palette["grayscale-0"],
        "on-secondary-500": palette["grayscale-0"],
        "on-secondary-200": palette["grayscale-0"],
        "on-background": palette["grayscale-0"],
        "on-surface": palette["grayscale-100"],
      },
    },
  },
  fontSizes: {
    heading1: "11.25rem", //   180px
    heading2: "7.5rem", //     120px
    heading3: "4.5rem", //      72px
    heading4: "3.5rem", //      56px
    heading5: "2.625rem", //    42px
    heading6: "2rem", //        32px
    subheading1: "1.5rem", //   24px
    subheading2: "1.375rem", // 22px
    body1: "1.25rem", //        20px
    body2: "1rem", //           16px
    body3: "0.875rem", //       14px
    label1: "0.875rem", //      14px
    label2: "0.75rem", //       12px
    label3: "0.625rem", //      10px
    label4: "0.5rem", //         8px
  },
  fontWeights: {
    black: 900,
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300,
    thin: 100,
  },
  fonts: {
    heading: "\"Scto Grotesk A\", sans-serif",
    subheading: "\"Scto Grotesk A\", sans-serif",
    body: "\"Scto Grotesk A\", sans-serif",
    label: "Maison, monospace",
  },
  lineHeights: {
    heading: 1,
    subheading: 1,
    body: 1.3,
    label: 1,
  },
  letterSpacings: {
    heading: "normal",
    subheading: "normal",
    body: "normal",
    label: "normal",
  },
  text: {
    heading1: {
      fontFamily: "heading",
      fontSize: "heading1",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading2: {
      fontFamily: "heading",
      fontSize: "heading2",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading3: {
      fontFamily: "heading",
      fontSize: "heading3",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading4: {
      fontFamily: "heading",
      fontSize: "heading4",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading5: {
      fontFamily: "heading",
      fontSize: "heading5",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    heading6: {
      fontFamily: "heading",
      fontSize: "heading6",
      fontWeight: "regular",
      lineHeight: "heading",
      letterSpacing: "heading",
      color: "on-background",
    },
    subheading1: {
      fontFamily: "subheading",
      fontSize: "subheading1",
      fontWeight: "regular",
      lineHeight: "subheading",
      letterSpacing: "subheading",
      color: "on-background",
    },
    subheading2: {
      fontFamily: "subheading",
      fontSize: "subheading2",
      fontWeight: "regular",
      lineHeight: "subheading",
      letterSpacing: "subheading",
      color: "on-background",
    },
    body1: {
      fontFamily: "body",
      fontSize: "body1",
      fontWeight: "regular",
      lineHeight: "body",
      letterSpacing: "body",
      color: "on-background",
    },
    body2: {
      fontFamily: "body",
      fontSize: "body2",
      fontWeight: "regular",
      lineHeight: "body",
      letterSpacing: "body",
      color: "on-background",
    },
    body3: {
      fontFamily: "body",
      fontSize: "body3",
      fontWeight: "regular",
      lineHeight: "body",
      letterSpacing: "body",
      color: "on-background",
    },
    label1: {
      fontFamily: "label",
      fontSize: "label1",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacing: "label",
      color: "on-background",
    },
    label2: {
      fontFamily: "label",
      fontSize: "label2",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacing: "label",
      color: "on-background",
    },
    label3: {
      fontFamily: "label",
      fontSize: "label3",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacing: "label",
      color: "on-background",
    },
    label4: {
      fontFamily: "label",
      fontSize: "label4",
      fontWeight: "regular",
      lineHeight: "label",
      letterSpacing: "label",
      color: "on-background",
    },
  },
  links: {
    default: {
      display: "inline-block",
    },
    regular: {
      variant: "links.default",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
        textDecorationColor: "on-background",
      },
    },
    discreet: {
      variant: "links.default",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
      fontFamily: "body",
      lineHeight: 1,
      letterSpacing: "body",
      whiteSpace: "nowrap",
    },
    primary: {
      variant: "buttons.default",
      color: "on-primary-500",
      backgroundColor: "primary-500",
      "&:hover": {
        color: "on-primary-700",
        backgroundColor: "primary-700",
      },
    },
    secondary: {
      variant: "buttons.default",
      color: "on-secondary-500",
      backgroundColor: "secondary-500",
      "&:hover": {
        color: "on-primary-700",
        backgroundColor: "secondary-700",
      },
    },
  },
  variants: {
    tags: {
      default: {
        display: "inline-block",
        borderWidth: 1,
        borderStyle: "solid",
        fontFamily: "label",
        lineHeight: 1,
        letterSpacing: "label",
      },
      primary: {
        variant: "variants.tags.default",
        color: "primary-500",
        borderColor: "primary-500",
      },
      secondary: {
        variant: "variants.tags.default",
        color: "secondary-500",
        borderColor: "secondary-500",
      },
      "on-background": {
        variant: "variants.tags.default",
        color: "on-background",
        borderColor: "on-background",
      },
    },
  },
});
