import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = process.env.NEXT_PUBLIC_SITE_TITLE;

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#21333e" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/log.png" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link rel="shortcut icon" href="/images/log.png" /> */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/slider.min.css" />
          <link rel="stylesheet" href="/css/icons.min.css" />
          <link rel="stylesheet" href="/css/icons-fa.min.css" />
          <link rel="stylesheet" href="/css/animation.min.css" />
          <link rel="stylesheet" href="/css/gallery.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
