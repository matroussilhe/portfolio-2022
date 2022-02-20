import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

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
  const [colorMode] = useColorMode();

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
      }}>
      <Box
        sx={{
          width: ["col12.12"],
          mb: 3,
        }}>
        <GridItemWorkImage
          href={work.link}
          images={work.images}
          color={colorMode === "light" ? work.colorLight : work.colorDark}
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
            variant={"subheading2"}
            sx={{
              lineHeight: 1,
              fontWeight: "bold",
            }}>
            {work.title}
          </Text>
          <Text
            variant={"label1"}
            sx={{
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
            variant={"body1"}
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
