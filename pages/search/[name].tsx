import { useRouter } from "next/router";
import { useRegistryContract } from "../../hooks/registry";
import { useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { encodeStrAsListOfFelts } from "../../utils/felt";
import { toHex } from "starknet/utils/number";
import NameHeader from "../../components/nameheader";
import { NormalSearchBar } from "../../components/searchbar";
import Image from "next/image";
import Header from "../../components/header";
import { domainToASCII } from "url";
export interface RegistryRecord {
    ownerAddress: string;
    resolverAddress: string;
    apexNamehash: string;
  }
  

export default function Name() {
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
   
    return(
        <div className="max-w-7xl w-full mx-3">
            <Header />
            <NormalSearchBar />
            <div className="mt-5 w-full h-80 border-4 border-slate-300 rounded-2xl">
                <div className="font-medium text-5xl ml-12 mt-12 flex">
                    {name}.stark
                    <div className="ml-2 tooltip cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(name + ".stark")
                    }}>
                        <Image
                            src="/bluecopy.png"
                            width={30}
                            height={30}
                         />
                        <div className="tooltiptext text-sm font-normal">Copy name to clipboard</div>

                    </div>
                </div>

                
                {error && <div>Error fetching: {error}</div>}
                {(!loading && !error) && (ownerAddress === "0x0" && resolverAddress === "0x0" && apexNameHash === "0x0")
                 ?  <div className="mt-4 ml-12 flex space-x-2">
                        <Image
                            src="/bluestark.png"
                            width={25}
                            height={25} 
                        />
                        <div className="text-starkblue">Available</div>
                    </div> : 
                    <div className="mt-4 ml-12 flex space-x-2">
                        <Image
                            src="/whitestark.png"
                            width={25}
                            height={25} 
                        />
                        <div className="text-slate-300">Registered</div>

                        <div>Owner address: {ownerAddress}</div>
                        <div>Resolver Address: {resolverAddress}</div>
                        <div>Apex namehash: {apexNameHash}</div>
                    </div>
                }
                <hr></hr>


            </div>

            {(loading || (error === undefined && record === undefined)) && 
            <div className="absolute bottom-8 right-12">
                <div>
                    <div className="animate-spin">
                        <Image
                            src="/starkname_transparent.png"
                            width={40}
                            height={35}
                        />
                    </div>
                </div>
            </div>}

        </div>
    )
    
}

/* search domains
auctions 
twitter
Docs */
/* {(loading || (error === undefined && record === undefined)) && <div>loading</div>}
                <div className="flex justify-start font-medium text-5xl my-3">
                    {name}.stark
                </div>
                <div>
                    {loading && <div>Loading records...</div>}
                    {error && <div>Error fetching: {error}</div>}
                    {(!loading && !error) &&
                    <div>
                        <div>Owner address: {ownerAddress}</div>
                        <div>Resolver Address: {resolverAddress}</div>
                        <div>Apex namehash: {apexNameHash}</div>
                    </div>
                    }
                </div>


                <div className="flex bg-starkred h-80 w-full">
                    <div className="bg-starklightred animate-pulse h-20 w-40 ml-10 mt-10"></div>
                </div> */