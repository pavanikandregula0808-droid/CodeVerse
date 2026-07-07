import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import toast from "react-hot-toast";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalSubmissions: 0,
    problemsAttempted: 0,
  });

  useEffect(() => {
    fetchProfileStats();
  }, []);

  const fetchProfileStats = async () => {
    try {
      const res = await api.get(`/submissions/profile/${user.id}`);
      setStats(res.data.stats);
    } catch (error) {
      toast.error("Failed to load profile statistics");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate("/student")}
        className="mb-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition"
      >
        ← Back to Dashboard
      </button>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          👤 My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <p className="text-gray-400">Full Name</p>
            <h2 className="text-2xl font-semibold">
              {user?.full_name}
            </h2>
          </div>

          <div>
            <p className="text-gray-400">Email</p>
            <h2 className="text-xl">
              {user?.email}
            </h2>
          </div>

          <div>
            <p className="text-gray-400">Role</p>
            <h2 className="text-xl text-cyan-400">
              {user?.role}
            </h2>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
            <h3 className="text-gray-400">
              Total Submissions
            </h3>

            <p className="text-5xl font-bold text-cyan-400 mt-3">
              {stats.totalSubmissions}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
            <h3 className="text-gray-400">
              Problems Attempted
            </h3>

            <p className="text-5xl font-bold text-green-400 mt-3">
              {stats.problemsAttempted}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;