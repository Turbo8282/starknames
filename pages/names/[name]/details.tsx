import { useRouter } from "next/router";
import { useRegistryContract } from "../../../hooks/registry";
import { useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { encodeStrAsListOfFelts } from "../../../utils/felt";
import { toHex } from "starknet/utils/number";
import { NormalSearchBar } from "../../../components/searchbar";
import Image from "next/image";
import Header from "../../../components/header";
import { WalletProps } from "../../_app";

export interface RegistryRecord {
    ownerAddress: string;
    resolverAddress: string;
    apexNamehash: string;
  }
  

export default function Name({ walletProps }: { walletProps: WalletProps }) {
    const router = useRouter();
    const name = router.query.name;
    const { contract } = useRegistryContract();
    let args = [encodeStrAsListOfFelts(name + ".stark")]

    const { data, loading, error } = useStarknetCall({
        contract,
        method: "get_record_by_name",
        args,
    });

    let record: RegistryRecord | undefined = undefined;
    let ownerAddress, resolverAddress, apexNameHash = undefined;
    if(data !== undefined) {
        record = {
        ownerAddress: toHex(data[0].owner_addr),
        resolverAddress: toHex(data[0].resolver_addr),
        apexNamehash: toHex(data[0].apex_namehash),
        }
        ownerAddress = record.ownerAddress
        resolverAddress = record.resolverAddress
        apexNameHash = record.apexNamehash
    }
                                                                                                                                    // do the empirir inside modal, it is shifting because of scrollbar
    return(
        <div className="w-full">
            <Header walletProps={walletProps}/>
            
            <div className="flex justify-center">
                <NormalSearchBar />
            </div>
            
            
            <div className="flex mt-5 justify-center">                                         
                
                {/* Loading
                1. Starkhead
                2. Module border
                3. Neglect availability
                4. Neglect rest in module
                 */}
                {(loading || (error === undefined && record === undefined)) && 
                    <div className="w-full border-b border-slate-300 shadow-lg animate-pulse max-w-7xl bg-white mx-3">
                        <div className="m-8 mx-3">
                            <div className="font-medium text-3xl flex">
                                {name}.stark
                                <div className="ml-2 tooltip cursor-pointer" onClick={() => {
                                    navigator.clipboard.writeText(name + ".stark")
                                    }}>
                                    <Image
                                        src="/bluecopy.png"
                                        width={20}
                                        height={20}
                                    />
                                    <div className="tooltiptext text-sm font-normal">Copy name to clipboard</div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                }
                {(loading || (error === undefined && record === undefined)) && 
                    <div className="absolute bottom-7 right-12">
                        <div>
                            <div className="animate-spin">
                                <Image
                                    src="/starkname_transparent.png"
                                    width={40}
                                    height={35}
                                />
                            </div>
                        </div>
                    </div>
                }

                {/* Available
                1. Green left
                2. Available blue stark
                3. Available right information
                    */}
                {(!loading && !error && record) && (ownerAddress === "0x0" && resolverAddress === "0x0" && apexNameHash === "0x0") &&
                    <div className="w-full border-b border-l-4 border-slate-300 shadow-lg border-l-green-400 max-w-7xl bg-white mx-3">
                        <div className="m-8">
                            <div className="font-medium text-3xl flex justify-between">
                                <div>
                                    {name}.stark
                                    <div className="ml-2 tooltip cursor-pointer" onClick={() => {
                                        navigator.clipboard.writeText(name + ".stark")
                                        }}>
                                        <Image
                                            src="/bluecopy.png"
                                            width={20}
                                            height={20}
                                        />
                                        <div className="tooltiptext text-sm font-normal">Copy name to clipboard</div>

                                    </div>
                                </div>
                                
                                <div className="mt-2 flex space-x-2">
                                        <Image
                                            src="/bluestark.png"
                                            width={25}
                                            height={20} 
                                        />
                                        <div className="text-blue-700 font-medium text-base">Available</div>
                                </div>
                            </div>
                            <div className="w-full bg-white-custom mt-7">
                                <div className="flex text-xl justify-center border-b-2">
                                    <div className="cursor-pointer py-4 sm:py-5 md:py-6 px-16 hover:text-slate-400 hover:border-b-2 hover:border-slate-300 text-slate-300" onClick={() => router.push("/names/" + name + "/register")}>Register</div>
                                    <div className="cursor-pointer py-4 sm:py-5 md:py-6 px-16 text-blue-800 border-b-2 border-blue-800 bg-white">Details</div>
                                </div>
                                <div className="p-10 break-words text-slate-500">
                                    <div><span className="text-lg">Owner address:</span> {ownerAddress}</div>
                                    <div><span className="text-lg">Resolver address:</span> {resolverAddress}</div>
                                    <div><span className="text-lg">Apex namehash:</span> {apexNameHash}</div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                }
                {/* Unavailable
                1. Everything grey
                2. Unavailable grey stark
                3. Unavailable right information
                 */}
                {(!loading && !error && record) && (ownerAddress !== "0x0" && resolverAddress !== "0x0" && apexNameHash !== "0x0") &&
                    <div className="w-full border-b border-l-4 border-slate-300 shadow-lg max-w-7xl bg-white mx-3">
                        <div className=" m-8">
                            <div className="font-medium text-3xl flex">
                                {name}.stark
                                <div className="ml-2 tooltip cursor-pointer" onClick={() => {
                                    navigator.clipboard.writeText(name + ".stark")
                                    }}>
                                    <Image
                                        src="/bluecopy.png"
                                        width={20}
                                        height={20}
                                    />
                                    <div className="tooltiptext text-sm font-normal">Copy name to clipboard</div>

                                </div>
                            </div>
                            <div className="mt-4 flex space-x-2">
                                <Image
                                    src="/whitestark.png"
                                    width={25}
                                    height={20} 
                                />
                                <div className="text-slate-300">Unavailable</div>

                                
                            </div>
                            <div className="w-full bg-white-custom mt-7">
                                <div className="flex text-xl justify-center border-b-2">
                                    <div className="cursor-pointer py-4 sm:py-5 md:py-6 px-16 hover:text-slate-400 hover:border-b-2 hover:border-slate-300 text-slate-300" onClick={() => router.push("/names/" + name + "/register")}>Register</div>
                                    <div className="cursor-pointer py-4 sm:py-5 md:py-6 px-16 text-blue-800 border-b-2 border-blue-800 bg-white">Details</div>
                                </div>
                                <div className="p-10 break-words text-slate-500">
                                    <div><span className="text-lg">Owner address:</span> {ownerAddress}</div>
                                    <div><span className="text-lg">Resolver address:</span> {resolverAddress}</div>
                                    <div><span className="text-lg">Apex namehash:</span> {apexNameHash}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                }

            

            </div>
            

            

        </div>
    )
    
}
{/* {error && <div>Error fetching: {error}</div>} */}



{/* <div className="flex justify-center">
                <div className="flex justify-around ax-w-7xl w-full w-max-7xl">
                    <div>My account</div>
                    <div>FAQ</div>
                    <div>About</div>
                </div>
                
            </div> */}