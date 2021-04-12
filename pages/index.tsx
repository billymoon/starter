import { useDeno } from "framework/react";
import React from "react";
import Logo from "~/components/logo.tsx";
import Counter from "~/components/counter.tsx";
import useSanity from "~/lib/useSanity.ts";
import "./page.css";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);
  const content = useDeno(async () => {
    const sanity = useSanity();
    return btoa(JSON.stringify(await sanity(`*`)));
  });

  console.log(JSON.parse(atob(content)));

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
      </head>
      <Logo />
      <h1 className="page__h1">
        Welcome to use <strong>Aleph.js</strong>!
      </h1>
      <p className="page__paragraph">
        <a className="page__link" href="https://alephjs.org" target="_blank">
          Website
        </a>
        <span className="page__link-divider" />
        <a
          className="page__link"
          href="https://alephjs.org/docs/get-started"
          target="_blank"
        >
          Get Started
        </a>
        <span className="page__link-divider" />
        <a
          className="page__link"
          href="https://alephjs.org/docs"
          target="_blank"
        >
          Docs
        </a>
        <span className="page__link-divider" />
        <a
          className="page__link"
          href="https://github.com/alephjs/aleph.js"
          target="_blank"
        >
          Github
        </a>
      </p>
      <Counter />
      <Counter />
      <p className="page__paragraph page__copyinfo">
        Built by Aleph.js in Deno {version}
      </p>
    </div>
  );
}
