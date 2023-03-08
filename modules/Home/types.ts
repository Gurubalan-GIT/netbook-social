export type Props = {};

interface SectionImage {
  id?: string;
  url: string;
}
interface BaseSectionAttributes {
  title: string;
  subTitle: string;
  description: string;
  image?: SectionImage;
}

interface HeroSection extends BaseSectionAttributes {}

interface AboutSection extends BaseSectionAttributes {
  featuresOffered: Array<string>;
  featureImages: Array<SectionImage>;
}

export type HomePageData = {
  heroSection?: HeroSection;
  aboutSection?: AboutSection;
};

export type HomePageProps = {
  data: HomePageData;
};
