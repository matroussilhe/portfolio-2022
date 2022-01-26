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
  // DEBUG:
  rawDocument: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const document = await getAboutPageDocument();
  const parsedDocument = parseAboutPageDocument(document);

  return {
    props: {
      document: parsedDocument,
      // DEBUG:
      rawDocument: document,
    },
  };
};

const About: NextPage<AboutProps> = ({ document, rawDocument }) => {
  // DEBUG:
  console.log("document : ", document);
  console.log("raw document : ", rawDocument);

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
