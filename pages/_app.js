import '../styles/globals.scss';
import Header from "../components/header";

import { getInstalledInjectedConnectors, StarknetProvider } from "@starknet-react/core";

function MyApp({ Component, pageProps }) {
  const connectors = getInstalledInjectedConnectors();
  return (
    <StarknetProvider connectors={connectors} autoConnect>
      <div className="h-screen flex justify-center">
        <div className="max-w-6xl w-full mx-3">
          <Header />
          <Component {...pageProps} />    

        </div>
      </div>
    </StarknetProvider>
    

  )
}

export default MyApp
