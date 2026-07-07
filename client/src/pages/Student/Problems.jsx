import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Problems() {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const res = await api.get("/problems");
      setProblems(res.data.problems);
    } catch (error) {
      console.error("Error fetching problems:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Coding Problems 📚
      </h1>

      <div className="grid gap-5">
        {problems.length > 0 ? (
          problems.map((problem) => (
            <div
              key={problem.id}
              onClick={() => navigate(`/problems/${problem.id}`)}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 cursor-pointer hover:border-cyan-400 hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold">
                {problem.title}
              </h2>

              <p className="text-cyan-400 mt-2">
                Difficulty: {problem.difficulty}
              </p>

              <p className="text-gray-300 mt-3">
                {problem.description}
              </p>

              <button
                className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold"
              >
                Solve Problem →
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">
            No problems available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Problems;