import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import OfferCard from './OfferCard';

const offers = Array(5).fill(null);

const AllOffers = () => {
  return (
    <Box>
      <Typography my={2}>მსგავსი აქციები</Typography>
      <Box 
      display='flex' 
      flexDirection='row' 
      overflow='auto' 
      columnGap={2}
      alignItems='start'
      maxWidth='100%'
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
