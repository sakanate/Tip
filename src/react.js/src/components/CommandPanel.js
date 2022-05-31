import React from 'react';

import { Box } from '@mui/material';

import GameProgress from './GameProgress';
import CountDownView from './CountDownView';
import Start from './Start';
import Participate from './Participate';
import GetRewardButton from './GetRewardButton';

function CommandPanel(props) {
    return (
        <Box sx={{
            maxWidth: '480px',
            width: '100%',
            margin: '0 auto',
            paddingTop: 3,
        }}>
            <CountDownView gameState={props.gameState} />

            <Box sx={{ paddingTop: 6 }}>
                <GameProgress gameState={props.gameState} />
            </Box>

            <Box sx={{
                paddingTop: 8,
            }}>
                {props.gameState === 'start' &&
                    <Start
                        isConnected={props.isConnected}
                        onClickStartButton={props.onClickStartButton}
                    />
                }
                {props.gameState === 'ingame' && <Participate />}
                {props.gameState === 'result' && <GetRewardButton />}
            </Box>
        </Box>
    );
}

export default CommandPanel;
