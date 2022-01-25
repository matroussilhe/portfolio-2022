import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  List,
  ListItemArchive,
  TextSectionTitle,
} from "@components";
import { Archive } from "@utils";

export type SectionArchiveProps = {
  archives: Archive[];
};

export const SectionArchive: FunctionComponent<SectionArchiveProps> = ({
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
        <TextSectionTitle
          title={"Archive"}
          subtitle={"(EXTERNAL LINKS)"}
        />
        <List
          gap={"lg"}
          containerSx={{
            mt: 6,
          }}>
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
