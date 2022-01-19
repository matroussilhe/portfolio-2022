import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  List,
  ListItemArchive,
  Text,
} from "@components";
import { Archive } from "@utils";

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
        backgroundColor: "background",
      }}>
      <Box
        sx={{
          width: ["100%"],
          px: [8],
          mt: [8],
        }}>
        <Text
          variant={"heading2"}
          sx={{
            mb: 6,
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
