import { keyStores, Near, WalletConnection } from "near-api-js";

const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID;

const near = new Near({
  keyStore: keyStores.BrowserLocalStorageKeyStore(),
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
});
const wallet = new WalletConnection(near, "art-app");

export const createArt = (title, price) => {
  return wallet.account().functionCall(CONTRACT_ID, "create", { title, price });
};

export const getArtById = (id) => {
  return wallet.account().viewFunction(CONTRACT_ID, "getById", { id });
};

export const updateArt = (id, price) => {
  return wallet.account().functionCall(CONTRACT_ID, "update", { id, price });
};

export const deleteArt = (id) => {
  return wallet.account().functionCall(CONTRACT_ID, "del", { id });
};
