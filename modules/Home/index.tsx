import RootLayout from "layouts/RootLayout";
import { FunctionComponent } from "react";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import Hero from "./Hero";
import { Props } from "./types";
const Home: FunctionComponent<Props> = () => {
  return (
    <RootLayout>
      <Hero />
      <AboutUs />
      <Achievements />
    </RootLayout>
  );
};

export default Home;
