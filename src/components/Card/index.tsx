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
import img from "../../assets/landing.png";
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
    <Card sx={{ maxWidth: 450, background: "#E8E8E8" }}>
      <CardHeader
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
        // title="Blog Title"
        // subheader="Blog Subtitle"
      />
      {/* <CardMedia sx={{ height: 140 }} image={img} /> */}
      <CardContent sx={{ maxWidth: 450 }}>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {itemResponses[0].answer} - {itemResponses[1].answer} años
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Objetivo principal: {itemResponses[2].answer}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {itemResponses[3].question}: {itemResponses[3].answer}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goTo}>
          Ver mas
        </Button>
        <Button size="small">Crear plan</Button>
      </CardActions>
    </Card>
  );
}
