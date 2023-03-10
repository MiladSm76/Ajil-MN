import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdminLayout from "./admin-layout/Admin-layout";
import DashbordAdmin from "./admin-layout/DashbordAdmin";
import LoginAdmin from "./admin-layout/LoginAdmin";
import Home from "./main-layout/Home";
import LoginUser from "./main-layout/LoginUser";
import MainLayout from "./main-layout/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            
          </Route> 

          <Route path="/Admin-Dashbord" element={<AdminLayout />}>
            <Route path="" element={<DashbordAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
