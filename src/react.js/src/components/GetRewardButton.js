import React from 'react';

import { Typography, Button } from '@mui/material';

function GetRewardButton() {
    return (
        <Button variant='outlined' size='large'>
            <Typography variant='h7' fontWeight='bold'>
                報酬を受け取る
            </Typography>
        </Button>
    );
}

export default GetRewardButton;
