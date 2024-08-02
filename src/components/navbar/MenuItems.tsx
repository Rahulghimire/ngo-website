import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
  },
  {
    key: "about_us",
    label: <Link to="/about-us">About Us</Link>,
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
