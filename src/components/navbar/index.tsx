import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { items } from "./MenuItems";
import { AppstoreOutlined } from "@ant-design/icons";

export const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="px-4">
        <AppstoreOutlined className="text-xl" />
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};
