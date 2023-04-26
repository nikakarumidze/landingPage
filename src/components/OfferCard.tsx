import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import image from '../assets/offers-bonus.png';

interface IOfferCard {
  header: string;
  description: string;
}

const OfferCard: React.FC<IOfferCard> = ({ header, description }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        // width: '200px',
        // height: '300px',
      }}
    >
      <CardActionArea sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          image={image}
          alt='card-image'
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <CardContent
          sx={{
            position: 'relative',
            bgcolor: 'transparent',
          }}
        >
          <Typography variant='body2'>
            {header}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OfferCard;
