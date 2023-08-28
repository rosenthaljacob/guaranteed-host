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
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="GuaranteedHost - Pioneers of Web Hosting"
        />
        <meta
          name="keywords"
          content="web hosting, domain, server, cloud, security"
        />
        <meta name="author" content="Jacob Rosenthal" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GuaranteedHost - Pioneers of Web Hosting"
        />
        <meta
          property="og:description"
          content="The best web hosting service for your website."
        />
        <meta property="og:image" content="/path/to/your-image.jpg" />
        <meta property="og:url" content="https://guaranteedhost.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GuaranteedHost - Pioneers of Web Hosting"
        />
        <meta
          name="twitter:description"
          content="The best web hosting service for your website."
        />
        <meta name="twitter:image" content="/path/to/your-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
