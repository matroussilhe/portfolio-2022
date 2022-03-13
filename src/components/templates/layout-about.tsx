import React, { Fragment, FunctionComponent } from "react";

import {
  Box,
  Flex,
  Navbar,
  Responsive,
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
  skill: Skill;
  interest: Interest;
  social: Social;
  photo: Photo;
};

export const LayoutAbout: FunctionComponent<LayoutAboutProps> = ({
  bio,
  expertise,
  skill,
  interest,
  social,
  photo,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-background"}
        sx={{
          px: [3, 4, 6, 6],
          pt: [2, 3, 3, 3],
        }}
      />
      <Flex
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Responsive lgAndUp>
          <Box
            sx={{
              width: ["col12.6"],
            }}>
            <SectionPhoto
              photo={photo}
            />
          </Box>
        </Responsive>
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.6", "col12.6"],
          }}>
          <SectionInformation
            bio={bio}
            expertise={expertise}
            skill={skill}
            interest={interest}
            social={social}
            sx={{
              pt: [20, 20, 25, 25],
              pb: [0, 0, 0, 0],
              px: [3, 4, 8, 10],
            }}
          />
        </Box>
      </Flex>
    </Fragment>
  );
};
