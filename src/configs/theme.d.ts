import { PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
   interface Palette {
      tertiary: PaletteColor;
      quaternary: PaletteColor;
      quinary: PaletteColor;
   }

   interface PaletteOptions {
      tertiary?: PaletteColorOptions;
      quaternary?: PaletteColorOptions;
      quinary?: PaletteColorOptions;
   }
}
