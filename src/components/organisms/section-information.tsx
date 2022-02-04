import React, { FunctionComponent } from "react";

import {
  Flex,
  Grid,
  GridItemInformationLink,
  GridItemInformationText,
  Text,
} from "@components";
import {
  Bio,
  Expertise,
  Interest,
  Skill,
  Social,
} from "@services";

export type SectionInformationProps = {
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
}) => {
  return (
    <Flex
      sx={{
        width: ["col12.6"],
        backgroundColor: "background",
        flexDirection: "column",
        pt: 25,
        pb: 10,
        px: 10,
      }}>
      <Text
        variant={"body2"}
        sx={{
          ml: 4,
          mb: 5,
          fontWeight: "black",
        }}>
        {"전기_BIO"}
      </Text>
      <Text
        variant={"body1"}
        sx={{
          mb: 12,
          whiteSpace: "pre-wrap",
        }}>
        {bio.description}
      </Text>
      <Text
        variant={"body2"}
        sx={{
          ml: 4,
          mb: 5,
          fontWeight: "black",
        }}>
        {"전문지식_EXPERTISE"}
      </Text>
      <Text
        variant={"body1"}
        sx={{
          mb: 12,
          whiteSpace: "pre-wrap",
        }}>
        {expertise.description}
      </Text>
      <Text
        variant={"body2"}
        sx={{
          ml: 4,
          mb: 5,
          fontWeight: "black",
        }}>
        {"실력_SKILLS"}
      </Text>
      <Grid
        gap={"md"}
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
      <Text
        variant={"body2"}
        sx={{
          ml: 4,
          mb: 5,
          fontWeight: "black",
        }}>
        {"취미_OTHER INTERESTS"}
      </Text>
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
      <Text
        variant={"body2"}
        sx={{
          ml: 4,
          mb: 5,
          fontWeight: "black",
        }}>
        {"연락처_SOCIALS"}
      </Text>
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
