import { Box, CardMedia, Typography, Stack, Grid } from '@mui/material';
import React from 'react';
import festivalImg from '../assets/final-info-img.jpg';
import StyledBox from './StyledBox';
import TravelCard from './TravelCard';
import { FaqData, TravelCardData } from '../FakeData';
import Faq from './Faq';
import AllOffers from './AllOffers';
import TicketInfo from './TicketInfo/TicketInfo';

const FinalStage = () => {
  return (
    <Box
      p={1}
      borderRadius='10px'
      sx={{ backgroundColor: 'error.dark', border: '4px solid', borderColor: 'error.light' }}
    >
      <CardMedia component='img' image={festivalImg} width='100%' />
      <Typography align='center' mt={2}>
        ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
      </Typography>
      <Typography align='center'>
        The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს
        დაუვიწყარი მოგზაურობის შანსს.
      </Typography>
      <Stack
        direction='row'
        alignItems='center'
        sx={{
          backgroundColor: 'secondary.light',
          mx: 'auto',
          my: 2,
          width: '45vw',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            left: 0,
            width: 3,
            height: 30,
            backgroundColor: 'secondary.main',
            borderBottomRightRadius: '5px',
            borderTopRightRadius: '5px',
            mr: 3,
          }}
        />
        <Typography alignSelf='center' py={1.5}>
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </Typography>
      </Stack>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap={1}
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          mb: 2,
        }}
      >
        <StyledBox
          header='A კატეგორიის საგზურში შედის'
          children={<TravelCard data={TravelCardData} />}
        />
        <StyledBox
          header='A კატეგორიის საგზურში შედის'
          children={<TravelCard data={TravelCardData} />}
        />
        <StyledBox
          header='A კატეგორიის საგზურში შედის'
          children={<TravelCard data={TravelCardData} />}
        />
      </Box>
      <StyledBox header='მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე' children={<TicketInfo />} />
      <Faq data={FaqData} />
      <AllOffers />
    </Box>
  );
};

export default FinalStage;
