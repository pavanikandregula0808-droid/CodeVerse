import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
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

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.password
    ) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/register", formData);

      toast.success(res.data.message);

      setFormData({
        full_name: "",
        email: "",
        password: "",
      });

      // Redirect to Login Page
      navigate("/login");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-700">

        <h2 className="text-3xl font-bold text-white text-center">
          Create Account 🚀
        </h2>

        <p className="text-gray-400 text-center mt-2">
          Join CodeVerse and start solving problems.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;