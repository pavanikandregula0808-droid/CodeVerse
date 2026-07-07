import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

function Leaderboard() {
  const navigate = useNavigate();
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await api.get("/submissions/leaderboard");
      setLeaders(res.data.leaderboard);
    } catch (error) {
      toast.error("Failed to load leaderboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <button
        onClick={() => navigate("/student")}
        className="mb-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-8">
        🏆 Leaderboard
      </h1>

      <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Rank</th>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-center">Submissions</th>
            </tr>
          </thead>

          <tbody>
            {leaders.map((leader, index) => (
              <tr
                key={leader.id}
                className="border-t border-slate-700 hover:bg-slate-800"
              >
                <td className="p-4 font-bold">
                  #{index + 1}
                </td>

                <td className="p-4">
                  {leader.full_name}
                </td>

                <td className="p-4 text-gray-400">
                  {leader.email}
                </td>

                <td className="p-4 text-center font-bold text-cyan-400">
                  {leader.submissions}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Leaderboard;