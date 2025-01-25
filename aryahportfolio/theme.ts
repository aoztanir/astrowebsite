'use client';

import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  colors: {
    text: virtualColor({
      name: 'text',
      dark: 'white',
      light: 'black',
    }),
  },
  /* Put your mantine theme override here */
});
