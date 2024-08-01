import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "About Us",
    key: "about_us",
  },
  {
    label: "What We Do",
    key: "what_we_do",
  },
  {
    label: "News & Events",
    key: "news_events",
  },
  {
    label: "Contact Us",
    key: "contact_us",
  },
];
