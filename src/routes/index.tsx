import { createBrowserRouter } from "react-router-dom"
import { HomeLayout, ErrorP, Landing, Register, Login, Workout, Plans, Customers, Dashboard, GoogleForms, EditCustomer } from "../pages";

const ROUTER = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout/>,
      errorElement: <ErrorP/>,
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
          element: <Dashboard/>,
          children: [
            {
              index: true,
              element: <GoogleForms/>
            },
            {
              path: 'customer',
              element:<EditCustomer/>
            },
          ]
        }
      ]
    },
  ])

  export default ROUTER;