import * as prismic from "@prismicio/client";

export const PRISMIC_REPOSITORY_NAME = process.env.PRISMIC_REPOSITORY_NAME as string;

export const client = (req = null) => {
  const endpoint = prismic.getEndpoint(PRISMIC_REPOSITORY_NAME);

  const client = prismic.createClient(endpoint, {});

  return client;
};
