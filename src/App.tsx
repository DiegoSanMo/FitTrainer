import './App.css'

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Button, Typography } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={theme}>
        
      <Typography variant="h1">Welcome to My App</Typography>
      <Button variant="contained" color="primary">Click Me</Button>

    </ThemeProvider>
  )
}

export default App
