import { HomePageData } from "@modules/Home/types";
import React from "react";

type HomePageContextType = {
  homePageData: HomePageData;
  setHomePageData: (e: any) => void;
};

export const HomePageContext = React.createContext<HomePageContextType>({
  homePageData: {},
  setHomePageData: () => {},
});
