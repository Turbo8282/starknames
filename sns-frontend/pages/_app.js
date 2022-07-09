import '../styles/globals.scss';
import { StarknetProvider } from "@starknet-react/core";
import Header from "../components/header";
function MyApp({ Component, pageProps }) {
  return (
    <StarknetProvider>
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
