import "@/assets/css/mobile-header.css";

import { Icons } from "@/assets/icons";
import React, { useState } from "react";
import { Separator } from "../ui/separator";

const MobileHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button className="border-0" onClick={handleSideBar}>
        <Icons.alignJustify color="white" />
      </button>
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <Separator />
          <li>Game Store</li>
          <Separator />
          <li>Leaderboard</li>
          <Separator />
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
