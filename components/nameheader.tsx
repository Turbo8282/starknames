import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";

export default function NameHeader() {
    return(
        <div>
            <div className="font-medium mt-5 text-xl flex w-full justify-between h-8 sm:h-12 backdrop-blur align-items">

                <div className="flex align-items pb-3 space-x-2">
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
                <ConnectWallet />
            </div>
        </div>
    )    
}