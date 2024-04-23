import { List } from "@mui/material"
import DrawerMenuItem from "./DrawerMenuItem"
import { getMenuItems } from "./MenuItems"

function DrawerMenuItems() {
  return (
    <List>
      {getMenuItems().map((item, index) => <DrawerMenuItem key={`${item.name}-${index}`} name={item.name} icon={item.icon}/>)}
    </List>
  )
}

export default DrawerMenuItems