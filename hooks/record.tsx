import { useStarknetCall } from "@starknet-react/core";
import { toHex } from "starknet/utils/number";
import { encodeStrAsListOfFelts } from "../utils/felt";
import { useRegistryContract } from "./registry";

export const useRecord = (name) => {
    const { contract } = useRegistryContract();
    const args = [encodeStrAsListOfFelts(name)];
    const { data, loading, error } = useStarknetCall({
        contract,
        method: "get_record_by_name",
        args,
    });
    let record = undefined;
    if (data !== undefined) {
        record = {
        ownerAddress: toHex(data[0].owner_addr),
        resolverAddress: toHex(data[0].resolver_addr),
        apexNamehash: toHex(data[0].apex_namehash),
        };
    }
    return { record, loading, error };
};
  