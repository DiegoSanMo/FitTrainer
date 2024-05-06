import { Box, Typography, Button, useTheme, Grid } from "@mui/material";
import landing from "../../assets/landing.png";
import { useNavigate } from "react-router-dom";
import { CHILD_PATHS } from "../../utils/constants";
import { ImageContainer } from "../../components/commons";

export default function Landing() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handlerClickNav = (path: string) => navigate(path);

  return (
    <ImageContainer>
      <Grid item xs={8} sx={{ width: "100vw", height: "100vh" }}>
        <img
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
            left: "-100px",
          }}
          src={landing}
          alt=""
        />
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h1"
          sx={{
            position: "relative",
            left: "-40.2%",
            top: "10%",
            fontSize: "9rem",
            fontWeight: 700,
            color: theme.palette.accent.primary,
          }}
        >
          FitTrainer
        </Typography>
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            top: 90,
            fontWeight: 500,
            color: theme.palette.secondary.main,
          }}
        >
          Love your body and spirit
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          sx={{
            position: "relative",
            top: 100,
            color: theme.palette.background.default,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit sociis cursus
          sollicitudin, quis placerat fames nisi curae facilisi venenatis
          volutpat rutrum blandit praesent, mi sodales est eros interdum
          ullamcorper odio fermentum augue. Nulla risus mus tellus donec lectus
          pulvinar convallis dictum imperdiet tristique, faucibus lacus
          dignissim sagittis platea ac cubilia conubia.
        </Typography>
        <Box
          sx={{
            position: "relative",
            top: 150,
            display: "flex",
            justifyContent: "space-between",
            width: "40%",
          }}
        >
          <Button
            variant="contained"
            sx={{ background: theme.palette.accent.primary }}
            onClick={() => handlerClickNav(CHILD_PATHS.signIn)}
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            onClick={() => handlerClickNav(CHILD_PATHS.login)}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </ImageContainer>
  );
}
