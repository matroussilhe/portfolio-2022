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
  skills: Skill[];
  interests: Interest[];
  socials: Social[];
};

export const SectionInformation: FunctionComponent<SectionInformationProps> = ({
  bio,
  expertise,
  skills,
  interests,
  socials,
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
        {skills.map((skill, index) => (
          <GridItemInformationText
            key={`grid-item-information-text-skill-${index}`}
            items={skill}
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
        {interests.map((interest, index) => (
          <GridItemInformationText
            key={`grid-item-information-text-interest-${index}`}
            items={interest}
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
        {socials.map((social, index) => (
          <GridItemInformationLink
            key={`grid-item-information-link-interest-${index}`}
            items={social}
          />
        ))}
      </Grid>
    </Flex>
  );
};
