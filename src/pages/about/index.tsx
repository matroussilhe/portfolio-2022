import React from "react";

import { GetStaticProps, NextPage } from "next";

import { LayoutAbout } from "@components";
import {
  AboutPageDocument,
  getAboutPageDocument,
  parseAboutPageDocument,
} from "@services";

export type AboutProps = {
  document: AboutPageDocument;
};

export const getStaticProps: GetStaticProps = async () => {
  const document = await getAboutPageDocument();
  const parsedDocument = parseAboutPageDocument(document);

  return {
    props: {
      document: parsedDocument,
    },
  };
};

const About: NextPage<AboutProps> = ({ document }) => {
  return (
    <LayoutAbout
      bio={document.bio}
      expertise={document.expertise}
      skills={document.skills}
      interests={document.interests}
      socials={document.socials}
    />
  );
};

export default About;
