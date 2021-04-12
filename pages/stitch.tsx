import React from "react";
import { createCss, styled } from "https://esm.sh/@stitches/react";

const { styled, css, getCssString } = createCss({
  theme: {
    colors: {
      wowRed: "red",
      wowGreen: "blue",
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
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: "@media (min-width: 640px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 1024px)",
    xl: "@media (min-width: 1280px)",
  },
  utils: {
    p: (config) =>
      (value) => ({
        padding: value,
      }),
  },
});
const Button = styled("button", {
  backgroundColor: "$wowRed",
  p: "$2",
});
const WowButton = styled(Button, {
  border: "5px solid $wowGreen",
});

export default function Home() {
  // this line gives us the css required for SSR
  console.log(getCssString());

  return (
    <div>
      stitch <Button>something</Button> <WowButton>together</WowButton>
    </div>
  );
}
