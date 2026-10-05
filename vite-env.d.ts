/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CHAIN_ID: string;
  readonly VITE_RPC_URL: string;
  readonly VITE_WALLET_CONNECT_PROJECT_ID: string;
  readonly VITE_CONTRACT_ADDRESS: string;
  // Add every VITE_* variable you use in your code here.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: unknown[] | object }) => Promise<unknown>;
  on?: (event: string, callback: (...args: unknown[]) => void) => void;
  removeListener?: (event: string, callback: (...args: unknown[]) => void) => void;
  selectedAddress?: string | null;
  chainId?: string;
  networkVersion?: string;
}

interface Window {
  ethereum?: EthereumProvider;
}