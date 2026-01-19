import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { label: "Home", path: "/" },
    { label: "Reports", path: "/reports" },
    { label: "Settings", path: "/settings" }
  ];

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "➡️" : "⬅️"}
      </div>

      <ul className="menu">
        {menu.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
