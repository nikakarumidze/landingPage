import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { IPrize } from '../types';

interface IPrizeList {
  list: IPrize[];
}
const PrizeList: React.FC<IPrizeList> = ({ list }) => {
  return (
    <Box my={2}>
      {list.map((prize, i) => (
        <Stack
          direction='row'
          p={2}
          bgcolor='error.main'
          m={1}
          borderRadius='10px'
          borderColor='secondary.main'
          borderLeft='2px solid'
        >
          <prize.Icon size='large' sx={{ transform: !i ? 'rotate(45deg)' : '' }} />
          <Typography ml={1}>{prize.description}</Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default PrizeList;
