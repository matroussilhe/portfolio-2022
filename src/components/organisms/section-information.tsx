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
      }}
      {...rest}>
      <TextParagraphTitle
        sx={{
          ml: 4,
          mb: 5,
        }}>
        {"전기_BIO"}
      </TextParagraphTitle>
      <Text
        variant={"body1"}
        sx={{
          mb: 12,
          maxWidth: "paragraph.md",
          whiteSpace: "pre-wrap",
        }}>
        {bio.description}
      </Text>
      <TextParagraphTitle
        sx={{
          ml: 4,
          mb: 5,
        }}>
        {"전문지식_EXPERTISE"}
      </TextParagraphTitle>
      <Text
        variant={"body1"}
        sx={{
          mb: 12,
          maxWidth: "paragraph.md",
          whiteSpace: "pre-wrap",
        }}>
        {expertise.description}
      </Text>
      <TextParagraphTitle
        sx={{
          ml: 4,
          mb: 5,
        }}>
        {"실력_SKILLS"}
      </TextParagraphTitle>
      <Grid
        gap={"xl"}
        containerSx={{
          pb: 12,
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
          ml: 4,
          mb: 5,
        }}>
        {"취미_OTHER INTERESTS"}
      </TextParagraphTitle>
      <Grid
        gap={"md"}
        containerSx={{
          pb: 12,
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
          ml: 4,
          mb: 5,
        }}>
        {"연락처_SOCIALS"}
      </TextParagraphTitle>
      <Grid
        gap={"md"}
        itemSx={{
          width: ["col12.6"],
        }}>
        {social.groups.map((group, index) => (
          <GridItemInformationLink
            key={`grid-item-information-link-interest-${index}`}
            items={group}
          />
        ))}
      </Grid>
    </Flex>
  );
};
