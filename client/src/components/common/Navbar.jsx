import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link to="/" className="text-2xl font-bold text-cyan-400">
          CodeVerse
        </Link>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;