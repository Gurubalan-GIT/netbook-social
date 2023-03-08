import { HomePageProvider } from "@common/context/Home";
import "@styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomePageProvider>
      <Component {...pageProps} />
    </HomePageProvider>
  );
}
