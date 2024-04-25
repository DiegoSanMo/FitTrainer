import { Box, TextField, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function EditCustomer() {
  const location = useLocation();
  const { itemResponses, respondentEmail} = location.state;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            sx={{width: '100%'}}
            id=""
            label="Usuario"
            value={itemResponses[0].answer}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          sx={{width: '100%'}}
            id=""
            label="Correo"
            value={respondentEmail}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
