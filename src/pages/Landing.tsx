import { Box, IconButton, Typography, styled, useTheme } from "@mui/material";
import landing from '../assets/landing.png';
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledImage = styled('img')`
    width: 70%;
    transform: translate(10px, 10px);
` 
const StyledTextContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Landing() {
    const { t } = useTranslation();

    // This can be converted on hook
    const { palette } = useTheme();
    const colorMode = useContext(ColorModeContext);

  return (
  <Box>
    <StyledTextContainer>
        <Typography
            variant="h1"
            gutterBottom
            sx={{
                color: palette.primary.main,
                }}>
            {t('landing-page.title')}
        </Typography>
        <StyledImage src={landing} alt="landing" />
    </StyledTextContainer>

    <Typography  gutterBottom sx={{fontWeight: 300}}>
        {t('landing-page.description')}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  </Box>
  )
}
