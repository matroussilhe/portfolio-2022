import { helper } from "@utils";

export type WorkImage = string;

export type Work = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  images: WorkImage[];
  color: string;
  link: string;
};

export type ArchiveButton = {
  text: string;
  href: string;
};

export type Archive = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string | null;
};

export type IndexPageDocument = {
  works: Work[];
  archives: Archive[];
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  try {
    const result = document.data.body.reduce((acc: IndexPageDocument, item: any) => {
      if (item.slice_type === "work") {
        acc.works.push({
          title: helper.asText(item.primary.title) || "",
          subtitle: helper.asText(item.primary.subtitle) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          images: [
            item.primary?.first_image?.url || null,
            item.primary?.second_image?.url || null,
          ],
          color: item.primary.color,
          link: item.primary.link,
        });
      } else if (item.slice_type === "archive") {
        acc.archives.push({
          title: helper.asText(item.primary.title) || "",
          description: helper.asText(item.primary.description) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          link: helper.asLink(item.primary["link"]) || null,
        });
      }

      return acc;
    }, { archives: [], works: []});

    return result;
  } catch (error) {
    console.error("parser error: ", error);

    return {
      works: [],
      archives: [],
    };
  }
};
