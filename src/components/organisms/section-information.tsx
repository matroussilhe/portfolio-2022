import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  Grid,
  GridItemInformationLink,
  GridItemInformationText,
  Text,
  TextParagraphTitle,
} from "@components";
import {
  Bio,
  Expertise,
  Interest,
  Skill,
  Social,
} from "@services";

export type SectionInformationProps = FlexProps & {
  bio: Bio;
  expertise: Expertise;
  skill: Skill;
  interest: Interest;
  social: Social;
};

export const SectionInformation: FunctionComponent<SectionInformationProps> = ({
  bio,
  expertise,
  skill,
  interest,
  social,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        backgroundColor: "background",
        flexDirection: "column",
        overflow: "hidden",
      }}
      {...rest}>
      <TextParagraphTitle
        sx={{
          ml: [3, 3, 4, 4],
          mb: [4, 4, 5, 5],
        }}>
        {"소개_BIO"}
      </TextParagraphTitle>
      <Text
        variant={["body2", "body2", "body2", "body1"]}
        sx={{
          pb: [8, 8, 10, 12],
          maxWidth: "paragraph.lg",
          whiteSpace: "pre-wrap",
        }}>
        {bio.description}
      </Text>
      <TextParagraphTitle
        sx={{
          ml: [3, 3, 4, 4],
          mb: [4, 4, 5, 5],
        }}>
        {"전문성_EXPERTISE"}
      </TextParagraphTitle>
      <Text
        variant={["body2", "body2", "body2", "body1"]}
        sx={{
          pb: [8, 8, 10, 12],
          maxWidth: "paragraph.lg",
          whiteSpace: "pre-wrap",
        }}>
        {expertise.description}
      </Text>
      <TextParagraphTitle
        sx={{
          ml: [3, 3, 4, 4],
          mb: [4, 4, 5, 5],
        }}>
        {"능력_SKILLS"}
      </TextParagraphTitle>
      <Grid
        gap={["lg", "lg", "lg", "xl"]}
        containerSx={{
          pb: [8, 8, 10, 12],
        }}
        itemSx={{
          width: ["col12.6"],
        }}>
        {skill.groups.map((group, index) => (
          <GridItemInformationText
            key={`grid-item-information-text-skill-${index}`}
            items={group}
          />
        ))}
      </Grid>
      <TextParagraphTitle
        sx={{
          ml: [3, 3, 4, 4],
          mb: [4, 4, 5, 5],
        }}>
        {"취미_INTERESTS"}
      </TextParagraphTitle>
      <Grid
        gap={["lg", "lg", "lg", "xl"]}
        containerSx={{
          pb: [8, 8, 10, 12],
        }}
        itemSx={{
          width: ["col12.6"],
        }}>
        {interest.groups.map((group, index) => (
          <GridItemInformationText
            key={`grid-item-information-text-interest-${index}`}
            items={group}
          />
        ))}
      </Grid>
      <TextParagraphTitle
        sx={{
          ml: [3, 3, 4, 4],
          mb: [4, 4, 5, 5],
        }}>
        {"링크_LINKS"}
      </TextParagraphTitle>
      <Grid
        gap={["lg", "lg", "lg", "xl"]}
        containerSx={{
          pb: [8, 8, 10, 12],
        }}
        itemSx={{
          width: ["col12.6"],
        }}>
        {social.groups.map((group, index) => (
          <GridItemInformationLink
            key={`grid-item-information-link-link-${index}`}
            items={group}
          />
        ))}
      </Grid>
    </Flex>
  );
};
