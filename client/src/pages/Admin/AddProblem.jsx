import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProblem() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    difficulty: "Easy",
    description: "",
    sample_input: "",
    sample_output: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/problems", formData);

      toast.success("Problem Added Successfully 🎉");

      navigate("/admin");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add problem"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Add New Problem ➕
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-3xl"
      >
        <input
          name="title"
          placeholder="Problem Title"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <select
          name="difficulty"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          rows="5"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <textarea
          name="sample_input"
          placeholder="Sample Input"
          rows="3"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <textarea
          name="sample_output"
          placeholder="Sample Output"
          rows="3"
          onChange={handleChange}
          className="w-full p-3 rounded bg-slate-800"
        />

        <button
          className="bg-cyan-500 px-6 py-3 rounded hover:bg-cyan-600"
        >
          Add Problem
        </button>
      </form>
    </div>
  );
}

export default AddProblem;