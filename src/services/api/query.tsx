import { client } from "@services";

export const getIndexPageDocument = async () => {
  try {
    const document = await client().getByUID("index_page", "main");

    return document;
  } catch (error) {
    console.error("query error: ", error);

    return null;
  }
};

export const getAboutPageDocument = async () => {
  try {
    const document = await client().getByUID("about_page", "main");

    return document;
  } catch (error) {
    console.error("query error: ", error);

    return null;
  }
};

export const getCaseStudyPageDocument = async (id?: string) => {
  try {
    if (!id) {
      throw new Error("missing id");
    }

    const document = await client().getByUID("case_study_page", id);

    return document;
  } catch (error) {
    console.error("query error: ", error);

    return null;
  }
};
