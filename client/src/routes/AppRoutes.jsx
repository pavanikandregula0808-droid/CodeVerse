import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problems from "../pages/Problems/Problems";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;