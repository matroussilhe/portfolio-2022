import React, { Fragment, FunctionComponent } from "react";

import {
  Box,
  Flex,
  Navbar,
  SectionInformation,
  SectionPhoto,
} from "@components";
import {
  Bio,
  Expertise,
  Interest,
  Photo,
  Skill,
  Social,
} from "@services";

export type LayoutAboutProps = {
  bio: Bio;
  expertise: Expertise;
  skills: Skill[];
  interests: Interest[];
  socials: Social[];
  photo: Photo;
};

export const LayoutAbout: FunctionComponent<LayoutAboutProps> = ({
  bio,
  expertise,
  skills,
  interests,
  socials,
  photo,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-background"}
        sx={{
          pt: 3,
          px: 6,
        }}
      />
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: ["col12.6"],
          }}>
          <SectionPhoto
            photo={photo}
          />
        </Box>
        <Box
          sx={{
            width: ["col12.6"],
          }}>
          <SectionInformation
            bio={bio}
            expertise={expertise}
            skills={skills}
            interests={interests}
            socials={socials}
            sx={{
              pt: 25,
              pb: 25,
              px: 10,
            }}
          />
        </Box>
      </Flex>
    </Fragment>
  );
};
