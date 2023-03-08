import { HomePageContext } from "@common/context/Home";
import { gqlFetch } from "@common/utils/lib/gqlFetcher";
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
  const data = await gqlFetch(GET_HOME_PAGE_DATA);
  return {
    props: {
      data,
    },
  };
}

export default HomePage;
