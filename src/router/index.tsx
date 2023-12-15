import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../features/signup";
import ProtectedRoute from "./ProtectedRoute";
import AdminPoll from "../pages/adminPoll";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import GuestPoll from "../pages/guestPoll";

interface JwtPayload {
  role: string;
}

const AllRoutes = () => {
  const token = localStorage.getItem("token");
  const roletype = localStorage.getItem("role");

  useEffect(() => {
    if (token) {
      const decode = jwtDecode<JwtPayload>(token);
      localStorage.setItem("role", decode.role);
      // sessionStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/adminpoll"
          element={
            <ProtectedRoute login={token && roletype === "Admin"}>
              <AdminPoll />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userpoll"
          element={
            <ProtectedRoute login={token && roletype === "Guest"}>
              <GuestPoll />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
export default AllRoutes;
