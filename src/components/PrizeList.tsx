import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { IPrize } from '../types';

interface IPrizeList {
  list: IPrize[];
}
const PrizeList: React.FC<IPrizeList> = ({ list }) => {
  return (
    <Box m={2} py={0.5} bgcolor='error.light'>
      {list.map((prize, i) => (
        <Stack
          key={i}
          direction='row'
          bgcolor='error.main'
          alignItems='center'
          m={2}
          sx={{
            borderRadius: '10px',
          }}
        >
          <Box
            margin='auto'
            bgcolor='secondary.main'
            sx={{
              width: 3,
              height: 45,
              borderBottomRightRadius: '10px',
              borderTopRightRadius: '10px',
              mx: 0,
            }}
          />
          <prize.Icon size='large' sx={{ ml: 2, transform: !i ? 'rotate(45deg)' : '' }} />
          <Typography ml={1} py={1.5}>
            {prize.description}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default PrizeList;
