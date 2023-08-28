import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon/favicon32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon128x128.png" sizes="128x128" />
        <link rel="icon" href="/favicon/favicon512x512.png" sizes="512x512" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
