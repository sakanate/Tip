import React from 'react';

import { Box, Typography } from '@mui/material';

function CountDownView(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <TimeView time={'32'} unit={'m'} color='primary' />
            <TimeView time={'09'} unit={'s'} color='primary' />
            <TimeView time={'51'} unit={'ms'} color='primary' />
        </Box>
    );
}

function TimeView(props) {
    return (
        <Box sx={{ marginX: 3 }}>
            <Typography
                variant='h1'
                fontWeight='bold'
                color={props.color}
                component='span'
            >
                    {props.time}
            </Typography>
            <Typography
                variant='h3'
                fontWeight='bold'
                color={props.color}
                component='span'
            >
                {props.unit}
            </Typography>
        </Box>
    )
}

export default CountDownView;
