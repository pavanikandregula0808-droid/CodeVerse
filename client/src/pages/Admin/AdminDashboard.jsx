import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const cards = [
    {
      title: "Add Problem",
      icon: "➕",
      description: "Create a new coding problem",
      action: () => navigate("/admin/add-problem"),
    },
    {
      title: "Manage Problems",
      icon: "📚",
      description: "View and delete problems",
      action: () => navigate("/admin/problems"),
    },
    {
      title: "Student Dashboard",
      icon: "🎓",
      description: "Open student dashboard",
      action: () => navigate("/student"),
    },
    {
      title: "Logout",
      icon: "🚪",
      description: "Sign out",
      action: handleLogout,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-2">
        👨‍💼 Admin Dashboard
      </h1>

      <p className="text-green-400 text-lg">
        Welcome, <strong>{user?.full_name}</strong>
      </p>

      <p className="text-cyan-400 mb-10">
        Role: <strong>{user?.role}</strong>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={card.action}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 cursor-pointer hover:border-cyan-400 hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-4">{card.icon}</div>

            <h2 className="text-xl font-bold">
              {card.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-900 p-6 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4">
          Admin Information
        </h2>

        <p className="mb-2">
          <strong>Name:</strong> {user?.full_name}
        </p>

        <p className="mb-2">
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Role:</strong> {user?.role}
        </p>
      </div>
    </div>
  );
}

export default AdminDashboard;