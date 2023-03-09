import { HomePageContext } from "@common/context/Home";
import { gqlFetch } from "@common/lib/gqlFetcher";
import { mdxToHtml } from "@common/lib/mdx";
import Home from "@modules/Home";
import { HomePageProps } from "@modules/Home/types";
import { GET_HOME_PAGE_DATA } from "graphql/queries/home";
import { NextPage } from "next";
import { useContext, useEffect } from "react";

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  const { setHomePageData } = useContext(HomePageContext);

  useEffect(() => {
    setHomePageData(data);
  }, []);

  return <Home />;
};

export async function getServerSideProps() {
  const data: any = await gqlFetch(GET_HOME_PAGE_DATA);
  if (data) {
    const { achievementSection } = data;
    achievementSection?.achievements?.forEach(
      async (achievement: any, achievementIndex: number) => {
        const { html } = await mdxToHtml(achievement?.subTitle);
        data.achievementSection.achievements[achievementIndex].subTitle = html;
      }
    );
  }
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
