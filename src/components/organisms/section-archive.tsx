import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  List,
  ListItemArchive,
  TextSectionTitle,
} from "@components";
import { Archive } from "@services";

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
          px: [6],
          pt: [20],
          pb: [20],
        }}>
        <TextSectionTitle
          title={"Archive"}
          subtitle={"(EXTERNAL LINKS)"}
        />
        <List
          gap={"lg"}
          containerSx={{
            pt: 15,
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
