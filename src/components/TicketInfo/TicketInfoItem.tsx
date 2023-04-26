import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
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
      <Stack direction='row' alignItems='end'>
        <img
          src={maltaLogo ? ticket2Icon : ticketIcon}
          alt='header-img'
          style={{
            marginLeft: 'auto',
            marginRight: 20,
          }}
        />
      </Stack>
      <Typography p={0.5} pl={2}>
        {content}
      </Typography>
      <Typography p={0.5} pl={2}>
        {title}
      </Typography>
    </Box>
  );
};

export default TicketInfoItem;
