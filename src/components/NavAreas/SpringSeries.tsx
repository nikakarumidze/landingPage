import React from 'react';
import StyledBox from '../Utils/StyledBox';
import { Box, Typography, Stack, CardMedia, Button, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import leftCard from '../../assets/promo-left-img.png';
import rightCard from '../../assets/promo-right-img.png';
import LeaderBoard from '../LeaderBoard';
import PrizeList from '../PrizeList';
import { FaqData, PrizeListData, leaderBoardData } from '../../FakeData';
import Faq from '../Faq';
import AllOffers from '../AllOffers';
import MainPrizes from '../MainPrize/MainPrizes';

const tournamentContent = (
  <>
    <Stack direction='row' justifyContent='center' my={1}>
      <Typography align='center'>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</Typography>
    </Stack>
    <Grid container direction='row'>
      <Grid item xs={3}>
        <CardMedia component='img' image={leftCard} width='100%' height='100%' />
      </Grid>
      <Grid container item xs={6} px={2} justifyContent='center' alignItems='center'>
        <Stack
          direction='row'
          alignItems='center'
          sx={{
            pr: 1,
            border: '2px solid',
            borderColor: 'secondary.main',
            backgroundClip: 'padding-box',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              width: 35,
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            <AccessTimeIcon sx={{ ml: 0.5 }} />
          </Box>
          <Typography pl={1}>19:00 / 19:30 /20:00</Typography>
        </Stack>
        <Typography align='center' my={1}>
          * ყველა ტურნირზე შესაძლებელია მოხვედრა 0 ლარიდან
        </Typography>
        <Typography align='center' my={1}>
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </Typography>
        <Button sx={{ backgroundColor: 'secondary.main', color: 'white', my: 1 }}>
          პოკერის ლობი
        </Button>
      </Grid>
      <Grid item xs={3}>
        <CardMedia component='img' image={rightCard} width='100%' height='100%' />
      </Grid>
    </Grid>
  </>
);

const SpringSeries = () => {
  return (
    <>
      <StyledBox header='ტურნირები და სატელიტები' children={tournamentContent} />
      <StyledBox
        header='ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ'
        children={
          <>
            <LeaderBoard header='TOP20 ლიდერბორდი ჰოლდემში' data={leaderBoardData} />
            <PrizeList list={PrizeListData} />
            <Stack pb={2} px={1}>
              <Stack direction='row' justifyContent='center' alignItems='center' pb={2}>
                <Typography>* ლიდერბორდის შედეგები განახლდება</Typography>
                <Typography
                  ml={0.5}
                  color='secondary.main'
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  პოკერის ლობიში
                </Typography>
              </Stack>
              <Typography align='center'>
                * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები
              </Typography>
            </Stack>
          </>
        }
      />
      <MainPrizes />
      <StyledBox
        header='დამატებით შედგება, ქეშგეიმის, ტურნირების და აბრაკა პოკერის 12 SIDE დაბრაბორდი'
        children={
          <Typography bgcolor='secondary.light' align='center' pb={2}>
            * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
          </Typography>
        }
      />
      <Faq data={FaqData} />
      <AllOffers />
    </>
  );
};

export default SpringSeries;
