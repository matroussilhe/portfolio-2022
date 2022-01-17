import React, { FunctionComponent } from "react";

import { Archive } from "@utils";

import {
  Box,
  Flex,
  Text,
} from "@components";

export type ListItemArchiveProps = {
  archive: Archive;
};

export const ListItemArchive: FunctionComponent<ListItemArchiveProps> = ({
  archive,
}) => {
  return (
    <Flex sx={{
      my: 9,
    }}>
      <Box>
        <Text
          variant={"body2"}
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}>
          {archive.title}
        </Text>
        <Text
          variant={"body3"}
          sx={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.2,
          }}>
          {archive.description}
        </Text>
      </Box>
    </Flex>
  );
};
