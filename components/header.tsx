import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";

export default function Header() {
    return(
        <div className="font-medium mt-5 text-xl flex w-full justify-between h-10 sm:h-12 backdrop-blur align-items">

            <div className="flex space-x-2 pb-3">
                <div className="hover:animate-spin transition ease-in-out mt-1">
                    <Link href="/">
                        <a>
                            <Image
                                src="/starkname_transparent.png"
                                width={45}
                                height={40}
                            />
                        </a>
                    </Link>

                </div>
                
                <Link href="/">
                    <a>
                        <div className="mt-1 text-3xl font-bold">
                            starknames
                        </div>
                    </a>
                </Link>
            </div>

            <ConnectWallet />
        </div>

    )    
}
// when loading, make it spin