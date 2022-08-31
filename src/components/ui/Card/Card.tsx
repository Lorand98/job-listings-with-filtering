import { Paper, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

function Card({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        p: '1.8rem',
        boxShadow: `0rem 1rem 2rem -1.2rem ${theme.palette.primary.main}`,
      }}
    >
      {children}
    </Paper>
  );
}

export default Card;
