import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  GridItemWorkImage,
  Tag,
  Text,
} from "@components";
import { Work } from "@services";

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
        <GridItemWorkImage
          href={work.link}
          images={work.images}
          color={work.color}
        />
      </Box>
      <Box
        sx={{
          width: ["col12.12"],
          mb: 1,
        }}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Text
            variant={"body2"}
            sx={{
              fontWeight: "bold",
              lineHeight: 1,
            }}>
            {work.title}
          </Text>
          <Text
            variant={"label1"}
            sx={{
              fontWeight: "medium",
              lineHeight: 1,
            }}>
            {work.date}
          </Text>
        </Flex>
      </Box>
      <Box
        sx={{
          width: ["col12.12"],
        }}>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Text
            variant={"body3"}
            sx={{
              lineHeight: 1,
            }}>
            {work.subtitle}
          </Text>
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
        </Flex>
      </Box>
    </Flex>
  );
};
