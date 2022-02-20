import React, { FunctionComponent } from "react";

import {
  Box,
  Button,
  Flex,
  FlexProps,
  IconTheme,
  Link,
  Text,
} from "@components";

export type NavbarProps = FlexProps & {
  iconColor: string;
  workCount: number;
  showBack?: boolean;
};

// hardcoded value to avoid excessive query of work count
const WORK_COUNT = 2;

export const Navbar: FunctionComponent<NavbarProps> = ({
  iconColor,
  workCount = WORK_COUNT,
  showBack = false,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        alignItems: showBack ? "center" : "flex-start",
      }}
      {...rest}>
      <Box
        sx={{
          flex: "0 1 auto",
        }}>
        {showBack ? (
          <Link
            variant={"discreet"}
            href={"/"}>
            <Text
              variant={"heading5"}>
              {"BACK"}
            </Text>
          </Link>
        ) : (
          <IconTheme
            color={iconColor}
          />
        )}
      </Box>
      <Box
        sx={{
          flex: "1 0 auto",
        }}
      />
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
