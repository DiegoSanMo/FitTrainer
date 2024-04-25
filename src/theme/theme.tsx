
import { PaletteMode } from '@mui/material';
import { lightMode } from './lightMode';
import { darkMode } from './darkMode';

const themeTypes = {
    light: 'light',
    dark: 'dark'
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    ...(mode === themeTypes.light ? lightMode : darkMode),
    mode: mode
  },
});
