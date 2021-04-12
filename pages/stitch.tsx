import React from "react";
import { styled } from "https://esm.sh/@stitches/react";
import { useDeno } from "framework/react";

const Button = styled('button', {
  backgroundColor: 'red'
})

const WowButton = styled(Button, {
  border: "5px solid green"
})

export default function Home() {
  return (
    <div>
      stitch <Button>something</Button> <WowButton>together</WowButton>
    </div>
  );
}
