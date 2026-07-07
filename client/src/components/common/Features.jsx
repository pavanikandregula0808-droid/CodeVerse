import {
  FaRobot,
  FaLaptopCode,
  FaTrophy,
  FaChartLine,
  FaCertificate,
  FaUserTie,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot size={40} />,
      title: "AI Code Review",
      description: "Receive instant AI-powered feedback on your code.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Online Code Editor",
      description: "Write and execute code directly in your browser.",
    },
    {
      icon: <FaTrophy size={40} />,
      title: "Coding Contests",
      description: "Compete with developers from around the world.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Track Progress",
      description: "Monitor your learning journey with analytics.",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Certificates",
      description: "Earn certificates after completing challenges.",
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Mock Interviews",
      description: "Practice real interview questions with AI guidance.",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Why Choose CodeVerse?
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Everything you need to become interview-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;