import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as MyHome } from '../../../assets/myhome.svg';
import { darkNeutralColor, mainNeutralColor } from '../../../theme';
import Tag from '../../ui/Tag';
import JobSkill from '../JobSkill';

const Job = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: '1.8rem',
        boxShadow: '0rem 1rem 2rem -1.2rem hsl(180, 29%, 50%)',
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MyHome />
        </Grid>
        <Grid
          item
          desktop={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            m: '0 auto',
          }}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Typography
              variant='body2'
              component='h2'
              sx={{ fontWeight: '600', color: theme.palette.primary.main }}
            >
              Photosnap
            </Typography>
            <Tag bgColor={theme.palette.primary.main}>new!</Tag>
            <Tag bgColor={theme.palette.neutral?.dark || darkNeutralColor}>
              featured
            </Tag>
          </Box>
          <Box>
            <Typography
              variant='body1'
              component='h3'
              sx={{
                fontWeight: '600',
                ':hover': {
                  color: theme.palette.primary.main,
                  cursor: 'pointer',
                },
              }}
            >
              Senior Frontend Developer
            </Typography>
          </Box>
          <Box sx={{ color: theme.palette.neutral?.main || mainNeutralColor }}>
            <Typography variant='body2'> 5d ago</Typography>
          </Box>
        </Grid>
        <Grid
          item
          desktop={5}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <JobSkill>Frontend</JobSkill>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Job;
