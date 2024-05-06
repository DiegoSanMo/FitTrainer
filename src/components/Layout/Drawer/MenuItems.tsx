import { ReactNode } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTranslation } from "react-i18next";

interface MenuItems {
    name: string;
    path: string;
    icon: ReactNode;
}

const MENU_ITEMS: MenuItems[] = [
  {
    name: "dashboard-page.follow-up",
    path: 'follow-up',
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.excercises",
    path: 'excercises',
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.clients",
    path: 'clients',
    icon: <MailIcon />
  },
  {
    name: "dashboard-page.new-client",
    path: 'new-client',
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.new-diet",
    path: 'new-diet',
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.new-workout",
    path: 'new-workout',
    icon: <InboxIcon />
  },
]

export const getMenuItems = () => {
  const { t } = useTranslation();

  return MENU_ITEMS.map(item => ({
    ...item,
    name: t(item.name)
  }));
};