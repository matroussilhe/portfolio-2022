import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  GridItemWork,
  Text,
} from "@components";
import { Work } from "@utils";

export type SectionWorkProps = {
  title: string;
  works: Work[];
};

export const SectionWork: FunctionComponent<SectionWorkProps> = ({
  title,
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
        <Text
          variant={"heading2"}
          sx={{
            mb: 10,
          }}>
          {title}
        </Text>
        <Grid
          gap={"lg"}
          itemProps={{
            sx: {
              width: ["col12.6"],
            },
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
