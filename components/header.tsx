import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { WalletProps } from "../pages/_app";


export default function Header({ walletProps }: { walletProps: WalletProps }) {

    return(
        <div className="font-medium text-xl w-full h-20 sm:h-24 backdrop-blur text-slate-500 flex justify-center">
            <div className="mx-3 max-w-7xl flex justify-between align-items w-full">
                <div className="flex space-x-24 mt-5">
                    <div className="flex align-items space-x-2 pb-3">
                        <div className="mt-3">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/snslogo.png"
                                        width={75}
                                        height={25}
                                    />
                                </a>
                            </Link>

                        </div>
                        

                        
                        {/* <Link href="/">
                            <a>
                                <div className="text-2xl sm:text-3xl font-bold text-starkblue">
                                    starknames
                                </div>
                            </a>
                        </Link> */}
                    </div>
                    <div className="align-items space-x-6 mt-3 hidden lg:flex">
                        <Link href="/">
                            <a className="hover:text-starkred">Search names</a>
                        </Link>
                        <Link href="/">
                            <a className="hover:text-starkred">Auctions</a>
                        </Link>
                        <Link href="https://twitter.com/starknames">
                            <a className="hover:text-starkred">Twitter</a>
                        </Link>
                        <Link href="https://twitter.com/starknames">
                            <a className="hover:text-starkred">Documentation</a>
                        </Link>
                    </div>
                    

                </div>
                <div className="flex space-x-2 sm:space-x-4 my-5 sm:my-6">
                    <ConnectWallet walletProps={walletProps} />
                    <div className="lg:hidden mt-2 sm:mt-4 cursor-pointer" onClick={() => {
                        return (
                            <div>dashdfhdjkfhdkjhsjkdfhjksd</div>
                        )
                    }}>
                        <div className="h-1 w-5 bg-starkred"></div>
                        <div className="h-1 w-5 mt-2 bg-starkred"></div>
                    </div>
                </div>

            </div>
            
        </div>

    )    
}