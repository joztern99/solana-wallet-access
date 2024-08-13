import React from "react";
import { useWallet, WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function App() {
  const { connected, publicKey } = useWallet();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Solana Wallet Connection</h1>
        {connected ? (
          <>
            <p>Connected to {publicKey.toBase58()}</p>
            <WalletDisconnectButton />
          </>
        ) : (
          <WalletMultiButton />
        )}
      </header>
    </div>
  );
}

export default App;
