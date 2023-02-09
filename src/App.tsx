import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdminLayout from "./admin-layout/Admin-layout";
import DashbordAdmin from "./admin-layout/DashbordAdmin";
import LoginAdmin from "./admin-layout/LoginAdmin";
import Home from "./main-layout/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
          <Route path="/Admin-Dashbord" element={<AdminLayout />}>
            <Route path="" element={<DashbordAdmin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
