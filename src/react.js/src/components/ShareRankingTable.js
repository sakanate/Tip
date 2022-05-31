import React from 'react';

import { Box } from '@mui/material';

import ShareDetailRow from './ShareDetailRow';

function ShareRankingTable() {
    return (
        <Box sx={{
            p: '5px',
        }}>
            <hr />

            <ShareDetailRow />
            <hr />

            <ShareDetailRow />
            <hr />

            <ShareDetailRow />
            <hr />
        </Box>
    );
}

export default ShareRankingTable;
