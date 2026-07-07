import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import { Link } from "react-router-dom";

function MySubmissions() {
  const { user } = useAuth();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await api.get(`/submissions/${user.id}`);
      setSubmissions(res.data.submissions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <Link
        to="/student"
        className="text-cyan-400 hover:underline"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-8">
        My Submissions 📄
      </h1>

      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="space-y-5">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700"
            >
              <h2 className="text-2xl font-bold">
                {submission.title}
              </h2>

              <p className="text-green-400 mt-2">
                Status: {submission.status}
              </p>

              <p className="text-gray-400 mt-2">
                Submitted:
                {" "}
                {new Date(submission.submitted_at).toLocaleString()}
              </p>

              <pre className="bg-slate-800 mt-4 p-4 rounded overflow-auto">
                {submission.code}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MySubmissions;