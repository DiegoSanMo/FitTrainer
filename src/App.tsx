import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Button, Typography } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <Typography variant="h1">Welcome to My App</Typography>
            <Button variant="contained" color="primary">Click Me</Button>   */}
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
