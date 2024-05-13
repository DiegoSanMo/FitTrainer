import {
  Box,
  TextField,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function srcset(image: string, size: number, rows = 5, cols = 5) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function AddCustomer() {
  const { t } = useTranslation();
  const location = useLocation();
  const { itemResponses, respondentEmail } = location.state;
  // function Slice(a, b) {
  //   itemResponses.slice(a, b);
  // }
  const anSlice = itemResponses.slice(0, 2);
  const ans = anSlice.map((ans) => (
    <div>
      <TextField
        sx={{ width: "30vw", m: 1 }}
        id=""
        label={ans.question}
        value={ans.answer}
        disable
      />
    </div>
  ));

  const reSlice = itemResponses.slice(3, 9);
  const res = reSlice.map((res) => (
    <div>
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label={res.question}
        value={res.answer}
      />
    </div>
  ));
  const TreSlice = itemResponses.slice(9, 15);
  const Tres = TreSlice.map((Tres) => (
    <div>
      <TextField
        id="outlined-multiline-static"
        sx={{ width: "100%" }}
        label={Tres.question}
        defaultValue={Tres.answer}
        disable
        multiline
      />
    </div>
  ));

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <ImageList
            sx={{ width: "30vw", height: "50vh" }}
            variant="quilted"
            cols={1}
            rowHeight={127}
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
          {ans}
          <TextField
            id=""
            sx={{ width: "30vw", m: 1 }}
            label="E-mail"
            value={respondentEmail}
            disable
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            variant="h3"
            color="primary"
            sx={{
              position: "absolute",
              left: "50%",
              margin: "1%",
            }}
          >
            {t("edit-customer.account-detail")}
          </Typography>
          <br />
          <br />
          <br />

          <Paper
            elevation={3}
            sx={{
              width: "20%",
              margin: "1%",
              position: "absolute",
              left: "50%",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                {res}
                <br />
              </div>
            </Box>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              width: "27vw",
              margin: "1%",
              position: "absolute",
              left: "71%",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                {Tres}
                <br />
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
    img: "https:images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "",
    rows: 3,
    cols: 3,
  },
];
