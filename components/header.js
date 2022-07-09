import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "../components/ConnectWallet";

export default function Header() {
    return(
        <div className="font-medium mt-5 text-xl flex w-full justify-between h-14 backdrop-blur">

            <div className="flex space-x-2 pb-3">
                <div className="hover:animate-spin transition ease-in-out">
                    <Link href="/">
                        <a>
                            <Image
                                src="/starkname_transparent.png"
                                width={50}
                                height={45}
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

            <div className="">
                <ConnectWallet />


            </div>

        </div>

    )    
}
// when loading, make it spin