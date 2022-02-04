import React, { FunctionComponent } from "react";

import {
  Box,
  Button,
  Flex,
  IconTheme,
  Link,
} from "@components";

export type HeaderProps = {
  iconColor: string;
  workCount: number;
};

export const Header: FunctionComponent<HeaderProps> = ({
  iconColor,
  workCount,
}) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pt: 3,
        px: 6,
      }}>
      <Box
        sx={{
          flex: "1 0 auto",
        }}>
        <IconTheme
          color={iconColor}
        />
      </Box>
      <Box
        sx={{
          flex: "0 1 auto",
        }}>
        <Link
          href={"/"}>
          <Button
            variant={"primary"}
            size={"md"}
            shape={"round"}
            sx={{
              mr: 2,
            }}>
            {`Works (${workCount})`}
          </Button>
        </Link>
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
