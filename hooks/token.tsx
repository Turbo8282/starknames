import Erc20Abi from "../abi/token.json"
import { useContract } from "@starknet-react/core";
import { Abi } from 'starknet'

export default function useTokenContract() {
    return useContract({
        abi: Erc20Abi as Abi,
        address: '0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10',
    })
}