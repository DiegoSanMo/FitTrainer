// import { useTranslation } from "react-i18next";
import { Box, Typography, styled, TextField, Paper } from "@mui/material";
export default function Register() {
  const PaperStyled = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Box
      component="section"
      width="50vw"
      sx={{ display: "flex", position: "absolute", top: "10%" }}
    >
      <PaperStyled>
        <Paper elevation={3}>
          <Typography variant="h3" color="initial" justify-content=" center">
            Registrate
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                defaultValue=""
              />
              <TextField
                required
                id="outlined-required"
                label="Apellido"
                defaultValue=""
              />
              <TextField
                required
                id="outlined-required"
                label="E-mail"
                defaultValue=""
              />
              <TextField
                id="outlined-number"
                label="Edad"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Box>
        </Paper>
      </PaperStyled>
    </Box>
  );
}
