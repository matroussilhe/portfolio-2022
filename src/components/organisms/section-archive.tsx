import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  ListArchive,
  Text,
} from "@components";

export type SectionArchiveProps = {
  title: string;
  archives: any[];
};

export const SectionArchive: FunctionComponent<SectionArchiveProps> = ({
  title,
  archives,
}) => {
  return (
    <Flex
      sx={{
        height: "100vh",
        backgroundColor: "background",
      }}>
      <Box
        sx={{
          width: ["100%"],
          pl: [6],
          mt: [10],
        }}>
        <Text variant={"heading3"}>
          {title}
        </Text>
        <ListArchive
          archives={archives}
        />
      </Box>
    </Flex>
  );
};
