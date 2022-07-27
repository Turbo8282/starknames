import { useRouter } from "next/router";
import { useRegistryContract } from "../../../hooks/registry";
import { useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { toHex } from "starknet/utils/number";
import { NormalSearchBar } from "../../../components/searchbar";
import Image from "next/image";
import Header from "../../../components/header";
import { WalletProps } from "../../_app";
import { useRegister } from "../../../hooks/registry"
import React, { FormEvent, useEffect, useState } from "react";
import { encodeStrAsListOfFelts, hashName } from "../../../utils/felt";


export interface RegistryRecord {
    ownerAddress: string;
    resolverAddress: string;
    apexNamehash: string;
}

export interface RegistrySubmission extends RegistryRecord {
    name: string;
    registrationYears: number;
  }
  
  

export default function Name({ walletProps }: { walletProps: WalletProps }) {
    const router = useRouter();
    const name = router.query.name;
    const { contract } = useRegistryContract();
    let args = [encodeStrAsListOfFelts(name + ".stark")]

    const { data, loading: loadingCall, error: errorCall } = useStarknetCall({
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
    const [registrySubmission, setRegistrySubmission] = useState<RegistrySubmission>();
    const { transactionId, loading, error, reset, invoke } = useRegister();


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        

        event.preventDefault();
        if (typeof name !== "string") {
          console.error("ERROR: name not a string", name);
          return;
        }
        const encodedName = encodeStrAsListOfFelts(name + ".stark");
        const ownerAddress = event.target[0].value;
        const resolverAddress = "0x038c8b26c8df1b410c1a355af791464681509b028b2be615f24c8b8039c33b78"; // event.target[1].value;
        const registrationYears = event.target[1].value;
        const args = [
          encodedName,
          ownerAddress,
          resolverAddress,
          registrationYears,
        ];
        invoke({ args });
        setRegistrySubmission({
          name: name + ".stark",
          ownerAddress: ownerAddress,
          resolverAddress: resolverAddress,
          registrationYears: registrationYears,
          apexNamehash: hashName(name + ".stark"), // TODO: Need to update once subdomains allowed
        });
      };
    return(
        <div className="w-full">
            <Header walletProps={walletProps}/>
            
            <div className="flex justify-center">
                <NormalSearchBar />
            </div>
            
            
            <div className="flex mt-5 justify-center">                                         
                {(loadingCall || (errorCall === undefined && record === undefined)) && 
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
                {(loadingCall || (errorCall === undefined && record === undefined)) && 
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
                {(!loadingCall && !errorCall && record) && (ownerAddress === "0x0" && resolverAddress === "0x0" && apexNameHash === "0x0") &&
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
                                    <div className="cursor-pointer text-blue-800 border-b-2 border-blue-800 py-4 sm:py-5 md:py-6 px-16 bg-white">Register</div>
                                    <div className="cursor-pointer hover:text-slate-400 py-4 sm:py-5 md:py-6 px-16 hover:border-b-2 hover:border-slate-300 text-slate-300" onClick={() => router.push("/names/" + name + "/details")}>Details</div>
                                </div>
                                {(!loading && transactionId === undefined) && 
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex flex-col m-10">
                                                <label htmlFor="owneraddress" className="text-xl text-slate-500">Owner address:</label>
                                                <input placeholder="Must be a hexadecimal account address" id="owneraddress" className="w-2/3 input-searchbar p-2 text-sm sm:text-base" required></input>
                                            </div>
                                            <div className="flex flex-col m-10">
                                                <label htmlFor="rperiod" className="text-xl text-slate-500">Registration Period</label>
                                                <input placeholder="Years (max 10)" id="rperiod" className="w-1/4 input-searchbar p-2 text-sm sm:text-base" type="number" min="1" max="10" required></input>
                                            </div>
                                            
                                            <button className="text-lg sm:text-xl cursor-pointer border-blue-800 border text-white bg-blue-800 px-4 sm:px-6 py-1 sm:py-2 rounded-3xl m-10" type="submit">
                                                Register
                                            </button>
                                        </form>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                }
                {/* Unavailable
                1. Everything grey
                2. Unavailable grey stark
                3. Unavailable right information
                 */}
                {(!loadingCall && !errorCall && record) && (ownerAddress !== "0x0" && resolverAddress !== "0x0" && apexNameHash !== "0x0") &&
                    <div className="w-full border-b border-l-4 border-slate-300 shadow-lg max-w-7xl bg-white mx-3">
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
                                            src="/whitestark.png"
                                            width={25}
                                            height={20} 
                                        />
                                        <div className="text-blue-700 font-medium text-base">Unavailable</div>
                                </div>
                            </div>
                            <div className="w-full bg-white-custom mt-7">
                                <div className="flex text-xl justify-center border-b-2">
                                    <div className="cursor-pointer text-blue-800 border-b-2 border-blue-800 py-4 sm:py-5 md:py-6 px-16 bg-white">Register</div>
                                    <div className="cursor-pointer hover:text-slate-400 py-4 sm:py-5 md:py-6 px-16 hover:border-b-2 hover:border-slate-300 text-slate-300" onClick={() => router.push("/names/" + name + "/details")}>Details</div>
                                </div>
                                <div className="p-10 text-xl text-slate-500">
                                    This name is already registered.
                                </div>
                            </div>
                        </div>
                        {/* <div className=" m-8">
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

                                <div>Owner address: {ownerAddress}</div>
                                <div>Resolver Address: {resolverAddress}</div>
                                <div>Apex namehash: {apexNameHash}</div>
                            </div>

                        </div> */}
                        
                    </div>
                }

            

            </div>
            

            

        </div>
    )
    
}
{/* {errorCall && <div>Error fetching: {errorCall}</div>} */}



{/* <div className="flex justify-center">
                <div className="flex justify-around ax-w-7xl w-full w-max-7xl">
                    <div>My account</div>
                    <div>FAQ</div>
                    <div>About</div>
                </div>
                
            </div> */}