import React, { FunctionComponent } from "react";

import { Archive } from "@utils";

import {
  Box,
  Flex,
  List,
  ListItemArchive,
  Text,
} from "@components";

export type SectionArchiveProps = {
  title: string;
  archives: Archive[];
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
          px: [8],
          mt: [10],
        }}>
        <Text
          variant={"heading2"}
          sx={{
            mb: 4,
          }}>
          {title}
        </Text>
        <List
          gap={"lg"}>
          {archives.map((archive, index) => (
            <ListItemArchive
              key={`list-item-archive-${index}`}
              archive={archive}
            />
          ))}
        </List>
      </Box>
    </Flex>
  );
};
