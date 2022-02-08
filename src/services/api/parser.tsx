import { helper } from "@services";

// INDEX
export type WorkImage = string;

export type Work = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  images: WorkImage[];
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

export type Skill = SkillItem[];

export type InterestItem = {
  text: string;
};

export type Interest = InterestItem[];

export type SocialItem = {
  text: string;
  link: string;
};

export type Social = SocialItem[];

export type AboutPageDocument = {
  bio: Bio;
  expertise: Expertise;
  skills: Skill[]; // TODO: find a better name to inform about array structure (e.g. skills/SkillArray[])
  interests: Interest[]; // TODO: find a better name to inform about array structure (e.g. interests/InterestArray[])
  socials: Social[]; // TODO: find a better name to inform about array structure (e.g. socials/SocialArray[])
};

// CASE STUDY
export const ContentSliceTypes = [
  "section_title",
  "paragraph_title",
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
  type: ContentSliceType;
  title: string;
};

export type ParagraphTitle = {
  type: ContentSliceType;
  title: string;
};

export type Content = SectionTitle | ParagraphTitle;

export type Footer = {
  title: string;
  subtitle: string;
  link: string;
};

export type CaseStudyPageDocument = {
  header: Header;
  content: Content[];
  footer: Footer;
};

const parseGroupItem = <T extends SkillItem | InterestItem | SocialItem>(item: any) => {
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
            item.primary?.first_image?.url || null,
            item.primary?.second_image?.url || null,
          ],
          colorLight: item.primary.color_light,
          colorDark: item.primary.color_dark,
          link: item.primary.link,
        });
      } else if (item.slice_type === "archive") {
        acc.archives.push({
          title: helper.asText(item.primary.title) || "",
          description: helper.asText(item.primary.description) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          ...(item.primary["link"] ? { link: item.primary["link"] } : {}),
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
        acc.skills = parseGroupItem(item);
      } else if (item.slice_type === "interest") {
        acc.interests = parseGroupItem(item);
      } else if (item.slice_type === "social") {
        acc.socials = parseGroupItem(item);
      }

      return acc;
    }, {
      bio: {
        description: "",
      },
      expertise: {
        description: "",
      },
      skills: [],
      interests: [],
      socials: [],
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
      skills: [],
      interests: [],
      socials: [],
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
          image: item.primary.image.url || "",
          role: helper.asText(item.primary.role) || "",
          timeline: helper.asText(item.primary.timeline) || "",
          tags: item.items.map((item: any) => item.tag),
          credit: helper.asText(item.primary.credit) || "",
          introduction: helper.asText(item.primary.introduction) || "",
          link: item.primary.link || "",
        };
      } else if (item.slice_type === "section_title") {
        acc.content.push({
          type: item.slice_type,
          title: helper.asText(item.primary.title) || "",
        });
      } else if (item.slice_type === "paragraph_title") {
        acc.content.push({
          type: item.slice_type,
          title: helper.asText(item.primary.title) || "",
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
      content: [],
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
      content: [],
      footer: {
        title: "",
        subtitle: "",
        link: "",
      },
    };
  }
};
