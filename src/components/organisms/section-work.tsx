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
          width: ["100%"],
          px: [8],
          mt: [20],
        }}>
        <TextSectionTitle
          title={"Selected Work"}
          subtitle={"(CASE STUDIES)"}
        />
        <Grid
          gap={"lg"}
          containerSx={{
            mt: 10,
            px: 2,
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
