import React from "react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import {
  Code2,
  Database,
  Server,
  BookOpen,
  Cpu,
  ShieldCheck,
  Zap,
  GitMerge,
  Layers,
  Box,
  Key,
  Globe,
  Lock,
  ArrowRight,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  LayoutTemplate,
  FileCode,
  Workflow,
} from "lucide-react";

// ==========================================
// DESIGN SYSTEM COMPONENTS (Apple-esque UI)
// ==========================================

const Badge = ({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "purple" | "orange" | "neutral" | "green";
}) => {
  const styles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    neutral: "bg-neutral-800 text-neutral-400 border-neutral-700",
  };

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-bold border ${styles[color]}`}
    >
      {children}
    </span>
  );
};

const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
  color,
}: {
  title: string;
  subtitle: string;
  icon: any;
  color: string;
}) => (
  <div className="flex items-start gap-6 mb-16 pt-16 border-t border-neutral-800/50">
    <div
      className={`p-4 rounded-3xl bg-${color}-500/5 border border-${color}-500/10 text-${color}-500 shadow-2xl shadow-${color}-900/20`}
    >
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <div className="space-y-2">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100">
        {title}
      </h2>
      <p className="text-lg text-neutral-500 max-w-2xl font-light leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
);

const CodeBlock = ({ code, lang = "cpp" }: { code: string; lang?: string }) => (
  <div className="relative group my-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#0A0A0A] shadow-inner">
    <div className="absolute top-0 left-0 right-0 h-8 bg-[#0F0F0F] border-b border-neutral-800 flex items-center px-3 space-x-1.5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
      <span className="ml-auto text-[10px] text-neutral-600 font-mono uppercase">
        {lang}
      </span>
    </div>
    <pre className="p-4 pt-10 text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed overflow-x-auto scrollbar-hide">
      <code>{code}</code>
    </pre>
  </div>
);

const ComparisonTable = ({
  title,
  leftTitle,
  rightTitle,
  rows,
}: {
  title: string;
  leftTitle: string;
  rightTitle: string;
  rows: { feature: string; left: string; right: string }[];
}) => (
  <div className="mb-12 overflow-hidden rounded-3xl border border-neutral-800 bg-[#0A0A0A] shadow-lg">
    <div className="bg-neutral-900/30 p-5 border-b border-neutral-800 backdrop-blur-md">
      <h3 className="font-semibold text-lg text-neutral-200 tracking-tight">
        {title}
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900/10">
            <th className="p-5 text-neutral-500 font-medium uppercase text-[10px] tracking-widest w-1/4">
              Feature
            </th>
            <th className="p-5 text-blue-400 font-bold w-1/3 tracking-wide">
              {leftTitle}
            </th>
            <th className="p-5 text-purple-400 font-bold w-1/3 tracking-wide">
              {rightTitle}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800/50">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
              <td className="p-5 text-neutral-400 font-medium">
                {row.feature}
              </td>
              <td className="p-5 text-neutral-300 leading-relaxed">
                {row.left}
              </td>
              <td className="p-5 text-neutral-300 leading-relaxed">
                {row.right}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DeepDiveCard = ({
  title,
  context,
  basics,
  deepDive,
  interview,
  code,
  mistakes,
  id,
}: {
  title: string;
  context: string;
  basics?: string[];
  deepDive: string[];
  interview?: string;
  code?: { snippet: string; lang: string };
  mistakes?: { error: string; fix: string }[];
  id?: string;
}) => (
  <div
    id={id}
    className="group relative bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700/80 rounded-3xl overflow-hidden transition-all duration-500 mb-12 scroll-mt-32"
  >
    <div className="p-8 md:p-10">
      {/* Title Area */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-neutral-100 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-neutral-400 leading-relaxed font-light">{context}</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">
        {/* Left Column: Theory */}
        <div className="space-y-8">
          {/* Basics */}
          {basics && (
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
                <Box size={14} /> The Fundamentals
              </h4>
              <ul className="space-y-3">
                {basics.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-500 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deep Dive */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              <Cpu size={14} /> Engineering Deep Dive
            </h4>
            <ul className="space-y-3">
              {deepDive.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-neutral-300"
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Code & Interview */}
        <div className="flex flex-col h-full space-y-6">
          {code && <CodeBlock code={code.snippet} lang={code.lang} />}

          <div className="mt-auto space-y-4">
            {interview && (
              <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                <h4 className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
                  <Zap size={12} /> Interview Key
                </h4>
                <p className="text-sm text-blue-100/80 italic">"{interview}"</p>
              </div>
            )}

            {mistakes && (
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                <h4 className="flex items-center gap-2 text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">
                  <AlertTriangle size={12} /> Fatal Mistakes
                </h4>
                <ul className="space-y-2">
                  {mistakes.map((m, i) => (
                    <li key={i} className="text-xs text-red-200/70">
                      <span className="font-semibold text-red-400">×</span>{" "}
                      {m.error}
                      <span className="block pl-3 text-neutral-500 mt-0.5">
                        → {m.fix}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==========================================
// DATA CONTENT (The Comprehensive Knowledge)
// ==========================================

export default function TechnicalBible() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-blue-500/20 font-sans">
      <Navbar />

      <div className="max-w-[1400px] mx-auto pt-24 px-6 lg:px-12">
        {/* HERO SECTION */}
        <header className="mb-32 py-20 text-center max-w-4xl mx-auto">
          <Badge color="neutral">The Complete Technical Reference</Badge>
          <h1 className="mt-8 text-6xl md:text-8xl font-semibold tracking-tighter text-white bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
            Mastery.
          </h1>
          <p className="mt-8 text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            A comprehensive deconstruction of Object-Oriented paradigms,
            Database Theory, and Distributed System Architecture. Designed for
            depth, clarity, and retention.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-12">
          {/* SIDEBAR NAVIGATION (Sticky) */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-32 space-y-10 max-h-[85vh] overflow-y-auto pr-2 scrollbar-hide">
              <div className="space-y-4">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest pl-3">
                  01. OOP
                </p>
                <nav className="border-l border-neutral-800 space-y-1">
                  {[
                    "Basics & Memory",
                    "Inheritance Deep Dive",
                    "Abstract vs Interface",
                    "Static & This",
                    "Operator Overloading",
                    "Exception Handling",
                    "SOLID Principles",
                    "Design Patterns",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block pl-4 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-l-white border-l-2 border-transparent transition-all truncate"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest pl-3">
                  02. SQL & DB
                </p>
                <nav className="border-l border-neutral-800 space-y-1">
                  {[
                    "Execution Order",
                    "Joins Deep Dive",
                    "Subqueries & Exists",
                    "Transactions & Locks",
                    "Normalization",
                    "Indexing & B-Trees",
                    "Constraints & Keys",
                    "Delete Truncate Drop",
                    "Views & Procs",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block pl-4 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-l-white border-l-2 border-transparent transition-all truncate"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest pl-3">
                  03. System Design
                </p>
                <nav className="border-l border-neutral-800 space-y-1">
                  {["CAP Theorem", "Sharding", "Caching", "Scenarios"].map(
                    (item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block pl-4 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-l-white border-l-2 border-transparent transition-all truncate"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </nav>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="col-span-12 xl:col-span-10 space-y-32">
            {/* =========================================================================================
                SECTION 1: OBJECT ORIENTED PROGRAMMING
               ========================================================================================= */}
            <section>
              <SectionHeader
                title="Object Oriented Architecture"
                subtitle="Designing resilient software using encapsulation, polymorphism, and memory safety."
                icon={Box}
                color="purple"
              />

              {/* 1.1 BASICS & CLASS STRUCTURE */}
              <DeepDiveCard
                id="basics-&-memory"
                title="1. Classes, Objects & Memory Layout"
                context="Understanding the blueprint vs. the instance, and how they sit in physical memory."
                basics={[
                  "Class: A logical template (User-defined data type). No memory allocated on definition.",
                  "Object: A physical instance of a class. Occupies memory (Stack or Heap).",
                  "Access Modifiers: Public (Open), Private (Self only), Protected (Self + Kids).",
                ]}
                deepDive={[
                  "Memory Padding: Compilers add padding bytes to align data members to word boundaries (structure padding) for CPU efficiency.",
                  "Empty Class Size: In C++, an empty class takes 1 byte (not 0) to ensure distinct objects have distinct addresses.",
                  "This Pointer: A hidden const pointer passed to every non-static member function. It points to the invoking object.",
                ]}
                code={{
                  lang: "cpp",
                  snippet: `class Hero {
    // 1 byte (char) + 3 bytes (padding)
    char rank; 
    // 4 bytes (int)
    int health; 
    
    // Total size = 8 bytes (not 5)
public:
    void heal() {
        // Compiler converts to: heal(Hero* const this)
        this->health = 100;
    }
};`,
                }}
              />

              {/* 1.2 INHERITANCE DEEP DIVE */}
              <DeepDiveCard
                id="inheritance-deep-dive"
                title="2. Inheritance Deep Dive"
                context="Structuring relationships between classes. 'IS-A' relationship mechanics."
                basics={[
                  "Single: A->B. Multilevel: A->B->C. Hierarchical: A->B, A->C.",
                  "Multiple: A->C, B->C (Supported in C++, not Java/C# classes).",
                  "Hybrid: Combination of above.",
                ]}
                deepDive={[
                  "The Diamond Problem: If B & C inherit from A, and D inherits from B & C, D has TWO copies of A. Solution: Virtual Inheritance (class B : virtual public A).",
                  "Constructor Order: Parent -> Child. Destructor Order: Child -> Parent (Stack Unwinding).",
                  "Method Hiding: If Child defines a non-virtual function with same name as Parent, Parent's function is hidden (not overridden).",
                  "Composition over Inheritance: Prefer 'HAS-A' (Member variable) over 'IS-A' for flexibility.",
                ]}
                code={{
                  lang: "cpp",
                  snippet: `class A { public: int x; };
class B : virtual public A { }; // Virtual Base
class C : virtual public A { }; 
class D : public B, public C { };

// Without virtual: D has B::x and C::x (Ambiguity)
// With virtual: D has single shared instance of A::x`,
                }}
                mistakes={[
                  {
                    error: "Non-virtual destructor in Base",
                    fix: "Causes memory leaks. Always make Base destructor virtual.",
                  },
                  {
                    error: "Overriding without 'override'",
                    fix: "Use 'override' keyword to prevent accidental hiding/signature mismatch.",
                  },
                ]}
              />

              {/* 1.3 ABSTRACT VS INTERFACE */}
              <DeepDiveCard
                id="abstract-vs-interface"
                title="3. Abstract Classes vs Interfaces"
                context="Defining contracts vs defining templates."
                basics={[
                  "Abstract Class: Cannot be instantiated. May contain implementation.",
                  "Interface: Pure contract. No state (variables). All methods public abstract (mostly).",
                  "Pure Virtual Function: 'virtual void func() = 0;' makes a class Abstract in C++.",
                ]}
                deepDive={[
                  "State: Abstract classes can have member variables. Interfaces cannot (only static final constants).",
                  "Constructors: Abstract classes have them (called by child). Interfaces do not.",
                  "Multiple Inheritance: A class can implement multiple Interfaces, but extend only one Abstract class.",
                  "Java 8+: Interfaces can have 'default' methods with implementation.",
                ]}
                code={{
                  lang: "java",
                  snippet: `// Abstract Class
abstract class Animal {
    int age; // State allowed
    Animal(int age) { this.age = age; } // Constructor allowed
    abstract void sound(); 
    void breathe() { ... } // Partial implementation
}

// Interface
interface Flyable {
    // int x; // ERROR: Instance variable not allowed
    void fly(); // Implicitly public abstract
}`,
                }}
              />

              {/* 1.4 STATIC & THIS */}
              <DeepDiveCard
                id="static-&-this"
                title="4. Static Members & The 'this' Pointer"
                context="Class-level vs Object-level scope."
                basics={[
                  "Static Variable: Shared copy across ALL objects. Allocated in Data Segment.",
                  "Static Method: Can only access static data. No 'this' pointer.",
                  "main(): Static because it runs before any object is instantiated.",
                ]}
                deepDive={[
                  "Initialization Blocks: 'static { ... }' in Java/C# runs once when class loads.",
                  "Local Static: In C++, static inside a function initializes only once and persists between calls.",
                  "Returning *this: Used for method chaining (e.g., obj.setX().setY()).",
                ]}
                code={{
                  lang: "cpp",
                  snippet: `class Counter {
    static int count; // Shared
public:
    Counter& add() {
        count++;
        return *this; // Return reference for chaining
    }
    static void show() {
        // cout << this->count; // ERROR: No 'this'
        cout << count;
    }
};
int Counter::count = 0; // Definition outside`,
                }}
              />

              {/* 1.5 OPERATOR OVERLOADING & FRIENDS */}
              <DeepDiveCard
                id="operator-overloading"
                title="5. Operator Overloading & Friend Functions"
                context="Giving special meaning to standard operators (+, -, <<) for user types."
                basics={[
                  "Member Function: Left operand must be the object class.",
                  "Friend Function: Non-member function with access to private data. Needed when Left operand is NOT the class (e.g., cout << obj).",
                  "Restrictions: Cannot overload . :: ?: sizeof",
                ]}
                deepDive={[
                  "Assignment (=) vs Copy Constructor: Copy Ctor creates new object. Assignment updates existing object.",
                  "Prefix (++i) vs Postfix (i++): Postfix takes a dummy 'int' argument to differentiate.",
                  "Friendship: Not inherited. Not transitive (Friend of Friend is not Friend).",
                ]}
                code={{
                  lang: "cpp",
                  snippet: `class Complex {
    int r, i;
public:
    // Member overload (c1 + c2)
    Complex operator+(const Complex& other) {
        return Complex(r + other.r, i + other.i);
    }
    // Friend overload (cout << c1)
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.r << "+i" << c.i;
        return os;
    }
};`,
                }}
              />

              {/* 1.6 EXCEPTIONS */}
              <DeepDiveCard
                id="exception-handling"
                title="6. Exception Handling & Safety"
                context="Handling runtime errors gracefully without crashing."
                basics={[
                  "Keywords: try, catch, throw, finally (Java/C#).",
                  "Flow: Execution stops at 'throw', stack unwinds looking for 'catch'.",
                  "Hierarchy: Checked (compile-time) vs Unchecked (runtime) exceptions.",
                ]}
                deepDive={[
                  "RAII (Resource Acquisition Is Initialization): In C++, local objects in 'try' block are destructed during stack unwinding. Use smart pointers.",
                  "noexcept: C++11 specifier promising function won't throw. Allows compiler optimizations.",
                  "Exception Safety Levels: Basic (no leak), Strong (commit/rollback), No-throw.",
                ]}
                code={{
                  lang: "cpp",
                  snippet: `void process() {
    try {
        if (error) throw runtime_error("Fail");
    } catch (const exception& e) {
        // Stack unwinds, destructors called here
        cout << e.what();
    } catch (...) {
        // Catch all
    }
}`,
                }}
              />

              {/* 1.7 SOLID & PATTERNS */}
              <DeepDiveCard
                id="design-patterns"
                title="7. Essential Design Patterns"
                context="Standard solutions to common architectural problems."
                basics={[
                  "Singleton: One instance globally.",
                  "Factory: Create objects without specifying exact class.",
                  "Observer: Publish-Subscribe (YouTube subs).",
                  "Strategy: Swap algorithms at runtime (Sort types).",
                  "Decorator: Add behavior dynamically (Coffee toppings).",
                ]}
                deepDive={[
                  "Thread-Safe Singleton: Double-Checked Locking prevents race conditions during initialization.",
                  "Observer Memory Leak: Lapsed Listener problem if observers aren't deregistered.",
                ]}
                code={{
                  lang: "java",
                  snippet: `// Thread-Safe Singleton
class Singleton {
    private static volatile Singleton instance;
    private Singleton() {} // Private Ctor
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`,
                }}
              />
            </section>

            {/* =========================================================================================
                SECTION 2: DATABASES & SQL
               ========================================================================================= */}
            <section id="sql">
              <SectionHeader
                title="Relational Database Theory"
                subtitle="Data integrity, normalization, and query optimization engines."
                icon={Database}
                color="blue"
              />

              {/* 2.1 EXECUTION ORDER */}
              <DeepDiveCard
                id="execution-order"
                title="1. SQL Query Execution Order"
                context="Why you can't use an alias defined in SELECT inside the WHERE clause."
                basics={[
                  "Lexical Order: SELECT ... FROM ... WHERE ...",
                  "Logical Order: FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT",
                ]}
                deepDive={[
                  "Why: The database first finds the data (FROM/JOIN), filters rows (WHERE), groups them (GROUP BY), filters groups (HAVING), then finally computes values (SELECT).",
                  "Implication: You cannot use calculated columns (e.g., 'Salary * 12 AS Annual') in WHERE. You MUST repeat the calculation or use a CTE/Subquery.",
                ]}
                code={{
                  lang: "sql",
                  snippet: `-- INCORRECT
SELECT Salary * 12 AS Annual FROM Emp WHERE Annual > 100000; -- Error: Annual unknown

-- CORRECT
SELECT Salary * 12 AS Annual FROM Emp WHERE Salary * 12 > 100000;

-- BETTER (Using HAVING for groups)
SELECT Dept, SUM(Salary) as Total 
FROM Emp 
GROUP BY Dept 
HAVING SUM(Salary) > 500000;`,
                }}
              />

              {/* 2.2 JOINS */}
              <DeepDiveCard
                id="joins-deep-dive"
                title="2. Joins Deep Dive"
                context="Combining tables. The power of Relational Databases."
                basics={[
                  "INNER: Match in both.",
                  "LEFT/RIGHT: All from one side + Matches (NULL if no match).",
                  "FULL OUTER: All from both sides.",
                  "CROSS: Cartesian Product (All x All). Warning: Huge result.",
                ]}
                deepDive={[
                  "SELF JOIN: Joining a table to itself. Essential for Hierarchy (Manager/Employee).",
                  "Algorithms: Nested Loop (Small tables), Hash Join (Large unsorted), Merge Join (Sorted data).",
                  "Complexity: Hash Join is O(N+M). Nested Loop is O(N*M).",
                ]}
                code={{
                  lang: "sql",
                  snippet: `-- Self Join: Find Employees earning more than their Manager
SELECT e.Name 
FROM Employee e
JOIN Employee m ON e.ManagerID = m.ID
WHERE e.Salary > m.Salary;`,
                }}
              />

              {/* 2.3 SUBQUERIES */}
              <DeepDiveCard
                id="subqueries-&-exists"
                title="3. Subqueries vs Joins vs EXISTS"
                context="Nested queries. When to use what."
                basics={[
                  "Scalar Subquery: Returns single value.",
                  "Correlated: Inner query references Outer query. Runs once per row (Slow).",
                  "Non-Correlated: Runs once total.",
                ]}
                deepDive={[
                  "IN vs EXISTS: 'IN' builds a list of values. 'EXISTS' short-circuits (stops at first match). EXISTS is faster for checking existence in large tables.",
                  "Performance: Joins are usually faster than Correlated Subqueries because the optimizer can use Hash Joins.",
                ]}
                code={{
                  lang: "sql",
                  snippet: `-- Correlated Subquery (Often Slow)
SELECT * FROM Emp e1 
WHERE Salary > (SELECT AVG(Salary) FROM Emp e2 WHERE e2.DeptID = e1.DeptID);

-- EXISTS (Efficient)
SELECT * FROM Dept d 
WHERE EXISTS (SELECT 1 FROM Emp e WHERE e.DeptID = d.ID);`,
                }}
              />

              {/* 2.4 ACID & TRANSACTIONS */}
              <DeepDiveCard
                id="transactions-&-locks"
                title="4. Transactions, Locks & Concurrency"
                context="Ensuring data safety in a multi-user environment."
                basics={[
                  "ACID: Atomicity, Consistency, Isolation, Durability.",
                  "Commands: BEGIN, COMMIT, ROLLBACK, SAVEPOINT.",
                ]}
                deepDive={[
                  "Pessimistic Locking: Lock row/table before updating. 'SELECT ... FOR UPDATE'. Prevents conflicts but reduces concurrency.",
                  "Optimistic Locking: Check version number on save. If version changed, fail. Good for low-conflict.",
                  "Deadlock: Transaction A waits for B, B waits for A. DB detects and kills one.",
                ]}
                code={{
                  lang: "sql",
                  snippet: `BEGIN TRANSACTION;
UPDATE Inventory SET Qty = Qty - 1 WHERE ID = 101;
-- If error occurs or stock < 0
ROLLBACK;
-- Else
COMMIT;`,
                }}
              />

              {/* 2.5 CONSTRAINTS */}
              <DeepDiveCard
                id="constraints-&-keys"
                title="5. Database Constraints & Keys"
                context="Enforcing rules at the schema level."
                basics={[
                  "Primary Key: Unique + Not Null. Clustered Index.",
                  "Foreign Key: Links tables. Referential Integrity.",
                  "Unique: Unique values, allowed Nulls.",
                ]}
                deepDive={[
                  "Cascade Actions: ON DELETE CASCADE (Delete parent -> Delete children). SET NULL (Delete parent -> Child FK becomes NULL).",
                  "Check Constraint: 'CHECK (Age >= 18)'. Validates data logic.",
                  "Composite Key: PK made of multiple columns. Used in many-to-many junction tables.",
                ]}
              />

              {/* 2.6 DELETE VS TRUNCATE */}
              <ComparisonTable
                title="6. DELETE vs TRUNCATE vs DROP"
                leftTitle="DELETE"
                rightTitle="TRUNCATE"
                rows={[
                  {
                    feature: "Type",
                    left: "DML (Data Manipulation)",
                    right: "DDL (Data Definition)",
                  },
                  {
                    feature: "Rollback",
                    left: "Yes (Transactional)",
                    right: "No (Usually Auto-commit)",
                  },
                  {
                    feature: "Speed",
                    left: "Slow (Logs each row)",
                    right: "Fast (Deallocates pages)",
                  },
                  {
                    feature: "Triggers",
                    left: "Fires ON DELETE triggers",
                    right: "Does NOT fire triggers",
                  },
                  {
                    feature: "Identity",
                    left: "Continues ID sequence",
                    right: "Resets ID to seed",
                  },
                ]}
              />

              {/* 2.7 VIEWS & PROCS */}
              <DeepDiveCard
                id="views-&-procs"
                title="7. Views, Materialized Views & Stored Procs"
                context="Abstraction layers for SQL."
                basics={[
                  "View: Saved query. Virtual table. No data stored. Simplifies complex joins.",
                  "Materialized View: Physical copy of data. Needs REFRESH. Fast reads, stale data.",
                  "Stored Procedure: Pre-compiled SQL script on server.",
                ]}
                deepDive={[
                  "Triggers: Auto-execute on Insert/Update/Delete. 'BEFORE' (Validation) vs 'AFTER' (Logging/Audit).",
                  "Stored Proc Benefits: Reduces network traffic, Security (Grant execute only), Pre-compiled execution plan.",
                ]}
              />

              {/* 2.8 TUNING */}
              <DeepDiveCard
                id="indexing-&-b-trees"
                title="8. Performance Tuning"
                context="Making queries fly."
                basics={[
                  "EXPLAIN ANALYZE: Shows query execution plan (Scan vs Seek).",
                  "N+1 Problem: Fetching parent, then loop fetching children. Fix with JOIN.",
                  "Select *: Never use in production. Kills covering index.",
                ]}
                deepDive={[
                  "Index Seek: O(log N). Jumping to specific node.",
                  "Index Scan: O(N). Reading the whole index.",
                  "Clustered Index: Data stored in leaf nodes. Only 1 per table.",
                  "Connection Pooling: Reusing open DB connections to avoid TCP handshake overhead.",
                ]}
              />
            </section>

            {/* =========================================================================================
                SECTION 3: SYSTEM DESIGN
               ========================================================================================= */}
            <section id="system">
              <SectionHeader
                title="Distributed System Design"
                subtitle="Scaling from 1 user to 1 billion. CAP theorem, Sharding, and Caching."
                icon={Server}
                color="orange"
              />

              {/* 3.1 CAP THEOREM */}
              <DeepDiveCard
                id="cap-theorem"
                title="1. CAP Theorem & Consistency Patterns"
                context="The fundamental trade-off of distributed computing."
                basics={[
                  "Consistency: Every read gets the most recent write.",
                  "Availability: Every request gets a response (no errors).",
                  "Partition Tolerance: System survives network cuts.",
                  "Rule: In a distributed system, P is unavoidable. You choose CP or AP.",
                ]}
                deepDive={[
                  "CP (Banking): If link cuts, refuse writes to prevent data divergence. (MongoDB default, HBase).",
                  "AP (Social Feed): If link cuts, accept writes. Resolve conflicts later. (Cassandra, DynamoDB).",
                  "Eventual Consistency: The system will become consistent over time (Gossip protocols).",
                ]}
                interview="Never say 'I choose CA'. CA is impossible because networks fail. You must handle Partitions."
              />

              {/* 3.2 SCALING & SHARDING */}
              <DeepDiveCard
                id="sharding"
                title="2. Sharding & Consistent Hashing"
                context="How to store 500TB of data when a hard drive is only 10TB."
                basics={[
                  "Vertical Scaling: Bigger CPU/RAM. Easy but expensive. Has a ceiling.",
                  "Horizontal Scaling: More machines. Infinite scale but complex logic.",
                  "Sharding: Splitting data across multiple DB servers.",
                ]}
                deepDive={[
                  "The Problem with 'Mod N': hashing(key) % N servers. If N changes (server crash/add), ALL keys move. Cache thrashing.",
                  "Consistent Hashing: Maps keys and servers to a ring (0-360). Key goes to next server on ring.",
                  "Result: Adding a server only moves keys from its immediate neighbor. O(K/N) movement instead of O(K).",
                  "Virtual Nodes: One physical server acts as multiple nodes on the ring to balance load.",
                ]}
                code={{
                  lang: "python",
                  snippet: `class ConsistentHash:
    def get_node(self, key):
        hash_val = md5(key)
        # Find first node on ring > hash_val
        # If end of ring, wrap to start
        return binary_search(self.ring, hash_val)`,
                }}
              />

              {/* 3.3 CACHING */}
              <DeepDiveCard
                id="caching"
                title="3. Caching Strategies"
                context="Latency is the new outage. Using RAM to bypass Disk."
                basics={[
                  "Why Cache: RAM is ns (nanoseconds), Disk is ms (milliseconds). 1000x difference.",
                  "Cache Hit/Miss: Finding data in Redis vs going to SQL.",
                  "TTL (Time To Live): Auto-expiry of keys.",
                ]}
                deepDive={[
                  "Cache-Aside (Lazy): App reads Cache -> Miss -> Read DB -> Write Cache. (Stale window possible).",
                  "Write-Through: App writes Cache + DB sync. (Safe, slow writes).",
                  "Write-Back: App writes Cache -> Cache async updates DB. (Fastest, data loss risk).",
                  "Thundering Herd: Cache expires, 10k users hit DB at once. Fix: Request Coalescing or Jitter TTL.",
                ]}
              />

              {/* 3.4 REAL WORLD ARCHITECTURE */}
              <DeepDiveCard
                id="scenarios"
                title="4. Design Twitter / News Feed"
                context="The classic 'Fan-out' problem."
                basics={[
                  "Requirements: Post tweets, Follow users, View timeline.",
                  "Scale: Read-heavy (100:1 Read/Write ratio).",
                ]}
                deepDive={[
                  "Pull Model (Fan-out on Load): User visits feed -> Query all follows -> Merge & Sort. Simple, but slow for user.",
                  "Push Model (Fan-out on Write): User tweets -> System writes ID to the pre-computed feed of ALL followers.",
                  "Hybrid Approach: Push for normal users. Pull for Celebrities (Justin Bieber tweeting shouldn't trigger 100M writes).",
                ]}
                interview="Start with Pull. Mention the latency issue. Pivot to Push. Mention the celebrity issue. Pivot to Hybrid. This shows seniority."
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
