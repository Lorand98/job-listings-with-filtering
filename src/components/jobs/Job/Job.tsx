import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { darkNeutralColor, mainNeutralColor } from '../../../theme';
import { IJobs } from '../../../types';
import Card from '../../ui/Card';
import SVGIcon from '../../ui/SVGIcon';
import Tag from '../../ui/Tag';
import JobSkill from '../JobSkill';

const Job = ({ job }: { job: IJobs }) => {
  const theme = useTheme();

  return (
    <Card>
      <Grid container>
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SVGIcon name={job.logo} />
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
              {job.company}
            </Typography>
            {job.new && <Tag bgColor={theme.palette.primary.main}>new!</Tag>}
            {job.featured && (
              <Tag bgColor={theme.palette.neutral?.dark || darkNeutralColor}>
                featured
              </Tag>
            )}
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
              {job.position}
            </Typography>
          </Box>
          <Box
            sx={{
              color: theme.palette.neutral?.main || mainNeutralColor,
              display: 'flex',
              gap: '1rem',
            }}
          >
            <Typography variant='body2'>{job.postedAt}</Typography>
            <Typography variant='body2'>{job.contract}</Typography>
            <Typography variant='body2'>{job.location}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          desktop={5}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '0.8rem',
          }}
        >
          <JobSkill>{job.role}</JobSkill>
          <JobSkill>{job.level}</JobSkill>
          {job.languages.map((language) => (
            <JobSkill key={language}>{language}</JobSkill>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Job;
