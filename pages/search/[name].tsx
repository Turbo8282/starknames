import { NormalSearchBar } from "../../components/searchbar";
import { useRouter } from "next/router";
import { useRegistryContract } from "../../hooks/registry";
import { useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { encodeStrAsListOfFelts } from "../../utils/felt";
import { toHex } from "starknet/utils/number";
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
   /*  const { contract } = useRegistryContract(); */
    /* const { contract } = useContract({
        abi: RegistryAbi,
        address: "0x05ab97cc647943dd0354b7b9073ceed535c3fdc24cc8fbd072979a7897982503"
    })
    let shit = names
    let yikes = "hwllo"
    let args;
    if(names !== undefined) {
        args = [encodeStrAsListOfFelts(names)];
    }

    const { data, loading, error } = useStarknetCall({
        contract,
        method: "get_record_by_name",
        args,
    }); */
    /* let record;
    if (data !== undefined) {
        record = {
          ownerAddress: toHex(data[0].owner_addr),
          resolverAddress: toHex(data[0].resolver_addr),
          apexNamehash: toHex(data[0].apex_namehash),
        };
    }
    let a = record.ownerAddress; */
    /* let a;
    let b;
    let registered = true;
    
    if(data === undefined) {
        registered = false;
    }
    else if (toHex(data[0].owner_addr) === '0x0'){
        registered = false;
        b = toHex(data[0].owner_addr)
    } */
   /*  else {let a = toHex(data[0].owner_addr)} */

    return (
        <div>
            <div className="flex justify-center font-medium text-5xl my-3">
                {name}.stark
            </div>
            <NormalSearchBar />
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
            
        </div>
        
    )
    
}