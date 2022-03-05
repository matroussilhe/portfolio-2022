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
        width: "100%",
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: ["center", "center", "flex-start", "flex-start"],
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
              variant={"subheading1"}>
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
          href={"/"}
          sx={{
            mr: [1, 2, 2, 2],
          }}>
          <Button
            variant={"primary"}
            size={["sm", "sm", "md", "md"]}
            shape={"round"}
            sx={{
              userSelect: "none",
            }}>
            {`Works (${WORK_COUNT})`}
          </Button>
        </Link>
        <Link
          href={"/about"}>
          <Button
            variant={"primary"}
            size={["sm", "sm", "md", "md"]}
            shape={"round"}
            sx={{
              userSelect: "none",
            }}>
            {"Informations"}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
