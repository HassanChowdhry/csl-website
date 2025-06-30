import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
