import { encode } from "starknet";

export const formatAddress = (address) =>
  encode.addHexPrefix(encode.removeHexPrefix(address).padStart(64, "0"));

export const truncateAddress = (fullAddress) => {
  const address = formatAddress(fullAddress);

  const hex = address.slice(0, 2);
  const start = address.slice(2, 6);
  const end = address.slice(-4);
  return `${hex}${start}...${end}`;
};

const GOERLI_DEFAULT_REGISTRY_CONTRACT_ADDRESS = "0x06642df6ff8b3bbeee0a87d65d72424a212fd0a09229c238ab1e1fe9e1ccacf0";

export const getRegistryAddress = (network) => {
  if (network == "mainnet-alpha") {
    throw new Error("Not deployed on mainnet yet");
  } else if (network === "goerli-alpha") {
    return GOERLI_DEFAULT_REGISTRY_CONTRACT_ADDRESS;
  } else if (network === "localhost") {
    throw new Error(
      "Unknown contract address on localhost. Add address in `src/services/address.service.ts"
    );
  } else {
    throw new Error("Unknown network type");
  }
};

export const GOERLI_DEFAULT_RESOLVER_CONTRACT_ADDRESS =
  "0x038c8b26c8df1b410c1a355af791464681509b028b2be615f24c8b8039c33b78";

  export const getResolverAddress = (network) => {
    if (network == "mainnet-alpha") {
      throw new Error("Not deployed on mainnet yet");
    } else if (network === "goerli-alpha") {
      return GOERLI_DEFAULT_RESOLVER_CONTRACT_ADDRESS;
    } else if (network === "localhost") {
      throw new Error(
        "Unknown contract address on localhost. Add address in `src/services/address.service.ts"
      );
    } else {
      throw new Error("Unknown network type");
    }
  };