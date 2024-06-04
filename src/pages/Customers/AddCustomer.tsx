import {
  Box,
  TextField,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Tooltip,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function srcset(image: string, size: number, rows = 5, cols = 5) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export interface QuizI {
  question: string;
  answer: string;
}

export default function AddCustomer() {
  const location = useLocation();
  const { itemResponses, respondentEmail } = location.state;
  const [userData] = useState<QuizI[]>(itemResponses);

  const renderUserContactInfo = () => {
    const userDataInfo = userData.slice(0, 4);
    return (
      <Grid sm={12} spacing={3}>
        {userDataInfo.map((data) => {
          return (
            <TextField
              sx={{ width: "100%", marginTop: "15px" }}
              id=""
              label={data.question}
              value={data.answer}
            />
          );
        })}
      </Grid>
    );
  };

  const renderShortUserQuizAnswers = () => {
    const userQuiz = userData.slice(4, 12);
    return userQuiz.map((data) => {
      return (
        <Grid item sm={4} spacing={3}>
          <Tooltip
            title={data.question}
            placement="top-start"
            arrow
            sx={{ background: "white", color: "black" }}
          >
            <TextField
              sx={{ width: "100%", marginTop: "15px" }}
              id=""
              label={data.question}
              value={data.answer}
            />
          </Tooltip>
        </Grid>
      );
    });
  };

  const renderLongUserQuizAnswers = () => {
    const userQuiz = userData.slice(12, userData.length);
    return userQuiz.map((data) => {
      return (
        <Grid item sm={12} spacing={3}>
          <Tooltip
            title={data.question}
            placement="top-start"
            arrow
            sx={{ background: "white", color: "black" }}
          >
            <TextField
              sx={{ width: "100%", height: "40px", marginTop: "15px" }}
              id=""
              label={data.question}
              value={data.answer}
            />
          </Tooltip>
        </Grid>
      );
    });
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: "30px" }}>
        <Grid container direction={"row"} spacing={3}>
          <Grid item sm={6}>
            <ImageList
              sx={{ width: "100%", height: "auto" }}
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
          </Grid>
          <Grid item sm={6}>
            {renderUserContactInfo()}
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Grid sm={12} container direction={"row"} spacing={2}>
          {renderShortUserQuizAnswers()}
        </Grid>
        <Grid
          sm={12}
          container
          direction={"row"}
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          {renderLongUserQuizAnswers()}
        </Grid>
      </Paper>
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
