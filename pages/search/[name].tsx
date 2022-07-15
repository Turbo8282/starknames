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
   

    if(!loading) {return (
        <div>
            <NormalSearchBar />
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
        </div>
    )}  
    if (loading) {
        return (
            <div>
                <NormalSearchBar />
                <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        )
    } 
}