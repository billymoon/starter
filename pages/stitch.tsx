import React from "react";
import { styled } from "~/lib/stitches.ts";

export default function Home() {
  const Button = styled("button", {
    backgroundColor: "$wowRed",
    p: "$2",
  });

  const WowButton = styled(Button, {
    border: "5px solid $wowGreen",
  });

  return (
    <div>
      stitch <Button>something</Button> <WowButton>together</WowButton>
    </div>
  );
}
