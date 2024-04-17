import { Container, Typography, styled } from "@mui/material";
import landing from '../assets/landing.png';
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
  return (
  <Container>
    <StyledTextContainer>
        <Typography
            variant="h1"
            gutterBottom
            sx={{
                color: '#0E0E0E',
                }}>
            {t('landing-page.title')}
        </Typography>
        <StyledImage src={landing} alt="landing" />
    </StyledTextContainer>

    <Typography  gutterBottom sx={{fontWeight: 300}}>
        {t('landing-page.description')}
    </Typography>
  </Container>
  )
}
