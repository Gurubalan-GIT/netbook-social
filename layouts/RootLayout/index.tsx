import Footer from "@common/components/Footer";
import Navbar from "@common/components/Navbar";
import { Inter as inter } from "next/font/google";
import Head from "next/head";
import { Fragment, FunctionComponent } from "react";
import { Props } from "./types";
const interVariable = inter({ weight: ["400", "500", "600", "700", "800"] });

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Netbook - Your solution to connect Communities</title>
        <meta
          name="description"
          content="Netbook, a solution to connect communities with ease."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={interVariable.className}>
        <div className="w-full h-full min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default RootLayout;
