import React from "react";

import {
  Box,
  Flex,
  Text,
} from "@components";

const DebugTypograhpy = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading1"}>{"heading1"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading2"}>{"heading2"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading3"}>{"heading3"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading4"}>{"heading4"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"body1"}>{"body1"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"body2"}>{"body2"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"body3"}>{"body3"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"label1"}>{"label1"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"label2"}>{"label2"}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"label3"}>{"label3"}</Text>
      </Box>
    </Flex>
  );
};

export default DebugTypograhpy;
