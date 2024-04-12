import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material/";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

export const NavBar = () => {
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
        <Stack direcction="row" spacing={2}>
          <Button color="inherit">DashBoard</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
