import React, { FunctionComponent } from "react";

import {
  Flex,
  SectionContentSubsectionTitle,
} from "@components";
import {
  Content,
} from "@services";

import { SectionContentSectionTitle } from "./section-content-section-title";

export type SectionContentProps = {
  contents: Content[];
};

export const SectionContent: FunctionComponent<SectionContentProps> = ({
  contents,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      {contents.map((content, index) => {
        if (content.type === "section_title") {
          return (
            <SectionContentSectionTitle
              key={`section-content-${index}`}
              content={content}
            />
          );
        } else if (content.type === "subsection_title") {
          return (
            <SectionContentSubsectionTitle
              key={`section-content-${index}`}
              content={content}
            />
          );
        } else {
          return null;
        }
      })}
    </Flex>
  );
};
