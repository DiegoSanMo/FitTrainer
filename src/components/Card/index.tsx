import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../assets/landing.png'
import { GoogleFormsI } from '../../pages/Customers/GoogleFormsDashboardIntegration';
import { useNavigate } from 'react-router-dom';

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
export default function MediaCard( { timestamp, respondentEmail, itemResponses}: GoogleFormsI) {
  const navigate = useNavigate();
  
  const goTo = () => {
    navigate("./customer", {state:{timestamp, respondentEmail, itemResponses}})
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='primary'>
          {itemResponses[0].answer} - {itemResponses[1].answer} anios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Objetivo principal: {itemResponses[2].answer}
        </Typography>
        <Typography variant="body2" color="text.primary">
        {itemResponses[3].question}: {itemResponses[3].answer}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goTo}>Ver mas</Button>
        <Button size="small">Crear plan</Button>
      </CardActions>
    </Card>
  );
}