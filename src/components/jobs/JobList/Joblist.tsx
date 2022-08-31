import { Stack, ThemeProvider } from '@mui/material';
import Job from '../Job/Job';

function Joblist() {
  return (
    <Stack spacing='2rem'>
      <Job />

      <Job />
      <Job />
    </Stack>
  );
}

export default Joblist;
