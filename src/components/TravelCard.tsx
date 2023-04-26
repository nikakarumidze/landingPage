import React from 'react';
import { ITravelCard } from '../types';
import { Box, CardMedia, Typography } from '@mui/material';

interface TravelCardProps {
  data: ITravelCard[];
}

const TravelCard: React.FC<TravelCardProps> = ({ data }) => {
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          m={1}
          p={1}
          key={i}
          display='flex'
          flexDirection='row'
          alignItems='center'
          sx={{
            backgroundColor: 'error.dark',
            borderRadius: '10px',
          }}
        >
          <CardMedia
            component='img'
            image={item.icon}
            sx={{ width: '40px', height: '40px', mr: 1 }}
          />
          <Typography>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TravelCard;
