import RootLayout from "layouts/RootLayout";
import { FunctionComponent } from "react";
import { Props } from "./types";

const Home: FunctionComponent<Props> = () => {
  return <RootLayout>Hello World</RootLayout>;
};

export default Home;
