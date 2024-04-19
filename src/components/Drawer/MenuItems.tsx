import { ReactNode } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface MenuItems {
    name: string;
    icon: ReactNode;
}

export const MENU_ITEMS: MenuItems[] = [
  {
    name: "Formularios pendientes",
    icon: <MailIcon />
  },
  {
    name: "Formularios pendientes",
    icon: <InboxIcon />
  },
  {
    name: "Formularios pendientes",
    icon: <MailIcon />
  },
  {
    name: "Formularios pendientes",
    icon: <InboxIcon />
  },
  {
    name: "Formularios pendientes",
    icon: <MailIcon />
  },
  {
    name: "Formularios pendientes",
    icon: <InboxIcon />
  },
]