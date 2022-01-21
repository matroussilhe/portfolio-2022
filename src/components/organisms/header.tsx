import React, { FunctionComponent } from "react";

import {
  Box,
  Button,
  Flex,
  IconTheme,
  Link,
} from "@components";

export type HeaderProps = {
  workCount: number;
};

export const Header: FunctionComponent<HeaderProps> = ({
  workCount,
}) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pt: 4,
        px: 6,
      }}>
      <Box
        sx={{
          flex: "1 0 auto",
        }}>
        <IconTheme/>
      </Box>
      <Box
        sx={{
          flex: "0 1 auto",
        }}>
        <Button
          variant={"primary"}
          size={"md"}
          shape={"round"}
          sx={{
            mr: 3,
            textDecoration: "underline",
            textDecorationThickness: "1px",
            textUnderlineOffset: "2px",
          }}>
          {`Works (${workCount})`}
        </Button>
        <Link
          href={"/about"}>
          <Button
            variant={"primary"}
            size={"md"}
            shape={"round"}>
            {"Informations"}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
