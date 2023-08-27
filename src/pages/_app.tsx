import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

import { Inter } from "next/font/google";

// ----------------Fonts----------------
const inter = Inter({ subsets: ["latin"] });

// ----------------Types----------------
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

// ----------------Component----------------

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return (
    <>
      <div className={`${inter.className} `}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}
