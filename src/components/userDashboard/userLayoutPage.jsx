import React from "react";
import NavBar from "../common/navBar/navBar";
import WithSideBar from "./withSideBar";
import { useState } from "react";

export default function UserLayoutPage({ children }) {
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  const toggleWidth = () => {
    setIsFullWidth((prevState) => !prevState);
  };

  const handleClick = () => {
    toggleSidebar();
    toggleWidth();
  };

  return (
    <>
      <NavBar handleClick={handleClick} />
      <WithSideBar stateWidth={{ isFullWidth, isSidebarExpanded }}>
        {children}

      </WithSideBar>
      {/* <Footer /> */}
    </>
  );
}
