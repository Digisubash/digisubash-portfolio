import "../styles/globals.scss";

import Head from "next/head";
import { DefaultSeo } from "next-seo";
import AppContext from "../context/AppContext";

import NextNprogress from "nextjs-progressbar";
import App from "next/app";

import SEO from "../seo.config";

import Layout from "../layout";
import { credits } from "../helper/credits";

class MyApp extends App {
  state = {
    width: undefined,
    height: undefined,
  };

  componentDidMount() {
    credits();

    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  // context functions

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const AppProps = {
      deviceWidth: this.state.width,
    };

    return (
      <AppContext.Provider value={AppProps}>
        <DefaultSeo {...SEO} />
        <NextNprogress
          options={{ easing: "ease", speed: 500, showSpinner: false }}
          color="linear-gradient(90deg, #5f3f91, #8c2483, #e4003f)"
        />
        <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
        <div className={`app-theme`}>
          <Layout page={router.route}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </div>
      </AppContext.Provider>
    );
  }
}

export default MyApp;
