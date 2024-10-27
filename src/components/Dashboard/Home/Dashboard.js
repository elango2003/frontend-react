// import navbar from "../Home/navbar.css";
// import Adminlogin from "../../login/Adminlogin";
// import Home from "./Home/Home";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";
import OffcanvasNav from "./OffcanvasNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Navbar() {
 
  const navigate = new useNavigate();
 

  return (
    <div>
      <div className="nav">
        <OffcanvasNav />
      </div>

      <div className="add-container"></div>
      <Home />
    </div>
  );
}
export default Navbar;
