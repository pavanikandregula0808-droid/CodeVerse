import { FaArrowRight } from "react-icons/fa";

function PopularProblems() {
  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "Strings",
    },
    {
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
    },
    {
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Trees",
    },
  ];

  const badgeColor = (difficulty) => {
    if (difficulty === "Easy") return "bg-green-500";
    if (difficulty === "Medium") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Popular Coding Problems
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Practice the most frequently asked interview questions.
        </p>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 flex justify-between items-center hover:border border-cyan-400 transition"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {problem.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {problem.category}
                </p>
              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`${badgeColor(
                    problem.difficulty
                  )} px-4 py-2 rounded-full text-white`}
                >
                  {problem.difficulty}
                </span>

                <button className="text-cyan-400 hover:text-white">
                  <FaArrowRight size={20} />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularProblems;