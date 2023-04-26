import React from 'react';
import { Box, CardMedia, Typography, Stack, Grid } from '@mui/material';
import ticketIcon from '../../assets/poker-item-1-ticket-icon.png';
import ticket2Icon from '../../assets/poker-item-2-ticket-icon.png';

interface ITicketInfoITem {
  content: string;
  title: string;
  maltaLogo?: boolean;
}

const TicketInfoItem: React.FC<ITicketInfoITem> = ({ content, title, maltaLogo }) => {
  return (
    <Box sx={{ backgroundColor: '#1E2122', borderRadius: '10px', m: 1 }}>
      {/* <CardMedia
        component='img'
        image={maltaLogo ? ticket2Icon : ticketIcon}
        width='5px'
        height='5px'
        sx={{
          mr: 0,
          ml: 'auto',
        }}
      /> */}
      <Typography p={0.5}>{content}</Typography>
      <Typography p={0.5}>{title}</Typography>
    </Box>
  );
};

export default TicketInfoItem;
