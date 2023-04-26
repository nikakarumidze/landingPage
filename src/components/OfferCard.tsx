import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Box } from '@mui/material';
import image from '../assets/offers-bonus.png';

interface IOfferCard {
  header: string;
  description: string;
}

const OfferCard: React.FC<IOfferCard> = ({ header, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '200px',
        height: '250px',
        borderRadius: '5px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        flexDirection: 'column',
        justifyContent:'end',
        p: 2
      }}
    >
      <Typography variant='body1'>{header}</Typography>
      <Typography variant='body2' mt={2}>{description}</Typography>
    </Box>
  );
};

export default OfferCard;
