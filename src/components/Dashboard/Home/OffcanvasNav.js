import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import '../Home/navbar.css'

const OffcanvasNav = () => {
  const navigate = useNavigate();
  const[logout,setLogout]= useState(false);

  useEffect(()=>{
    if(!localStorage.getItem('auth'))
    navigate('/')
  },[logout])
  

function Logout(event){
  event.preventDefault();
  localStorage.removeItem('auth');
  setLogout(true)
}

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-primary text-white fixed-top shadow ">
          <div class="container-fluid text-white">
            <a class="navbar-brand text-white" href="#">
              Admin
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Admin</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a
                      class="nav-link active text-white r-4"
                      aria-current="page"
                      href="/dashboard"

                    >
                    <b className="pt-4">Home</b> 
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-white" href="#" onClick={Logout}>
                    <b>logout</b>  
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default OffcanvasNav;



{/* <IoHome /> */}
{/* <RiLogoutCircleRLine /> */}