import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

const blogParts = [
  {
    id: 1,
    title: "Foundation Questions: Numbers & Basic Logic",
    description:
      "Master the fundamentals with 22 essential number-based questions. The building blocks of all algorithms.",
    tag: "Day 1-3",
    color: "blue",
    href: "/blog/part-1",
  },
  {
    id: 2,
    title: "String Mastery: The Most Asked Category",
    description:
      "18 questions covering everything from reversals to anagrams. Strings appear in 40% of all interviews.",
    tag: "Day 4-7",
    color: "purple",
    href: "/blog/part-2",
  },
  {
    id: 3,
    title: "Arrays & Searching/Sorting: Core DSA",
    description:
      "29 questions on the most important data structure. Includes binary search and all major sorting algorithms.",
    tag: "Day 8-12",
    color: "green",
    href: "/blog/part-3",
  },
  {
    id: 4,
    title: "Recursion, Linked Lists & Matrices",
    description:
      "19 advanced questions to test your deep understanding of memory and pointers.",
    tag: "Day 13-17",
    color: "orange",
    href: "/blog/part-4",
  },
  {
    id: 5,
    title: "Pattern Printing & Interview Strategy",
    description:
      "Final 12+ questions and a complete framework for approaching any new problem in an interview.",
    tag: "Day 18-21",
    color: "red",
    href: "/blog/part-5",
  },
  {
    id: 6,
    title: "Blind 75: Complete FAANG Interview Prep",
    description:
      "The definitive 75 LeetCode questions covering all patterns for top tech interviews. Solutions in Python and C++.",
    tag: "Advanced",
    color: "red",
    href: "/blog/blind-75",
  },
  {
    id: 7,
    title: "Complete Python & C++ Syntax + DSA Reference",
    description:
      "Comprehensive guide to Python and C++ syntax plus all essential data structures and algorithms implementations for interviews.",
    tag: "Reference",
    color: "green",
    href: "/blog/syntax-guide",
  },
  {
    id: 8,
    title: "OOP, Database & System Design Mastery",
    description:
      "Complete guide to object-oriented programming, database theory, and distributed system architecture for technical interviews.",
    tag: "Advanced",
    color: "purple",
    href: "/blog/OA",
  },
  {
    id: 9,
    title: "Entry-Level Interview Answers: 200+ Questions",
    description:
      "Complete answers to 200+ interview questions for 5-10 LPA companies. OOP, SQL, system design, and coding problems with detailed solutions.",
    tag: "Interview Prep",
    color: "green",
    href: "/blog/entry-level-interview-answers",
  },
  {
    id: 10,
    title: "25 Must-Know Interview Puzzles",
    description:
      "Critical thinking puzzles for tech interviews. Master lateral thinking and problem-solving processes used by Google, Microsoft, and quant firms.",
    tag: "Puzzles",
    color: "blue",
    href: "/blog/puzzles",
  },
  {
    id: 11,
    title: "100 QA Interview Questions: Complete Guide",
    description:
      "Comprehensive QA fresher interview preparation with 100 detailed questions covering fundamentals, testing types, automation, and management. Includes exact answer framework.",
    tag: "QA Interview Prep",
    color: "orange",
    href: "/blog/qa-interview-questions-complete-guide",
  },
  {
    id: 12,
    title: "QA Interview Questions & Answers",
    description:
      "Complete QA interview preparation guide with 100 detailed questions covering testing fundamentals, automation, tools, and real-world scenarios with practical examples.",
    tag: "QA Interview Prep",
    color: "green",
    href: "/blog/qa-interview-questions",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-5xl mx-auto pt-12">
        <header className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            The Complete Coding Interview Series
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive 21-day roadmap to master the most common coding
            questions asked in 3-10 LPA job interviews.
          </p>
        </header>

        {/* Golden 20 Featured Section */}
        <div className="space-y-8 mb-16">
          <Link
            href="/blog/golden-20"
            className="group relative block p-1 rounded-3xl bg-linear-to-r from-yellow-500/50 via-orange-500/50 to-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)] transition-all"
          >
            <div className="bg-[#0a0a0a] rounded-[22px] p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <span className="text-4xl">🏆</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Highly Recommended
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                    The Golden 20 Masterclass
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Short on time? Master these 20 questions to learn the 8
                    fundamental patterns that solve 70% of all interview
                    problems.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl group-hover:scale-105 transition-transform">
                    Start Fast Track →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/blog/puzzles"
            className="group relative block p-1 rounded-3xl bg-linear-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] transition-all"
          >
            <div className="bg-[#0a0a0a] rounded-[22px] p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">🧩</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Lateral Thinking
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    25 Must-Know Puzzles
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Master the logic puzzles asked by top tech firms. Learn to
                    think outside the box and communicate your process.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl group-hover:scale-105 transition-transform">
                    Solve Puzzles →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogParts.map((part) => (
            <Link
              key={part.id}
              href={part.href}
              className="group relative p-8 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-blue-500/50 transition-all hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-${part.color}-500/10 text-${part.color}-400 border border-${part.color}-500/20`}
                >
                  {part.tag}
                </span>
                <span className="text-gray-600 font-mono text-sm">
                  0{part.id}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {part.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {part.description}
              </p>
              <div className="flex items-center text-sm font-bold text-blue-400 group-hover:translate-x-2 transition-transform">
                Start Learning <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-3xl bg-linear-to-b from-blue-600/10 to-transparent border border-blue-500/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Why this series?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div>
              <div className="text-blue-400 text-3xl mb-2 font-bold">80+</div>
              <p className="text-sm text-gray-500">Handpicked Questions</p>
            </div>
            <div>
              <div className="text-blue-400 text-3xl mb-2 font-bold">21</div>
              <p className="text-sm text-gray-500">Days Roadmap</p>
            </div>
            <div>
              <div className="text-blue-400 text-3xl mb-2 font-bold">2</div>
              <p className="text-sm text-gray-500">Languages (Py/C++)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
