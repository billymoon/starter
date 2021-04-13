import { global } from "~/lib/stitches.ts";

export const globalStyles = global({
  body: {
    backgroundColor: "$loContrast",
    color: "$hiContrast",
    fontFamily: "$sans",
    margin: 0,
  },

  ul: {
    paddingLeft: "$4",
  },

  figure: { margin: 0 },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  svg: { display: "inline-block", verticalAlign: "middle" },

  "::selection": {
    backgroundColor: "$red",
    color: "$black",
  },
});
