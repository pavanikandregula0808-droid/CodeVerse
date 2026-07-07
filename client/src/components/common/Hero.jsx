import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
            🚀 AI Powered Coding Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Practice.
            <br />
            <span className="text-cyan-400">Compete.</span>
            <br />
            Get Hired.
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Master coding interviews with AI feedback, coding contests,
            company-specific questions, and real interview simulations.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/register"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Start Coding
            </Link>

            <Link
              to="/problems"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Explore Problems
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-700">

            <div className="flex items-center gap-4 mb-8">
              <FaLaptopCode className="text-5xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">Live Coding</h3>
                <p className="text-gray-400">
                  Solve problems in real-time
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaRocket className="text-5xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">AI Review</h3>
                <p className="text-gray-400">
                  Instant feedback on your code
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCode className="text-5xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">1000+ Challenges</h3>
                <p className="text-gray-400">
                  Easy • Medium • Hard
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;