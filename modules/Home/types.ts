import {
  AboutSection,
  AchievementSection,
  FooterSection,
  HeroSection,
  NavbarSection,
} from "./interfaces";

export type Props = {};

export type HomePageData = {
  heroSection?: HeroSection;
  aboutSection?: AboutSection;
  achievementSection?: AchievementSection;
  footerSection?: FooterSection;
  navbarSection?: NavbarSection;
};

export type HomePageProps = {
  data: HomePageData;
};
