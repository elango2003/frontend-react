import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./components/login/Adminlogin";
import Home from "./components/Dashboard/Home/Home";
import Dashboard from "./components/Dashboard/Home/Dashboard";
import Create from "./components/Dashboard/Create";
import Detail from "./components/Dashboard/Detail";
import Edit from "./components/Dashboard/Edit";
import { ToastContainer } from "react-toastify";
import Treatment from "./components/Home/Treatment";
import 'bootstrap/dist/css/bootstrap.min.css';
import History from "./components/History/History";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Adminlogin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<Create />}></Route>
          <Route path='/dashboard/details/:userid' element={<Detail />}></Route>
          <Route path='/dashboard/edit/:userid' element={<Edit />}></Route>
          <Route path='/dashboard/treatment/:userid' element={<Treatment />}></Route>
          <Route path='/dashboard/medication' element={<Treatment />}></Route>
          <Route path='/dashboard/history/:userid' element={<History />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
