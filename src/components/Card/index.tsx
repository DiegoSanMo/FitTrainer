import Avatar from "@mui/material/Avatar";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/pika.jpg";
import { GoogleFormsI } from "../../pages/Customers/GoogleFormsDashboardIntegration";
import { useNavigate } from "react-router-dom";

/**
 * TODO
 * This should be changes to be more like a generic component and not exclusive of the clients
 * The button labels could be props and also de content should be a child prop
 * suggestions props could be:
 * action sections -> react node
 * content -> child prop
 * header card section -> react node and add a default functionality that could be a cardMedia component
 * a prop to changes the card style
 *
 * @returns
 */
export default function MediaCard({
  timestamp,
  respondentEmail,
  itemResponses,
}: GoogleFormsI) {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("./customer", {
      state: { timestamp, respondentEmail, itemResponses },
    });
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        background: "#E8E8E8",
        borderRadius: "20px",
      }}
      elevation={5}
    >
      {/* <CardHeader
        avatar={
          <Avatar
            sx={{
              height: 150,
              width: 150,
              left: "50%",
              align: "center",
            }}
            src={img}
          />
        }
      /> */}
      <CardMedia sx={{ height: 140, borderRadius: "15px" }} image={img} />
      <CardContent sx={{ maxWidth: 400 }}>
        <Typography
          wrap
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
        >
          {itemResponses[0].answer.slice(0, 10)} - {itemResponses[1].answer}
          años
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Objetivo principal: {itemResponses[2].answer.trim()}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {itemResponses[3].question.trim()}: {itemResponses[3].answer.trim()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goTo}>
          Ver mas
        </Button>
        <Button variant="contained" size="small" sx={{ borderRadius: "30px" }}>
          Crear plan
        </Button>
      </CardActions>
    </Card>
  );
}
