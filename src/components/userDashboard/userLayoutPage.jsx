import React from "react";
import NavBar from "../common/navBar/navBar";
import WithSideBar from "./withSideBar";
import { useState } from "react";

export default function UserLayoutPage({ children }) {
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [postTitle, setPostTitle] = useState(null)

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

  const handleInputTitle =async (event)=> {
    setPostTitle(event.target.value)
   }

  return (
    <>
      <NavBar handleClick={handleClick} handleInputTitle={handleInputTitle} />
      <WithSideBar stateWidth={{ isFullWidth, isSidebarExpanded }}>
        {/* {children} */}
        {React.Children.map(children, child =>
        React.cloneElement(child, {postTitle})
      )}
      </WithSideBar>
    </>
  );
}
