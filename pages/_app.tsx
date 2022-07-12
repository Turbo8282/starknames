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
        <div className="max-w-6xl w-full mx-3">
          <Header />
          <div className="flex justify-center mt-12 xl:mt-16">
            <div className="wrap">
              <div className="neptun">
                <div className="logo">SNS</div>
              </div>
            </div>
          </div>
          <Component {...pageProps} />    

        </div>
      </div>
    </StarknetProvider >
    

  )
}

export default MyApp
