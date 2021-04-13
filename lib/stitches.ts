import { createCss, StitchesCss, StitchesVariants } from "stitches";
export type { StitchesVariants } from "stitches";

const DARK_THEME = "dark";

const lightTheme = createCss({
  theme: {
    colors: {
      black: "rgba(19, 19, 21, 1)",
      white: "rgba(255, 255, 255, 1)",
      gray: "rgba(128, 128, 128, 1)",
      blue: "rgba(3, 136, 252, 1)",
      red: "rgba(249, 16, 74, 1)",
      yellow: "rgba(255, 221, 0, 1)",
      pink: "rgba(232, 141, 163, 1)",
      turq: "rgba(0, 245, 196, 1)",
      orange: "rgba(255, 135, 31, 1)",
      // Semantic colors
      hiContrast: "$black",
      loContrast: "$white",
      border: "$gray",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      sans: "Inter, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    zIndices: {
      header: "100",
      modal: "200",
    },
    transitions: {},
  },
  media: {
    bp1: "@media (min-width: 640px)",
    bp2: "@media (min-width: 768px)",
    bp3: "@media (min-width: 1024px)",
    bp4: "@media (min-width: 1280px)",
  },
  utils: {
    p: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingTop: value,
    }),
    pr: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingRight: value,
    }),
    pb: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingBottom: value,
    }),
    pl: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingLeft: value,
    }),
    px: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginTop: value,
    }),
    mr: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginRight: value,
    }),
    mb: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginBottom: value,
    }),
    ml: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginLeft: value,
    }),
    mx: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (
      value: keyof typeof config.theme["space"] | number | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (config) => (value) => ({
      width: value,
    }),
    h: (config) => (value) => ({
      height: value,
    }),
    bg: (config) => (value) => ({
      background: value,
    }),
    size: (config) => (
      value: keyof typeof config.theme["sizes"] | number | (string & {})
    ) => ({
      width: value,
      height: value,
    }),
    align: (config) => (value) => ({
      alignItems: value,
    }),
    justify: (config) => (value) => ({
      justifyContent: value,
    }),
    dir: (config) => (value) => ({
      flexDirection: value,
    }),
    radius: (config) => (value) => ({
      borderRadius: value,
    }),
    stackGap: <T extends { theme: { space: any } }>(_: T) => (
      value: `$${Extract<keyof T["theme"]["space"], string | number>}`
    ) => ({
      $$gap: `$space${value}`,
    }),
    "@dark": (config) => (
      // value: StitchesCss<typeof config> | Record<string, any>
      value: StitchesCss<typeof config>
    ) => ({
      [`.${DARK_THEME} &`]: value,
    }),
  },
});

export type CSS = StitchesCss<typeof lightTheme>;

export const {
  css,
  getCssString,
  global,
  styled,
  theme,
  utils,
  config,
} = lightTheme;

export const darkTheme = theme(DARK_THEME, {
  colors: {
    hiContrast: "$white",
    loContrast: "$turq",
    border: "$orange",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.6)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.6)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.6)",
  },
});

export type StitchesProps<T> = StitchesVariants<T> & {
  css?: CSS;
};

export const themes = ["light", darkTheme];
