import React from 'react';

import ShareRankingTable from './ShareRankingTable';

import { Box, Typography } from '@mui/material';

function EveryonesShareView() {
    return (
        <Box sx={{
            paddingTop: '60px',
            textAlign: 'center',
            width: '300px',
            margin: '0 auto',
        }}>
            <Typography variant='h6' fontWeight='bold'>みなさんの取り分</Typography>

            <Box sx={{
                marginTop: '5px',
            }}>
                <ShareRankingTable />
            </Box>
        </Box>
    );
}

export default EveryonesShareView;
