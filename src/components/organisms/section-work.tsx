import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Grid,
  GridItemWork,
  TextSectionTitle,
} from "@components";
import { Work } from "@services";

export type SectionWorkProps = FlexProps & {
  works: Work[];
};

export const SectionWork: FunctionComponent<SectionWorkProps> = ({
  works,
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
        title={"Selected Work"}
        subtitle={"(CASE STUDIES)"}
      />
      <Grid
        gap={["xl", "xl", "lg", "lg"]}
        containerSx={{
          pt: [5, 5, 15, 15],
        }}
        itemSx={{
          width: ["col12.12", "col12.12", "col12.6", "col12.6"],
        }}>
        {works.map((work, index) => (
          <GridItemWork
            key={`grid-item-work-${index}`}
            work={work}
          />
        ))}
      </Grid>
    </Flex>
  );
};
