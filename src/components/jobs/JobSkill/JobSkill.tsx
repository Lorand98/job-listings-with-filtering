import {  Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

function JobSkill({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <Typography
      variant='body2'
      component='caption'
      sx={{
        backgroundColor: theme.palette.neutral?.light,
        p: '0.5rem',
        color: theme.palette.primary.main,
        borderRadius: '0.3rem',
      }}
    >
      {children}
    </Typography>
  );
}

export default JobSkill;
