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
    <Flex>
      <Box>
        <Text>
          {archive.title}
        </Text>
        <Text>
          {archive.description}
        </Text>
      </Box>
    </Flex>
  );
};
