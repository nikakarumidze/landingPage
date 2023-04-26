import React from 'react';
import { Box, CardMedia, Typography, Stack, Grid } from '@mui/material';
import TicketInfoItem from './TicketInfoItem';

const TicketInfo = () => {
  return (
    <>
      <Grid container spacing={2} mx={0} my={1}>
        <Grid item xs={12} md={6}>
          <TicketInfoItem title='“Cashgame Highrollers” -' content='1 საგზური' />
          <TicketInfoItem title='„Cashgame Grinders”' content='1 საგზური' />
          <TicketInfoItem title='„Cashgame Grinders”' content='1 საგზური' />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketInfoItem
            title='„The Festival in Malta, GTD“'
            content='ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.'
            maltaLogo={true}
          />
          <TicketInfoItem
            title='„Cashgame Grinders”'
            content='ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.'
          />
        </Grid>
      </Grid>
      <Typography align='center'>
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings ტურნირზემოხვდება
        ბეჭდების შესაბამისი რაოდენობის სტეკით
      </Typography>
      <Typography align='center'>
        *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.
      </Typography>
    </>
  );
};

export default TicketInfo;
