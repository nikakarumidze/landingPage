import { Box, Button } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const { clientHeight } = document.documentElement;
    if (!visible && clientHeight >= 600) setVisible(true);
  }, [visible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {visible && (
        <Box
          bgcolor='error.dark'
          borderTop='2px solid'
          borderColor='secondary.main'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
              my: 1,
            }}
          >
            ითამაშე
          </Button>
        </Box>
      )}
    </>
  );
};

export default Footer;
