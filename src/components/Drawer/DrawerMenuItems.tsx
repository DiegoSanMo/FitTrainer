import { List } from "@mui/material"
import DrawerMenuItem from "./DrawerMenuItem"
import { MENU_ITEMS } from "./MenuItems"

function DrawerMenuItems() {
  return (
    <List>
      {MENU_ITEMS.map((item, index) => <DrawerMenuItem key={`${item.name}-${index}`} name={item.name} icon={item.icon}/>)}
    </List>
  )
}

export default DrawerMenuItems