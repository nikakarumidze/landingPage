import { Box, Stack, Typography } from '@mui/material';
import LeaderBoard from './LeaderBoard';
import { leaderBoardData, PrizeListData } from '../FakeData';
import PrizeList from './PrizeList';
import InfoCard from './InfoCard';
import Faq from './Faq';

const CashGames = () => {
  return (
    <Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        bgcolor='secondary.dark'
        sx={{
          borderRadius: '10px',
          border: '2px solid',
          borderColor: 'secondary.light',
        }}
      >
        <Stack
          direction='row'
          justifyContent='center'
          bgcolor='secondary.light'
          sx={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          <Box
            sx={{
              height: '100%',
              borderColor: 'secondary.main',
              borderTop: '2px solid',
              py: 2,
            }}
          >
            <Typography>1 რეიკი &#8382; = 1 ქულას</Typography>
          </Box>
        </Stack>

        <LeaderBoard header='ჰოლდემის TOP20 ლიდერბორდი' data={leaderBoardData} />
        <PrizeList list={PrizeListData} />
        <LeaderBoard header='TOP20 ლიდერბორდი ჰოლდემში' data={leaderBoardData} />
        <PrizeList list={PrizeListData} />
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
      </Box>
      <InfoCard
        text='დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE ლიდერბორდი'
        remark='* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.'
      />
      <Faq />
    </Box>
  );
};

export default CashGames;
