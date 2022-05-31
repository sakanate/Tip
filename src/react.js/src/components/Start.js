import React from 'react';

import { Box, Typography, Button } from '@mui/material';

function Start(props) {
    return (
        <Box sx={{
            textAlign: 'center',
        }}>
            <Button
                onClick={props.onClickStartButton}
                variant='contained'
                color='primary'
                size='large'
                disabled={!props.isConnected}
            >
                <Typography variant='h7' fontWeight='bold'>
                    ゲーム開始
                </Typography>
            </Button>
        </Box>
    );
}

export default Start;
