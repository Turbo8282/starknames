import '../styles/globals.scss';
import Head from "next/head";
import { getInstalledInjectedConnectors, StarknetProvider } from "@starknet-react/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import {
  connectWallet,
  isPreauthorized,
  isWalletConnected,
  walletAddress,
  addWalletChangeListener,
} from "../components/ConnectWallet/ConnectWallet"




export interface WalletProps {
  isConnected: boolean;
  address: string;
  handleConnectClick: () => void;
}




function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const connectors = getInstalledInjectedConnectors();
  
  const [isConnected, setIsConnected] = useState(isWalletConnected());
  const [address, setAddress] = useState<string>();
  useEffect(() => {
    try {
      addWalletChangeListener((accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        } else {
          setAddress("");
          setIsConnected(false);
        }
      });
    } catch {
      router.push("/");
    }
  }, []);
  /* useEffect(() => {
    (async () => {
      if (await isPreauthorized()) {
        await handleConnectClick();
      }
    })();
  }, []); */

  const handleConnectClick = async () => {
    await connectWallet();
    setIsConnected(isWalletConnected());
    setAddress(await walletAddress());
  };


  return (
    <StarknetProvider autoConnect connectors={connectors}>
      <Head>
        <title>SNS</title>
        <link rel='icon' href="/starkname_transparent.png"></link>
      </Head>
      <div className="h-screen flex justify-center bg-white-custom montserrat font-medium">
          
        <Component
          walletProps={{ isConnected, address, handleConnectClick }}
          {...pageProps}
        /> 

      </div>
    </StarknetProvider >
    

  )
}

export default MyApp
