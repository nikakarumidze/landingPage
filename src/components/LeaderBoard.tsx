import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { leaderBoardDataType } from '../types';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlightIcon from '@mui/icons-material/Flight';
import InfoIcon from '@mui/icons-material/Info';

interface ILeaderBoard {
  header: string;
  data: leaderBoardDataType[];
}

const LeaderBoard: React.FC<ILeaderBoard> = ({ header, data }) => {
  return (
    <>
      <Stack direction='row' justifyContent='center' my={2}>
        <Typography mr={1}>{header}</Typography>
        <InfoIcon />
      </Stack>
      <Box sx={{ backgroundColor: 'secondary.light', mx: 1, borderRadius: '10px' }}>
        <Stack direction='row' justifyContent='space-between' pb={1} px={4} pt={2}>
          <Typography>ადგილი</Typography>
          <Stack direction='row'>
            <CardGiftcardIcon />
            <Typography ml={0.5}>ვაუჩერი</Typography>
          </Stack>
          <Typography>პრიზი</Typography>
        </Stack>
        <Stack maxHeight={400} overflow={'auto'}>
          {data.map((item, i) => (
            <Stack
              key={i}
              direction='row'
              justifyContent='space-between'
              sx={{
                backgroundColor: 'secondary.dark',
                py: 0.5,
                px:1,
                mx: 1,
                border: '2px solid',
                borderColor: 'secondary.light',
                borderRadius: '50px',
              }}
            >
              <Chip label={i + 1} sx={{ borderRadius: '50%', color: 'secondary.light' }} />
              <Typography>{item.amount} &#8382;</Typography>
              <Stack direction='row'>
                <FlightIcon sx={{ transform: 'rotate(45deg)' }} />
                <Typography>{item.description}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LeaderBoard;
