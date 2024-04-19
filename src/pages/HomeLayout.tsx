import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function HomeLayout() {
  return (
    <Box component="section">
      <Outlet />
    </Box>
  );
}
