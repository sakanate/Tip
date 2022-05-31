import React from 'react';

import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function GameProgress(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        }}>
            <ProgressBar />
            
            <Box sx={{
                textAlign: 'center',
                alignItems: 'center',
                m: '0 20px',
            }}>
                <Typography
                    variant='body'
                    fontWeight='bold'
                    sx={{ color: (theme) => theme.palette.primary.main }}
                >
                    現在 <Typography variant='h4' fontWeight='bold' component='span'>0.6</Typography> ETH
                </Typography>

                <Divider sx={{
                    m: '10px 0',
                    borderWidth: '1px',
                    borderColor: (theme) => theme.palette.primary.main,
                }} />

                <Typography
                    variant='body'
                    fontWeight='bold'
                    color='primary'
                >
                    目標 <Typography variant='h4' fontWeight='bold' component='span'>1.0</Typography> ETH
                </Typography>
            </Box>
        </Box>
    );
}

function ProgressBar(props) {
    return (
        <Box sx={{ m: '0 20px' }}>
            <Unit background={'neutral'} width='113px' />

            <Divider sx={{
                m: '10px 0',
                borderWidth: '1px',
                borderColor: (theme) => theme.palette.primary.main,
                width: '130px',
            }} />

            <Unit background={'neutral'} width='105px' />
            <Unit background={'neutral'} width='100px' />
            <Unit background={'secondary'} width='94px' />
            <Unit background={'secondary'} width='88px' />
        </Box>
    )
}

function Unit(props) {
    return (
        <Box sx={{
            background: (theme) => theme.palette[props.background].main,
            width: props.width,
            height: '15px',
            margin: '5px auto',
        }}>
        </Box>
    )
}


export default GameProgress;
