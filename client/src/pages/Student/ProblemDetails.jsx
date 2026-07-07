import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

function ProblemDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {
    try {
      const res = await api.get(`/problems/${id}`);
      setProblem(res.data.problem);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!code.trim()) {
      alert("Please write your solution before submitting.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/submissions", {
        user_id: user.id,
        problem_id: problem.id,
        code,
      });

      alert(res.data.message);
      setCode("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit solution.");
    } finally {
      setLoading(false);
    }
  };

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Link
        to="/problems"
        className="text-cyan-400 hover:underline"
      >
        ← Back to Problems
      </Link>

      <div className="mt-6 bg-slate-900 p-8 rounded-xl border border-slate-700">
        <h1 className="text-4xl font-bold">
          {problem.title}
        </h1>

        <p className="text-cyan-400 mt-2">
          Difficulty: {problem.difficulty}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Description
          </h2>

          <p>{problem.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Sample Input
          </h2>

          <pre className="bg-slate-800 p-4 rounded">
            {problem.sample_input}
          </pre>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            Sample Output
          </h2>

          <pre className="bg-slate-800 p-4 rounded">
            {problem.sample_output}
          </pre>
        </div>

        {/* Solution Editor */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            Your Solution
          </h2>

          <textarea
            rows={12}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your solution here..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 outline-none focus:border-cyan-400"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Solution"}
        </button>
      </div>
    </div>
  );
}

export default ProblemDetails;