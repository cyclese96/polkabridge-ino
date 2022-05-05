import { UAuthConnector } from "@uauth/web3-react";
// import { AbstractConnector } from '@web3-react/abstract-connector'
import { InjectedConnector } from "@web3-react/injected-connector";

// Instanciate your other connectors.
export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 56, 97],
});

const connectors = {
  injected,
};

export default connectors;
