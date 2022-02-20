import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  List,
  ListItemArchive,
  TextSectionTitle,
} from "@components";
import { Archive } from "@services";

export type SectionArchiveProps = FlexProps & {
  archives: Archive[];
};

export const SectionArchive: FunctionComponent<SectionArchiveProps> = ({
  archives,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background",
      }}
      {...rest}>
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
    </Flex>
  );
};
