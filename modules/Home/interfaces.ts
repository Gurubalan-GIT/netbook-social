import { URL } from "url";

export interface SectionImage {
  id?: string;
  url: string;
}
export interface BaseSectionAttributes {
  title: string;
  subTitle: string;
  description: string;
}

export interface Items {
  id: string;
  name: string;
  outLink: URL;
}

export interface NavbarSection {
  logo: SectionImage;
  navbarLinks: Array<string>;
  items: Array<Items>;
}

export interface HeroSection extends BaseSectionAttributes {
  image?: SectionImage;
}

export interface AboutSection extends BaseSectionAttributes {
  featuresOffered: Array<string>;
  featureImages: Array<SectionImage>;
  featureVideoThumbnail: SectionImage;
}

export interface Achievement extends BaseSectionAttributes {
  [key: string]:
    | string
    | number
    | undefined
    | Array<SectionImage>
    | SectionImage;
  id?: string;
  url: string;
  outLinkLabel: string;
  iconStack: Array<SectionImage>;
  titleIcon: SectionImage;
}

export interface AchievementSection extends BaseSectionAttributes {
  achievements: Array<Achievement>;
}

export interface Sitemap {
  id?: string;
  category: string;
  outLinks: Array<string>;
}

export interface Socials {
  id: string;
  icon: SectionImage;
  url: string;
}

export interface FooterSection extends BaseSectionAttributes {
  sitemaps: Array<Sitemap>;
  org: string;
  socials: Array<Socials>;
  logo: SectionImage;
}
