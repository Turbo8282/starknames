import { useContract, useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { toHex } from "starknet/utils/number";
import { encodeStrAsListOfFelts } from "../../utils/felt";
import ResolverAbi from "../abi/starknet_address_resolver.json";

export const useResolverContract = resolverAddress => {
    useContract({
        abi: ResolverAbi,
        address: resolverAddress,
    })
}

export const useStarknetAddress = (resolverAddress, name) => {
    const { contract } = useResolverContract(resolverAddress);
    const args = [encodeStrAsListOfFelts(name)];
    const { data, loading, error } = useStarknetCall({
        contract,
        method: "get_starknet_address_by_name",
        args,
    });
    let starknetAddress = undefined;
    if (data !== undefined) {
        starknetAddress = toHex(data[0]);
    }
    return { starknetAddress, loading, error };
};

export const useStarknetAddressResultSetter = resolverAddress => {
    const { contract } = useResolverContract(resolverAddress);
    return useStarknetInvoke({
        contract,
        method: "set_starknet_address_by_name"
    });
};