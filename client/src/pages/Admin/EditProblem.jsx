import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

function EditProblem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    difficulty: "Easy",
    description: "",
    sample_input: "",
    sample_output: "",
  });

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {
    try {
      const res = await api.get(`/problems/${id}`);

      setFormData({
        title: res.data.problem.title,
        difficulty: res.data.problem.difficulty,
        description: res.data.problem.description,
        sample_input: res.data.problem.sample_input,
        sample_output: res.data.problem.sample_output,
      });
    } catch (error) {
      toast.error("Failed to load problem");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.put(`/problems/${id}`, formData);

      toast.success("Problem updated successfully");

      navigate("/admin/problems");
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <button
        onClick={() => navigate("/admin/problems")}
        className="mb-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-xl border border-slate-700">

        <h1 className="text-3xl font-bold mb-8">
          Edit Problem ✏️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Problem Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            required
          />

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
            required
          />

          <textarea
            name="sample_input"
            rows="3"
            placeholder="Sample Input"
            value={formData.sample_input}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
          />

          <textarea
            name="sample_output"
            rows="3"
            placeholder="Sample Output"
            value={formData.sample_output}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800 border border-slate-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
          >
            {loading ? "Updating..." : "Update Problem"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProblem;