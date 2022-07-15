import { useStarknet, useConnectors } from "@starknet-react/core";
import { truncateAddress } from "../../services/address.service";
import { useState } from "react";
export default function ConnectWallet() {
    
    const { account } = useStarknet();
    const { available, connect, disconnect } = useConnectors();
    let [isConnected, setIsConnected] = useState(false);

    const handleMouseOver = () => {
        setIsConnected(true);
      };
    
      const handleMouseOut = () => {
        setIsConnected(false);
      };


    if(account) {
        let truncatedAdddress = truncateAddress(account);
        return (
            <div className="flex justify-items align-items cursor-pointer hover:text-white hover:bg-red-600 border-2 border-blue-800 hover:border-red-600 px-3 sm:px-6 rounded-3xl transition ease-in-out">
                <button onClick={() => disconnect()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {isConnected && <div>Disconnect</div>}
                    {!isConnected && <div>{truncatedAdddress}</div>}

                </button>
             </div>
            
        )

    }

    return (
        <div className="flex justify-items align-items text-sm sm:text-lg cursor-pointer hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 border-red-600 px-3 sm:px-6 rounded-3xl transition ease-in-out">
            {available.map(connector => (
                <button key={connector.id()} onClick={() => connect(connector)}>
                    Connect Wallet
                </button>
            ))}
        </div>
    )
}