import { getStarknet, disconnect } from "get-starknet";

export const isWalletConnected = () => getStarknet().isConnected;

export const connectWallet = async () =>
  await getStarknet().enable({ showModal: true });

export const walletAddress = async () => {
    const [address] = await getStarknet().enable();
    return address;
};

export const getExplorerBaseUrl = () => {
  if (networkId() === "mainnet-alpha") {
    return "https://voyager.online";
  } else if (networkId() === "goerli-alpha") {
    return "https://goerli.voyager.online";
  }
};

export const Disconnect = () => disconnect();

export const buildExplorerUrlForAddress = address => {
  const baseUrl = getExplorerBaseUrl();
  const path = "/contract/" + address;
  return baseUrl + path;
};

export const buildExplorerUrlForTransaction = transaction => {
  const baseUrl = getExplorerBaseUrl();
  const path = "/tx/" + transaction;
  return baseUrl + path;
};

export const networkUrl = () => {
  try {
    return getStarknet().provider.baseUrl;
  } catch {}
};

/* export type Network = "mainnet-alpha" | "goerli-alpha" | "localhost"; */

export const networkId = () => {
  try {
    const { baseUrl } = getStarknet().provider;
    if (baseUrl.includes("alpha-mainnet.starknet.io")) {
      return "mainnet-alpha";
    } else if (baseUrl.includes("alpha4.starknet.io")) {
      return "goerli-alpha";
    } else if (baseUrl.match(/^https?:\/\/localhost.*/)) {
      return "localhost";
    }
  } catch {}
};

export const waitForTransaction = async hash =>
  await getStarknet().provider.waitForTransaction(hash);

export const addWalletChangeListener = async handleEvent => {
  const starknet = getStarknet();
  if (starknet) {
    starknet.on("accountsChanged", handleEvent);
  }
};

export const isPreauthorized = async () => {
  return getStarknet().isPreauthorized();
};
