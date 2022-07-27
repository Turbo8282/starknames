import { useContract, useStarknetInvoke } from "@starknet-react/core";
import { Abi, AddTransactionResponse } from "starknet";
import RegistryABI from "../abi/registry.json";
export const useRegistryContract = () => {
    return useContract({
        abi: RegistryABI as Abi,
        address: "0x06642df6ff8b3bbeee0a87d65d72424a212fd0a09229c238ab1e1fe9e1ccacf0",
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

export interface RegisterHookT {
    transactionId: string;
    loading: boolean;
    error: string;
    reset: () => void;
    invoke: ({
      args,
    }: {
      args: (string | string[])[];
    }) => Promise<AddTransactionResponse>;
}
  
export const useRegister = (): RegisterHookT => {
    const { contract } = useRegistryContract();
    const {
        data: transactionId,
        loading,
        error,
        reset,
        invoke,
    } = useStarknetInvoke<Array<string | string[]>>({
        contract,
        method: "register",
    });

    return { transactionId, loading, error, reset, invoke };
};
  