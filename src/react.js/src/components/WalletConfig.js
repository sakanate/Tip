import React from 'react';

import Box from '@mui/material/Box';

import NetworkSelect from './NetworkSelect';
import WalletInfo from './WalletInfo';

function WalletConfig(props) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
        }}>
            <Box sx={{ p: 1, m: 1 }}>
                <NetworkSelect />
            </Box>
            <Box sx={{ p: 1, m: 1 }}>
                <WalletInfo
                    isConnected={props.isConnected}
                    onConnectWallet={props.onConnectWallet}
                />
            </Box>
        </Box>
    );
}

export default WalletConfig;
