import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/login", formData);

      // Save user & token using AuthContext
      login(res.data.user, res.data.token);

      toast.success("Login Successful 🎉");

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700">

        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Login to continue your coding journey.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;