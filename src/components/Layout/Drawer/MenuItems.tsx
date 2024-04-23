import { ReactNode } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useTranslation } from "react-i18next";

interface MenuItems {
    name: string;
    icon: ReactNode;
}

const MENU_ITEMS: MenuItems[] = [
  {
    name: "dashboard-page.new-clients",
    icon: <MailIcon />
  },
  {
    name: "dashboard-page.follow-up",
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.new-clients",
    icon: <MailIcon />
  },
  {
    name: "dashboard-page.excercises",
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.clients",
    icon: <MailIcon />
  },
  {
    name: "dashboard-page.new-client",
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.new-diet",
    icon: <InboxIcon />
  },
  {
    name: "dashboard-page.new-workout",
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