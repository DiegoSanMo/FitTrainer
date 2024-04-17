import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Plans, Workout, Customers, Register, Login, Landing, Dashboard, Error } from "./pages/index.ts";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/workout',
          element: <Workout/>
        },
        {
          path: '/plans',
          element: <Plans/>
        },
        {
          path: '/customers',
          element: <Customers/>
        },
        {
          path: '/library',
          element: <h1>library</h1>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        }
      ]
    },
])

function App() {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
     </Suspense>
  );
}

export default App;


