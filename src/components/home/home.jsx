// dependencies
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// components
import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";

// files
import "./home.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

// Navigate path to home page
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);

// File Execution to DOM 
  return (
    <>
    <NavBar/>

    
    </>
    
  );
}
export default Home;
