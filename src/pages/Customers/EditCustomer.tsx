import {
  Box,
  TextField,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  Paper,
  Input,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function EditCustomer() {
  const { t } = useTranslation();
  const location = useLocation();
  const { itemResponses, respondentEmail } = location.state;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageList
            sx={{ width: "30vw", height: "50vh" }}
            variant="quilted"
            cols={1}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <TextField
            sx={{ width: "77%", top: "0%" }}
            id=""
            label="Usuario"
            value={itemResponses[0].answer}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" color="primary">
            {t("edit-customer.account-detail")}
          </Typography>

          <Paper elevation={3} sx={{ margin: "0%" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "98%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  id="standard-basic"
                  label="Correo"
                  value={respondentEmail}
                />
                <br />
                <FormControl
                  variant="standard"
                  sx={{ width: "97%", margin: "1em" }}
                >
                  <InputLabel htmlFor="component-simple">Name</InputLabel>
                  <Input
                    id="component-simple"
                    defaultValue={itemResponses[0].answer}
                  />
                </FormControl>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "",
    rows: 3,
    cols: 3,
  },
];
