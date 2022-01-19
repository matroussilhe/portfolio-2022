import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  Tag,
  Text,
} from "@components";
import { Work } from "@utils";

import { GridItemImageWork } from "./grid-item-image-work";

export type GridItemWorkProps = {
  work: Work;
};

export const GridItemWork: FunctionComponent<GridItemWorkProps> = ({
  work,
}) => {
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
      }}>
      <Box
        sx={{
          width: ["col12.12"],
          mb: 2,
        }}>
        <GridItemImageWork
          href={work.link}
          images={work.images}
        />
      </Box>
      <Box
        sx={{
          width: ["col12.12"],
          mb: 2,
          pl: 2,
        }}>
        <Flex
          sx={{
            alignItems: "center",
          }}>
          <Text
            variant={"body2"}
            sx={{
              flex: "0 0 auto",
              mr: 1,
              fontWeight: "bold",
              lineHeight: 1,
            }}>
            {work.title}
          </Text>
          <Text
            variant={"body3"}
            sx={{
              flex: "1 1 auto",
              whiteSpace: "pre-wrap",
              lineHeight: 1,
            }}>
            {work.subtitle}
          </Text>
        </Flex>
      </Box>
      <Box
        sx={{
          width: ["col12.12"],
          pl: 2,
        }}>
        <Grid
          gap={"sm"}>
          {work.tags.map((tag, index) => (
            <Tag
              key={`grid-item-work-tag-${index}`}
              size={"md"}>
              {tag}
            </Tag>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
