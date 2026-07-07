import { FaUsers, FaCode, FaTrophy, FaBuilding } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers size={35} />,
      number: "50K+",
      label: "Developers",
    },
    {
      icon: <FaCode size={35} />,
      number: "5,000+",
      label: "Coding Problems",
    },
    {
      icon: <FaTrophy size={35} />,
      number: "250+",
      label: "Coding Contests",
    },
    {
      icon: <FaBuilding size={35} />,
      number: "100+",
      label: "Hiring Companies",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-14">
          Trusted by Developers Worldwide
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-cyan-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;