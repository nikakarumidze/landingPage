import { Box, Typography } from '@mui/material';
import React from 'react';
interface IInfoCard {
  text: string;
  remark: string;
}

const InfoCard: React.FC<IInfoCard> = ({ text, remark }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      bgcolor='secondary.light'
      borderRadius='20px'
      m={1}
      px={5}
      py={2}
    >
      <Box />
      <Typography alignItems='center'>{text}</Typography>
      <Typography alignItems='center'>{remark}</Typography>
    </Box>
  );
};

export default InfoCard;
