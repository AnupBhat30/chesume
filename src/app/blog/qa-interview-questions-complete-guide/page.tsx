import React from "react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import {
  CheckCircle2,
  BookOpen,
  Target,
  Settings,
  Zap,
  ClipboardList,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  MessageSquare,
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
  questionCount,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  color: string;
  questionCount: number;
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
      <Badge
        color={color as "blue" | "purple" | "orange" | "neutral" | "green"}
      >
        {questionCount} Questions
      </Badge>
    </div>
  </div>
);

const QuestionAnswerCard = ({
  questionNumber,
  question,
  approach,
  answer,
  category,
  id,
}: {
  questionNumber: number;
  question: string;
  approach: string;
  answer: string;
  category: string;
  id?: string;
}) => (
  <div
    id={id}
    className="group relative bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700/80 rounded-3xl overflow-hidden transition-all duration-500 mb-8 scroll-mt-32"
  >
    <div className="p-8 md:p-10">
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
            Q{questionNumber}
          </span>
          <Badge color="neutral">{category}</Badge>
        </div>
        <h3 className="text-xl font-semibold text-neutral-100 mb-2 tracking-tight">
          {question}
        </h3>
      </div>

      {/* Approach */}
      <div className="mb-6">
        <h4 className="flex items-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">
          <Target size={16} /> Answer Approach
        </h4>
        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
          <p className="text-sm text-blue-200/80 italic leading-relaxed">
            {approach}
          </p>
        </div>
      </div>

      {/* Answer */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-bold text-green-400 uppercase tracking-widest mb-3">
          <CheckCircle2 size={16} /> Detailed Answer
        </h4>
        <div className="prose prose-invert max-w-none">
          <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function QACompleteGuideBlog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-12">
        <nav className="mb-12">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            ← Back to Blog Index
          </Link>
        </nav>

        <header className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
            Ultimate Interview Preparation
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-green-200 to-gray-500 bg-clip-text text-transparent">
            100 QA Interview Questions & Answers
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Complete guide covering fundamentals, testing types, automation,
            tools, and real-world scenarios with detailed explanations and
            practical examples.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Badge color="green">100 Questions</Badge>
            <Badge color="blue">Detailed Answers</Badge>
            <Badge color="purple">Real Examples</Badge>
            <Badge color="orange">Tool Explanations</Badge>
          </div>
        </header>

        {/* Framework Introduction */}
        <section className="mb-20 p-8 bg-neutral-900/50 border border-neutral-800 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            How to Answer Questions - The Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <h3 className="text-sm font-semibold text-blue-400 mb-2">
                  1. DEFINITION-BASED
                </h3>
                <p className="text-sm text-neutral-300">
                  Start with clear definition → Explain importance → Give
                  practical example
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">
                  2. SCENARIO-BASED
                </h3>
                <p className="text-sm text-neutral-300">
                  Use STAR Method → Be specific with examples from experience
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                <h3 className="text-sm font-semibold text-orange-400 mb-2">
                  3. TOOL-BASED
                </h3>
                <p className="text-sm text-neutral-300">
                  Define tool → Explain purpose → Describe usage → Mention
                  features & examples
                </p>
              </div>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <h3 className="text-sm font-semibold text-green-400 mb-2">
                  4. COMPARISON
                </h3>
                <p className="text-sm text-neutral-300">
                  Define both → List key differences → Mention when to use each
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="space-y-24">
          {/* Fundamentals Section */}
          <section id="fundamentals">
            <SectionHeader
              title="Fundamentals"
              subtitle="Master the core concepts that form the foundation of software testing and quality assurance."
              icon={BookOpen}
              color="blue"
              questionCount={15}
            />

            <QuestionAnswerCard
              questionNumber={1}
              question="What is Quality Assurance and how does it differ from Quality Control?"
              approach="Definition + Key Differences + Real Example"
              answer={`Quality Assurance (QA) is a proactive, process-oriented approach that focuses on preventing defects by establishing proper processes, standards, and methodologies throughout the software development lifecycle. Quality Control (QC), on the other hand, is a reactive, product-oriented approach that focuses on identifying defects in the final product through testing.

The key differences are:
• QA is preventive (stops bugs from happening), QC is detective (finds existing bugs)
• QA involves the entire team and SDLC, QC is primarily done by testers
• QA defines processes like code reviews and standards, QC executes tests on the product

For example, in QA, we might establish a requirement review process to catch ambiguous requirements early. In QC, we would execute test cases on the built feature to find bugs before release.`}
              category="Fundamentals"
              id="qa-vs-qc"
            />

            <QuestionAnswerCard
              questionNumber={2}
              question="What is software testing and why is it important?"
              approach="Definition + Purpose + Business Impact + Example"
              answer={`Software testing is the process of evaluating and verifying that a software application or system meets specified requirements and works as expected. It involves executing the software with the intent of finding defects, ensuring quality, and validating that it satisfies user needs.

Testing is important because:
• Identifies defects before they reach production, saving costly fixes
• Ensures software meets user requirements and business goals
• Builds confidence in the product reliability and performance
• Reduces risk of financial losses from software failures
• Protects brand reputation and customer trust

For example, without proper testing, a banking app might allow users to withdraw money they don't have, leading to financial losses and loss of customer trust.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={3}
              question="Explain the difference between verification and validation."
              approach="Definition + Key Differences + Example"
              answer={`Verification is the process of checking whether the software meets the specified requirements and design specifications. It answers the question "Are we building the product right?"

Validation is the process of checking whether the software meets the actual user needs and requirements. It answers the question "Are we building the right product?"

Key differences:
• Verification: "Did we build it correctly according to specs?"
• Validation: "Did we build the correct thing for users?"
• Verification is done during development, validation at the end
• Verification uses documents and code, validation uses actual product

Example: Verification would check if the login form has all required fields as per design document. Validation would check if users can actually log in successfully and the process is user-friendly.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={4}
              question="What is the Software Development Life Cycle (SDLC)?"
              approach="Definition + Phases + Testing Integration"
              answer={`SDLC is a systematic process for planning, creating, testing, and deploying software applications. It provides a structured approach to software development that ensures quality and efficiency.

The main phases are:
1. Planning: Define project scope, timeline, resources, and requirements
2. Analysis: Gather and analyze detailed requirements from stakeholders
3. Design: Create system architecture and detailed design specifications
4. Implementation/Coding: Write the actual code based on design
5. Testing: Verify and validate the software meets requirements
6. Deployment: Release software to production environment
7. Maintenance: Monitor, fix bugs, and add new features

Testing is integrated throughout SDLC:
• Unit testing during implementation
• Integration testing after coding
• System testing before deployment
• User acceptance testing before release
• Maintenance testing for updates

This ensures quality is built into every phase rather than tested at the end.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={5}
              question="What is the Software Testing Life Cycle (STLC)?"
              approach="Definition + Phases + Entry/Exit Criteria"
              answer={`STLC is a systematic approach to testing that follows a sequence of activities to ensure comprehensive test coverage. It defines what testing activities should be performed and when.

The phases are:
1. Requirement Analysis: Understand requirements, identify testable features
2. Test Planning: Define scope, strategy, resources, timeline, and test environment
3. Test Case Design: Write detailed test cases and test scripts
4. Test Environment Setup: Prepare hardware, software, and data for testing
5. Test Execution: Run tests, log defects, retest fixes
6. Test Closure: Evaluate test completion, prepare test summary report

Each phase has entry and exit criteria:
• Entry Criteria: Prerequisites that must be met before starting the phase
• Exit Criteria: Conditions that must be satisfied to complete the phase

For example, you can't start test execution until test cases are reviewed and approved, and test environment is ready.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={6}
              question="What are the different levels of testing?"
              approach="List All Levels + Explanation + When Each Is Done"
              answer={`Testing levels are different stages where testing is performed, each focusing on different aspects of the software.

1. Unit Testing: Tests individual components/modules in isolation
   • Done by developers during coding
   • Focuses on smallest testable parts
   • Example: Testing a single function that calculates total price

2. Integration Testing: Tests interaction between integrated components
   • Done after unit testing
   • Focuses on data flow between modules
   • Example: Testing if login module works with user database

3. System Testing: Tests complete system as a whole
   • Done after integration testing
   • Focuses on end-to-end functionality
   • Example: Testing complete user registration to purchase flow

4. Acceptance Testing: Tests if system meets user requirements
   • Done before production release
   • Focuses on business requirements
   • Types: Alpha (internal), Beta (external users), UAT (end users)

Each level catches different types of defects and ensures quality at every stage.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={7}
              question="What is the difference between functional and non-functional testing?"
              approach="Definition + Key Differences + Examples"
              answer={`Functional testing verifies that the software works according to specified requirements. It tests "what" the system does.

Non-functional testing verifies how well the system performs. It tests "how" the system behaves.

Key differences:
• Functional: Tests features, business logic, user interactions
• Non-functional: Tests performance, security, usability, reliability
• Functional: Pass/fail based on requirements
• Non-functional: Measured against benchmarks and standards

Examples:
Functional: Login with valid credentials should work
Non-functional: Login should complete within 2 seconds under 1000 concurrent users

Functional testing ensures the software does what it's supposed to do. Non-functional testing ensures it does it well.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={8}
              question="What is a test case? What are its key components?"
              approach="Definition + Components + Example"
              answer={`A test case is a detailed document that describes the inputs, actions, and expected results for testing a specific feature or functionality.

Key components:
1. Test Case ID: Unique identifier
2. Test Scenario: What is being tested
3. Test Case Title: Brief description
4. Preconditions: What must be set up before testing
5. Test Steps: Step-by-step instructions
6. Test Data: Input values to use
7. Expected Result: What should happen
8. Actual Result: What actually happened
9. Pass/Fail: Test outcome
10. Priority/Severity: Importance and impact

Example Test Case:
ID: TC_LOGIN_001
Title: Verify login with valid credentials
Preconditions: User account exists in database
Steps:
1. Navigate to login page
2. Enter valid email and password
3. Click Login button
Expected: User redirected to dashboard with welcome message
Actual: [Filled after execution]

Well-written test cases ensure consistent, repeatable testing.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={9}
              question="What is a test scenario?"
              approach="Definition + Difference from Test Case + Example"
              answer={`A test scenario is a high-level description of what needs to be tested, focusing on end-to-end functionality from a user's perspective. It's a "what to test" document.

Difference from test case:
• Test Scenario: High-level, describes functionality to test
• Test Case: Detailed steps, specific inputs, expected outputs

Example Test Scenario: "User Registration and Login"
This could include multiple test cases:
• Register with valid data
• Register with invalid email
• Login with registered credentials
• Login with wrong password
• Password reset functionality

Test scenarios help identify all possible user journeys and ensure comprehensive coverage without getting into implementation details.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={10}
              question="What is a defect/bug life cycle?"
              approach="Definition + States + Example Flow"
              answer={`Bug life cycle is the journey of a defect from identification to closure. It defines the states a bug goes through and the actions taken at each stage.

Typical states:
1. New: Bug reported, not yet reviewed
2. Open/Assigned: Bug accepted and assigned to developer
3. In Progress/Fixed: Developer working on fix
4. Ready for Testing/Resolved: Fix completed, ready for retest
5. Retest: Tester verifying the fix
6. Closed: Bug fixed and verified
7. Reopened: Bug still exists after fix
8. Rejected: Not a valid bug
9. Deferred: Will be fixed in future release

Example flow:
1. Tester finds bug → Status: New
2. QA Lead reviews → Status: Open, assigned to developer
3. Developer fixes → Status: Resolved
4. Tester retests → Status: Closed (if fixed) or Reopened (if not)

This process ensures bugs are tracked, fixed, and verified systematically.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={11}
              question="What are the different severity and priority levels for defects?"
              approach="Definition + Examples + When to Use Each"
              answer={`Severity measures the technical impact of a bug on the system. Priority measures the business urgency of fixing the bug.

Severity Levels:
• Critical: System crash, data loss, major functionality broken
• High: Major feature not working, security issues
• Medium: Minor functionality issues, UI problems
• Low: Cosmetic issues, minor annoyances

Priority Levels:
• P0 (Urgent): Fix immediately, blocks release
• P1 (High): Fix in current sprint
• P2 (Medium): Fix when possible
• P3 (Low): Fix in future release

Example:
• Critical Severity, P0 Priority: Payment gateway down
• Low Severity, P0 Priority: Company logo wrong on homepage
• High Severity, P2 Priority: Admin feature broken (only 2 users affected)

Severity is set by tester based on technical impact. Priority is set by product manager based on business impact.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={12}
              question="What is regression testing?"
              approach="Definition + Purpose + When Done + Example"
              answer={`Regression testing is re-testing existing functionality to ensure that recent code changes haven't broken previously working features.

Purpose:
• Verify that new features don't break existing ones
• Ensure software stability after changes
• Catch unintended side effects of code modifications

When performed:
• After bug fixes
• After adding new features
• After code refactoring
• Before major releases
• After environment changes

Example: Developer adds a new discount feature to an e-commerce site. Regression testing would verify that:
• Existing checkout process still works
• Product search still functions
• User login/logout still works
• Cart functionality remains intact

Without regression testing, each change carries the risk of breaking existing functionality.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={13}
              question="What is smoke testing?"
              approach="Definition + Purpose + When Done + Example"
              answer={`Smoke testing is a quick, shallow test to verify that the basic, critical functions of an application work. It's like checking if the car starts before taking it for a full test drive.

Purpose:
• Verify build stability before detailed testing
• Catch major issues early
• Save time by not testing broken builds

When performed:
• After receiving a new build
• Before starting detailed testing
• After deployment to staging/production

Example smoke test cases for a web application:
• Application launches without errors
• User can navigate to main pages
• Login page loads
• Basic search functionality works
• Critical APIs respond

If smoke tests fail, the build is rejected and sent back for fixes. If they pass, detailed testing can begin.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={14}
              question="What is sanity testing?"
              approach="Definition + Difference from Smoke Testing + Example"
              answer={`Sanity testing is a focused test to verify that specific functionality works after a bug fix or minor change. It's more targeted than smoke testing.

Difference from smoke testing:
• Smoke: Broad, shallow check of critical functions
• Sanity: Narrow, deeper check of specific areas

When performed:
• After bug fixes
• After minor changes
• To verify hotfixes

Example: Developer fixes a bug where "Forgot Password" email wasn't being sent. Sanity testing would:
• Verify forgot password email is now sent
• Check if login still works
• Confirm signup process still functions
• Test password reset link works

It's not full regression testing, just a "sanity check" that the fix works and didn't break related functionality.`}
              category="Fundamentals"
            />

            <QuestionAnswerCard
              questionNumber={15}
              question="What is exploratory testing?"
              approach="Definition + Approach + Benefits + Example"
              answer={`Exploratory testing is an unscripted, freestyle testing approach where testers explore the application to find defects based on their experience and intuition.

Approach:
• No predefined test cases
• Tester learns about the application while testing
• Combines test design and execution simultaneously
• Documents findings as they go

Benefits:
• Finds unexpected bugs that scripted testing misses
• Uncovers usability issues
• Tests real user scenarios
• Adapts to application changes quickly

Example: While exploring an e-commerce app, a tester might:
• Try adding 100 items to cart (stress test)
• Use browser back/forward buttons during checkout (navigation test)
• Try purchasing with expired credit card (error handling)
• Test on different screen sizes (responsive design)

Exploratory testing complements scripted testing by finding issues that formal test cases might not cover.`}
              category="Fundamentals"
            />
          </section>

          {/* Testing Types Section */}
          <section id="testing-types">
            <SectionHeader
              title="Testing Types"
              subtitle="Understand different testing methodologies and when to apply each approach."
              icon={Settings}
              color="purple"
              questionCount={20}
            />

            <QuestionAnswerCard
              questionNumber={16}
              question="What is unit testing?"
              approach="Definition + Who Does It + Tools + Example"
              answer={`Unit testing is testing individual components or functions in isolation to verify they work as expected.

Who does it: Primarily developers during the coding phase
When: After writing each function/module
Tools: JUnit (Java), pytest (Python), Jest (JavaScript), NUnit (.NET)

Example: Testing a function that calculates total price with tax

def calculate_total(price, tax_rate):
    return price + (price * tax_rate)

Unit test:
def test_calculate_total():
    assert calculate_total(100, 0.1) == 110
    assert calculate_total(0, 0.1) == 0
    assert calculate_total(100, 0) == 100

Benefits: Catches bugs early, enables refactoring, serves as documentation.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={17}
              question="What is integration testing? Explain different approaches."
              approach="Definition + Approaches + Examples"
              answer={`Integration testing verifies that different components work together correctly when integrated.

Approaches:

1. Big Bang: Integrate all components at once, then test
   • Pros: Simple, fast to set up
   • Cons: Hard to isolate bugs, all components must be ready

2. Top-Down: Start with top-level modules, use stubs for lower modules
   • Test high-level logic first
   • Example: Test UI with dummy backend services

3. Bottom-Up: Start with low-level modules, use drivers for higher modules
   • Test foundational components first
   • Example: Test database layer before business logic

4. Sandwich/Hybrid: Combination of top-down and bottom-up
   • Test critical paths end-to-end, other parts incrementally

Example: Testing if user registration (UI) correctly saves data to database (backend) through API calls.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={18}
              question="What is system testing?"
              approach="Definition + Scope + Types + Example"
              answer={`System testing is testing the complete, integrated system to verify it meets specified requirements.

Scope: End-to-end testing of the entire application
Focus: Functional and non-functional requirements
Environment: Mirrors production as closely as possible

Types:
• Functional: Business logic, features, user workflows
• Performance: Speed, scalability, resource usage
• Security: Vulnerabilities, data protection
• Usability: User experience, accessibility
• Compatibility: Different browsers, devices, OS

Example: For an e-commerce site, system testing would include:
• Complete purchase flow from product search to payment
• User account management
• Admin panel functionality
• Mobile responsiveness
• Performance under load

System testing ensures the application works as a whole, not just individual parts.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={19}
              question="What is acceptance testing? Differentiate UAT and BAT."
              approach="Definition + Types + Differences + Example"
              answer={`Acceptance testing verifies that the software meets business requirements and is ready for release.

Types:

1. User Acceptance Testing (UAT):
   • Performed by end users or business representatives
   • Focus: Business requirements, user workflows
   • Environment: Production-like, sometimes actual production
   • Criteria: Business acceptance, not technical perfection

2. Business Acceptance Testing (BAT):
   • Performed by business analysts
   • Focus: Business rules, processes, compliance
   • More formal than UAT, follows strict business rules

Key Differences:
• UAT: End users test real-world scenarios
• BAT: Business team validates business logic and rules
• UAT: More exploratory, user experience focused
• BAT: More structured, rule validation focused

Example: For a banking app:
• UAT: Customers test money transfer between accounts
• BAT: Business team validates compliance with banking regulations

Both ensure the software meets business needs before going live.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={20}
              question="What is black box testing? Name some techniques."
              approach="Definition + Techniques + Advantages + Example"
              answer={`Black box testing tests the application without knowledge of internal code, structure, or implementation. Tester treats the system as a "black box."

Techniques:

1. Equivalence Partitioning: Divide input data into valid and invalid partitions
   • Example: Age field - valid: 18-65, invalid: <18, >65

2. Boundary Value Analysis: Test boundaries of input ranges
   • Example: Age field - test 17, 18, 65, 66

3. Decision Table Testing: Test combinations of conditions
   • Example: Login - valid/invalid email × valid/invalid password

4. State Transition Testing: Test state changes
   • Example: Shopping cart states - empty → add item → checkout

5. Use Case Testing: Test real user scenarios
   • Example: Complete purchase flow from search to payment

Advantages:
• No programming knowledge required
• Tests from user perspective
• Uncovers missing functionality

Example: Testing a calculator app by entering numbers and operators without knowing how calculations are implemented internally.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={21}
              question="What is white box testing? Name some techniques."
              approach="Definition + Techniques + Code Coverage + Example"
              answer={`White box testing tests the internal structure, code paths, and logic of the application. Requires knowledge of programming and code.

Techniques:

1. Statement Coverage: Execute every line of code at least once
   • Ensures no code is untested

2. Branch Coverage: Test all decision points (if-else, loops)
   • Example: Test both true and false conditions of if statements

3. Path Coverage: Test all possible paths through the code
   • Most thorough but often impractical for complex code

4. Condition Coverage: Test all conditions in boolean expressions
   • Example: if (a > 0 && b < 10) - test all combinations

Code Coverage Metrics:
• Function Coverage: Percentage of functions called
• Statement Coverage: Percentage of code lines executed
• Branch Coverage: Percentage of decision points tested

Example: Testing a login function by ensuring both successful login path and failed login path are executed, including all error conditions and edge cases in the code.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={22}
              question="What is grey box testing?"
              approach="Definition + Approach + Advantages + Example"
              answer={`Grey box testing combines elements of both black box and white box testing. Tester has partial knowledge of internal workings.

Approach:
• Knows some internal structure (database schema, API endpoints)
• Tests from user perspective but with understanding of internals
• Can design better test cases using architectural knowledge

Advantages:
• More effective than pure black box
• Can find issues that both pure approaches might miss
• Balances user perspective with technical understanding

Example: Testing a web application where you know:
• Database tables and relationships (white box knowledge)
• But test through the UI like a regular user (black box approach)
• Can verify data flows correctly from UI to database

Common in API testing where you know request/response structure but test functionality.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={23}
              question="What is positive and negative testing?"
              approach="Definition + Examples + Importance"
              answer={`Positive testing verifies that the application works correctly with valid inputs and expected user behavior.

Negative testing verifies that the application handles invalid inputs and unexpected user behavior gracefully.

Positive Testing Examples:
• Login with correct email and password → Should succeed
• Add valid item to shopping cart → Should work
• Submit complete registration form → Should create account

Negative Testing Examples:
• Login with wrong password → Should show error, not crash
• Add negative quantity to cart → Should reject or show error
• Submit registration with existing email → Should show duplicate error
• Try SQL injection in search field → Should sanitize, not execute

Importance:
• Positive testing ensures features work
• Negative testing ensures robust error handling
• Most bugs are found through negative testing
• Prevents security vulnerabilities

Real-world example: Banking apps must handle negative testing extensively - wrong PINs, insufficient funds, invalid account numbers, etc.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={24}
              question="What is boundary value analysis?"
              approach="Definition + Why It Works + Examples"
              answer={`Boundary value analysis tests the edges or boundaries of input ranges, as these are where most bugs occur.

Why it works: Developers often make off-by-one errors at boundaries
• Arrays indexed from 0 might fail at index 0
• Age validation might work for 18-65 but fail at exactly 18 or 65

Examples:

For age field (valid: 18-65):
Test values: 17, 18, 19, 64, 65, 66

For password length (6-20 characters):
Test values: 5, 6, 7, 19, 20, 21

For file upload (1MB-10MB):
Test values: 0MB, 1MB, 1.1MB, 9.9MB, 10MB, 10.1MB

This technique finds bugs that equivalence partitioning might miss, as boundaries are common failure points.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={25}
              question="What is equivalence partitioning?"
              approach="Definition + How It Works + Example"
              answer={`Equivalence partitioning divides input data into valid and invalid partitions, then tests one value from each partition.

Rationale: If one value in a partition works, others in the same partition should work too. If one fails, others should fail similarly.

Example: Age field for movie tickets (valid: 4-60 years)

Partitions:
• Valid: 4, 5, 6, ..., 59, 60
• Invalid (too young): 0, 1, 2, 3
• Invalid (too old): 61, 62, 63, ...

Test values: 3 (invalid), 10 (valid), 65 (invalid)

This reduces test cases while maintaining coverage. Instead of testing every age from 1-100, test representatives from each partition.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={26}
              question="What is ad-hoc testing?"
              approach="Definition + When Used + Advantages/Disadvantages"
              answer={`Ad-hoc testing is informal, unplanned testing performed without documentation or test cases. Testers explore the application randomly based on intuition and experience.

When used:
• When there's no time for formal testing
• To explore new features quickly
• When formal test cases are not available
• As a complement to scripted testing

Advantages:
• Finds unexpected bugs
• Quick way to get initial feedback
• Tests real user scenarios
• No preparation time needed

Disadvantages:
• Not systematic or repeatable
• No documentation of what was tested
• Dependent on tester's skill and mood
• Hard to track coverage

Example: After a new feature deployment, spend 30 minutes clicking around randomly to see if anything obvious is broken.

Ad-hoc testing is good for finding obvious bugs quickly but should be supplemented with systematic testing for comprehensive coverage.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={27}
              question="What is performance testing?"
              approach="Definition + Types + Tools + Example"
              answer={`Performance testing evaluates how well the system performs under various conditions, measuring speed, scalability, and stability.

Types:

1. Load Testing: Test with expected user load
   • Example: 1000 concurrent users on an e-commerce site

2. Stress Testing: Test beyond normal capacity
   • Example: 10,000 users to find breaking point

3. Volume Testing: Test with large data volumes
   • Example: Database with 1 million records

4. Spike Testing: Test sudden load increases
   • Example: Traffic spike during flash sale

5. Endurance Testing: Test sustained load over time
   • Example: 500 users for 8 hours continuously

Tools: JMeter, LoadRunner, Gatling, k6

Example: For a banking app, performance testing would verify that balance inquiry responds within 2 seconds even during peak hours with 5000 concurrent users.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={28}
              question="What is load testing?"
              approach="Definition + Purpose + Tools + Example"
              answer={`Load testing simulates real-world user load on the application to verify performance under normal and peak conditions.

Purpose:
• Ensure application performs well under expected load
• Identify performance bottlenecks
• Verify scalability before production
• Set performance benchmarks

How it works:
• Gradually increase user load
• Monitor response times, throughput, resource usage
• Identify at what point performance degrades

Tools:
• JMeter: Free, popular for HTTP/API testing
• LoadRunner: Enterprise tool, comprehensive
• Gatling: Scala-based, good for complex scenarios
• k6: Modern, JavaScript-based

Example: For a video streaming site:
• Test with 1000 users watching videos simultaneously
• Verify videos load within 3 seconds
• Check server CPU/memory usage stays under 80%
• Ensure no crashes or significant slowdowns

Load testing helps ensure your application can handle real-world usage.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={29}
              question="What is stress testing?"
              approach="Definition + Difference from Load Testing + Example"
              answer={`Stress testing tests the application beyond normal operational capacity to find the breaking point and ensure graceful failure.

Difference from load testing:
• Load testing: Tests with expected user load
• Stress testing: Tests with extreme load to find limits

Purpose:
• Find maximum capacity of the system
• Ensure graceful degradation under extreme conditions
• Identify failure points and recovery mechanisms
• Verify data integrity during failures

Example: For a ticket booking system:
• Load testing: 1000 users booking tickets (normal peak)
• Stress testing: 10,000 users trying to book simultaneously
• Verify: System doesn't crash, queues requests properly, recovers gracefully

Stress testing ensures your application fails safely rather than catastrophically under extreme conditions.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={30}
              approach="Definition + Types + Common Vulnerabilities + Tools"
              question="What is security testing?"
              answer={`Security testing identifies vulnerabilities and ensures the application is protected against threats and unauthorized access.

Types:

1. Authentication Testing: Verify login, password policies, session management
2. Authorization Testing: Check if users can access only permitted resources
3. Data Security: Ensure sensitive data is encrypted and protected
4. Input Validation: Prevent SQL injection, XSS, command injection
5. Session Management: Test session timeout, fixation, hijacking
6. Configuration Testing: Check security settings and permissions

Common Vulnerabilities:
• SQL Injection: Malicious SQL in input fields
• XSS: JavaScript injection in web pages
• CSRF: Cross-site request forgery
• Broken Authentication: Weak password policies
• Sensitive Data Exposure: Unencrypted data transmission

Tools:
• OWASP ZAP: Free web app scanner
• Burp Suite: Professional security testing
• Nessus: Vulnerability scanner
• SQLMap: SQL injection testing

Example: Testing a login form for SQL injection by entering: ' OR '1'='1 in username field.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={31}
              question="What is usability testing?"
              approach="Definition + Focus Areas + Methods + Example"
              answer={`Usability testing evaluates how easy and user-friendly the application is for end users.

Focus areas:
• Learnability: How easy to learn for new users
• Efficiency: How quickly users can complete tasks
• Memorability: How easy to remember after period of non-use
• Errors: How many errors users make, how serious they are
• Satisfaction: How pleasant the experience is

Methods:
• Moderated testing: Tester guides users through tasks
• Unmoderated testing: Users complete tasks independently
• A/B testing: Compare different designs
• Eye tracking: See where users look on the screen

Example: For an e-commerce app:
• Ask users to find and purchase a specific product
• Observe if they can complete the task without help
• Note any confusion points or errors made
• Measure time taken and success rate

Usability testing ensures the application is intuitive and meets user needs, not just functional requirements.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={32}
              question="What is compatibility testing?"
              approach="Definition + Types + Examples + Tools"
              answer={`Compatibility testing ensures the application works correctly across different environments, platforms, and configurations.

Types:

1. Browser Compatibility: Different browsers and versions
   • Chrome, Firefox, Safari, Edge
   • Different versions (latest, previous)

2. Device Compatibility: Different devices and screen sizes
   • Desktop, tablet, mobile
   • Different resolutions and orientations

3. OS Compatibility: Different operating systems
   • Windows, macOS, Linux, iOS, Android

4. Network Compatibility: Different network conditions
   • WiFi, 4G, 3G, slow connections

5. Database Compatibility: Different database versions
6. Third-party Integration: Different API versions

Tools:
• BrowserStack: Cloud-based cross-browser testing
• Sauce Labs: Similar to BrowserStack
• LambdaTest: Browser and device testing
• Charles Proxy: Network condition simulation

Example: Testing a web app on Chrome 120, Firefox 119, Safari 17, and ensuring responsive design works on iPhone, Android, iPad, and desktop screens.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={33}
              question="What is API testing?"
              approach="Definition + What to Test + Tools + Example"
              answer={`API testing validates the application programming interfaces that allow different software systems to communicate.

What to test:
• Functionality: Correct responses for valid requests
• Reliability: Consistent behavior under load
• Performance: Response times and throughput
• Security: Authentication, authorization, data protection
• Schema validation: Response format matches specification

Types of APIs:
• REST: HTTP-based, stateless
• SOAP: XML-based, more structured
• GraphQL: Query language for APIs

Tools:
• Postman: Most popular, user-friendly
• REST Assured: Java library for REST API testing
• SoapUI: For SOAP and REST APIs
• Insomnia: Alternative to Postman
• JMeter: For performance testing APIs

Example: Testing a user registration API
POST /api/users
Body: {"name": "John", "email": "john@example.com"}
Expected: 201 Created, user object in response

API testing ensures backend services work correctly and can be automated in CI/CD pipelines.`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={34}
              question="What is database testing?"
              approach="Definition + What to Test + Types + Example"
              answer={`Database testing validates the database schema, data integrity, and database operations to ensure data is stored, retrieved, and manipulated correctly.

What to test:
• Data integrity: Relationships between tables
• Data consistency: Same data across related tables
• Data validity: Data types, constraints, business rules
• Performance: Query execution times
• Security: Access controls, data encryption

Types:

1. Structural Testing: Schema, tables, columns, constraints
2. Functional Testing: Triggers, stored procedures, functions
3. Performance Testing: Query optimization, indexing
4. Data Integrity Testing: Primary keys, foreign keys, unique constraints
5. Data Migration Testing: Data transfer between systems

Tools:
• SQL queries directly
• Database testing tools like QuerySurge
• ORM testing for application layer

Example: Testing an e-commerce database
• Verify order total matches sum of item prices
• Check foreign key relationships between orders and customers
• Test that deleting a user also removes their orders (cascade delete)
• Verify data types and constraints (email format, price > 0)`}
              category="Testing Types"
            />

            <QuestionAnswerCard
              questionNumber={35}
              question="What is end-to-end testing?"
              approach="Definition + Scope + Example + Tools"
              answer={`End-to-end testing validates the complete user journey from start to finish, testing the entire application flow across all integrated systems.

Scope:
• Frontend UI interactions
• Backend processing
• Database operations
• Third-party integrations
• External system communications

Difference from system testing:
• System testing: Tests the application as a whole
• E2E testing: Tests across multiple systems and integrations

Example: For a food delivery app:
1. User searches for restaurant
2. Selects items and adds to cart
3. Places order with payment
4. Restaurant receives order notification
5. Delivery person accepts delivery
6. User receives delivery and can rate/order

This tests the complete business workflow, not just individual features.

Tools:
• Selenium WebDriver: For web applications
• Appium: For mobile applications
• Cypress: Modern web testing framework
• TestCafe: Cross-browser E2E testing

E2E testing ensures the entire user experience works seamlessly from end to end.`}
              category="Testing Types"
            />
          </section>

          {/* Automation Testing Section */}
          <section id="automation-testing">
            <SectionHeader
              title="Automation Testing"
              subtitle="Learn when and how to automate tests effectively using modern tools and frameworks."
              icon={Zap}
              color="orange"
              questionCount={15}
            />

            <QuestionAnswerCard
              questionNumber={36}
              question="What is automation testing? When should you automate tests?"
              approach="Definition + Benefits + When to Automate + When Not to"
              answer={`Automation testing uses software tools to execute tests automatically, simulating user interactions and verifying results without manual intervention.

Benefits:
• Faster execution than manual testing
• Consistent, repeatable results
• Run tests 24/7 (CI/CD pipelines)
• Test complex scenarios that are hard to test manually
• Early bug detection in development

When to automate:
• Regression testing (same tests run repeatedly)
• Smoke/sanity testing (quick checks)
• Performance testing (load simulation)
• Data-driven testing (same test with multiple data sets)
• Cross-browser/device testing
• API testing (fast and reliable)

When NOT to automate:
• Exploratory testing (needs human intuition)
• Usability testing (subjective user experience)
• Tests that change frequently (UI during development)
• One-time tests (not worth setup time)
• Tests requiring human judgment (visual verification)

Example: Automate login testing with 50 different user credentials, but manually test if the new UI design "looks good."`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={37}
              question="What are the advantages and disadvantages of automation testing?"
              approach="Pros and Cons + Real Examples"
              answer={`Advantages:

1. Speed and Efficiency
   • Execute 1000 tests in minutes vs hours manually
   • Run tests overnight or during off-hours

2. Reliability and Consistency
   • No human errors like typos or missed steps
   • Same test execution every time

3. Reusability
   • Same test scripts for different environments
   • Use across multiple projects

4. Early Bug Detection
   • Integrate with CI/CD for immediate feedback
   • Catch regressions before they reach production

5. Cost Effective Long-term
   • Payback after 5-10 test runs
   • Free up manual testers for exploratory testing

Disadvantages:

1. High Initial Setup Cost
   • Tool licensing, framework setup, script development
   • Training team members

2. Maintenance Overhead
   • UI changes break locators frequently
   • Code changes require script updates

3. Cannot Replace Human Testing
   • Misses usability issues, visual bugs
   • Cannot adapt to unexpected scenarios

4. False Positives/Negatives
   • Environment issues can cause test failures
   • Timing issues in dynamic applications

5. Limited Scope
   • Cannot test subjective aspects
   • Cannot handle CAPTCHA, biometrics

Real example: A company automated 200 regression tests. Initial cost: 2 months. Payback: After 3 releases. Now catches 80% of bugs before production.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={38}
              question="What is Selenium? What are its components?"
              approach="Definition + Components + When to Use Each + Example"
              answer={`Selenium is an open-source framework for automating web browsers. It allows writing code to control browsers and simulate user actions.

Components:

1. Selenium IDE
   • Browser extension for recording and playing back tests
   • No programming required
   • Good for: Learning Selenium, quick prototypes, simple tests
   • Limitation: Not scalable, no programming logic

2. Selenium WebDriver
   • Core API for controlling browsers programmatically
   • Supports Java, Python, C#, JavaScript, Ruby
   • Good for: Complex automation, framework development
   • Example: driver.get("https://example.com"); driver.findElement(By.id("username")).sendKeys("user");

3. Selenium Grid
   • Distributed test execution across multiple machines
   • Run tests in parallel on different browsers/OS
   • Good for: Cross-browser testing, reducing execution time
   • Example: Run Chrome tests on Windows machine, Safari on Mac

4. Selenium RC (Legacy)
   • Original component, now deprecated
   • Used WebDriver instead

Real usage: I use WebDriver with Java + TestNG for web automation, Selenium Grid with Docker for parallel execution in CI/CD pipelines.

Example code:
WebDriver driver = new ChromeDriver();
driver.get("https://google.com");
driver.findElement(By.name("q")).sendKeys("Selenium");
driver.findElement(By.name("btnK")).click();`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={39}
              question="What is a test automation framework?"
              approach="Definition + Types + Components + Example"
              answer={`A test automation framework is a set of guidelines, standards, and tools that provide structure for automated test scripts.

Types:

1. Linear Scripting: Simple record-and-playback scripts
   • No structure, hard to maintain

2. Modular Framework: Tests divided into reusable modules
   • Example: Separate login, search, checkout modules

3. Data-Driven Framework: Test logic separated from test data
   • Same test with multiple data sets (CSV, Excel, database)

4. Keyword-Driven Framework: Tests written in keywords
   • Business users can write tests without coding

5. Hybrid Framework: Combination of above approaches
   • Most common in real projects

Framework Components:
• Base Classes: Common functionality (browser setup, reporting)
• Page Objects: Represent application pages
• Test Data: External data sources
• Utilities: Helper methods (waits, screenshots)
• Configuration: Environment settings
• Reporting: Test results and logs

Example: Hybrid framework with:
- Page Object Model for page representations
- TestNG for test execution
- ExtentReports for reporting
- Excel for test data
- Maven for dependency management

Benefits: Maintainable, scalable, reusable code.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={40}
              question="What are different types of automation frameworks?"
              approach="List Types + Explanation + When to Use + Examples"
              answer={`Types of automation frameworks:

1. Linear Scripting Framework
   • Simple recorded scripts executed sequentially
   • No reusability or structure
   • When: Quick proof-of-concept, very simple applications
   • Example: Selenium IDE recordings

2. Modular Framework
   • Tests divided into independent modules
   • Modules can be reused across tests
   • When: Applications with reusable components
   • Example: Login module used in 50 different tests

3. Data-Driven Framework
   • Test logic separated from test data
   • Same test runs with multiple data sets
   • When: Testing with large datasets, same flow different data
   • Example: Login test with 100 different username/password combinations

4. Keyword-Driven Framework
   • Tests written using keywords, not code
   • Business logic abstracted into keywords
   • When: Non-technical team members need to write tests
   • Example: "Login with username and password" instead of code

5. Hybrid Framework
   • Combination of multiple approaches
   • Most flexible and maintainable
   • When: Complex applications requiring multiple strategies
   • Example: Data-driven + Page Object Model + Keyword-driven

6. Page Object Model (POM)
   • Each page represented as a class with elements and actions
   • When: Web applications with multiple pages
   • Example: LoginPage class with username field, password field, login method

7. Behavior-Driven Development (BDD)
   • Tests written in natural language (Gherkin)
   • When: Collaboration between technical and non-technical teams
   • Example: "Given user is on login page, When enters credentials, Then should login successfully"

Most projects use Hybrid frameworks combining POM with data-driven approaches.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={41}
              question="What is continuous integration (CI) and continuous testing?"
              approach="Definition + Process + Tools + Benefits"
              answer={`Continuous Integration (CI) is the practice of frequently merging code changes into a shared repository, with automated builds and tests.

Continuous Testing integrates automated testing throughout the CI/CD pipeline to provide immediate feedback on code quality.

CI Process:
1. Developer commits code to repository
2. CI server detects changes and triggers build
3. Code is compiled and unit tests run
4. Integration tests execute
5. If all pass, code is ready for deployment

Continuous Testing adds:
• Automated API tests
• UI automation tests
• Performance tests
• Security scans

Tools:
• Jenkins: Most popular CI server
• GitLab CI: Integrated with GitLab
• GitHub Actions: Integrated with GitHub
• CircleCI: Cloud-based CI
• TeamCity: Enterprise CI

Benefits:
• Early bug detection (fail fast)
• Faster feedback to developers
• Automated deployment to staging/production
• Consistent quality across releases

Example: Push code → Jenkins builds → Runs unit tests → Runs API tests → Deploys to staging if all pass → Manual testing begins.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={42}
              question="What is the difference between manual and automation testing?"
              approach="Compare Key Aspects + When to Use Each"
              answer={`Key differences:

1. Execution
   • Manual: Human testers execute tests, observe results
   • Automation: Software tools execute tests automatically

2. Speed and Coverage
   • Manual: Slower, limited by human capacity
   • Automation: Fast, can run 1000+ tests overnight

3. Accuracy and Consistency
   • Manual: Prone to human errors, fatigue affects results
   • Automation: Consistent execution, no human errors

4. Cost
   • Manual: Low initial cost, high long-term cost
   • Automation: High initial cost, low long-term cost

5. Types of Testing
   • Manual: Exploratory, usability, ad-hoc, visual testing
   • Automation: Regression, smoke, performance, repetitive tasks

6. Maintenance
   • Manual: Easy to adapt to changes
   • Automation: Requires maintenance when application changes

7. Human Element
   • Manual: Can find unexpected issues, usability problems
   • Automation: Cannot think creatively or handle subjective aspects

When to use:
• Manual: New features, exploratory testing, UI/UX validation
• Automation: Regression testing, API testing, performance testing

Best approach: 80% automation for repetitive tests, 20% manual for creative testing.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={43}
              question="When should you not automate tests?"
              approach="List Scenarios + Reasons + Alternatives"
              answer={`Don't automate when:

1. Tests Run Only Once
   • One-time feature testing
   • Migration testing
   • Reason: Setup cost > manual execution cost

2. UI Changes Frequently
   • Early development phase with unstable UI
   • Reason: Constant locator maintenance, scripts break often

3. Tests Require Human Judgment
   • Usability testing ("Does this look good?")
   • Visual testing (color schemes, layout)
   • Reason: Cannot automate subjective decisions

4. Tests Are Too Simple
   • Basic functionality that takes 2 minutes manually
   • Reason: Automation setup takes longer than manual execution

5. Tests Need Real Human Interaction
   • Biometric authentication (fingerprint, face recognition)
   • CAPTCHA solving
   • Reason: Cannot simulate human biology or AI challenges

6. Exploratory Testing
   • Unscripted testing based on intuition
   • Reason: Cannot automate creative, unplanned exploration

7. Tests with External Dependencies
   • Tests requiring physical devices, sensors
   • Third-party integrations that are unstable
   • Reason: Unreliable due to external factors

Alternatives:
• Manual testing for one-time tests
• Visual testing tools for UI validation
• Crowd testing for usability
• Exploratory testing for complex scenarios

Rule of thumb: If a test will be executed more than 5 times, consider automation.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={44}
              question="What is a selenium WebDriver?"
              approach="Definition + Architecture + Usage + Example"
              answer={`Selenium WebDriver is the core component of Selenium that provides APIs to control web browsers programmatically.

Architecture:
• Language Bindings: Java, Python, C#, etc.
• Browser Drivers: ChromeDriver, GeckoDriver (Firefox), etc.
• Browser: Actual browser instance
• WebDriver communicates with browser through driver

How it works:
1. WebDriver sends commands to browser driver
2. Driver communicates with actual browser
3. Browser executes commands and returns results
4. WebDriver receives results and passes to test script

Usage:
• Cross-browser testing (Chrome, Firefox, Safari, Edge)
• Multiple programming languages
• Headless execution (no UI, faster)
• Mobile testing with Appium

Example code (Java):
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
driver.findElement(By.id("username")).sendKeys("user");
driver.findElement(By.id("password")).sendKeys("pass");
driver.findElement(By.id("login")).click();

WebDriver is the most widely used Selenium component for automation testing.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={45}
              question="What are locators in Selenium?"
              approach="Definition + Types + Best Practices + Examples"
              answer={`Locators are methods to identify web elements in Selenium for interaction (clicking, typing, etc.).

Types:

1. ID (Most Reliable)
   • Unique identifier for elements
   • Fastest and most stable
   • Example: driver.findElement(By.id("username"))

2. Name
   • Name attribute of elements
   • Good when ID not available
   • Example: driver.findElement(By.name("email"))

3. Class Name
   • CSS class attribute
   • Risky if multiple elements share class
   • Example: driver.findElement(By.className("btn-primary"))

4. Tag Name
   • HTML tag (div, button, input)
   • Rarely unique enough
   • Example: driver.findElement(By.tagName("button"))

5. Link Text
   • Text of hyperlink elements
   • Only for <a> tags
   • Example: driver.findElement(By.linkText("Login"))

6. Partial Link Text
   • Partial text of links
   • Example: driver.findElement(By.partialLinkText("Log"))

7. CSS Selector (Powerful)
   • CSS syntax for element selection
   • Fast and flexible
   • Examples:
     - By.cssSelector("#username") // ID
     - By.cssSelector(".btn-primary") // Class
     - By.cssSelector("input[type='password']") // Attribute
     - By.cssSelector("div.login > button") // Child element

8. XPath (Most Flexible)
   • XML path expressions
   • Can locate any element
   • Examples:
     - By.xpath("//input[@id='username']") // Attribute
     - By.xpath("//button[text()='Login']") // Text content
     - By.xpath("//div[@class='login']//input") // Relative path

Best Practices:
• Prefer ID > CSS Selector > XPath
• Use relative XPath over absolute
• Avoid dynamic locators (contains @id, 'user_123')
• Test locators in browser console first

Example: For login form, prefer:
driver.findElement(By.id("username")).sendKeys("user"); // Best
driver.findElement(By.cssSelector("input[type='text']")).sendKeys("user"); // Good
driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("user"); // Acceptable`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={46}
              question="What is XPath? Difference between absolute and relative XPath?"
              approach="Definition + Types + Examples + When to Use"
              answer={`XPath is a language for navigating XML/HTML documents to locate elements. In Selenium, it's used to find web elements.

Types:

1. Absolute XPath
   • Full path from root element
   • Starts with single slash /
   • Example: /html/body/div[1]/form/div[2]/input
   • Brittle: Breaks if any element in path changes

2. Relative XPath
   • Path from any element in document
   • Starts with double slash //
   • Example: //input[@id='username']
   • More stable: Works even if page structure changes

XPath Syntax:
• //tagname - Find elements by tag
• //tagname[@attribute='value'] - Find by attribute
• //tagname[text()='text'] - Find by text content
• //tagname[contains(@attribute,'partial')] - Partial match
• //parent/child - Parent-child relationship
• //tagname[1] - First element (index starts at 1)
• //tagname[last()] - Last element

Examples:
• //button[@id='submit'] - Button with specific ID
• //input[contains(@placeholder,'email')] - Input with email in placeholder
• //div[@class='error']//span - Span inside error div
• //table//tr[2]//td[3] - Third cell in second row of table
• //a[text()='Login'] - Link with exact text 'Login'

When to use:
• Absolute XPath: Never (too fragile)
• Relative XPath: When CSS selectors can't locate element
• Contains(): For dynamic attributes (id='user_12345')
• Text-based: When no reliable attributes available

Best practice: Use CSS selectors when possible, XPath when necessary.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={47}
              question="What is Page Object Model (POM)?"
              approach="Definition + Benefits + Implementation + Example"
              answer={`Page Object Model is a design pattern that creates an object repository for web elements, separating test logic from page-specific code.

Benefits:

1. Maintainability
   • UI changes require updates in one place
   • Example: Login button ID changes → Update only in LoginPage class

2. Reusability
   • Same page methods used across multiple tests
   • Example: login() method used in 50 different test cases

3. Readability
   • Tests read like plain English
   • Example: loginPage.login("user", "pass") instead of driver.findElement...

4. Separation of Concerns
   • Test logic separate from page details
   • Page classes handle elements, test classes handle logic

Implementation:

1. Create page classes for each application page
2. Define web elements as class variables
3. Create methods for actions on that page
4. Use page objects in test classes

Example:

public class LoginPage {
    WebDriver driver;
    
    // Locators
    By usernameField = By.id("username");
    By passwordField = By.id("password");
    By loginButton = By.id("login");
    
    // Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }
    
    // Actions
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }
    
    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }
    
    public void clickLogin() {
        driver.findElement(loginButton).click();
    }
    
    // Combined action
    public void login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLogin();
    }
}

Test usage:
LoginPage loginPage = new LoginPage(driver);
loginPage.login("testuser", "password123");

POM is industry standard for maintainable automation frameworks.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={48}
              question="What is TestNG or JUnit?"
              approach="Definition + Features + Usage + Example"
              answer={`TestNG (Test Next Generation) is a testing framework for Java that provides advanced features for test execution, reporting, and configuration.

Key Features:

1. Annotations
   • @Test: Mark methods as test cases
   • @BeforeMethod, @AfterMethod: Setup/teardown per test
   • @BeforeClass, @AfterClass: Setup/teardown per class
   • @DataProvider: Provide test data

2. Test Configuration
   • testng.xml: Configure test suites, parallel execution
   • Groups: Categorize tests (smoke, regression, etc.)
   • Priorities: Control test execution order

3. Advanced Features
   • Parallel execution
   • Parameterized tests
   • Dependency testing
   • Custom reporting

4. Assertions
   • Assert.assertEquals(actual, expected)
   • Assert.assertTrue(condition)

Example:

import org.testng.annotations.Test;
import org.testng.annotations.BeforeMethod;

public class LoginTest {
    
    @BeforeMethod
    public void setup() {
        // Initialize driver, navigate to login page
    }
    
    @Test(priority = 1)
    public void testValidLogin() {
        // Test valid login
        Assert.assertTrue(loginPage.isLoginSuccessful());
    }
    
    @Test(priority = 2)
    public void testInvalidLogin() {
        // Test invalid login
        Assert.assertTrue(loginPage.isErrorDisplayed());
    }
}

JUnit is similar but TestNG has more advanced features like:
• Parallel execution
• Grouping
• Data providers
• Custom test configuration

TestNG is preferred for Selenium automation due to its flexibility.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={49}
              question="What is Maven or Gradle?"
              approach="Definition + Purpose + Features + Example"
              answer={`Maven is a build automation and dependency management tool for Java projects. It manages project structure, dependencies, and build lifecycle.

Purpose:
• Dependency management (automatically download JARs)
• Project structure standardization
• Build lifecycle management
• Plugin ecosystem for various tasks

Key Features:

1. pom.xml
   • Project configuration file
   • Define dependencies, plugins, build settings

2. Dependency Management
   • Automatically resolve and download dependencies
   • Handle transitive dependencies
   • Central repository (Maven Central)

3. Build Lifecycle
   • clean: Remove build artifacts
   • compile: Compile source code
   • test: Run unit tests
   • package: Create JAR/WAR
   • install: Install to local repository
   • deploy: Deploy to remote repository

4. Plugins
   • Surefire: Run tests
   • Failsafe: Run integration tests
   • Compiler: Compile code
   • Selenium plugins for automation

Example pom.xml:

<project>
    <dependencies>
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.15.0</version>
        </dependency>
        <dependency>
            <groupId>org.testng</groupId>
            <artifactId>testng</artifactId>
            <version>7.8.0</version>
        </dependency>
    </dependencies>
</project>

Commands:
• mvn clean test: Clean and run tests
• mvn compile: Compile code
• mvn package: Create JAR file

Gradle is similar but uses Groovy/Kotlin DSL instead of XML, and is generally faster for large projects.

Maven standardizes project structure and dependency management across teams.`}
              category="Automation Testing"
            />

            <QuestionAnswerCard
              questionNumber={50}
              question="How do you handle dynamic elements in automation?"
              approach="Definition + Techniques + Examples"
              answer={`Dynamic elements are web elements whose attributes (ID, class, etc.) change on each page load or user interaction, making static locators unreliable.

Techniques to handle them:

1. Contains() Method
   • Match partial attribute values
   • Example: //div[contains(@id, 'user_')] - Matches user_123, user_456

2. Starts-with() Method
   • Match beginning of attribute
   • Example: //input[starts-with(@name, 'email')] - Matches email1, email2

3. Text-based Locators
   • Locate by visible text (more stable)
   • Example: //button[text()='Submit'] or //a[contains(text(),'Login')]

4. CSS Attribute Selectors
   • ^= (starts with), *= (contains), $= (ends with)
   • Example: input[name^='user'] - Name starts with 'user'

5. XPath Axes
   • Navigate relative to stable elements
   • Example: //div[@class='form']//input - Input inside form div

6. Wait Strategies
   • Explicit waits for dynamic content loading
   • WebDriverWait wait = new WebDriverWait(driver, 10);
   • wait.until(ExpectedConditions.elementToBeClickable(By.id("dynamicId")));

7. JavaScript Execution
   • Execute JavaScript to find elements
   • Example: Find element by custom attribute

8. Custom Locators
   • Create methods to find elements dynamically
   • Example: findElementByPartialId("user_")

Best Practices:
• Prefer stable locators (text, CSS) over fragile ones (dynamic IDs)
• Use explicit waits instead of Thread.sleep()
• Test locators in browser developer tools first
• Document dynamic element patterns for maintenance

Example:
Instead of: driver.findElement(By.id("user_12345")) // Breaks next time
Use: driver.findElement(By.xpath("//div[contains(@id, 'user_')]")) // Stable`}
              category="Automation Testing"
            />
          </section>

          {/* Test Management Section */}
          <section id="test-management">
            <SectionHeader
              title="Test Management"
              subtitle="Learn how to plan, track, and report on testing activities effectively."
              icon={ClipboardList}
              color="green"
              questionCount={12}
            />

            <QuestionAnswerCard
              questionNumber={51}
              question="What is a test plan? What does it contain?"
              approach="Definition + Components + Purpose + Example"
              answer={`A test plan is a comprehensive document that describes the scope, approach, resources, and schedule for testing activities.

Purpose:
• Define testing scope and objectives
• Communicate testing approach to stakeholders
• Ensure systematic and thorough testing
• Track testing progress and results

Key Components:

1. Introduction
   • Purpose of the document
   • Scope and objectives
   • Assumptions and constraints

2. Test Scope
   • Features to be tested
   • Features not to be tested
   • Types of testing (functional, performance, etc.)

3. Test Strategy
   • Testing approach and methodology
   • Test levels (unit, integration, system)
   • Tools and techniques

4. Test Environment
   • Hardware/software requirements
   • Test data requirements
   • Environment setup responsibilities

5. Test Schedule
   • Milestones and deadlines
   • Dependencies on development
   • Resource allocation

6. Roles and Responsibilities
   • Test manager, test lead, testers
   • Development team responsibilities
   • Stakeholder responsibilities

7. Risk Analysis
   • Potential risks and mitigation plans
   • Contingency plans

8. Entry/Exit Criteria
   • When testing can start
   • When testing is complete

9. Test Deliverables
   • Test cases, test scripts, test reports
   • Defect reports, metrics

10. Metrics and Reporting
    • How progress will be measured
    • Reporting frequency and format

Example: For an e-commerce application, test plan would include testing user registration, product search, checkout process, payment integration, but exclude third-party vendor APIs.

Test plans ensure everyone understands what, how, when, and by whom testing will be performed.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={52}
              question="What is a test strategy?"
              approach="Definition + Components + Difference from Test Plan"
              answer={`A test strategy is a high-level document that defines the overall approach to testing for an organization or project.

Difference from Test Plan:
• Test Strategy: Organization-level, reusable across projects
• Test Plan: Project-specific, detailed execution plan

Components:

1. Scope and Objectives
   • What systems/applications to test
   • Quality goals and objectives

2. Testing Approach
   • Types of testing (manual, automation, performance)
   • Testing levels (unit, integration, system, UAT)
   • Risk-based testing approach

3. Test Environment Strategy
   • Environment management approach
   • Tools for environment setup
   • Data management strategy

4. Automation Strategy
   • What to automate and when
   • Tools and frameworks
   • Maintenance approach

5. Tool Strategy
   • Testing tools (JIRA, Selenium, Postman)
   • Defect tracking tools
   • Reporting tools

6. Risk Management
   • Risk assessment methodology
   • Mitigation strategies

7. Metrics and Reporting
   • Key metrics to track
   • Reporting standards

8. Reviews and Approvals
   • Review process for test artifacts
   • Approval criteria

Example: A company's test strategy might state:
• All projects use agile testing approach
• Unit test coverage minimum 80%
• Critical defects must be fixed before release
• Automation for regression testing
• JIRA for defect tracking

Test strategies provide consistency across projects and guide test planning.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={53}
              question="What is RTM (Requirements Traceability Matrix)?"
              approach="Definition + Purpose + Components + Example"
              answer={`Requirements Traceability Matrix (RTM) is a document that links requirements to test cases, ensuring all requirements are tested and traceable.

Purpose:
• Ensure 100% requirements coverage
• Track requirement changes and impact
• Verify all requirements are implemented and tested
• Provide audit trail for compliance

Components:

1. Requirement ID
   • Unique identifier from requirements document

2. Requirement Description
   • Brief description of the requirement

3. Test Case IDs
   • Links to test cases that verify this requirement

4. Test Status
   • Not Started, In Progress, Passed, Failed

5. Defect IDs
   • Links to defects found for this requirement

6. Implementation Status
   • Whether requirement is implemented

7. Notes
   • Additional information or comments

Types of Traceability:
• Forward Traceability: Requirements → Test Cases → Defects
• Backward Traceability: Test Cases → Requirements
• Bidirectional: Both directions

Example RTM:

| Req ID | Description | Test Cases | Status | Defects |
|--------|-------------|------------|--------|---------|
| REQ_001 | User login | TC_001, TC_002 | Passed | - |
| REQ_002 | Password reset | TC_003 | Failed | DEF_001 |
| REQ_003 | Profile update | TC_004, TC_005 | In Progress | - |

Benefits:
• Ensures no requirement is missed
• Impact analysis when requirements change
• Compliance and audit requirements
• Test coverage metrics

RTM is essential for thorough, requirements-driven testing.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={54}
              question="What are entry and exit criteria in testing?"
              approach="Definition + Examples + Importance"
              answer={`Entry criteria define the prerequisites that must be met before testing can begin. Exit criteria define when testing is complete and the product is ready for release.

Entry Criteria (When to Start Testing):

1. Test Environment Ready
   • Hardware/software installed and configured
   • Test data prepared
   • Access permissions granted

2. Test Artifacts Complete
   • Requirements document approved
   • Test cases written and reviewed
   • Test plan approved

3. Code/Feature Ready
   • Code developed and unit tested
   • Build deployed to test environment
   • No critical compilation errors

4. Dependencies Met
   • External systems/interfaces available
   • Third-party components integrated

Exit Criteria (When to Stop Testing):

1. Test Coverage Met
   • All planned test cases executed
   • Required coverage achieved (statement, branch, etc.)

2. Defect Criteria Met
   • No critical/high severity defects open
   • Known issues documented and accepted

3. Quality Metrics Met
   • Pass rate above threshold (e.g., 95%)
   • Performance benchmarks met

4. Documentation Complete
   • Test summary report prepared
   • Known issues documented
   • Release notes updated

Example:

Entry Criteria for System Testing:
• All integration testing completed successfully
• Test environment matches production
• Test data loaded and validated
• Test cases reviewed and approved

Exit Criteria for System Testing:
• 100% test cases executed
• No P0/P1 defects open
• Test summary report signed off
• Performance tests passed

These criteria ensure testing starts at the right time and ends when quality standards are met.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={55}
              question="What is a test summary report?"
              approach="Definition + Components + Purpose + Example"
              answer={`A test summary report is a document that summarizes the testing activities, results, and recommendations for a testing phase or project.

Purpose:
• Communicate testing outcomes to stakeholders
• Provide evidence of quality assurance activities
• Document known issues and risks
• Support release decisions

Key Components:

1. Executive Summary
   • Overall testing status
   • Key findings and recommendations
   • Go/no-go recommendation

2. Test Scope
   • What was tested and what wasn't
   • Test environment details

3. Test Execution Summary
   • Total test cases: 150
   • Executed: 145
   • Passed: 130
   • Failed: 15
   • Blocked: 0

4. Defect Summary
   • Total defects found: 25
   • By severity: Critical: 2, High: 8, Medium: 10, Low: 5
   • Open vs. Closed: 3 open, 22 closed
   • Defect density: 0.17 defects per test case

5. Test Coverage
   • Requirements coverage: 98%
   • Code coverage: 85%
   • Areas not covered and reasons

6. Test Environment
   • Browsers/devices tested
   • Test data used
   • Any environment issues

7. Risks and Issues
   • Known issues not fixed
   • Recommendations for production
   • Areas needing additional testing

8. Lessons Learned
   • What went well
   • What could be improved
   • Recommendations for future projects

Example Summary:
"System testing completed with 96% pass rate. 2 critical defects fixed, 3 medium defects deferred. Application meets quality standards for release. Recommended monitoring in production for deferred issues."

Test summary reports provide stakeholders with clear, data-driven information for release decisions.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={56}
              question="What metrics are important in software testing?"
              approach="Categories + Key Metrics + How to Use + Examples"
              answer={`Testing metrics provide quantitative data to measure testing effectiveness, quality, and progress.

Categories of Metrics:

1. Test Execution Metrics
   • Test Case Execution Rate: Tests executed per day
   • Test Pass Rate: (Passed tests / Total executed) × 100
   • Test Coverage: Percentage of requirements/code covered

2. Defect Metrics
   • Defect Density: Defects per test case or per KLOC
   • Defect Leakage: Defects found post-release
   • Defect Removal Efficiency: Defects found by testing vs. production
   • Mean Time To Detect (MTTD): Average time to find defects
   • Mean Time To Resolve (MTTR): Average time to fix defects

3. Quality Metrics
   • Defect Severity Index: Weighted average of defect severities
   • Test Effectiveness: Defects found / (Defects found + Defects missed)
   • Requirements Coverage: Requirements with test cases

4. Process Metrics
   • Test Case Preparation Time: Time to write test cases
   • Test Execution Time: Time to run all tests
   • Automation Coverage: Percentage of tests automated

Key Metrics to Track:

1. Test Progress
   • Tests planned vs. executed vs. remaining
   • Daily execution rate

2. Test Quality
   • Pass/fail rates by test type
   • Defect trends over time

3. Defect Analysis
   • Defects by severity, priority, module
   • Defect age (how long defects remain open)

4. Efficiency
   • Time spent on testing activities
   • Cost of finding/fixing defects

Example Dashboard:
• Test Pass Rate: 94%
• Defect Density: 0.15 defects/test case
• Critical Defects: 0 open
• Test Coverage: 97%
• MTTR: 2.3 days

Use metrics to:
• Identify bottlenecks
• Predict release dates
• Improve processes
• Demonstrate testing value

Avoid vanity metrics - focus on actionable data that drives decisions.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={57}
              question="What is test coverage?"
              approach="Definition + Types + Calculation + Importance"
              answer={`Test coverage measures how much of the application has been tested, ensuring comprehensive testing without gaps.

Types of Coverage:

1. Requirements Coverage
   • Percentage of requirements with test cases
   • Calculation: (Requirements with tests / Total requirements) × 100
   • Example: 95% of 200 requirements have test cases

2. Code Coverage
   • Percentage of code executed during testing
   • Types:
     - Statement Coverage: Lines of code executed
     - Branch Coverage: Decision points (if-else) tested
     - Function Coverage: Functions called
     - Condition Coverage: Boolean conditions tested

3. Feature Coverage
   • Percentage of features tested
   • Example: Login (100%), Search (80%), Checkout (95%)

4. Risk Coverage
   • High-risk areas tested more thoroughly
   • Example: Payment processing (100%), Admin features (60%)

Importance:
• Ensures no functionality is missed
• Identifies testing gaps
• Provides confidence in release quality
• Helps prioritize testing efforts

Example:
Application has 1000 lines of code
Unit tests execute 800 lines → 80% statement coverage
Integration tests execute additional 150 lines → 95% total coverage

Tools for measuring:
• Code coverage: JaCoCo, Cobertura, Istanbul
• Requirements coverage: RTM, test management tools

Aim for high coverage but remember: 100% coverage doesn't guarantee bug-free software. Focus on meaningful coverage of critical paths.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={58}
              question="What is defect density?"
              approach="Definition + Calculation + Interpretation + Example"
              answer={`Defect density measures the number of defects found per unit of software size, indicating code quality and testing effectiveness.

Calculation:
• Per Test Case: Total defects / Total test cases executed
• Per KLOC: Total defects / Thousands of lines of code
• Per Function Point: Total defects / Function points

Example:
• Project A: 50 defects in 500 test cases → 0.1 defects/test case
• Project B: 30 defects in 300 test cases → 0.1 defects/test case
• But Project A has 100K lines of code, Project B has 20K lines
• Defect density: Project A (0.5/KLOC), Project B (1.5/KLOC)

Interpretation:
• Lower density = Better quality or better testing
• Compare across similar projects
• Track trends over releases
• Identify modules with high density

Factors affecting density:
• Code complexity
• Testing thoroughness
• Developer experience
• Requirements clarity

Example Analysis:
Module X: 15 defects in 10K lines → 1.5 defects/KLOC (High - needs attention)
Module Y: 3 defects in 15K lines → 0.2 defects/KLOC (Good quality)

Use density to:
• Compare quality across modules/projects
• Identify areas needing improvement
• Measure testing effectiveness
• Set quality benchmarks

Note: Density varies by project type, team, and methodology. Use as relative measure, not absolute.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={59}
              question="How do you prioritize test cases?"
              approach="Methods + Factors + Example + Tools"
              answer={`Test case prioritization ensures critical functionality is tested first, optimizing testing within time constraints.

Methods:

1. Risk-Based Prioritization
   • High-risk areas tested first
   • Risk = Probability × Impact
   • Example: Payment processing (high risk), User profile (medium risk)

2. Requirements-Based
   • Business-critical requirements first
   • Core features before secondary features
   • Example: Login > Search > Wishlist > Help

3. Usage-Based
   • Frequently used features first
   • Pareto principle: 80% of users use 20% of features
   • Example: Home page > Product search > Cart > Checkout

4. Defect-Based
   • Areas with historical defects prioritized
   • Example: Module with 50% of past bugs gets more testing

5. Impact-Based
   • Features affecting many users or revenue
   • Example: Shopping cart > Product reviews > User settings

Factors to Consider:
• Business impact (revenue, user experience)
• Technical risk (complexity, dependencies)
• User impact (number of users affected)
• Historical data (past defect rates)
• Time constraints (must-test vs. nice-to-test)

Example Prioritization:
P0 (Critical - Must Test):
• User registration and login
• Product search and purchase
• Payment processing

P1 (High Priority):
• User profile management
• Order history
• Password reset

P2 (Medium):
• Product reviews
• Wishlist functionality
• Advanced filters

Tools:
• Test management tools with priority fields
• Risk assessment matrices
• Historical defect data analysis

Prioritization ensures maximum value from limited testing time.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={60}
              question="What is risk-based testing?"
              approach="Definition + Process + Example + Benefits"
              answer={`Risk-based testing prioritizes testing efforts based on the likelihood and impact of potential failures.

Process:

1. Risk Identification
   • Identify potential risks in the application
   • Technical risks: Complex algorithms, integrations
   • Business risks: Revenue-impacting features

2. Risk Assessment
   • Probability: How likely is the risk to occur?
   • Impact: How severe would the consequences be?
   • Risk Level = Probability × Impact

3. Risk Prioritization
   • High risk: Test thoroughly
   • Medium risk: Test adequately
   • Low risk: Test minimally or not at all

4. Test Planning
   • Allocate more time/resources to high-risk areas
   • Design specific test cases for high-risk scenarios

5. Risk Mitigation
   • Additional testing for high-risk areas
   • Contingency plans for identified risks

Example Risk Assessment:

| Feature | Probability | Impact | Risk Level | Testing Focus |
|---------|-------------|--------|------------|---------------|
| Payment Processing | High | Critical | Very High | Extensive testing, multiple scenarios |
| User Registration | Medium | High | High | Comprehensive validation |
| Password Reset | Low | Medium | Medium | Standard testing |
| Help Documentation | Low | Low | Low | Minimal testing |

Benefits:
• Efficient use of testing resources
• Focus on areas that matter most
• Better coverage of critical functionality
• Data-driven testing decisions

Risk-based testing ensures quality where it matters most, rather than equal testing of all features.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={61}
              question="What is configuration management?"
              approach="Definition + Purpose + Components + Example"
              answer={`Configuration management controls and tracks changes to software and its components throughout the development lifecycle.

Purpose:
• Ensure consistency across environments
• Track what versions are where
• Enable rollbacks if needed
• Support debugging and support

Components:

1. Configuration Items (CI)
   • Software components, documents, hardware
   • Example: Source code, test scripts, databases, servers

2. Version Control
   • Track changes to CIs
   • Tools: Git, SVN, TFS
   • Branches for different environments

3. Configuration Management Database (CMDB)
   • Central repository of all CIs and relationships
   • Shows what versions are deployed where

4. Change Control
   • Process for approving and tracking changes
   • Impact analysis before changes

5. Build Management
   • Automated build processes
   • Consistent builds across environments

In Testing Context:
• Ensure test environment matches production
• Track test script versions
• Manage test data versions
• Control test tool configurations

Example:
Application v2.1 deployed to production contains:
• Web server v1.8
• Database schema v3.2
• API v2.0
• Test scripts v1.5

If issues arise, can identify exactly what versions were running.

Configuration management prevents "works on my machine" issues and ensures reproducible environments.`}
              category="Test Management"
            />

            <QuestionAnswerCard
              questionNumber={62}
              question="What is change management in testing?"
              approach="Definition + Process + Testing Impact + Example"
              answer={`Change management is the process of controlling and documenting changes to software to minimize risks and ensure quality.

Process:

1. Change Request
   • Identify need for change
   • Document change requirements

2. Impact Assessment
   • Analyze effects on existing functionality
   • Identify affected components and tests

3. Approval Process
   • Review and approve changes
   • Consider business and technical impacts

4. Implementation
   • Make the change in controlled manner
   • Update documentation

5. Validation
   • Test the change
   • Verify no unintended side effects

6. Deployment
   • Roll out to production
   • Monitor for issues

Testing Impact:
• Regression testing after changes
• Impact analysis to identify affected test cases
• Test case updates for changed functionality
• Additional testing for high-risk changes

Example Change:
Adding coupon discount feature to e-commerce site

Impact Assessment:
• Affects: Checkout process, pricing calculations, order total
• Risk: High (pricing is critical)
• Testing needed: Unit tests for discount logic, integration tests for checkout, regression tests for existing pricing

Change management ensures changes are implemented safely with proper testing and rollback plans.`}
              category="Test Management"
            />
          </section>

          {/* Agile & Methodologies Section */}
          <section id="agile-methodologies">
            <SectionHeader
              title="Agile & Methodologies"
              subtitle="Understand modern development approaches and how testing fits into agile processes."
              icon={Users}
              color="purple"
              questionCount={10}
            />

            <QuestionAnswerCard
              questionNumber={63}
              question="What is Agile testing?"
              approach="Definition + Principles + Differences from Traditional + Example"
              answer={`Agile testing is a software testing approach that aligns with agile development principles, emphasizing collaboration, flexibility, and continuous testing.

Key Principles:

1. Continuous Testing
   • Test throughout development, not just at end
   • Unit tests with code commits
   • Automated tests in CI/CD pipeline

2. Collaborative Approach
   • Testers work with developers from day one
   • Cross-functional teams
   • Shared responsibility for quality

3. Test-First Approach
   • TDD (Test-Driven Development): Write tests before code
   • BDD (Behavior-Driven Development): Tests written in business language

4. Flexible Planning
   • Test plans adapt to changing requirements
   • Short iterations with testing feedback
   • Risk-based testing prioritization

5. Automation Focus
   • Automated regression suites
   • Fast feedback through automation
   • Continuous integration testing

Differences from Traditional Testing:
• Traditional: Big upfront planning, testing at end
• Agile: Incremental planning, continuous testing
• Traditional: Separate testing phase
• Agile: Testing integrated with development

Example Agile Testing Cycle:
Sprint 1: Plan → Develop → Test → Review → Deploy
Sprint 2: Plan → Develop → Test → Review → Deploy
Continuous feedback and improvement

Agile testing ensures quality is built in, not tested in at the end.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={64}
              question="What is the difference between Agile and Waterfall testing?"
              approach="Compare Key Aspects + Advantages/Disadvantages + When to Use"
              answer={`Agile and Waterfall represent different approaches to software development and testing.

Key Differences:

1. Planning Approach
   • Waterfall: Detailed upfront planning, fixed requirements
   • Agile: Iterative planning, requirements can change

2. Testing Timing
   • Waterfall: Testing is a separate phase at the end
   • Agile: Testing happens continuously throughout development

3. Documentation
   • Waterfall: Comprehensive documentation upfront
   • Agile: Minimal documentation, working software prioritized

4. Flexibility
   • Waterfall: Changes difficult once requirements frozen
   • Agile: Changes welcomed and incorporated quickly

5. Team Structure
   • Waterfall: Specialized roles (separate testers)
   • Agile: Cross-functional teams, shared responsibilities

6. Delivery
   • Waterfall: Big release at end of project
   • Agile: Incremental releases every 2-4 weeks

Testing in Waterfall:
• Requirements → Design → Development → Testing → Deployment
• Testing starts after development complete
• Focus on comprehensive test documentation

Testing in Agile:
• Testing starts with requirement analysis
• Unit testing with development
• Continuous integration testing
• Acceptance testing per user story

Advantages:
• Agile: Faster feedback, adaptable to changes, working software sooner
• Waterfall: Predictable, good for stable requirements, comprehensive planning

When to Use:
• Agile: Dynamic requirements, fast-changing markets, user feedback important
• Waterfall: Regulated industries, stable requirements, safety-critical systems

Most modern projects use hybrid approaches, combining agile flexibility with some waterfall structure.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={65}
              question="What is a sprint in Agile?"
              approach="Definition + Components + Testing Role + Example"
              answer={`A sprint is a fixed time period (usually 2-4 weeks) in agile development where a team works to deliver a potentially releasable product increment.

Sprint Components:

1. Sprint Planning (Day 1)
   • Team selects user stories from backlog
   • Breaks down into tasks
   • Estimates effort
   • Testers help estimate testing effort

2. Daily Standups
   • 15-minute daily meetings
   • What did you do yesterday?
   • What will you do today?
   • Any blockers?

3. Development Work
   • Developers write code
   • Testers write test cases, automate tests
   • Continuous integration and testing

4. Sprint Review (End of sprint)
   • Demonstrate working software to stakeholders
   • Testers show test results and coverage

5. Sprint Retrospective
   • What went well?
   • What could be improved?
   • Testers provide feedback on testing process

Testing Role in Sprint:
• Test case creation during sprint planning
• Unit testing alongside development
• Integration testing as features complete
• Regression testing before sprint end
• Acceptance testing for user stories

Example Sprint Flow:
Week 1: User story development + unit testing
Week 2: Integration + system testing
End: Regression testing + sprint review

Sprints ensure regular delivery of working, tested software with continuous feedback.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={66}
              question="What is Scrum? What are the roles in Scrum?"
              approach="Definition + Framework + Roles + Events + Artifacts"
              answer={`Scrum is an agile framework for managing complex projects, focusing on iterative development and frequent delivery of working software.

Scrum Framework:

1. Roles
   • Product Owner: Represents stakeholders, manages backlog, prioritizes features
   • Scrum Master: Facilitates process, removes impediments, coaches team
   • Development Team: Cross-functional team including testers, developers, designers

2. Events
   • Sprint: 2-4 week iteration
   • Sprint Planning: Plan work for sprint
   • Daily Scrum: 15-minute daily coordination
   • Sprint Review: Demonstrate work to stakeholders
   • Sprint Retrospective: Improve process

3. Artifacts
   • Product Backlog: All potential work items
   • Sprint Backlog: Work committed for current sprint
   • Increment: Working software at end of sprint

Testing in Scrum:
• Testers are part of development team
• Testing happens throughout sprint
• Definition of Done includes testing criteria
• Testers participate in all ceremonies

Example Team:
• Product Owner: Defines user stories
• Scrum Master: Ensures agile process followed
• Development Team (7 people):
  - 4 Developers
  - 2 Testers
  - 1 Designer

Scrum provides structure for agile development while allowing flexibility in how work gets done.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={67}
              question="What is a user story?"
              approach="Definition + Format + Components + Testing Perspective"
              answer={`A user story is a simple description of a feature from the end-user's perspective, written in natural language.

Standard Format:
"As a [type of user], I want [some goal] so that [some reason]"

Components:

1. Who: User type (customer, admin, registered user)
2. What: Desired functionality
3. Why: Business value or benefit

Example:
"As a registered user, I want to reset my password so that I can regain access to my account if I forget it"

Characteristics:
• Independent: Can be developed separately
• Negotiable: Details can be discussed
• Valuable: Provides business value
• Estimable: Can be sized
• Small: Can be completed in one sprint
• Testable: Can be verified

Testing Perspective:
• Acceptance Criteria: Conditions for story to be "done"
• Test Cases: Derived from user story and acceptance criteria
• Definition of Done: Includes testing requirements

Example Acceptance Criteria:
• User receives password reset email within 5 minutes
• Reset link works only once
• Password meets security requirements
• User can login with new password

User stories ensure development focuses on user value and testable deliverables.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={68}
              question="What are acceptance criteria?"
              approach="Definition + Purpose + Components + Example"
              answer={`Acceptance criteria are the conditions that a user story must meet to be considered complete and acceptable to stakeholders.

Purpose:
• Define "done" for each user story
• Ensure understanding between product owner and team
• Provide basis for testing
• Prevent scope creep

Components:

1. Functional Requirements
   • What the feature must do
   • Example: "User can enter email and password"

2. Non-Functional Requirements
   • Performance, security, usability
   • Example: "Login completes within 3 seconds"

3. Business Rules
   • Business logic and validations
   • Example: "Password must be 8+ characters"

4. Edge Cases
   • Error conditions and boundary cases
   • Example: "Invalid email shows error message"

5. Negative Scenarios
   • What should NOT happen
   • Example: "User cannot login with wrong password"

Example for Login User Story:

Acceptance Criteria:
1. User can login with valid email and password
2. Invalid credentials show "Invalid email or password" message
3. Login form validates email format
4. Password field masks input
5. "Remember me" checkbox saves session for 30 days
6. Login works on Chrome, Firefox, and Safari
7. Login completes within 2 seconds

Acceptance criteria ensure everyone agrees on what "done" means and provide clear testing guidelines.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={69}
              question="What is the testing pyramid?"
              approach="Definition + Layers + Ratio + Benefits"
              answer={`The testing pyramid is a concept that describes the ideal distribution of different types of automated tests in a testing strategy.

Layers (from bottom to top):

1. Unit Tests (Base - 70-80%)
   • Test individual functions/classes
   • Fast, isolated, developer-written
   • Example: Test calculateTotal() function

2. Integration Tests (Middle - 15-20%)
   • Test component interactions
   • Test APIs, database connections
   • Example: Test user registration with database

3. UI/E2E Tests (Top - 5-10%)
   • Test complete user workflows
   • Slow, brittle, expensive to maintain
   • Example: Complete checkout process

Ideal Ratio: 70% Unit : 20% Integration : 10% UI

Benefits:
• Fast feedback (unit tests catch issues early)
• Cost-effective (unit tests cheapest to write/maintain)
• Reliable (fewer dependencies, less brittle)
• Comprehensive coverage at different levels

Why Pyramid Shape:
• More tests at lower levels (faster, cheaper)
• Fewer tests at higher levels (slower, more expensive)
• Catches most bugs where they're cheapest to fix

Modern Variation - Testing Trophy:
• Static Analysis: Linting, type checking
• Unit Tests: Logic testing
• Integration Tests: Feature testing
• E2E Tests: User journey testing

The pyramid ensures efficient, effective automated testing coverage.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={70}
              question="What is shift-left testing?"
              approach="Definition + Benefits + Implementation + Example"
              answer={`Shift-left testing moves testing activities earlier in the development lifecycle, starting from requirements and design phases rather than waiting for coding completion.

Traditional Approach:
Requirements → Design → Development → Testing → Deployment
Testing starts late, bugs found late

Shift-Left Approach:
Requirements (with testing) → Design (with testing) → Development (with testing) → Testing → Deployment
Testing integrated from beginning

Benefits:

1. Early Bug Detection
   • Find issues when cheapest to fix
   • Requirements clarified with testing input

2. Faster Feedback
   • Continuous testing throughout development
   • Issues fixed immediately, not at end

3. Better Quality
   • Quality built in, not tested in
   • Fewer defects reach production

4. Cost Savings
   • Fixing bugs early costs less
   • Less rework and delays

Implementation:

1. Testable Requirements
   • Acceptance criteria defined upfront
   • Requirements reviewed by testers

2. Test-Driven Development (TDD)
   • Tests written before code
   • Code written to pass tests

3. Continuous Integration
   • Automated tests run with every code change
   • Immediate feedback

4. Collaborative Culture
   • Testers involved in requirements and design
   • Developers write unit tests
   • Cross-functional teams

Example:
Traditional: Developer writes code for 2 weeks, tester tests for 1 week, finds 20 bugs
Shift-Left: Tester reviews requirements, developer writes tests first, CI catches issues daily, only 3 bugs found at end

Shift-left testing prevents problems rather than finding them.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={71}
              question="What is DevOps and how does it relate to QA?"
              approach="Definition + DevOps Pipeline + QA Role + Benefits"
              answer={`DevOps combines development and operations to enable faster, more reliable software delivery through automation and collaboration.

DevOps Principles:
• Automation of manual processes
• Continuous integration and deployment
• Infrastructure as code
• Monitoring and logging
• Cross-functional teams

DevOps Pipeline:
1. Plan: Requirements and planning
2. Code: Development with version control
3. Build: Automated compilation and packaging
4. Test: Automated testing (unit, integration, UI)
5. Release: Automated deployment to staging
6. Deploy: Automated deployment to production
7. Operate: Monitoring and maintenance
8. Monitor: Performance monitoring and feedback

QA Role in DevOps:

1. Test Automation
   • Automated test suites in CI/CD pipeline
   • Tests run automatically on code changes

2. Quality Gates
   • Define quality standards for each stage
   • Block deployments if tests fail

3. Shift-Left Testing
   • Testing integrated from development start
   • Early feedback and bug prevention

4. Continuous Testing
   • Tests run in every environment
   • Performance and security testing automated

5. Monitoring and Feedback
   • Production monitoring for quality issues
   • Feedback loops for process improvement

Benefits for QA:
• Faster release cycles
• More reliable deployments
• Earlier bug detection
• Reduced manual testing effort
• Better collaboration with development

Example DevOps Workflow:
Developer commits code → CI builds → Automated tests run → If pass, deploy to staging → Manual testing → If pass, deploy to production → Monitor performance

DevOps transforms QA from bottleneck to enabler of fast, quality software delivery.`}
              category="Agile & Methodologies"
            />

            <QuestionAnswerCard
              questionNumber={72}
              question="What is behavior-driven development (BDD)?"
              approach="Definition + Process + Tools + Example + Benefits"
              answer={`BDD is a collaborative approach where developers, testers, and business stakeholders define application behavior through conversations and automated tests.

Key Principles:

1. Collaboration
   • Business, development, and testing work together
   • Shared understanding through examples

2. Ubiquitous Language
   • Common vocabulary across all team members
   • Business terms used in technical discussions

3. Living Documentation
   • Tests serve as documentation
   • Always up-to-date with current behavior

BDD Process:

1. Discovery
   • Business stakeholders describe desired behavior
   • Team discusses examples and edge cases

2. Formulation
   • Write scenarios in Gherkin language
   • Given-When-Then format

3. Automation
   • Developers implement step definitions
   • Tests become automated acceptance tests

Gherkin Syntax:
Feature: User login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in

Tools:
• Cucumber: Most popular BDD framework
• SpecFlow: .NET BDD framework
• Behave: Python BDD framework
• JBehave: Java BDD framework

Benefits:
• Better communication between business and technical teams
• Tests written in business language
• Automated acceptance tests
• Living documentation that stays current

Example:
Business: "Users should be able to reset passwords"
BDD Scenario:
Given a user has forgotten their password
When they request a password reset
Then they receive an email with reset instructions
And the reset link works only once

BDD ensures everyone understands requirements the same way and creates testable, automated acceptance criteria.`}
              category="Agile & Methodologies"
            />
          </section>

          {/* Tools & Technologies Section */}
          <section id="tools-technologies">
            <SectionHeader
              title="Tools & Technologies"
              subtitle="Master the essential tools and technologies used in modern software testing."
              icon={Wrench}
              color="orange"
              questionCount={10}
            />

            <QuestionAnswerCard
              questionNumber={73}
              question="What is JIRA? How is it used in testing?"
              approach="Definition + Features + Testing Workflow + Example"
              answer={`JIRA is a project management and issue tracking tool developed by Atlassian, widely used for agile development and testing coordination.

Key Features:

1. Issue Tracking
   • Create, assign, and track bugs, tasks, user stories
   • Custom issue types and workflows

2. Agile Boards
   • Kanban and Scrum boards
   • Sprint planning and tracking

3. Reporting
   • Burndown charts, velocity reports
   • Custom dashboards and metrics

4. Integration
   • Connects with Git, Jenkins, Confluence
   • API for custom integrations

Testing Workflow in JIRA:

1. Test Planning
   • Create test cases as issues or use test management plugins
   • Link test cases to user stories

2. Bug Reporting
   • Create bug tickets with detailed information
   • Attach screenshots, logs, reproduction steps
   • Set severity and priority

3. Test Execution Tracking
   • Update test case status (To Do, In Progress, Done)
   • Link defects to test cases

4. Sprint Management
   • Plan testing tasks in sprints
   • Track testing progress on boards

5. Reporting
   • Generate test execution reports
   • Track defect trends and metrics

Example Workflow:
1. Developer moves user story to "Ready for Testing"
2. Tester creates sub-tasks for test cases
3. Tester executes tests and logs bugs if found
4. Developer fixes bugs and moves back to testing
5. Tester retests and closes if fixed
6. Story moves to "Done"

Common JIRA Issue Types for Testing:
• Bug: Defects found during testing
• Test Case: Manual test procedures
• Test Execution: Record of test runs
• Epic/Story: Features to be tested

JIRA centralizes communication and tracking between development, testing, and business teams.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={74}
              question="What is Postman? How do you test APIs with it?"
              approach="Definition + Features + Testing Workflow + Example"
              answer={`Postman is a popular API testing and development tool that allows you to create, test, and document APIs without writing code.

Key Features:

1. Request Builder
   • Create HTTP requests (GET, POST, PUT, DELETE)
   • Set headers, parameters, body

2. Collections
   • Organize related requests
   • Share collections with team

3. Environments
   • Manage different environments (dev, staging, prod)
   • Use variables for dynamic values

4. Tests
   • Write JavaScript tests for responses
   • Validate status codes, response data, performance

5. Automation
   • Run collections automatically
   • Integrate with CI/CD pipelines

API Testing Workflow:

1. Setup
   • Create collection for API endpoints
   • Set up environments with base URLs and tokens

2. Request Creation
   • Add request for each API endpoint
   • Configure method, URL, headers, body

3. Test Writing
   • Add tests in "Tests" tab using JavaScript
   • Validate response status, schema, data

4. Execution
   • Send individual requests or run entire collection
   • View response details and test results

5. Automation
   • Use Newman (Postman's CLI) for CI/CD
   • Schedule automated runs

Example API Test:

POST {{base_url}}/api/users
Headers: Content-Type: application/json
Authorization: Bearer {{auth_token}}

Body:
{
    "name": "John Doe",
    "email": "john@example.com"
}

Tests:
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response has user id", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
});

pm.test("User email matches", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.email).to.eql("john@example.com");
});

Postman makes API testing accessible through its visual interface while supporting advanced automation and team collaboration.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={75}
              question="What is JMeter used for?"
              approach="Definition + Use Cases + Components + Example"
              answer={`JMeter is an open-source performance testing tool used to test the performance, load, and stress of web applications, APIs, and other services.

Primary Uses:

1. Load Testing
   • Simulate multiple users accessing application
   • Test how system performs under normal load

2. Stress Testing
   • Test system beyond normal capacity
   • Find breaking points and failure behavior

3. Performance Testing
   • Measure response times, throughput, resource usage
   • Identify performance bottlenecks

4. API Testing
   • Test REST and SOAP APIs
   • Validate response times and data

Key Components:

1. Test Plan
   • Root element containing all test elements

2. Thread Groups
   • Define number of users, ramp-up time, loop count
   • Example: 100 users, ramp up over 10 seconds, run for 5 minutes

3. Samplers
   • Define what to test (HTTP requests, JDBC, etc.)
   • Configure request details

4. Controllers
   • Control test flow (if controllers, loops, etc.)

5. Listeners
   • View and analyze test results
   • Generate reports and graphs

6. Assertions
   • Validate responses (status codes, content, etc.)

Example Load Test Setup:
• Thread Group: 50 users, ramp-up 5 seconds, loop 10 times
• HTTP Sampler: GET request to /api/products
• Assertions: Response time < 2000ms, status code 200
• Listeners: View Results Tree, Summary Report

Benefits:
• Free and open-source
• Supports various protocols (HTTP, JDBC, JMS)
• Distributed testing across multiple machines
• Rich reporting and analysis

JMeter helps ensure applications perform well under real-world usage conditions.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={76}
              question="What is Git? What are basic Git commands?"
              approach="Definition + Purpose + Basic Commands + Workflow"
              answer={`Git is a distributed version control system that tracks changes in source code during software development.

Purpose:
• Track file changes over time
• Enable collaboration among developers
• Maintain code history and versions
• Support branching and merging
• Enable rollbacks to previous versions

Basic Commands:

1. Setup
   • git init: Initialize repository
   • git clone <url>: Clone remote repository

2. Daily Workflow
   • git status: Check current status
   • git add <file>: Stage changes
   • git add . : Stage all changes
   • git commit -m "message": Commit staged changes

3. Branching
   • git branch: List branches
   • git branch <name>: Create new branch
   • git checkout <branch>: Switch to branch
   • git checkout -b <name>: Create and switch to branch

4. Remote Operations
   • git remote -v: List remote repositories
   • git push origin <branch>: Push to remote
   • git pull origin <branch>: Pull from remote
   • git fetch: Download changes without merging

5. History and Comparison
   • git log: View commit history
   • git diff: Show changes between commits
   • git blame <file>: Show who changed each line

6. Undoing Changes
   • git reset <file>: Unstage file
   • git reset --hard: Discard all changes
   • git revert <commit>: Create new commit that undoes changes

Typical Workflow:
1. git pull origin main (get latest changes)
2. git checkout -b feature/login (create feature branch)
3. Make changes to files
4. git add . (stage changes)
5. git commit -m "Add login validation" (commit changes)
6. git push origin feature/login (push branch)
7. Create pull request for review

Git enables efficient collaboration and maintains a complete history of code changes.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={77}
              question="What is Jenkins?"
              approach="Definition + Purpose + Key Features + Example Pipeline"
              answer={`Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD) of software projects.

Purpose:
• Automate build, test, and deployment processes
• Provide fast feedback on code changes
• Enable continuous delivery pipelines
• Integrate with various tools and services

Key Features:

1. Pipeline as Code
   • Define build pipelines using Jenkinsfile
   • Version control for pipeline definitions

2. Extensibility
   • 1000+ plugins for different tools
   • Integrate with Git, Docker, AWS, etc.

3. Distributed Builds
   • Run builds on multiple machines
   • Master-slave architecture

4. Scheduling
   • Trigger builds on schedule, commits, or manually
   • Poll version control systems

5. Reporting
   • Build status and history
   • Test results and coverage reports
   • Notifications and alerts

Example Jenkins Pipeline:

pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/project/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
                junit 'target/surefire-reports/*.xml'
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                sh 'deploy-to-staging.sh'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

In Testing Context:
• Run automated test suites on code commits
• Generate test reports and coverage metrics
• Deploy to test environments automatically
• Send notifications on test failures

Jenkins enables automated, reliable software delivery with integrated testing.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={78}
              question="What is Docker in testing context?"
              approach="Definition + Testing Benefits + Use Cases + Example"
              answer={`Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers.

In Testing Context:

Benefits:

1. Consistent Environments
   • Same environment across development, testing, production
   • Eliminates "works on my machine" issues

2. Isolation
   • Tests run in isolated containers
   • No interference between test runs

3. Scalability
   • Run multiple test containers in parallel
   • Easy scaling for load testing

4. Version Control
   • Container images versioned and reproducible
   • Rollback to previous test environments

Use Cases:

1. Test Environment Setup
   • Spin up databases, services for testing
   • Example: PostgreSQL container for database testing

2. Selenium Grid
   • Run browser tests in Docker containers
   • Scale browser instances as needed

3. API Testing
   • Test microservices in isolated containers
   • Mock external dependencies

4. CI/CD Integration
   • Build and test in Docker containers
   • Consistent builds across different machines

Example Docker Commands:
• docker run -d -p 5432:5432 postgres:13 (start PostgreSQL)
• docker build -t myapp . (build application image)
• docker run myapp (run application)
• docker-compose up (start multi-container application)

Example Testing Setup:
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      POSTGRES_PASSWORD: testpass
  selenium:
    image: selenium/standalone-chrome
    ports:
      - "4444:4444"

This setup provides consistent, isolated testing environments that match production.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={79}
              question="What is SQL? Write a basic SELECT query."
              approach="Definition + Basic Commands + Example Query + Testing Context"
              answer={`SQL (Structured Query Language) is a programming language used to manage and manipulate relational databases.

Basic SQL Commands:

1. DDL (Data Definition Language)
   • CREATE: Create tables, databases
   • ALTER: Modify table structure
   • DROP: Delete tables, databases

2. DML (Data Manipulation Language)
   • SELECT: Retrieve data
   • INSERT: Add new records
   • UPDATE: Modify existing records
   • DELETE: Remove records

3. DCL (Data Control Language)
   • GRANT: Give permissions
   • REVOKE: Remove permissions

4. TCL (Transaction Control Language)
   • COMMIT: Save changes
   • ROLLBACK: Undo changes
   • SAVEPOINT: Set rollback point

Basic SELECT Query:

SELECT column1, column2, column3
FROM table_name
WHERE condition
ORDER BY column_name;

Example:
SELECT first_name, last_name, email
FROM users
WHERE status = 'active'
ORDER BY last_name;

Advanced Example:
SELECT u.first_name, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_date >= '2023-01-01'
GROUP BY u.id, u.first_name, u.email
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;

In Testing Context:
• Validate data after test execution
• Check database state during API testing
• Verify data integrity in database testing
• Create test data for automated tests

Example Test Query:
SELECT COUNT(*) FROM users WHERE email = 'test@example.com';
-- Verify user was created by API test

SQL is essential for database testing and validating application data operations.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={80}
              question="What testing tools have you used or are familiar with?"
              approach="Categorize Tools + Examples + When to Use Each"
              answer={`Testing tools span different categories, each serving specific testing needs.

Test Management Tools:
• JIRA: Issue tracking, test case management
• TestRail: Dedicated test management
• Zephyr: JIRA plugin for test management
• qTest: Enterprise test management

Automation Tools:
• Selenium WebDriver: Web application automation
• Appium: Mobile application automation
• Cypress: Modern web testing framework
• Playwright: Cross-browser automation
• RestAssured: API automation (Java)
• Postman: API testing and automation

Performance Tools:
• JMeter: Load and performance testing
• LoadRunner: Enterprise performance testing
• Gatling: Scala-based performance testing
• k6: Modern load testing

API Testing Tools:
• Postman: Manual and automated API testing
• SoapUI: SOAP and REST API testing
• Insomnia: API client and testing
• Newman: Postman's CLI for automation

Database Tools:
• SQL Developer: Oracle database management
• pgAdmin: PostgreSQL management
• MySQL Workbench: MySQL database management
• DBeaver: Universal database client

Version Control:
• Git: Distributed version control
• GitHub/GitLab: Code hosting and collaboration
• Bitbucket: Atlassian code hosting

CI/CD Tools:
• Jenkins: Automation server
• GitLab CI: Integrated CI/CD
• GitHub Actions: GitHub CI/CD
• CircleCI: Cloud CI/CD

Bug Tracking:
• JIRA: Most popular bug tracking
• Bugzilla: Open-source bug tracking
• MantisBT: Web-based bug tracking

Mobile Testing:
• Appium: Cross-platform mobile automation
• XCUITest: iOS native testing
• Espresso: Android native testing
• BrowserStack: Cloud mobile testing

Security Testing:
• OWASP ZAP: Web application security scanner
• Burp Suite: Professional security testing
• Nessus: Vulnerability scanner

When to Choose Tools:
• Start with free/open-source tools (Selenium, JMeter, Postman)
• Choose based on technology stack
• Consider team skills and learning curve
• Evaluate integration capabilities
• Assess scalability and reporting needs

Most projects use a combination of tools rather than a single comprehensive solution.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={81}
              question="What is a bug tracking tool?"
              approach="Definition + Purpose + Key Features + Popular Tools"
              answer={`A bug tracking tool is software that helps teams record, track, and manage software defects throughout their lifecycle.

Purpose:
• Centralize bug reporting and tracking
• Improve communication between teams
• Provide visibility into bug status and trends
• Ensure bugs are properly investigated and fixed
• Generate reports for quality metrics

Key Features:

1. Issue Creation
   • Detailed bug reports with steps, screenshots, logs
   • Custom fields for severity, priority, environment
   • Attachments and links

2. Workflow Management
   • Status tracking (New, Open, In Progress, Resolved, Closed)
   • Assignment to team members
   • Automated notifications

3. Collaboration
   • Comments and discussions on issues
   • @mentions for team communication
   • Integration with chat tools

4. Reporting and Analytics
   • Bug trend analysis
   • Team performance metrics
   • Custom dashboards

5. Integration
   • Connect with version control, CI/CD, test tools
   • API for custom integrations

Popular Bug Tracking Tools:

1. JIRA (Most Popular)
   • Used by 65%+ of software teams
   • Highly customizable workflows
   • Strong reporting and integration

2. Bugzilla
   • Open-source, free
   • Simple and effective
   • Used by Mozilla, Eclipse projects

3. GitHub Issues
   • Integrated with code repositories
   • Good for open-source projects
   • Simple interface

4. Azure DevOps
   • Microsoft's comprehensive DevOps platform
   • Includes bug tracking, CI/CD, testing

5. MantisBT
   • Web-based, open-source
   • Lightweight and easy to set up

6. Redmine
   • Open-source project management
   • Includes bug tracking features

Best Practices:
• Use consistent bug report format
• Include all necessary details (steps, environment, expected vs actual)
• Set appropriate severity and priority
• Keep bug titles clear and descriptive
• Update status regularly
• Link related issues

Bug tracking tools ensure systematic defect management and improve software quality.`}
              category="Tools & Technologies"
            />

            <QuestionAnswerCard
              questionNumber={82}
              question="What is cross-browser testing? Name some tools."
              approach="Definition + Importance + Tools + Strategy"
              answer={`Cross-browser testing verifies that web applications work correctly across different browsers, versions, and operating systems.

Importance:
• Users access applications from various browsers
• Browser differences can cause functionality issues
• Ensures consistent user experience
• Prevents browser-specific bugs

Common Browser Differences:
• CSS rendering variations
• JavaScript engine differences
• HTML5 and API support variations
• Security policy differences

Testing Strategy:

1. Identify Target Browsers
   • Based on user analytics and market share
   • Example: Chrome, Firefox, Safari, Edge

2. Test Critical Functionality
   • Login, checkout, core features
   • Not every page needs full testing

3. Use Browser Compatibility Tools
   • caniuse.com: Check feature support
   • Browser developer tools

Tools for Cross-Browser Testing:

1. BrowserStack (Cloud-Based)
   • 2000+ browser/OS combinations
   • Manual and automated testing
   • Screenshots and video recording
   • Integrates with Selenium

2. Sauce Labs
   • Similar to BrowserStack
   • Strong CI/CD integration
   • Performance testing capabilities

3. LambdaTest
   • Cost-effective alternative
   • Real device testing
   • Selenium Grid integration

4. CrossBrowserTesting
   • Manual and automated testing
   • Screenshot comparison tools

5. Selenium Grid (Self-Hosted)
   • Free, open-source
   • Requires infrastructure setup
   • Full control over environment

6. Local Browsers
   • Test on local installations
   • Limited to installed browsers
   • Good for initial testing

Example Test Matrix:
• Chrome: 119, 118, 117
• Firefox: 119, 118
• Safari: 17, 16
• Edge: 119, 118

Best Practices:
• Automate regression tests across browsers
• Use cloud services for comprehensive coverage
• Test on real devices, not just emulators
• Prioritize based on user traffic data
• Document known browser limitations

Cross-browser testing ensures applications work for all users regardless of their browser choice.`}
              category="Tools & Technologies"
            />
          </section>

          {/* Scenario-Based & Behavioral Section */}
          <section id="scenario-behavioral">
            <SectionHeader
              title="Scenario-Based & Behavioral"
              subtitle="Master real-world testing scenarios and behavioral questions that assess your practical experience."
              icon={MessageSquare}
              color="green"
              questionCount={18}
            />

            <QuestionAnswerCard
              questionNumber={83}
              question="How would you test a login page?"
              approach="Systematic Approach + Test Cases + Edge Cases + Tools"
              answer={`Testing a login page requires comprehensive coverage of functionality, security, usability, and performance aspects.

Functional Testing:

Valid Scenarios:
• Login with correct email/password → Redirect to dashboard
• "Remember Me" checkbox → Session persists after browser close
• "Forgot Password" link → Password reset email sent

Invalid Scenarios:
• Wrong password → Error: "Invalid credentials"
• Wrong email → Same error message (security)
• Empty fields → Validation messages
• Invalid email format → "Enter valid email"
• Account locked after 5 failed attempts

Security Testing:
• SQL injection: Try ' OR '1'='1 in fields
• XSS: <script>alert('hack')</script>
• Session management: Logout clears session
• Password masking: Characters hidden
• HTTPS enforcement

UI/UX Testing:
• Tab navigation works
• Enter key submits form
• Error messages clear and helpful
• Loading states during submission
• Responsive design on mobile

Performance:
• Login completes within 2-3 seconds
• Multiple concurrent logins work
• Memory leaks absent

Accessibility:
• Screen reader compatible
• Keyboard navigation
• High contrast support

Test Cases Structure:

| Test Case ID | Scenario | Steps | Expected Result | Priority |
|-------------|----------|-------|----------------|----------|
| TC_LOGIN_001 | Valid login | 1. Enter valid credentials 2. Click login | Redirect to dashboard | High |
| TC_LOGIN_002 | Invalid password | 1. Enter valid email, wrong password 2. Click login | Error message shown | High |

Tools:
• Manual testing first
• Selenium for automation
• Postman for API testing
• Browser dev tools for security testing

Approach: Start with happy path, then negative testing, security, performance, and accessibility.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={84}
              question="How would you test a search functionality?"
              approach="Functional + Performance + Edge Cases + Automation"
              answer={`Search functionality testing requires thorough validation of results accuracy, performance, and user experience.

Functional Testing:

Basic Search:
• Valid search terms return relevant results
• No results for non-existent items shows "No results found"
• Search is case-insensitive
• Special characters handled properly

Advanced Features:
• Filters work (price, category, rating)
• Sorting options (relevance, price, date)
• Pagination displays correctly
• Search suggestions/autocomplete

Edge Cases:
• Empty search → Show all products or error
• Very long search terms (1000+ characters)
• SQL injection attempts in search field
• Unicode characters and emojis
• Special characters (!@#$%^&*)

Performance:
• Search completes within 2 seconds
• Large result sets load efficiently
• Search works under load (1000 concurrent users)

UI/UX:
• Search results highlight search terms
• Clear search button works
• Search history remembered
• Mobile keyboard shows search icon

Data Validation:
• Results match search criteria exactly
• No duplicate results
• Results ordered correctly (relevance, etc.)

Error Handling:
• Network errors show user-friendly messages
• Invalid searches handled gracefully
• Timeout scenarios managed

Test Approach:
1. Create test data with known search results
2. Test with various search terms and filters
3. Verify result accuracy and performance
4. Test edge cases and error conditions

Example Test Cases:
• Search "laptop" → Returns laptops, not "lamp" or "top"
• Filter by price $100-500 → Only shows items in range
• Search with typo → Shows "Did you mean?" suggestions

Tools: Manual testing + Selenium automation + JMeter for performance.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={85}
              question="How would you test an e-commerce checkout process?"
              approach="End-to-End Flow + Edge Cases + Payment Testing + Security"
              answer={`E-commerce checkout testing is critical as it directly impacts revenue. Requires comprehensive testing of the entire purchase flow.

End-to-End Flow Testing:

Happy Path:
1. Add items to cart
2. Proceed to checkout
3. Enter shipping address
4. Select payment method
5. Complete payment
6. Receive order confirmation
7. Order appears in order history

Payment Testing (Critical):
• Credit card payments work
• Debit card payments work
• UPI payments complete
• Net banking works
• Payment failures handled (insufficient funds, expired card)
• Payment security (PCI compliance)

Edge Cases:
• Empty cart checkout attempt
• Maximum quantity limits
• Price changes during checkout
• Session timeout during payment
• Browser back/forward during checkout
• Multiple tabs open with checkout

Inventory Management:
• Items in stock show correct availability
• Out of stock items blocked from purchase
• Inventory updates after successful purchase
• Concurrent purchases of limited stock

Discounts and Coupons:
• Valid coupons apply correctly
• Invalid coupons show error
• Multiple discounts stack properly
• Coupon expiry handled

Shipping:
• Shipping costs calculate correctly
• Different shipping methods work
• International shipping options
• Address validation

Error Handling:
• Network failures during payment
• Payment gateway timeouts
• Invalid addresses
• Incomplete form submissions

Performance:
• Checkout completes within acceptable time
• High load doesn't break checkout
• Database locks don't cause failures

Security:
• Payment data encrypted
• No sensitive data in logs
• PCI compliance
• SQL injection prevention

Test Data Strategy:
• Create test products with various prices
• Set up test payment methods
• Prepare invalid addresses and cards
• Test with different user types (new, returning, guest)

Tools:
• Manual testing for complex flows
• Selenium for automation
• Payment gateway sandboxes
• Database verification for order creation

Risk-based approach: Focus heavily on payment flows, as failures here directly impact business revenue.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={86}
              question="How do you report a bug? What details should be included?"
              approach="Structure + Essential Information + Best Practices"
              answer={`Effective bug reporting ensures bugs are understood, reproducible, and fixed efficiently.

Essential Information:

1. Clear Title
   • Concise but descriptive
   • Example: "Checkout fails when applying discount code over 50%"
   • Bad: "Bug in checkout"

2. Environment Details
   • Browser & version: Chrome 119.0.1
   • OS: Windows 11
   • Device: Desktop
   • Application version: v2.1.3
   • Test environment: Staging

3. Steps to Reproduce
   • Numbered, step-by-step instructions
   • Start from application launch
   • Include exact inputs used

Example:
1. Navigate to https://example.com
2. Login with user: test@example.com, password: Test123
3. Add "Wireless Headphones" to cart
4. Go to checkout
5. Enter discount code: SAVE50
6. Click "Apply Discount"
7. Observe error

4. Expected vs Actual Result
   • Expected: Discount applied, price reduced by 50%
   • Actual: Error message "Invalid discount code"

5. Severity and Priority
   • Severity (Technical impact): High (blocks checkout)
   • Priority (Business urgency): High (affects revenue)

6. Supporting Evidence
   • Screenshots of error
   • Browser console logs
   • Network requests (if API issue)
   • Video recording of steps

7. Additional Context
   • When did this start occurring?
   • Does it happen consistently?
   • Any recent changes that might have caused this?
   • Impact on users/business

Bug Report Template:

Title: [Feature] - [Issue Description]

Description:
- Environment: [Details]
- Steps to Reproduce: [Numbered list]
- Expected Result: [What should happen]
- Actual Result: [What actually happens]
- Severity: [Critical/High/Medium/Low]
- Priority: [P0/P1/P2/P3]
- Attachments: [Screenshots, logs, etc.]

Best Practices:
• Test bug reproducibility before reporting
• Use tools like JIRA or Bugzilla
• Don't assume - provide complete information
• Be objective and factual
• Include workaround if known
• Tag appropriate team members

Good bug reports save time and ensure faster fixes.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={87}
              question="What do you do if developers disagree with your bug report?"
              approach="Professional Approach + Investigation + Communication"
              answer={`Disagreements happen when developers and testers have different perspectives. Handle professionally to maintain collaboration.

Initial Response:
• Stay calm and professional
• Don't take it personally - focus on facts
• Ask for clarification: "Can you help me understand why you think this isn't a bug?"

Investigation Steps:

1. Verify Reproduction
   • Double-check your steps
   • Try on different environments/browsers
   • Get another tester to reproduce

2. Understand Developer Perspective
   • Ask: "Is this working as designed?"
   • Check requirements/acceptance criteria
   • Understand technical constraints

3. Gather More Evidence
   • Browser console logs
   • Network requests
   • Database state
   • Screenshots/videos

4. Check Requirements
   • Re-read user story and acceptance criteria
   • Verify against design documents
   • Check if it's a feature vs bug

Possible Scenarios:

Scenario 1: It's Working as Designed
• Developer explains intended behavior
• Update understanding and close bug
• Document for future reference

Scenario 2: Valid Bug, Developer Misunderstands
• Provide more detailed reproduction steps
• Show user impact clearly
• Escalate to product manager if needed

Scenario 3: Edge Case or Low Priority
• Agree to defer or close
• Document for future consideration

Scenario 4: Technical Limitation
• Understand constraints
• Propose alternative solutions
• Document as known limitation

Communication Approach:
• Use "I" statements: "I observed that..." instead of "You broke..."
• Focus on impact: "This affects user experience because..."
• Be open to learning: "Can you explain the technical reason?"
• Escalate professionally if needed

Resolution Options:
• Close bug with explanation
• Update bug with more information
• Escalate to senior team members
• Convert to feature request
• Document as known issue

Goal: Maintain good working relationship while ensuring quality. Sometimes bugs become feature requests, and that's okay.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={88}
              question="How do you test if requirements are unclear?"
              approach="Proactive Approach + Questions to Ask + Testing Strategy"
              answer={`Unclear requirements lead to incorrect implementation and wasted effort. Testers should identify and clarify them early.

Signs of Unclear Requirements:
• Vague terms: "fast", "user-friendly", "robust"
• Missing edge cases: "What happens if user enters 0?"
• No acceptance criteria
• Conflicting requirements
• Missing business rules

Questions to Ask:

Functional Questions:
• What should happen when user enters invalid data?
• Are there any business rules or validations?
• What are the minimum/maximum values allowed?
• How should errors be displayed to users?

Non-Functional Questions:
• What are the performance requirements?
• Which browsers/devices must be supported?
• What are the security requirements?
• How many concurrent users expected?

User Experience Questions:
• What should the UI look like?
• How should the flow work for new vs returning users?
• What accessibility requirements?

Edge Case Questions:
• What happens during network failures?
• How to handle session timeouts?
• What if user tries to do action twice?

Testing Strategy for Unclear Requirements:

1. Create Test Scenarios Based on Assumptions
   • Document assumptions clearly
   • Test both ways if ambiguous

2. Exploratory Testing
   • Test without formal test cases
   • Find unexpected behaviors

3. Ask for Clarification Early
   • Don't wait until testing phase
   • Get involved in requirement reviews

4. Use Acceptance Criteria
   • Help write clear, testable acceptance criteria
   • Example: "Given user is logged in, when they click save, then data should be saved and success message shown"

5. Prototype Testing
   • Test early prototypes or wireframes
   • Provide feedback on user flows

6. Risk-Based Testing
   • Test high-risk areas more thoroughly
   • Document uncertainties

Example:
Requirement: "Users can search for products"
Unclear aspects:
• What fields can be searched? (name, description, category?)
• Is search case-sensitive?
• What happens with no results?
• Are there search limits?

Clarified: "Users can search products by name or category. Search is case-insensitive. No results shows 'No products found'. Maximum 100 results displayed."

Approach: When requirements are unclear, ask questions, document assumptions, and test based on best understanding while pushing for clarification.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={89}
              question="How would you test a mobile application?"
              approach="Mobile-Specific Considerations + Testing Types + Tools"
              answer={`Mobile testing requires consideration of device diversity, network conditions, and mobile-specific features.

Device and Platform Testing:
• Multiple screen sizes and resolutions
• Different OS versions (iOS 15, 16, 17; Android 11, 12, 13)
• Device types (phones, tablets, foldables)
• Manufacturer skins (Samsung, Pixel, iPhone)

Mobile-Specific Functionality:
• Touch gestures (swipe, pinch, long press)
• Orientation changes (portrait/landscape)
• App lifecycle (background/foreground)
• Push notifications
• Camera, GPS, contacts integration
• Offline functionality

Network Testing:
• WiFi, 4G, 3G, 2G connections
• Network switching during app use
• Offline mode functionality
• Slow network performance

Performance Testing:
• App launch time
• Memory usage
• Battery consumption
• CPU usage
• Smooth scrolling and animations

Compatibility Testing:
• Different app stores (Google Play, App Store)
• OS updates compatibility
• Third-party app interactions

Security Testing:
• Data storage security
• Network communication encryption
• Biometric authentication
• Jailbreak/root detection

Usability Testing:
• Intuitive navigation
• Readable text on small screens
• Touch target sizes (44pt minimum)
• One-handed usage

Installation Testing:
• Fresh installs
• Updates from previous versions
• Uninstall/reinstall
• App size and download

Tools:
• Appium: Cross-platform automation
• BrowserStack/XCUITest: Cloud device testing
• Charles Proxy: Network inspection
• Firebase Test Lab: Google's testing service
• Xcode Instruments: iOS performance testing

Testing Strategy:
1. Start with functional testing on primary devices
2. Test on popular devices based on user analytics
3. Use cloud services for broad device coverage
4. Automate critical user journeys
5. Manual testing for usability and edge cases

Mobile testing is complex due to device fragmentation, so focus on most-used devices and critical functionality first.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={90}
              question="What do you do when you don't have enough time to test everything?"
              approach="Prioritization Framework + Risk Assessment + Communication"
              answer={`Limited time is common in real projects. Use risk-based prioritization to test what matters most.

Step 1: Assess Available Time
• How many days/hours available?
• What is the release deadline?
• Are there dependencies on other teams?

Step 2: Risk Assessment
Categorize features by risk level:

P0 (Must Test - Show Stoppers):
• Core business functionality (login, checkout, payments)
• Revenue-generating features
• Security-critical functions
• Legal/compliance requirements

P1 (Should Test - High Priority):
• Main user flows
• Recently changed code
• High-usage features
• Customer-facing functionality

P2 (Test if Time - Medium Priority):
• Secondary features
• Admin functionality
• Nice-to-have features
• Edge cases

P3 (Skip if Needed - Low Priority):
• Cosmetic issues
• Rarely used features
• Future enhancements

Step 3: Time Allocation
Example with 4 hours:
• Hour 1: P0 testing (core flows)
• Hour 2: P1 testing (main features)
• Hour 3: P2 testing (secondary features)
• Hour 4: Final smoke test + documentation

Step 4: Testing Approach
• Focus on breadth over depth for P0/P1
• Use exploratory testing for quick coverage
• Automate if possible (run existing automated tests)
• Pair with developers for quick feedback

Step 5: Communication
Inform stakeholders clearly:
"With limited time, I focused on critical paths (P0/P1). Here's what I tested and what I didn't. Known risks include untested secondary features. My recommendation: [Go/No-Go]"

Step 6: Documentation
• Document what was tested
• Note known issues and workarounds
• Provide test summary report
• Recommend post-release monitoring

Real Example:
Hotfix deployment with 2 hours:
• 30 min: Test the specific fix
• 45 min: Regression test related features
• 30 min: Smoke test critical paths
• 15 min: Document and communicate

Key: Be transparent about limitations and focus on protecting business-critical functionality.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={91}
              question="How do you ensure test coverage?"
              approach="Multiple Coverage Types + Measurement + Tools"
              answer={`Test coverage ensures all requirements and code are adequately tested. Use multiple approaches for comprehensive coverage.

Types of Coverage:

1. Requirements Coverage
   • Ensure every requirement has test cases
   • Use Requirements Traceability Matrix (RTM)
   • Track: Requirements → Test Cases → Defects

2. Code Coverage
   • Measure percentage of code executed during testing
   • Types: Statement, Branch, Function, Condition coverage
   • Tools: JaCoCo, Istanbul, Cobertura

3. Feature Coverage
   • Test all application features
   • Create feature checklist
   • Ensure end-to-end flows covered

4. Risk Coverage
   • Test high-risk areas more thoroughly
   • Focus on complex, critical, or frequently changing code

Methods to Ensure Coverage:

1. Traceability Matrix
   • Link requirements to test cases
   • Ensure no requirement is missed
   • Track test execution status

2. Coverage Metrics
   • Set minimum coverage targets (e.g., 80% code coverage)
   • Monitor coverage trends
   • Identify untested areas

3. Test Case Review
   • Peer review of test cases
   • Ensure test cases cover all scenarios
   • Check for gaps in coverage

4. Exploratory Testing
   • Unscripted testing to find missed scenarios
   • Test edge cases and error conditions

5. Automation Coverage
   • Automate regression test suites
   • Ensure critical paths are automated

6. Risk-Based Testing
   • Prioritize testing based on risk
   • Test high-impact areas thoroughly

Tools and Techniques:
• Code coverage tools integrated with CI/CD
• Test management tools (JIRA, TestRail)
• Mind mapping for feature coverage
• Pairwise testing for combination coverage

Example Coverage Report:
• Requirements Coverage: 95%
• Code Coverage: 82%
• Critical Path Coverage: 100%
• Automation Coverage: 75%

Best Practices:
• Don't aim for 100% coverage blindly
• Focus on meaningful coverage of important functionality
• Balance coverage with time constraints
• Regularly review and update coverage goals

Coverage ensures confidence that the application is thoroughly tested and ready for release.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={93}
              question="How do you stay updated with testing trends?"
              approach="Multiple Sources + Continuous Learning + Application"
              answer={`Staying updated is crucial in the rapidly evolving field of software testing.

Sources I Use:

1. Online Communities
   • Ministry of Testing forum
   • Software Testing subreddit (r/softwaretesting)
   • LinkedIn testing groups
   • Stack Overflow for technical questions

2. Blogs and Websites
   • Test Automation University (free courses)
   • The Testing Planet
   • Angie Jones' blog
   • Ministry of Testing blog

3. Conferences and Webinars
   • Selenium Conference
   • TestBash
   • Agile Testing Days
   • Local testing meetups

4. Certifications
   • ISTQB (Foundation, Advanced)
   • CSTE (Certified Software Tester)
   • Selenium certifications

5. Books
   • "Agile Testing" by Lisa Crispin and Janet Gregory
   • "The Art of Software Testing" by Glenford Myers
   • "Continuous Testing" by Paul Duvall

6. Social Media
   • Follow testing experts on Twitter/LinkedIn
   • Testing podcasts (Quality Sense, The Test Chat)

7. Practice and Experimentation
   • Personal projects with new tools
   • Contribute to open-source testing projects
   • Try new testing techniques

How I Apply New Knowledge:
• Experiment with new tools in side projects
• Propose process improvements based on trends
• Share learnings with team through presentations
• Update testing frameworks with better practices

Example: When I learned about shift-left testing, I implemented it by getting testers involved in requirement reviews and creating automated unit test frameworks.

Staying updated ensures I use modern, efficient testing approaches.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={94}
              question="What is your approach to learning a new application for testing?"
              approach="Systematic Process + Documentation + Risk Assessment"
              answer={`Learning a new application systematically ensures thorough understanding and effective testing.

Step 1: Gather Documentation
• Read requirements documents and user stories
• Review design documents and wireframes
• Study API documentation if applicable
• Understand business domain and user workflows

Step 2: Explore the Application
• Install/setup the application in test environment
• Perform exploratory testing without formal test cases
• Understand main user flows and navigation
• Identify key features and functionality

Step 3: Understand Architecture
• Learn about technology stack (frontend, backend, database)
• Understand integrations with external systems
• Identify critical components and dependencies
• Learn about data flow and business logic

Step 4: Create Test Strategy
• Identify testing scope and priorities
• Determine testing types needed (functional, performance, security)
• Plan test environment and data requirements
• Identify risks and high-priority areas

Step 5: Create Test Cases
• Write test cases based on requirements
• Include positive, negative, and edge cases
• Create test data and scenarios
• Review test cases with team

Step 6: Setup Test Environment
• Configure test environment to match production
• Prepare test data and user accounts
• Setup automation framework if needed
• Validate environment readiness

Step 7: Execute Testing
• Start with smoke testing
• Execute test cases systematically
• Log defects with detailed information
• Perform regression testing

Step 8: Document and Report
• Create test summary reports
• Document known issues and limitations
• Provide recommendations for release

Tools I Use:
• Mind mapping tools for understanding workflows
• Spreadsheet for test case management
• Screen recording for documentation
• Browser dev tools for technical investigation

Example: For a new banking application, I spent the first day reading requirements, second day exploring the UI, third day understanding the API integrations, then created comprehensive test cases.

This systematic approach ensures I don't miss critical functionality and can test effectively from day one.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={95}
              question="How do you handle pressure and tight deadlines?"
              approach="Time Management + Prioritization + Communication + Self-Care"
              answer={`Testing under pressure is common. I handle it by staying organized, focused, and communicative.

Time Management Strategies:

1. Prioritize Ruthlessly
   • Focus on P0/P1 features first (business-critical)
   • Use risk-based testing approach
   • Skip low-priority features if needed

2. Plan Efficiently
   • Break down work into small, achievable tasks
   • Set realistic time estimates
   • Use time-blocking for focused work

3. Communicate Proactively
   • Inform stakeholders about progress and challenges
   • Set expectations clearly: "I can test X, but not Y given the time"
   • Provide regular updates

4. Leverage Automation
   • Run automated regression suites to save time
   • Focus manual testing on new/changed features

5. Collaborate with Team
   • Pair with developers for quick feedback
   • Get help from other testers if available
   • Involve business analysts for requirement clarification

Pressure Handling Techniques:

1. Stay Calm and Focused
   • Take deep breaths when feeling overwhelmed
   • Break problems into smaller, manageable pieces
   • Focus on one task at a time

2. Maintain Quality Standards
   • Don't sacrifice testing quality for speed
   • Document what you tested and what you didn't
   • Be transparent about risks

3. Self-Care
   • Take short breaks to maintain focus
   • Stay hydrated and eat properly
   • Get adequate sleep

4. Learn from Experience
   • Reflect on what worked and what didn't
   • Improve processes for future deadlines

Example Situation:
"During a critical release with only 24 hours, I prioritized testing the payment flow and user login (P0), ran automated regression tests for other features, communicated clearly about scope limitations, and delivered a quality sign-off with documented risks."

Key: Under pressure, maintain quality while being realistic about what can be accomplished. Communication and prioritization are crucial.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={96}
              question="How would you test a calculator application?"
              approach="Functional Testing + Edge Cases + Error Handling + UI Testing"
              answer={`Calculator testing seems simple but requires thorough coverage of mathematical accuracy and edge cases.

Functional Testing:

Basic Operations:
• Addition: 2 + 3 = 5, 0 + 0 = 0, negative + positive
• Subtraction: 5 - 3 = 2, negative numbers, borrow operations
• Multiplication: 3 × 4 = 12, decimals, negative × negative
• Division: 10 ÷ 2 = 5, divide by zero, decimals

Advanced Functions:
• Square root, powers, logarithms
• Trigonometric functions (sin, cos, tan)
• Memory functions (M+, M-, MR, MC)
• Percentage calculations

Input Validation:
• Maximum digit limits
• Decimal point handling
• Operator precedence (2 + 3 × 4 = 14, not 20)
• Continuous operations (2 + 3 = 5, then + 2 = 7)

Edge Cases:
• Very large numbers (999999999 + 1)
• Very small decimals (0.0000001)
• Division by zero (should show error)
• Square root of negative numbers
• Infinity and NaN handling
• Memory overflow

UI/UX Testing:
• Button responsiveness
• Display formatting (decimal places)
• Clear functions (C, CE, AC)
• History display
• Keyboard input support
• Mobile responsiveness

Error Handling:
• Invalid operations show appropriate errors
• Recovery from error states
• Clear button functionality

Performance:
• Fast calculations even with complex operations
• Memory doesn't leak with continuous use
• Works smoothly on low-end devices

Test Data Examples:
• 123.45 + 678.90 = 802.35
• 100 ÷ 7 = 14.285714...
• √(144) = 12
• sin(90°) = 1

Tools:
• Manual testing for functionality
• Automation for repetitive calculations
• Calculator apps for expected results validation

Approach: Start with basic operations, then edge cases, then performance and error handling. Mathematical accuracy is critical.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={97}
              question="How would you test a payment gateway?"
              approach="Security First + Functional Testing + Error Scenarios + Compliance"
              answer={`Payment gateway testing is critical and complex, involving security, functionality, and compliance requirements.

Security Testing (Highest Priority):
• PCI DSS compliance verification
• Data encryption in transit (HTTPS/TLS 1.3+)
• No sensitive data in logs or error messages
• SQL injection prevention
• XSS protection
• Secure token handling

Functional Testing:

Payment Methods:
• Credit cards (Visa, MasterCard, Amex)
• Debit cards
• Net banking
• UPI, wallets
• International cards

Transaction Flows:
• Successful payments
• Failed payments (insufficient funds, expired card)
• Partial payments
• Refunds and cancellations
• Recurring payments

Validation:
• Card number validation (Luhn algorithm)
• Expiry date validation
• CVV verification
• Address verification (AVS)

Error Handling:
• Invalid card numbers
• Expired cards
• Insufficient funds
• Network timeouts
• Gateway unavailability
• Duplicate transactions

Integration Testing:
• Payment gateway ↔ Merchant site
• Payment gateway ↔ Bank
• Webhooks for payment status updates
• Callback handling

Performance Testing:
• Transaction processing time (< 3 seconds)
• Concurrent transactions (load testing)
• Peak load handling
• Database performance

Compliance Testing:
• PCI DSS requirements
• GDPR/data protection
• Regional regulations (RBI in India, etc.)

Test Environment Setup:
• Use sandbox/test accounts from payment providers
• Test cards with known responses
• Mock bank responses for various scenarios

Tools:
• Payment provider test consoles
• Postman for API testing
• Browser dev tools for network inspection
• Security scanning tools (OWASP ZAP)

Risk Considerations:
• Never use real card numbers or money
• Test in isolated environments
• Have rollback plans for failed deployments
• Monitor production closely after release

Example Test Cases:
• Valid Visa card → Payment succeeds
• Invalid CVV → Payment fails with clear error
• Timeout during processing → Proper error handling
• Refund request → Money returned to original method

Payment testing requires extra caution due to financial and security implications.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={98}
              question="What questions would you ask before starting testing?"
              approach="Comprehensive List + Categorization + Why Each Question Matters"
              answer={`Asking the right questions ensures I understand the project and can test effectively from day one.

Business Understanding:
• What is the main purpose of this application?
• Who are the target users?
• What are the key business goals?
• What is the expected user load?

Functional Requirements:
• What are the must-have features?
• What are the user workflows?
• Are there any complex business rules?
• What integrations exist with other systems?

Non-Functional Requirements:
• What are the performance requirements?
• Which browsers/devices must be supported?
• What are the security requirements?
• What are the accessibility requirements?

Technical Details:
• What is the technology stack?
• Is there API documentation available?
• What databases are used?
• Are there any third-party integrations?

Testing Scope:
• What has already been tested?
• What is the testing timeline?
• Are there any out-of-scope areas?
• What is the definition of "done" for testing?

Environment and Data:
• What test environments are available?
• How do I get test data?
• Are there any data privacy concerns?
• How do I reset test data?

Team and Process:
• Who do I coordinate with for issues?
• What is the bug reporting process?
• How are priorities determined?
• What are the communication channels?

Risks and Constraints:
• What are the biggest risks?
• Are there any known issues?
• What are the time constraints?
• What happens if critical bugs are found?

Documentation:
• Where can I find requirements?
• Is there a test plan already?
• Are there existing test cases?
• What tools should I use?

Example: For an e-commerce site, I'd ask about payment processing details, expected traffic, supported payment methods, and security requirements.

These questions help me create a comprehensive testing strategy and avoid surprises during testing.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={99}
              question="How do you validate that a defect is fixed?"
              approach="Systematic Verification + Regression Testing + Documentation"
              answer={`Defect verification ensures fixes work correctly and don't introduce new issues.

Step 1: Understand the Fix
• Read the developer's fix description
• Understand what was changed
• Identify affected components

Step 2: Reproduce Original Issue
• Confirm the bug exists before fix
• Use exact reproduction steps from bug report
• Verify in same environment

Step 3: Test the Fix
• Execute original reproduction steps
• Verify fix resolves the issue
• Test with original test data
• Check edge cases around the fix

Step 4: Regression Testing
• Test related functionality
• Run impacted test cases
• Check for unintended side effects
• Verify core user flows still work

Step 5: Additional Validation
• Test with different data sets
• Test in different environments
• Performance check if applicable
• Security validation if security bug

Step 6: Update Bug Status
• Mark as "Resolved" or "Closed"
• Add verification notes
• Attach screenshots/logs if needed

Step 7: Communicate Results
• Inform developer of successful verification
• Report any issues found during verification
• Update stakeholders if critical fix

Verification Checklist:
• Original issue is resolved
• No new bugs introduced
• Related functionality works
• Performance not degraded
• Documentation updated if needed

Example: For a login bug fix:
1. Try original failing login
2. Verify login now works
3. Test password reset (related)
4. Test user registration (related)
5. Check login performance
6. Close the bug ticket

Thorough verification ensures fixes are complete and reliable.`}
              category="Scenario-Based & Behavioral"
            />

            <QuestionAnswerCard
              questionNumber={100}
              question="How do you handle testing when requirements change frequently?"
              approach="Agile Mindset + Flexible Planning + Continuous Communication"
              answer={`Frequent requirement changes are common in agile environments. Handle them with flexibility and good communication.

Adapt Testing Approach:

1. Embrace Change
   • Accept that requirements will evolve
   • Focus on testing current requirements thoroughly
   • Plan for change rather than resisting it

2. Maintain Test Documentation
   • Keep test cases modular and updatable
   • Use living documentation that evolves
   • Tag tests by feature for easy identification

3. Prioritize Based on Current State
   • Focus on committed user stories
   • Test stable features first
   • Defer testing of changing features

4. Use Agile Testing Practices
   • Test user stories as they are ready
   • Pair with developers for immediate feedback
   • Use exploratory testing for unstable features

5. Automate Stable Features
   • Automate completed features for regression
   • Manual testing for changing features
   • Create automation framework for stability

Communication Strategies:

1. Regular Updates
   • Daily standups to discuss changes
   • Update team on testing progress
   • Flag blocking issues immediately

2. Clear Expectations
   • Communicate what can be tested given changes
   • Set realistic timelines
   • Document assumptions and risks

3. Collaborative Approach
   • Involve testers in requirement discussions
   • Provide testing feedback during grooming
   • Help refine acceptance criteria

Risk Management:

1. Identify Impact
   • Assess how changes affect existing tests
   • Update traceability matrix
   • Identify regression risks

2. Mitigate Risks
   • Focus testing on high-risk areas
   • Use risk-based prioritization
   • Document known limitations

3. Quality Gates
   • Define clear "done" criteria
   • Don't compromise on critical testing
   • Use automated checks for consistency

Tools and Techniques:
• Version control for test cases
• Modular test design
• Continuous integration for automated tests
• Clear communication channels

Example: When login requirements changed from email-only to email/phone, I:
• Updated existing test cases
• Added new test cases for phone login
• Ran regression on existing email login
• Communicated timeline impact to team

Key: Stay flexible, communicate openly, and maintain testing quality despite changes.`}
              category="Scenario-Based & Behavioral"
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 py-12 border-t border-neutral-800">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Ready to Ace Your QA Interview?
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              This comprehensive guide covers the most frequently asked QA
              interview questions with detailed answers, practical examples, and
              real-world scenarios. Use the framework provided to structure your
              responses and demonstrate your expertise.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge color="green">100 Questions Covered</Badge>
              <Badge color="blue">Interview Ready</Badge>
              <Badge color="purple">Practical Examples</Badge>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
