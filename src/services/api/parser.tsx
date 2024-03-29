import { helper } from "@services";

// INDEX
export type Work = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  images: string[];
  colorLight: string;
  colorDark: string;
  link: string;
};

export type Archive = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
};

export type IndexPageDocument = {
  works: Work[];
  archives: Archive[];
};

// ABOUT
export type Bio = {
  description: string;
};

export type Expertise = {
  description: string;
};

export type SkillItem = {
  text: string;
};

export type Skill = {
  groups: SkillItem[][];
};

export type InterestItem = {
  text: string;
};

export type Interest = {
  groups: InterestItem[][];
};

export type SocialItem = {
  text: string;
  link: string;
};

export type Social = {
  groups: SocialItem[][];
};

export type PhotoItem = {
  image: string;
  dimensions: {
    width: number;
    height: number;
  };
};

export type Photo = {
  photos: PhotoItem[];
};

export type AboutPageDocument = {
  bio: Bio;
  expertise: Expertise;
  skill: Skill;
  interest: Interest;
  social: Social;
  photo: Photo;
};

// CASE STUDY
export const ContentSliceTypes = [
  "section_title",
  "subsection_title",
  "center_paragraph",
  "left_image_right_paragraph",
  "top_image_bottom_paragraph",
  "left_quote_right_paragraph",
] as const;
export type ContentSliceType = typeof ContentSliceTypes[number];

export type Header = {
  title: string;
  subtitle: string;
  image: string;
  role: string;
  timeline: string;
  tags: string[];
  credit: string;
  introduction: string;
  link: string;
};

export type SectionTitle = {
  type: "section_title";
  title: string;
};

export type SubsectionTitle = {
  type: "subsection_title";
  title: string;
};

export type CenterParagraph = {
  type: "center_paragraph";
  paragraph: string;
};

export type LeftImageRightParagraph = {
  type: "left_image_right_paragraph";
  image: string;
  legend: string;
  paragraph: string;
};

export type TopImageBottomParagraph = {
  type: "top_image_bottom_paragraph";
  image: string;
  legend: string;
  paragraph: string;
};

export type LeftQuoteRightParagraph = {
  type: "left_quote_right_paragraph";
  quote: string;
  paragraph: string;
};

export type Content = SectionTitle | SubsectionTitle | CenterParagraph | LeftImageRightParagraph | TopImageBottomParagraph | LeftQuoteRightParagraph;

export type Footer = {
  title: string;
  subtitle: string;
  link: string;
};

export type CaseStudyPageDocument = {
  header: Header;
  contents: Content[];
  footer: Footer;
};

const parseGroups = <T extends SkillItem | InterestItem | SocialItem>(item: any) => {
  // group items by group value
  const groupedItems = item.items.reduce((acc: any, item: any) => {
    const { text, link, group } = item;

    const groupItem = {
      text: text,
      ...(link ? { link: link } : {}),
    } as T;

    if (!acc[group]) {
      acc[group] = [];
      acc[group].push(groupItem);
    } else {
      acc[group].push(groupItem);
    }

    return acc;
  }, {});

  // transform grouped items into arrays
  const result = [];
  for (const value of Object.values(groupedItems)) {
    result.push([...value as T[]]);
  }

  return result;
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  try {
    const result: IndexPageDocument = document.data.body.reduce((acc: IndexPageDocument, item: any) => {
      if (item.slice_type === "work") {
        acc.works.push({
          title: helper.asText(item.primary.title) || "",
          subtitle: helper.asText(item.primary.subtitle) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          images: [
            helper.asImageSrc(item.primary?.first_image, { auto: ["compress", "format"], q: 75 }) || "",
            helper.asImageSrc(item.primary?.second_image, { auto: ["compress", "format"], q: 75 }) || "",
          ],
          colorLight: item.primary.color_light || "",
          colorDark: item.primary.color_dark || "",
          link: item.primary.link || "",
        });
      } else if (item.slice_type === "archive") {
        acc.archives.push({
          title: helper.asText(item.primary.title) || "",
          description: helper.asText(item.primary.description) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          link: item.primary.link || "",
        });
      }

      return acc;
    }, {
      archives: [],
      works: [],
    });

    return result;
  } catch (error) {
    console.error("parser error: ", error);

    return {
      works: [],
      archives: [],
    };
  }
};

export const parseAboutPageDocument = (document: any): AboutPageDocument => {
  try {
    const result: AboutPageDocument = document.data.body.reduce((acc: AboutPageDocument, item: any) => {
      if (item.slice_type === "bio") {
        acc.bio.description = helper.asText(item.primary.description) || "";
      } else if (item.slice_type === "expertise") {
        acc.expertise.description = helper.asText(item.primary.description) || "";
      } else if (item.slice_type === "skill") {
        acc.skill.groups = parseGroups(item);
      } else if (item.slice_type === "interest") {
        acc.interest.groups = parseGroups(item);
      } else if (item.slice_type === "social") {
        acc.social.groups = parseGroups(item);
      } else if (item.slice_type === "photo") {
        acc.photo.photos = item.items.map((item: any) => ({
          image: helper.asImageSrc(item.image, { auto: ["compress", "format"], q: 75 }) || "",
          dimensions: {
            width: item.image?.dimensions?.width || 0,
            height: item.image?.dimensions?.height || 0,
          },
        }));
      }

      return acc;
    }, {
      bio: {
        description: "",
      },
      expertise: {
        description: "",
      },
      skill: {
        groups: [],
      },
      interest: {
        groups: [],
      },
      social: {
        groups: [],
      },
      photo: {
        photos: [],
      },
    });

    return result;
  } catch (error) {
    console.error("parser error: ", error);

    return {
      bio: {
        description: "",
      },
      expertise: {
        description: "",
      },
      skill: {
        groups: [],
      },
      interest: {
        groups: [],
      },
      social: {
        groups: [],
      },
      photo: {
        photos: [],
      },
    };
  }
};

export const parseCaseStudyPageDocument = (document: any): CaseStudyPageDocument => {
  try {
    const result: CaseStudyPageDocument = document.data.body.reduce((acc: CaseStudyPageDocument, item: any) => {
      if (item.slice_type === "header") {
        acc.header = {
          title: helper.asText(item.primary.title) || "",
          subtitle: helper.asText(item.primary.subtitle) || "",
          image: helper.asImageSrc(item.primary.image, { auto: ["compress", "format"], q: 75 }) || "",
          role: helper.asText(item.primary.role) || "",
          timeline: helper.asText(item.primary.timeline) || "",
          tags: item.items.map((item: any) => item.tag),
          credit: helper.asText(item.primary.credit) || "",
          introduction: helper.asText(item.primary.introduction) || "",
          link: item.primary.link || "",
        };
      } else if (item.slice_type === "section_title") {
        acc.contents.push({
          type: item.slice_type,
          title: helper.asText(item.primary.title) || "",
        });
      } else if (item.slice_type === "subsection_title") {
        acc.contents.push({
          type: item.slice_type,
          title: helper.asText(item.primary.title) || "",
        });
      } else if (item.slice_type === "center_paragraph") {
        acc.contents.push({
          type: item.slice_type,
          paragraph: helper.asText(item.primary.paragraph) || "",
        });
      } else if (item.slice_type === "left_image_right_paragraph") {
        acc.contents.push({
          type: item.slice_type,
          image: helper.asImageSrc(item.primary.image, { auto: ["compress", "format"], q: 75 }) || "",
          legend: item.primary.legend || "",
          paragraph: helper.asText(item.primary.paragraph) || "",
        });
      } else if (item.slice_type === "top_image_bottom_paragraph") {
        acc.contents.push({
          type: item.slice_type,
          image: helper.asImageSrc(item.primary.image, { auto: ["compress", "format"], q: 75 }) || "",
          legend: item.primary.legend || "",
          paragraph: helper.asText(item.primary.paragraph) || "",
        });
      } else if (item.slice_type === "left_quote_right_paragraph") {
        acc.contents.push({
          type: item.slice_type,
          quote: helper.asText(item.primary.quote) || "",
          paragraph: helper.asText(item.primary.paragraph) || "",
        });
      } else if (item.slice_type === "footer") {
        acc.footer = {
          title: helper.asText(item.primary.title) || "",
          subtitle: helper.asText(item.primary.subtitle) || "",
          link: item.primary.link || "",
        };
      }

      return acc;
    }, {
      header: {
        title: "",
        subtitle: "",
        image: "",
        role: "",
        timeline: "",
        tags: [],
        credit: "",
        introduction: "",
        link: "",
      },
      contents: [],
      footer: {
        title: "",
        subtitle: "",
        link: "",
      },
    });

    return result;
  } catch (error) {
    console.error("parser error: ", error);

    return {
      header: {
        title: "",
        subtitle: "",
        image: "",
        role: "",
        timeline: "",
        tags: [],
        credit: "",
        introduction: "",
        link: "",
      },
      contents: [],
      footer: {
        title: "",
        subtitle: "",
        link: "",
      },
    };
  }
};

export const parseCaseStudyPageDocumentsIds = (documents: any): string[] => {
  try {
    const result = documents.map((document: any) => document.uid);

    return result;
  } catch (error) {
    console.error("parser error: ", error);

    return [];
  }
};
