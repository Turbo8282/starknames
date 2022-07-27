import { useStarknet, useConnectors } from "@starknet-react/core";
import { truncateAddress } from "../../services/address.service";
import { useState } from "react";
import { getStarknet, disconnect } from "get-starknet";
import { WalletProps } from "../../pages/_app";
import { useRouter } from "next/router";

export const isWalletConnected = (): boolean => !!getStarknet()?.isConnected;

export const connectWallet = async () =>
  await getStarknet().enable({ showModal: true });

export const walletAddress = async (): Promise<string | undefined> => {
  try {
    const [address] = await getStarknet().enable();
    return address;
  } catch {}
};

export const addWalletChangeListener = async (
    handleEvent: (accounts: string[]) => void
  ) => {
    const starknet = getStarknet();
    if (starknet) {
      starknet.on("accountsChanged", handleEvent);
    }
  };
  
export const isPreauthorized = async (): Promise<boolean> => {
    return getStarknet().isPreauthorized();
};




export default function ConnectWallet({ walletProps }: { walletProps: WalletProps }) {
    
    /* 
    const { account } = useStarknet();
    const { available, connect, disconnect } = useConnectors(); */

    /* const handleMouseOver = () => {
        setIsConnected(true);
    };
    
    const handleMouseOut = () => {
    setIsConnected(false);
    }; */

    //const hey = walletProps.isConnected;
    const router = useRouter()

    


    if(walletProps.isConnected && walletProps.address !== undefined) {
        let [isConnected, setIsConnected] = useState(false);

        let truncatedAdddress = truncateAddress(walletProps.address);
        return (
            <div className="text-sm sm:text-lg flex justify-items align-items cursor-pointer border-2 text-blue-800 border-blue-800 hover:text-red-600 hover:border-red-600 px-4 sm:px-6 rounded-3xl transition ease-in-out">
                <button onClick={() => {console.log(disconnect({clearLastWallet: true})); router.reload()}}>
                    {!isConnected && <div>{truncatedAdddress}</div>}
                 

                </button>
             </div>
            
        )

    }
    return (
        <div className="flex justify-items align-items text-sm sm:text-lg cursor-pointer border-blue-800 border text-white bg-blue-800 px-4 sm:px-6 rounded-3xl transition ease-in-out">
            <button onClick={() => walletProps.handleConnectClick()}>
                Connect Wallet
            </button>
        </div>
    )

    
}

{/* /* onClick={() => disconnect() onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  */
                    {/* {isConnected && <div>Disconnect</div>} */}
                    {/* {!isConnected && <div>{truncatedAdddress}</div>} */} }