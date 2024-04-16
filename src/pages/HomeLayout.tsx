import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <Container  sx={{background: '#F7F3F6', height: '100vh', width: '100vw'}}>
      <Outlet />
    </Container>
  )
}
