import React from "react";

import {
  Flex,
  TextAnimated,
} from "@components";

const DebugTextAnimated = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        p: 5,
      }}>
      <TextAnimated>
        {"I am text, my name is Text and I lived in Texas"}
      </TextAnimated>
    </Flex>
  );
};

export default DebugTextAnimated;
