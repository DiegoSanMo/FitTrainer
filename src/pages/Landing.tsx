import { Container, Typography, styled } from "@mui/material";
import landing from '../assets/landing.png';

const StyledImage = styled('img')`
    width: 70%;
    transform: translate(10px, 10px);
` 
const StyledTextContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Landing() {
  return (
  <Container>
    <StyledTextContainer>
        <Typography
            variant="h1"
            gutterBottom
            sx={{
                color: '#0E0E0E',
                }}>
            Fit Trainer
        </Typography>

        <StyledImage src={landing} alt="landing" />
    </StyledTextContainer>


    <Typography  gutterBottom sx={{fontWeight: 300}}>
        ¡Descubre tu paraíso fitness! Empieza tu camino hacia un tú más saludable y fuerte con nosotros. Desde entrenamientos personalizados hasta orientación de expertos, estamos aquí para apoyar tus metas. ¡Únete a nuestra comunidad vibrante y desata tu potencial hoy mismo!
    </Typography>
  </Container>
  )
}
