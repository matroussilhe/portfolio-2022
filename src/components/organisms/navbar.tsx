import React, { FunctionComponent } from "react";

import {
  Box,
  Button,
  Flex,
  IconTheme,
  Link,
  Text,
} from "@components";

export type NavbarProps = {
  iconColor: string;
  workCount: number;
  showBack?: boolean;
};

export const Navbar: FunctionComponent<NavbarProps> = ({
  iconColor,
  workCount,
  showBack = false,
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
        alignItems: showBack ? "center" : "flex-start",
      }}>
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
