import WalletConnectProvider from "@walletconnect/web3-provider";
import getInfuraKey from "./actions/helper";

let infuraKey = getInfuraKey();
const provider = new WalletConnectProvider({
  infuraId: `${infuraKey}`,
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
  },
});

export default provider;
