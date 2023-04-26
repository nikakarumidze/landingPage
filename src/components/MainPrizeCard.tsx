import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import regularEventBackground from '../assets/tournament-bg.png';
import mainEventBackground from '../assets/main-bg.png';

interface IMainPrizeCard {
  name: string;
  date: string;
  amount: string;
}

const MainPrizeCard: React.FC<IMainPrizeCard> = ({ name, date, amount }) => {
  const isMainEvent = name === 'Main Events';
  return (
    <Box
      display='flex'
      alignItems='center'
      flexDirection='row'
      sx={{
        backgroundImage: `url(${isMainEvent ? mainEventBackground : regularEventBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100%',
        height: '100%',
        borderRadius: '20px',
        justifyContent: {
          xs: 'start',
          md: 'center',
        },
      }}
    >
        <Stack mr='5vw' ml={2}>
          <Typography pb={1}>{name}</Typography>
          <Typography color='#FFBE00'>{amount}</Typography>
        </Stack>
        <Stack>
          <Typography pb={1}>ბაი-ინი - 550₾</Typography>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
              py: 0.5,
              borderRadius: '20px',
              borderBottomRightRadius: 0,
              backgroundColor: isMainEvent ? '#D7C860' : '#B78648',
              color: isMainEvent ? '#094B3D' : 'white',
            }}
          >
            {date}
          </Box>
        </Stack>
    </Box>
  );
};

export default MainPrizeCard;
