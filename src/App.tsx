import { Container, ThemeProvider } from '@mui/material';
import ModalContent from './components/ModalContent';
import { DefaultTheme } from './DefaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
        }}
      >
        <ModalContent />
      </Container>
    </ThemeProvider>
  );
};

export default App;
