import { Box, Typography, Stack } from '@mui/material';
import React from 'react';

interface IStyledBox {
  header: string;
  children: JSX.Element;
}

const StyledBox: React.FC<IStyledBox> = ({ header, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.dark',
        borderRadius: '10px',
        border: '2px solid',
        borderTop: 0,
        borderColor: 'secondary.light',
        overflow: 'hidden',
      }}
    >
      <Stack justifyContent='center' sx={{ backgroundColor: 'secondary.light', p: 0 }}>
        <Box
          margin='auto'
          bgcolor='secondary.main'
          sx={{
            width: 100,
            height: 4,
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        />
        <Typography align='center' py={1}>
          {header}
        </Typography>
      </Stack>
      <Box>{children}</Box>
    </Box>
  );
};

export default StyledBox;
