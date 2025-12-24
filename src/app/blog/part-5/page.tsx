import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";

export default function BlogPart5() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-12">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            ← Back to Blog Index
          </Link>
        </nav>

        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            Part 5 of 5
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Patterns & Interview Strategy
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            The final stretch! We'll cover visual pattern logic and, more
            importantly, the framework you need to solve ANY problem an
            interviewer throws at you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                On this page
              </h3>
              <nav className="space-y-2">
                {[
                  "Pyramid Pattern",
                  "Floyd's Triangle",
                  "Diamond Pattern",
                  "Number Pattern",
                  "UMPIRE Method",
                  "Interview Tips",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-400 hover:text-red-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-12 p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-red-400 mb-2">
                Pattern Printing
              </h2>
              <p className="text-sm text-gray-400">
                Mastering nested loops and spatial logic.
              </p>
            </div>

            <QuestionCard
              title="Pyramid Pattern"
              learn="Coordinating spaces and stars in nested loops."
              context="Printing a classic triangle shape. It's all about calculating how many spaces vs how many stars per row."
              steps={[
                "Outer loop for rows (i from 1 to N)",
                "Inner loop 1: Print N-i spaces",
                "Inner loop 2: Print 2*i - 1 stars",
                "Print a newline",
              ]}
              pythonCode={`def print_pyramid(n):
    for i in range(1, n + 1):
        print(" " * (n - i) + "*" * (2 * i - 1))`}
              cppCode={`#include <iostream>
void printPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
}`}
              walkthrough="The number of spaces decreases as we go down, while the number of stars increases. The formula 2*i - 1 ensures an odd number of stars, creating the centered pyramid look."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to print each character.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting the spaces",
                  fix: "Without spaces, you'll just get a left-aligned triangle.",
                },
              ]}
              tryIt="Can you print an inverted pyramid?"
            />

            <QuestionCard
              title="Floyd's Triangle"
              learn="Using a running counter in nested loops."
              context="A right-angled triangle where numbers increase sequentially. 1, then 2 3, then 4 5 6..."
              steps={[
                "Initialize a counter = 1",
                "Outer loop for rows",
                "Inner loop for columns (up to current row number)",
                "Print counter and increment it",
              ]}
              pythonCode={`def floyds_triangle(n):
    num = 1
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(num, end=" ")
            num += 1
        print()`}
              cppCode={`void floydsTriangle(int n) {
    int num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << num << " ";
            num++;
        }
        cout << endl;
    }
}`}
              walkthrough="Unlike other patterns where the value depends on i or j, here we use a global counter that never resets."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "We print N*(N+1)/2 numbers in total.",
              }}
              mistakes={[
                {
                  mistake: "Resetting the counter inside the outer loop",
                  fix: "The counter should be initialized outside all loops to keep increasing.",
                },
              ]}
              tryIt="Can you print the triangle using only even numbers?"
            />

            <QuestionCard
              title="Diamond Pattern"
              learn="Combining normal and inverted pyramids."
              context="Printing a diamond shape. It's essentially a pyramid followed by an inverted pyramid."
              steps={[
                "Print a pyramid of size N",
                "Print an inverted pyramid of size N-1",
              ]}
              pythonCode={`def print_diamond(n):
    # Upper part
    for i in range(1, n + 1):
        print(" " * (n - i) + "*" * (2 * i - 1))
    # Lower part
    for i in range(n - 1, 0, -1):
        print(" " * (n - i) + "*" * (2 * i - 1))`}
              cppCode={`void printDiamond(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= n - i; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
}`}
              walkthrough="We reuse the pyramid logic. The second loop simply runs backwards to create the tapering effect."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to print each character.",
              }}
              mistakes={[
                {
                  mistake: "Starting the second loop from N",
                  fix: "If you start from N, the middle row will be printed twice. Start from N-1.",
                },
              ]}
              tryIt="Can you print a hollow diamond?"
            />

            <QuestionCard
              title="Number Pattern"
              learn="Using loop indices as values."
              context="Printing a triangle of numbers, e.g., 1, 22, 333, 4444..."
              steps={[
                "Outer loop for rows (i from 1 to N)",
                "Inner loop for columns (j from 1 to i)",
                "Print the value of i",
              ]}
              pythonCode={`def number_pattern(n):
    for i in range(1, n + 1):
        for j in range(i):
            print(i, end="")
        print()`}
              cppCode={`void numberPattern(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    }
}`}
              walkthrough="The value printed is the current row number, and it's printed 'row number' times."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to print each digit.",
              }}
              mistakes={[
                {
                  mistake: "Printing j instead of i",
                  fix: "Printing j would give you 1, 12, 123, 1234...",
                },
              ]}
              tryIt="Can you print the pattern 1, 121, 12321, 1234321?"
            />

            <div
              className="my-16 p-8 bg-white/5 border border-white/10 rounded-2xl"
              id="umpire-method"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                The UMPIRE Method
              </h2>
              <p className="text-gray-400 mb-8">
                When you face a problem you've never seen before,
                don't panic. Use this 6-step framework used by engineers at
                Google and Meta.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "U",
                    title: "Understand",
                    desc: "Ask clarifying questions. What are the inputs? What are the edge cases (empty, negative, large)?",
                  },
                  {
                    step: "M",
                    title: "Match",
                    desc: "Does this look like a problem you've seen? Is it a string problem? Can I use two pointers or a hash map?",
                  },
                  {
                    step: "P",
                    title: "Plan",
                    desc: "Write down the steps in plain English (pseudocode). Don't write a single line of code yet!",
                  },
                  {
                    step: "I",
                    title: "Implement",
                    desc: "Now translate your plan into code. Focus on the core logic first.",
                  },
                  {
                    step: "R",
                    title: "Review",
                    desc: "Walk through your code with an example. Did you miss any edge cases?",
                  },
                  {
                    step: "E",
                    title: "Evaluate",
                    desc: "What is the Time and Space complexity? Can you make it faster?",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 p-8 bg-red-600/10 border border-red-500/20 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Congratulations!
              </h2>
              <p className="text-gray-400 mb-8">
                You've completed the 80+ Coding Interview Series. You now
                have the foundation to tackle most entry-level technical
                interviews.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog"
                  className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  Back to Blog Index
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-500 transition-colors"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
