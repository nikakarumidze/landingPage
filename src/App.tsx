import { Box, ThemeProvider } from '@mui/material';
import ModalContent from './components/ModalContent';
import { DefaultTheme } from './DefaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          p: 0,
        }}
      >
        <ModalContent />
      </Box>
    </ThemeProvider>
  );
};

export default App;
