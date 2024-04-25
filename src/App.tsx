import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import { Suspense, createContext, useMemo, useState } from "react";
import { CssBaseline, PaletteMode, createTheme } from "@mui/material";
import ROUTER from "./routes";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Suspense fallback="loading">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={ROUTER}/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Suspense>
  );
}

export default App;


