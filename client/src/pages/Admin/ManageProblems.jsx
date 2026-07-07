import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

function ManageProblems() {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const res = await api.get("/problems");
      setProblems(res.data.problems);
    } catch (error) {
      toast.error("Failed to load problems");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this problem?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/problems/${id}`);

      toast.success("Problem deleted successfully");

      fetchProblems();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate("/admin")}
        className="mb-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-4xl font-bold mb-8">
        Manage Problems 📚
      </h1>

      {problems.length === 0 ? (
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 text-center">
          <p className="text-gray-400 text-lg">
            No problems found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {problem.title}
                </h2>

                <p className="text-cyan-400 mt-2">
                  Difficulty: {problem.difficulty}
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    navigate(`/admin/edit-problem/${problem.id}`)
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-black font-semibold transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(problem.id)}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageProblems;