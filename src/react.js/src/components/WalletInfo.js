import React from 'react';

import { ethers } from 'ethers';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WalletInfo(props) {
    if (props.isConnected) {
        return (
            <WalletBalanceAndAddress />
        )
    } else {
        return (
            <WalletConnectButton
                onConnectWallet={props.onConnectWallet}
            />
        );
    }
}

function WalletBalanceAndAddress() {
    const [accountAddress, setAccountAddress] = React.useState('');
    const [accountBalance, setAccountBalance] = React.useState(0);

    React.useEffect(() => {
        async function fetchAccountInfo() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.send('eth_requestAccounts', []);

            if (accounts[0]) {
                setAccountAddress(accounts[0]);

                const balance = await provider.getBalance(accounts[0]);
                const remainder = balance.mod(1e14);
                setAccountBalance(ethers.utils.formatEther(balance.sub(remainder)));
            }
        }
        fetchAccountInfo();
    }, []);

    return (
        <Box
            sx={{
                background: (theme) => theme.palette.primary.main,
                borderRadius: '17.5px',
                padding: '1px',
            }}
        >
            <Typography
                variant='body'
                fontWeight='bold'
                sx={{
                    ml: 2,
                    mr: 1,
                    verticalAlign: 'middle',
                }}
            >
                {accountBalance}&nbsp;
                <Typography
                    variant='caption'
                    fontWeight='bold'
                    component='span'
                >
                    ETH
                </Typography>
            </Typography>
            <Button
                variant='contained'
                color='secondary'
                size='large'
            >
                <Typography
                    variant='body'
                    fontWeight='bold'
                    sx={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        width: '120px',
                        textOverflow: 'ellipsis',
                        textTransform: 'lowercase',
                    }}
                >
                    {accountAddress}
                </Typography>
            </Button>
        </Box>
    );
}

function WalletConnectButton(props) {
    const onClickConnectWallet = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        provider.send('eth_requestAccounts', [])
        .then((accounts) => {
            if (accounts[0]) props.onConnectWallet();
        })
        .catch((error) => console.log(`Wallet connection is errored as ${error}`));
    };

    return (
        <Button onClick={onClickConnectWallet} variant='contained' color='secondary' size='large'>
            <Typography variant='body' fontWeight='bold'>
                ウォレットに接続
            </Typography>
        </Button>
    )
}

export default WalletInfo;
