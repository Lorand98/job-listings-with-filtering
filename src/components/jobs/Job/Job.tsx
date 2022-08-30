import { Grid, Paper } from '@mui/material';
import { ReactComponent as MyHome } from '../../../assets/myhome.svg';

const Job = () => {
  return (
    <Paper elevation={10} sx={{ p: '1.8rem' }}>
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
