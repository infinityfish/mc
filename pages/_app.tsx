import { ChakraProvider } from "@chakra-ui/react";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import queryClient from "../lib/clients/react-query";

const App = ({ Component, pageProps }: AppProps) => {
  return (

    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </NextAuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;