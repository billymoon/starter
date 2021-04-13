import React from "react";
import { styled, darkTheme } from "~/lib/stitches.ts";
import { Stack } from "~/components/stack.tsx";

export default function Home() {
  const Button = styled("button", {
    backgroundColor: "$hiContrast",
    color: "$loContrast",
    "&:hover": {
      backgroundColor: "$red",
      color: "$turq",
      cursor: "pointer",
    },
    "@dark": {
      backgroundColor: "$blue",
    },
    "@initial": { p: "$3" },
    "@bp3": { p: "$2" },
  });

  const WowButton = styled(Button, {
    border: "5px solid $green",
  });

  const Box = styled("div", {
    boxSizing: "border-box",
  });

  const Flex = styled(Box, {
    display: "flex",
  });

  return (
    <Box>
      <Flex
        css={{
          h: "50vh",
          w: "100vw",
          justify: "center",
          align: "center",
          bg: "$loContrast",
          color: "$hiContrast",
        }}
      >
        <Stack direction="column" css={{ gap: "$2" }}>
          <Stack css={{ gap: "$2" }}>
            <Button>Button</Button>
            <Button className={darkTheme}>Button dark</Button>
            <Button>Button light</Button>{" "}
          </Stack>
          <Stack css={{ gap: "$2" }}>
            <WowButton>Wow Button</WowButton>
            <WowButton className={darkTheme}>Wow Button dark</WowButton>
            <WowButton>Wow Button light</WowButton>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        css={{
          h: "50vh",
          w: "100vw",
          justify: "center",
          align: "center",
          bg: "$loContrast",
          color: "$hiContrast",
        }}
        className={darkTheme}
      >
        <Stack direction="column" css={{ gap: "$2" }}>
          <Stack css={{ gap: "$2" }}>
            <Button>Button</Button>
            <Button className={darkTheme}>Button dark</Button>
            <Button>Button light</Button>
          </Stack>
          <Stack css={{ gap: "$2" }}>
            <WowButton>Wow Button</WowButton>
            <WowButton className={darkTheme}>Wow Button dark</WowButton>
            <WowButton>Wow Button light</WowButton>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
