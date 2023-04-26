import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MainPrizeCard from './MainPrizeCard';

const MainPrizes = () => {
  return (
    <Box my={3}>
      <Typography>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</Typography>
      <Grid container my={2} maxWidth='100%' spacing={1} mx={0}>
        <Grid item xs={12} md={6} height='20vh'>
          <MainPrizeCard name='Holdem Highrollers' amount='50 000 ₾' date='27 აპრილი' />
        </Grid>
        <Grid item xs={12} md={6} height='20vh'>
          <MainPrizeCard name='Holdem Highrollers' amount='50 000 ₾' date='28 აპრილი' />
        </Grid>
        <Grid item xs={12} height='20vh'>
          <MainPrizeCard name='Main Events' amount='150 000 ₾' date='29 აპრილი' />
        </Grid>
      </Grid>
      <Typography>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings
        ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.
      </Typography>
    </Box>
  );
};

export default MainPrizes;
