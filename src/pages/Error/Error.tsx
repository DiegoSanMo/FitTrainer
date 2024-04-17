import { useNavigate, useRouteError } from "react-router-dom"
import ErrorPage from '../../assets/404.jpeg';
import { Box, Typography } from "@mui/material";
import { ImageContainer, LinkContainer, TextContainer } from "./Error.styles";

export default function Error() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  
  const goTo = () => {
    navigate("/dashboard")
  }
  
  if(error.status === 404){
    return(
      <Box component="section" sx={{width: '100vw', height: '100vh'}}>
        <ImageContainer src={ErrorPage} alt=""/>
        <TextContainer>
          <Typography variant="h3" color="#f7f3f6" sx={{fontWeight: '500'}}> Oops! Page not found </Typography>
          <Typography color="#f7f3f6" sx={{ fontSize: '1.5rem'}}> We can't seem to find the page that you are looking for </Typography>
          <Typography color="#f7f3f6" sx={{ fontSize: '1.5rem'}}></Typography>
          <LinkContainer onClick={goTo} underline="hover">
            Go to Dashboard
          </LinkContainer>
        </TextContainer>

      </Box>

    )
  }
  return (
    <Box component="section" sx={{width: '100vw', height: '100vh'}}>
      <Typography variant="h3" color="initial"> Something went wrong </Typography>
    </Box>
  )
}
