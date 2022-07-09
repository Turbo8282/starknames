import { useStarknet, useConnectors } from "@starknet-react/core";
export default function ConnectWallet() {
    const { account } = useStarknet();
    const { available, connect, disconnect } = useConnectors();

    if(account) {
        return (
            <div>
                <div>
                    <div>Account: {account}</div>
                </div>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
            
        )

    }

    return (
        <div className="cursor-pointer hover:text-red-400 border-2 border-red-400 px-6 pt-2 rounded-3xl">
            {available.map(connector => (
                <button className="pb-2" key={connector.id()} onClick={() => connect(connector)}>
                    Connect Wallet
                </button>
            ))}
            </div>
    )
}