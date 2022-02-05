import { client } from "@services";

export const getIndexPageDocument = async () => {
  try {
    const document = await client().getByUID("index_page", "main");

    return document;
  } catch (error) {
    console.error("getIndexPageDocument error: ", error);

    return null;
  }
};

export const getAboutPageDocument = async () => {
  try {
    const document = await client().getByUID("about_page", "main");

    return document;
  } catch (error) {
    console.error("getAboutPageDocument error: ", error);

    return null;
  }
};
