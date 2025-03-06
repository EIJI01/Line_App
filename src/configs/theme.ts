/// <reference path="./theme.d.ts" />
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   cssVariables: true,
   palette: {
      primary: {
         main: '#FFB38E',
         contrastText: '#fff',
         light: '',
         dark: '',
      },
      secondary: {
         main: '#FFCF9D',
         contrastText: '#fff',
         light: '',
         dark: '',
      },
      tertiary: {
         main: '#FFB26F',
         contrastText: '#fff',
         light: '',
         dark: '',
      },
      quaternary: {
         main: '#DE8F5F',
         contrastText: '#fff',
         light: '',
         dark: '',
      },
      quinary: {
         main: '#493628',
         contrastText: '#fff',
         light: '',
         dark: '',
      },
      error: {
         main: red.A400,
         contrastText: '#fff',
         light: '',
         dark: '',
      },
   },
});
