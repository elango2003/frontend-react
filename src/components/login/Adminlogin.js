import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../login/login.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../Dashboard/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginValidation from "./LoginValidation";

const Adminlogin = () => {
  const navigate = useNavigate();
  const [errors, setError] = useState({});
  const [Data, setData] = useState([]);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  function handleValidation(event) {
    event.preventDefault();
    setError(LoginValidation(values));
    handleSubmit();
  }

  useEffect(()=>{
    if(localStorage.getItem('auth'))
    navigate('/dashboard')
  },[])

  async function handleSubmit() {
    try {
      await instance
        .get("/checkuser/" + values.username + "/" + values.password)
        .then((response) => {
          console.log(response.data)
          if(response.data.success==true){
          toast.success("Login success", { theme: "colored" });
          
          navigate("/dashboard");
          localStorage.setItem('auth',true)
          }
          else{
            toast.error("User Not Found", { theme: "colored" });
          }
        });
    } catch (error) {
      console.log(error);
    }
    
    // if (Data.userName === values.username) {
     
    // } else {
    //   toast.error("Invalid username or password", { theme: "colored" });
    // }
    
  }

  return (
    <div className="backgroundimg">
      <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 ">
      <div className=" shadow-lg 40-w p-5 rounded bg-white">
        <form onSubmit={handleValidation}>
          <h3 className="text-center mb-3 ">Login</h3>
          <div className="mb-4">
            <input
              name="username"
              className="form-control"
              // value={values.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
            ></input>
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              className="form-control"
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            ></input>
            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.password}
              </p>
            )}
          </div>
          <div className="d-grid">
            <button className="btn btn-primary shadow" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Adminlogin;
