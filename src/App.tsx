import { ThemeProvider } from '@emotion/react';
import { Box, Container, CssBaseline } from '@mui/material';
import JobList from './components/jobs/JobList';
import Header from './components/layout/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          m: '4rem',
        }}
      >
        <Container maxWidth={'md'}>
          <JobList />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
