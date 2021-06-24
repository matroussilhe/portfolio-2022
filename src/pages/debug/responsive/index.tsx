import React, { FunctionComponent } from "react";

import { Box, BoxProps } from "@components/box";
import { Flex } from "@components/flex";

export type ResponsiveBoxProps = BoxProps & {
  plop: boolean;
};

const ResponsiveBox: FunctionComponent<ResponsiveBoxProps> = (props) => {
  return props.plop ? <Box {...props}>plop</Box> : <Box {...props} />;
};

const DebugResponsive = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <ResponsiveBox
        plop={[true, false, true, false]} // WIP: responsive not working, need custom implementation
        bg={["primary"]} // WIP: shortcut for sx.bg
        sx={{
          mt: ["12px", "100px"],
          width: ["100%", "75%", "50%", "25%"],
        }}/>
      <Box
        bg={"text"}
        sx={{
          width: ["100%", "75%", "50%", "25%"],
        }}/>
      <Box
        bg={"primary"}
        sx={{
          width: ["100%", "75%", "50%", "25%"],
        }} />
      <Box
        bg={"text"}
        sx={{
          width: ["100%", "75%", "50%", "25%"],
        }} />
    </Flex>
  );
};

export default DebugResponsive;
