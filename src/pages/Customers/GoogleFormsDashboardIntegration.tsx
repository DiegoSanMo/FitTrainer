import { Box, Grid } from "@mui/material"
import MediaCard from "../../components/Card"

function GoogleFormsDashboardIntegration() {
  const cards = new Array(20).fill(Math.random())
  console.log("cards: ", cards);
  const renderCards = cards.map((card, index) =><Grid key={index} item xs={3}><MediaCard /> </Grid>)
  return (
    <Grid container spacing={2}>
      {renderCards}
    </Grid>
  )
}

export default GoogleFormsDashboardIntegration