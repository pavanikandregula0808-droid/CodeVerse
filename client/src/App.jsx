import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Dashboard from "./pages/Student/Dashboard";
import Problems from "./pages/Student/Problems";
import ProblemDetails from "./pages/Student/ProblemDetails";
import MySubmissions from "./pages/Student/MySubmissions";
import Leaderboard from "./pages/Student/Leaderboard";
import Profile from "./pages/Student/Profile";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProblem from "./pages/Admin/AddProblem";
import ManageProblems from "./pages/Admin/ManageProblems";
import EditProblem from "./pages/Admin/EditProblem";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Dashboard */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Problems */}
        <Route
          path="/problems"
          element={
            <ProtectedRoute>
              <Problems />
            </ProtectedRoute>
          }
        />

        {/* Problem Details */}
        <Route
          path="/problems/:id"
          element={
            <ProtectedRoute>
              <ProblemDetails />
            </ProtectedRoute>
          }
        />

        {/* My Submissions */}
        <Route
          path="/submissions"
          element={
            <ProtectedRoute>
              <MySubmissions />
            </ProtectedRoute>
          }
        />

        {/* Leaderboard */}
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* Add Problem */}
        <Route
          path="/admin/add-problem"
          element={
            <AdminRoute>
              <AddProblem />
            </AdminRoute>
          }
        />

        {/* Manage Problems */}
        <Route
          path="/admin/problems"
          element={
            <AdminRoute>
              <ManageProblems />
            </AdminRoute>
          }
        />

        {/* Edit Problem */}
        <Route
          path="/admin/edit-problem/:id"
          element={
            <AdminRoute>
              <EditProblem />
            </AdminRoute>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
              <h1 className="text-3xl font-bold">
                404 - Page Not Found
              </h1>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;