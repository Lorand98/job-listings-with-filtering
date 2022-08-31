import { Stack } from '@mui/material';
import { useContext } from 'react';
import { JobContext } from '../../../context/job-context';
import Job from '../Job/Job';

function Joblist() {
  const { jobs } = useContext(JobContext);

  return (
    <Stack spacing='2rem'>
      {jobs.map((job) => (
        <Job key={job.id} job={{ ...job }} />
      ))}
    </Stack>
  );
}

export default Joblist;
