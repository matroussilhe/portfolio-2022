import React from "react";

import {
  Box,
  Flex,
  Text,
} from "@components";

const DebugTypograhpy = () => {
  const text = "Sample text.";

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading1"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading2"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading3"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading4"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading5"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"heading6"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"body1"}>{text}</Text>
      </Box>
      <Box
        sx={{
          paddingBottom: "16px",
        }}>
        <Text variant={"body2"}>{text}</Text>
      </Box>
    </Flex>
  );
};

export default DebugTypograhpy;
