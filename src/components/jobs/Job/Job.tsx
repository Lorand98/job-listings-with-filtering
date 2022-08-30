import { Grid, Paper } from '@mui/material';
import { ReactComponent as MyHome } from '../../../assets/myhome.svg';

const Job = () => {
  return (
    <Paper
      sx={{
        p: '1.8rem',
        boxShadow: '0rem 1rem 2rem -1.2rem hsl(180, 29%, 50%)',
      }}
    >
      <Grid container columns={3}>
        <Grid item>
          <MyHome />
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Paper>
  );
};

export default Job;
