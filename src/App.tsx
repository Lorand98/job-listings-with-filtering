import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/layout/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
