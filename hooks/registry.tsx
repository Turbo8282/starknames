import { useContract, useStarknetInvoke } from "@starknet-react/core";
import RegistryABI from "../abi/registry.json";
import { Abi } from "starknet"
export const useRegistryContract = () => {
    return useContract({
        abi: RegistryABI as Abi,
        address: "0x05ab97cc647943dd0354b7b9073ceed535c3fdc24cc8fbd072979a7897982503",
    });
};
/* 
export const useRegister = () => {
    const { contract } = useRegistryContract();
    const {
        data: transactionId,
        loading,
        error,
        reset,
        invoke,
    } = useStarknetInvoke({
        contract, method: "register",
    });
    return ( transactionId, loading, error, reset, invoke );
};
 */