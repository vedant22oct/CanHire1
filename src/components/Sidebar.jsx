import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router";

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
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
