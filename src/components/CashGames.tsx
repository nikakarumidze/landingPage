import { Box, Stack, Typography } from '@mui/material';
import LeaderBoard from './LeaderBoard';
import { FaqData, leaderBoardData, PrizeListData } from '../FakeData';
import PrizeList from './PrizeList';
import InfoCard from './InfoCard';
import Faq from './Faq';
import AllOffers from './AllOffers';
import StyledBox from './StyledBox';

const CashGames = () => {
  return (
    <Box my={5}>
      <StyledBox
        header='1 რეიკი &#8382; = 1 ქულას'
        children={
          <>
            <LeaderBoard header='ჰოლდემის TOP20 ლიდერბორდი' data={leaderBoardData} />
            <PrizeList list={PrizeListData} />
            <LeaderBoard header='TOP20 ლიდერბორდი ჰოლდემში' data={leaderBoardData} />
            <PrizeList list={PrizeListData} />
            <Stack direction='row' justifyContent='center' alignItems='center' p={2}>
              <Typography>* ლიდერბორდის შედეგები განახლდება</Typography>
              <Typography
                ml={0.5}
                color='secondary.main'
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                პოკერის ლობიში
              </Typography>
            </Stack>
          </>
        }
      />
      
      <InfoCard
        text='დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE ლიდერბორდი'
        remark='* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.'
      />
      <Faq data={FaqData} />
      <AllOffers />
    </Box>
  );
};

export default CashGames;
