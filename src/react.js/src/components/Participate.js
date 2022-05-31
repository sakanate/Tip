import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

function Participate() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{ marginRight: 2, marginY: 'auto' }}>
                <TextField id="participation-fee" label="ETH" variant="outlined" />
            </Box>
            
            <Box sx={{ marginY: 'auto' }}>
                <Button variant='contained' size='large' color='secondary'>
                    <Typography variant='h7' fontWeight='bold'>
                        参加する
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default Participate;
