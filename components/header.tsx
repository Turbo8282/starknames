import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";

export default function Header() {

    return(
        <div className="font-medium mt-5 text-xl flex w-full justify-between h-8 sm:h-12 backdrop-blur align-items">
            <div className="flex align-items space-x-8">
                <div className="flex align-items space-x-2 pb-3">
                    <Link href="/">
                        <a>
                            <Image
                                src="/starkname_transparent.png"
                                width={45}
                                height={40}
                            />
                        </a>
                    </Link>

                    
                    <Link href="/">
                        <a>
                            <div className="text-2xl sm:text-3xl font-bold text-starkblue">
                                starknames
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="h-full w-1 bg-slate-100 hidden lg:flex"></div>
                <div className="align-items space-x-6 mt-2 hidden lg:flex">
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
            <div className="flex space-x-2 sm:space-x-4">
                <ConnectWallet />
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

    )    
}