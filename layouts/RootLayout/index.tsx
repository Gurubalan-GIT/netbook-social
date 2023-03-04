import Navbar from "@common/components/Navbar";
import { Inter as inter } from "next/font/google";
import Head from "next/head";
import { Fragment, FunctionComponent } from "react";
import { Props } from "./types";
const interVariable = inter({ weight: ["700", "800"] });

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Netbook - The Social</title>
        <meta name="description" content="Netbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={interVariable.className}>
        <div className="w-full h-full min-h-screen flex flex-col">
          <Navbar />
          {children}
        </div>
      </main>
    </Fragment>
  );
};

export default RootLayout;
