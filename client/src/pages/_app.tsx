import "../styles/index.scss";
import React from "react";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
