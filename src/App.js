import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";  // Import HashRouter
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
      <HashRouter>  {/* Replace BrowserRouter with HashRouter */}
        <Routes>
          <Route exact path="/" element={<Adminlogin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create" element={<Create />} />
          <Route path="/dashboard/details/:userid" element={<Detail />} />
          <Route path="/dashboard/edit/:userid" element={<Edit />} />
          <Route path="/dashboard/treatment/:userid" element={<Treatment />} />
          <Route path="/dashboard/medication" element={<Treatment />} />
          <Route path="/dashboard/history/:userid" element={<History />} />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
