import React from 'react';
import StyledBox from './StyledBox';
import { Box, Typography, Stack, CardMedia, Button, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import leftCard from '../assets/promo-left-img.png';
import rightCard from '../assets/promo-right-img.png';

const tournamentContent = (
  <>
    <Stack direction='row'justifyContent='center'>
      <Typography align='center'>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</Typography>
    </Stack>
    <Grid container direction='row'>
      <Grid item xs={3}>
        <CardMedia component='img' image={leftCard} width='100%' height='100%' />
      </Grid>
      <Grid container item xs={6} px={2} justifyContent='center' alignItems='center'>
        <Stack
          direction='row'
          sx={{
            px: 1,
            border: '2px solid',
            borderColor: 'secondary.main',
            background: 'linear-gradient(to right, #EF5A21 18%, #202324 18%)',
            backgroundClip: 'padding-box',
            borderRadius: '10px',
          }}
        >
          <AccessTimeIcon />
          <Typography pl={1}>19:00 / 19:30 /20:00</Typography>
        </Stack>
        <Typography align='center'>* ყველა ტურნირზე შესაძლებელია მოხვედრა 0 ლარიდან</Typography>
        <Typography align='center'>ტურნირების სრული განრიგის სანახავად გადადი</Typography>
        <Typography align='center'>პოკერის ლობიში</Typography>
        <Button sx={{ bgColor: 'secondary.main' }}>პოკერის ლობი</Button>
      </Grid>
      <Grid item xs={3}>
        <CardMedia component='img' image={rightCard} width='100%' height='100%' />
      </Grid>
    </Grid>
  </>
);

const SpringSeries = () => {
  return <StyledBox header='ტურნირები და სატელიტები' children={tournamentContent} />;
};

export default SpringSeries;
