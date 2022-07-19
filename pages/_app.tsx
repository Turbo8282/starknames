import '../styles/globals.scss';
import Header from "../components/header";
import Head from "next/head";
import { getInstalledInjectedConnectors, StarknetProvider } from "@starknet-react/core";

function MyApp({ Component, pageProps }) {
  const connectors = getInstalledInjectedConnectors();
  return (
    <StarknetProvider connectors={connectors} autoConnect>
      <Head>
        <title>SNS</title>
        <link rel='icon' href="/starkname_transparent.png"></link>
      </Head>
      <div className="h-screen flex justify-center">
          
          <Component {...pageProps} />    

      </div>
    </StarknetProvider >
    

  )
}

export default MyApp
