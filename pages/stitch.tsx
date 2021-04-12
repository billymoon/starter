import React from "react";
import { styled } from "~/lib/stitches.ts";

export default function Home() {
  const Button = styled("button", {
    p: "$2",
    backgroundColor: "$wowRed",
    color: "$wowGreen",
    "&:hover": {
      backgroundColor: "$wowGreen",
      color: "$wowRed",
      cursor: "pointer",
    },
    variants: {
      type: {
        dark: {
          backgroundColor: "$black",
          color: "$white",
          "&:hover": {
            backgroundColor: "white",
            color: "$black",
          },
        },
        light: {
          backgroundColor: "$white",
          color: "$black",
          "&:hover": {
            backgroundColor: "black",
            color: "$white",
          },
        },
      },
    },
  });

  const WowButton = styled(Button, {
    border: "5px solid $wowGreen",
  });

  return (
    <div>
      <Button>Button</Button>
      <Button type="dark">Button dark</Button>
      <Button type="light">Button light</Button>
      <WowButton>Wow Button</WowButton>
      <WowButton type="dark">Wow Button dark</WowButton>
      <WowButton type="light">Wow Button light</WowButton>
    </div>
  );
}
