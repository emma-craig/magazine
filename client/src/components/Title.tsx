import { Box } from '@mui/system';
import React from 'react';

export default function Title() {
  return (
    <Box
      sx={{ display: 'flex', py: '2rem' }}
      bgcolor="#f0f0f0"
      justifyContent="center"
      alignContent="center">
      <img
        src="/pepper_title.png"
        alt="pepper magazine title"
      />
    </Box>
  );
}
