// import { useTranslation } from "react-i18next";
import { Typography, Button, useTheme, Grid, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { CustomTextField } from "../../components/commons";
import image from "../../assets/landing.png";

export default function Register() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handlerOnClick = () => {
    navigate("/dashboard");
  };

  return (
    <Grid container spacing={0}>
      <Grid
        item
        sm={6}
        sx={{
          background: theme.palette.primary.main,
          height: "100vh",
        }}
      >
        <img
          src={image}
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            transform: "translate(-10%, 0%)",
          }}
        />
      </Grid>
      <Grid
        item
        sm={6}
        sx={{
          background: theme.palette.background.default,
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            background: theme.palette.secondary.main,
            height: "90vh",
            width: "70%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            padding: "0 50px",
          }}
        >
          <Typography variant="h3" color="initial">
            Registro
          </Typography>
          <CustomTextField
            label={"Nombre completo"}
            id={"Nombre"}
            type="text"
          />
          <CustomTextField label={"Correo"} id={"Nombre"} type="text" />
          <CustomTextField label={"Edad"} id={"Edad"} type="number" />
          <CustomTextField
            label={"Fecha de nacimiento"}
            id={"Fecha de nacimiento"}
            type="date"
          />
          <CustomTextField label={"Contraseña"} id={"Nombre"} type="password" />
          <CustomTextField
            label={"Confirmar Contraseña"}
            id={"Nombre"}
            type="password"
          />
          <Button
            variant="contained"
            sx={{
              background: theme.palette.accent.primary,
            }}
            onClick={handlerOnClick}
          >
            Comenzar
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
