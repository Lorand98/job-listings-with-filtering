import { List, ListItem, Stack } from '@mui/material';
import React from 'react';
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
