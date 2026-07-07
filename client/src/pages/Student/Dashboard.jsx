import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const cards = [
    {
      title: "Problems",
      icon: "📚",
      description: "Solve coding problems",
    },
    {
      title: "Leaderboard",
      icon: "🏆",
      description: "View top coders",
    },
    {
      title: "My Submissions",
      icon: "📄",
      description: "View your submitted solutions",
    },
    {
      title: "Profile",
      icon: "👤",
      description: "View your profile",
    },
    {
      title: "Logout",
      icon: "🚪",
      description: "Sign out",
    },
  ];

  const handleCardClick = (title) => {
    switch (title) {
      case "Problems":
        navigate("/problems");
        break;

      case "Leaderboard":
        navigate("/leaderboard");
        break;

      case "My Submissions":
        navigate("/submissions");
        break;

      case "Profile":
        navigate("/profile");
        break;

      case "Logout":
        handleLogout();
        break;

      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-2">
        Welcome, {user?.full_name} 👋
      </h1>

      <p className="text-green-400 font-semibold mb-2">
        Role: {user?.role}
      </p>

      <p className="text-gray-400 mb-10">
        Ready to solve today's coding challenges?
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card.title)}
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

      <div className="mt-12 bg-slate-900 p-6 rounded-xl border border-slate-700 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          Student Information
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

export default Dashboard;