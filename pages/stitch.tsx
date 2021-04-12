import React from "react";
import { styled } from "~/lib/stitches.ts";

const Button = styled("button", {
  backgroundColor: "$wowRed",
  p: "$2",
});
const WowButton = styled(Button, {
  border: "5px solid $wowGreen",
});

export default function Home() {
  return (
    <div>
      <head>
        <meta name="awesome" />
      </head>
      stitch <Button>something</Button> <WowButton>together</WowButton>
    </div>
  );
}
