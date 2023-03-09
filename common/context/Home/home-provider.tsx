import { ReactNode, useState } from "react";
import { HomePageContext } from "./home-context";

type HomePageProviderType = {
  children: ReactNode;
};

export const HomePageProvider = ({ children }: HomePageProviderType) => {
  const [homePageData, setHomePageData] = useState({});

  return (
    <HomePageContext.Provider
      value={{
        homePageData,
        setHomePageData: (updatedData) =>
          setHomePageData({ ...homePageData, ...updatedData }),
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};
