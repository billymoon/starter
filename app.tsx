import React, { ComponentType } from "react";
import { getCssString } from "~/lib/stitches.ts";
import "./app.css";
import { globalStyles } from "~/lib/global.tsx";

const InjectStitches = () => (
  <head>
    <style type="text/css" id="stitches">
      {getCssString()}
    </style>
  </head>
);

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  globalStyles();
  return (
    <main className="app__main">
      <head>
        <meta name="viewport" content="width=device-width" />
        <style type="text/css" id="stitches" />
      </head>
      <Page {...pageProps} />
      <InjectStitches />
    </main>
  );
}
