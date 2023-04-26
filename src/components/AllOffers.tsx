import React from 'react';
import { Box, Typography } from '@mui/material';
import OfferCard from './OfferCard';

const offers = Array(10).fill(null);

const AllOffers = () => {
  return (
    <Box pb={5} pt={2}>
      <Typography my={2}>მსგავსი აქციები</Typography>
      <Box
        display='flex'
        flexDirection='row'
        columnGap={2}
        mx={0}
        sx={{
          overflowX: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {offers.map((arr, i) => (
          <OfferCard
            key={i}
            header='Get 300% Cashback'
            description='retrieve 300% bet amount as real money only here'
          />
        ))}
      </Box>
    </Box>
  );
};

export default AllOffers;
