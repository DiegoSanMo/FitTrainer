import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ReactNode } from "react";

interface MenuItemProps {
  name: string;
  icon: ReactNode;
} 

function DrawerMenuItem({name, icon}: MenuItemProps) {
  return (
    <ListItem key={name} disablePadding>
    <ListItemButton>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
  )
}

export default DrawerMenuItem