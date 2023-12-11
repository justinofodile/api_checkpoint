import { DingdingOutlined } from "@ant-design/icons";
import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow-lg bg-gray-300 nav-header">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <DingdingOutlined style={{ color: "maroon", fontSize: "30px" }} />
        <h3 className="text-red-950">OurCompany</h3>
      </div>
    </nav>
  );
};

export default NavBar;
