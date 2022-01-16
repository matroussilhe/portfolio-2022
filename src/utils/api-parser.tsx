import { helper } from "@utils";

export type Archive = {
  title: string;
  description: string;
  tags: string[];
};

export type IndexPageDocument = {
  archives: Archive[];
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  const archives = document.data.body.map((item: any) => {
    return {
      title: helper.asText(item.primary.title),
      description: helper.asText(item.primary.description),
      tags: item.items.map((item: any) => item.tag),
    };
  });

  return {
    archives,
  };
};
