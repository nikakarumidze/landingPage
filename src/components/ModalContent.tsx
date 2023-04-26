import React, { forwardRef, useState } from 'react';
import {
  Container,
  CardMedia,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
} from '@mui/material';
import banner from '../assets/banner.jpg';
import CashGames from './CashGames';
import { toggleButtonValues } from '../FakeData';
import SpringSeries from './SpringSeries';
import Footer from './Footer';

const ModalContent = forwardRef<HTMLDivElement>((props, ref) => {
  const [index, setIndex] = useState(0);
  return (
    <Box
      sx={{
        border: '1px solid #000',
        boxShadow: 24,
        mb: 10,
        width: {
          xs: '100%',
          md: '70%',
        },
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: 'secondary.dark',
      }}
      ref={ref}
    >
      <CardMedia component='img' image={banner} alt='banner' />
      <Container>
        <Typography mt={2}>მოიპოვე მრავალფეროვანი პრიზები და მოიგე 10 საგზური</Typography>
        <Typography mb={1}>მოხვდი ფესტივალზე მალტაში</Typography>
        <ToggleButtonGroup
          exclusive
          value={index}
          onChange={(e, curr) => curr !== null && setIndex(curr)}
          fullWidth
          sx={{
            backgroundColor: 'secondary.light',
            borderRadius: '15px !important',
            my: 2,
          }}
        >
          {toggleButtonValues.map((val, i) => (
            <ToggleButton
              key={i}
              value={i}
              sx={{
                backgroundColor: index === i ? 'secondary.main' : '',
                // pt: index === i ? 3 : '1 !important',
                borderRadius: '15px !important',
                borderColor: 'none !important',
              }}
            >
              <Stack>
                <Typography>{val.date}</Typography>
                <Typography>{val.name}</Typography>
              </Stack>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {!index && <CashGames />}
        {index === 1 && <SpringSeries />}
      </Container>
      <Footer />
    </Box>
  );
});

export default ModalContent;
