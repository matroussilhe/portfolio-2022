import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

import {
  Flex,
  GridItemWorkImage,
} from "@components";
import { Work } from "@services";

import { GridItemWorkResume } from "./grid-item-work-resume";

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
        flexDirection: "column",
      }}>
      <GridItemWorkImage
        href={work.link}
        images={work.images}
        color={colorMode === "light" ? work.colorLight : work.colorDark}
      />
      <GridItemWorkResume
        title={work.title}
        subtitle={work.subtitle}
        date={work.date}
        tags={work.tags}
      />
    </Flex>
  );
};
