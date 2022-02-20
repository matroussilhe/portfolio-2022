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
  showBack?: boolean;
};

// use hardcoded value to avoid excessive query of work count on each page load
const WORK_COUNT = 2;

export const Navbar: FunctionComponent<NavbarProps> = ({
  iconColor,
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
            {`Works (${WORK_COUNT})`}
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
