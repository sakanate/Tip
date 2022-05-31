import React from 'react';

import { ethers } from 'ethers';

import Box from '@mui/material/Box';

import WalletConfig from './components/WalletConfig';
import CommandPanel from './components/CommandPanel';

import { getContract } from './utils';

function App() {
    const [isConnected, setWalletConnection] = React.useState(false);
    const [gameState, setGameState] = React.useState('start');

    const onClickStartButton = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const tipContract = getContract(provider);
        const tipWithSigner = tipContract.connect(provider.getSigner());

        const tx = tipWithSigner.start();
        tipContract.on('Start', () => {
            console.log('The game has been started!');
            console.log(tx);
            setGameState('ingame');
        })
    };

    const onConnectWallet = () => {
        setWalletConnection(true);
    };

    // Check available provider.
    const checkWalletConnection = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        signer.getAddress()
        .then(() => {
            console.log('Wallet is connected.')
            setWalletConnection(true);
        })
        .catch(() => console.log('Wallet is not connected.'));
    };
    React.useEffect(checkWalletConnection, []);

    // Get current game state.
    React.useEffect(() => {
        async function getCurrentGameState() {
            if (!isConnected) return;
    
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const tipContract = getContract(provider);
            console.log(tipContract);
            console.log(await tipContract.goal())

            return;
    
            const stat = tipContract.stat()
            .then(() => console.log('successed'))
            .catch((error) => console.log(`errored as ${error}`));
            console.log(stat);
        }
        getCurrentGameState();
    }, [isConnected, ]);
    
    window.ethereum.on('accountsChanged', (accounts) => {
        if (!accounts.length) setWalletConnection(false);
    });

    return (
        <Box sx={{
            width: '100%',
        }}>
            <WalletConfig
                isConnected={isConnected}
                onConnectWallet={onConnectWallet}
            />
            <CommandPanel
                gameState={gameState}
                isConnected={isConnected}
                onClickStartButton={onClickStartButton}
            />
        </Box>
    );
}

export default App;
