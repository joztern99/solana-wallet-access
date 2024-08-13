import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Default styles for the wallet adapter
import "@solana/wallet-adapter-react-ui/styles.css";

const network = "devnet"; // Change to 'mainnet-beta' for production

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  new TorusWalletAdapter(),
];

ReactDOM.render(
  <React.StrictMode>
    <ConnectionProvider endpoint={`https://api.${network}.solana.com`}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
