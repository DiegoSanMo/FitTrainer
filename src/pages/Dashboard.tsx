import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "../components/Layout/Drawer";

export default function Dashboard() {
  return (
    <main>
      <ResponsiveDrawer>
        <Outlet/>
      </ResponsiveDrawer>
    </main>
  )
}
