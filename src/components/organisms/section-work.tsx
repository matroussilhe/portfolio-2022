import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  GridItemWork,
  TextSectionTitle,
} from "@components";
import { Work } from "@services";

export type SectionWorkProps = {
  works: Work[];
};

export const SectionWork: FunctionComponent<SectionWorkProps> = ({
  works,
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
        }}>
        <TextSectionTitle
          title={"Selected Work"}
          subtitle={"(CASE STUDIES)"}
        />
        <Grid
          gap={"lg"}
          containerSx={{
            pt: 15,
          }}
          itemSx={{
            width: ["col12.6"],
          }}>
          {works.map((work, index) => (
            <GridItemWork
              key={`grid-item-work-${index}`}
              work={work}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
