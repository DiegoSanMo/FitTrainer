import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material/";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t } = useTranslation();
  return (
    <AppBar>
      <Toolbar disableGutters>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          arial-label="logo"
        >
          <SportsGymnasticsIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          FitTrainer
        </Typography>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Button color="inherit">{t('title')}</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
