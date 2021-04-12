import React, { ComponentType } from "react";
import { getCssString } from "~/lib/stitches.ts";
// import { InjectStitches } from "~/lib/stitches.ts";
// import { InjectStitchesFactory } from "~/lib/stitches.ts";
import "./app.css";

const InjectStitches = () => (
  <head>
    <style>{getCssString()}</style>
  </head>
);

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main className="app__main">
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
      <InjectStitches />
    </main>
  );
}
