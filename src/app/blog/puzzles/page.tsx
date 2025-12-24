import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

interface PuzzleCardProps {
  id: number;
  title: string;
  problem: string;
  instinct: string;
  insight: string;
  steps: string[];
  analysisTitle?: string;
  analysis: string;
  pattern: string;
  script: string;
  mistakes: string[];
  variations: string[];
}

function PuzzleCard({
  id,
  title,
  problem,
  instinct,
  insight,
  steps,
  analysisTitle = "Logic Breakdown",
  analysis,
  pattern,
  script,
  mistakes,
  variations,
}: PuzzleCardProps) {
  return (
    <section id={`puzzle-${id}`} className="mb-24 scroll-mt-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
          {id}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            The Problem
          </h3>
          <p className="text-gray-200 leading-relaxed">{problem}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-3">
              Your First Instinct
            </h3>
            <p className="text-gray-400 italic">&quot;{instinct}&quot;</p>
          </div>
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400 mb-3">
              The Key Insight
            </h3>
            <p className="text-gray-200 font-medium">{insight}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
            Solution Steps
          </h3>
          <ul className="space-y-3">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4 text-gray-300">
                <span className="text-blue-500 font-bold">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
            {analysisTitle}
          </h3>
          <p className="text-gray-300 whitespace-pre-line">{analysis}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Pattern Learned
            </h3>
            <p className="text-gray-300">{pattern}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-3">
              Interview Script
            </h3>
            <p className="text-gray-300 italic">&quot;{script}&quot;</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-3">
              Common Mistakes
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {mistakes.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Related Variations
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
              {variations.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PuzzlesBlog() {
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
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Critical Thinking
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-blue-200 to-gray-500 bg-clip-text text-transparent">
            25 Must-Know Interview Puzzles
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Puzzles aren&apos;t just about the answer—they&apos;re about your
            process. Master these 25 to handle any curveball.
          </p>
        </header>

        <div className="mb-20 p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Why Companies Ask Puzzles</h2>
          <div className="prose prose-invert text-gray-400">
            <p>
              Tech giants like Google and Microsoft famously used puzzles to
              test &quot;lateral thinking.&quot; While less common for pure
              coding roles today, they remain a staple in Quant, HFT, and
              Product Management interviews.
            </p>
            <p>
              They aren&apos;t looking for a genius who knows the answer
              instantly. They are testing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Structured Thinking:</strong> Can you break a complex
                problem into smaller, manageable parts?
              </li>
              <li>
                <strong>Communication:</strong> Can you explain your thought
                process clearly while under pressure?
              </li>
              <li>
                <strong>Handling Ambiguity:</strong> Do you ask clarifying
                questions or just start guessing?
              </li>
              <li>
                <strong>Persistence:</strong> Do you give up when the first
                instinct fails?
              </li>
            </ul>
          </div>
        </div>

        <main>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 pb-4 border-b border-blue-500/20">
              Category 1: Logic & Deduction
            </h2>

            <PuzzleCard
              id={1}
              title="Three Bulbs and Three Switches"
              problem="You are outside a closed room with three light switches. Inside the room are three light bulbs, each controlled by one of the switches. You can flip the switches as many times as you want while outside, but once you open the door and enter the room, you cannot touch the switches again. How do you determine which switch controls which bulb with only one entry into the room?"
              instinct="I'll turn on two switches and enter - but this only identifies 2 out of 3 bulbs."
              insight="Use multiple properties of bulbs: light (on/off) AND heat (hot/cold)."
              steps={[
                "Turn on Switch 1 and leave it on for 5 minutes.",
                "After 5 minutes, turn off Switch 1 and immediately turn on Switch 2.",
                "Enter the room immediately.",
              ]}
              analysisTitle="Result Analysis"
              analysis="Bulb that's ON = controlled by Switch 2.\nBulb that's OFF but HOT = controlled by Switch 1.\nBulb that's OFF and COLD = controlled by Switch 3."
              pattern="Multi-dimensional problem solving - use multiple attributes (light + heat)."
              script="First, let me clarify - can I flip switches multiple times? Good. My approach uses both light and heat as indicators. I'll turn on Switch 1 for several minutes to heat the bulb, then switch to Switch 2 before entering. This way, I can distinguish all three: one lit, one hot, one cold."
              mistakes={[
                "Trying to identify all bulbs using only on/off states.",
                "Not realizing bulbs retain heat.",
              ]}
              variations={[
                "4 bulbs and 4 switches (requires different approach).",
                "Limited time window for entering room.",
              ]}
            />

            <PuzzleCard
              id={2}
              title="Heaven and Hell Doors"
              problem="You're standing in front of two identical doors. One leads to heaven, the other to hell. Two guards stand by the doors - one always tells the truth, and one always lies. You don't know which guard is which, and you don't know which door leads where. You can ask only ONE question to ONE guard to find the door to heaven. What question do you ask?"
              instinct="'Which door is heaven?' - Won't work because you don't know if the guard lies."
              insight="Create a self-referential question that cancels out the lie."
              steps={[
                "Pick either guard.",
                "Ask: 'If I asked the OTHER guard which door leads to heaven, what would they say?'",
                "Choose the OPPOSITE door of what they point to.",
              ]}
              analysis="If you ask the TRUTH-TELLER: He'll tell you the liar would point to HELL (because liar lies).\nIf you ask the LIAR: He'll lie about what truth-teller would say, and point to HELL.\nBoth guards point to the SAME door (hell)."
              pattern="Logical paradoxes and double-negative thinking."
              script="I need to design a question where both guards give the same answer. If I ask about what the OTHER guard would say, the truth-teller reports the liar's false answer, and the liar lies about the truth-teller's answer. Both point to hell, so I choose the opposite door."
              mistakes={[
                "Asking direct questions about the doors.",
                "Trying to identify which guard is which first.",
              ]}
              variations={[
                "Three doors with one guard.",
                "Multiple guards with different truth-telling patterns.",
              ]}
            />

            <PuzzleCard
              id={3}
              title="Monty Hall Problem"
              problem="You're on a game show with three doors. Behind one door is a car (prize), behind the other two are goats. You pick Door 1. The host, who knows what's behind each door, opens Door 3 to reveal a goat. He then asks if you want to switch to Door 2 or stick with Door 1. Should you switch, stay, or does it not matter?"
              instinct="It doesn't matter. There are two doors left, so it's a 50/50 chance."
              insight="The host's action is not random; he provides information by filtering out a wrong choice."
              steps={[
                "Pick a door (1/3 chance of being right).",
                "Host opens a 'goat' door from the remaining two.",
                "Switch to the other closed door.",
              ]}
              analysis="When you first pick, there's a 1/3 chance you're right and a 2/3 chance the car is behind one of the other two doors.\nThe host MUST open a goat door from the other two. By doing so, he 'concentrates' that 2/3 probability into the single remaining unopened door.\nStaying = 1/3 win rate. Switching = 2/3 win rate."
              pattern="Conditional probability and Bayesian thinking."
              script="While it feels like 50/50, the host's knowledge changes the odds. Initially, I have a 1/3 chance. The 2/3 chance that I was wrong is now entirely focused on the door the host didn't open. Therefore, switching doubles my chances."
              mistakes={[
                "Assuming the new state (2 doors) resets the probability to 50/50.",
                "Ignoring that the host *knows* where the car is.",
              ]}
              variations={[
                "100 doors version (Host opens 98 goat doors).",
                "Host doesn't know where the car is (Monty Fall).",
              ]}
            />

            <PuzzleCard
              id={4}
              title="100 Prisoners and Hats"
              problem="100 prisoners are standing in a line, all facing forward. Each has a red or black hat. Each can see all hats in front but not their own or those behind. Starting from the back, each must say 'red' or 'black'. If they guess correctly, they survive. They can discuss a strategy beforehand. What strategy maximizes survivors?"
              instinct="Everyone guesses based on the hat in front of them (saves 50% on average)."
              insight="The first person can sacrifice their guess to provide a 'parity' bit for everyone else."
              steps={[
                "The last person (who sees 99 hats) counts the number of RED hats.",
                "If even, they say 'RED'. If odd, they say 'BLACK'.",
                "The next person uses this parity and the hats they see to deduce their own color.",
              ]}
              analysis="The first person has a 50% chance of survival. However, their answer tells the 99th person whether the total number of red hats is even or odd.\nThe 99th person looks at the 98 hats in front. If the parity changed, their own hat must be the reason. They state their color and survive.\nThis continues down the line, with each person tracking the parity of colors already called."
              pattern="Information theory and Parity bits."
              script="The prisoners can guarantee 99 survivors. The first person acts as a checksum. By saying 'red' for an even count of red hats in front, the next person can compare that to what they see and determine their own color with 100% certainty."
              mistakes={[
                "Thinking each guess is independent.",
                "Not accounting for the information revealed by previous answers.",
              ]}
              variations={[
                "3 or more hat colors (requires modulo arithmetic).",
                "Prisoners can't hear previous answers (much harder).",
              ]}
            />

            <PuzzleCard
              id={5}
              title="Man in Elevator"
              problem="A man lives on the 10th floor. Every morning, he takes the elevator to the ground floor. In the evening, he takes it to the 7th floor and walks up to the 10th. On rainy days or when others are in the elevator, he goes directly to the 10th. Why?"
              instinct="He wants the exercise, but only when it's not raining."
              insight="The man has a physical limitation that prevents him from reaching the '10' button."
              steps={[
                "Identify the constraint: Why can he go down but not up?",
                "Identify the exceptions: Why does rain or other people help?",
                "Deduce the man's height.",
              ]}
              analysis="The man is a dwarf (or a very short person). He can reach the 'G' button because it's at the bottom, but he can't reach the '10' button.\nOn rainy days, he uses his umbrella to poke the button.\nWhen others are there, he asks them to press it for him."
              pattern="Lateral thinking - questioning implicit assumptions (that the man is average height)."
              script="This is a classic lateral thinking puzzle. The key is the 'rainy day' clue. An umbrella is a tool that extends reach. This implies the man physically cannot reach the button for the 10th floor, likely because he is a person of short stature."
              mistakes={[
                "Over-complicating with psychological reasons.",
                "Ignoring the 'rainy day' and 'other people' conditions.",
              ]}
              variations={[
                "The man who hung himself in a room with only a puddle of water.",
                "The man who died because he went home and saw the light was off.",
              ]}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-green-400 mb-8 pb-4 border-b border-green-500/20">
              Category 2: Optimization Problems
            </h2>

            <PuzzleCard
              id={6}
              title="Bridge and Torch"
              problem="Four people (A, B, C, D) need to cross a bridge at night. They have one torch. Max 2 people at a time. A takes 1 min, B takes 2, C takes 5, D takes 10. When two cross, they move at the slower person's pace. How can all cross in 17 minutes?"
              instinct="Send the fastest person (A) back and forth to escort everyone. (1+2 + 1+5 + 1+10 = 19 mins - too slow!)"
              insight="The two slowest people (C & D) should cross together to 'bundle' their time loss."
              steps={[
                "A and B cross (2 mins).",
                "A returns with the torch (1 min).",
                "C and D cross (10 mins).",
                "B returns with the torch (2 mins).",
                "A and B cross again (2 mins).",
              ]}
              analysis="Total time: 2 + 1 + 10 + 2 + 2 = 17 minutes.\nThe key is realizing that if C and D cross separately, they waste 15 minutes. By crossing together, they only count the 10-minute penalty once. We just need to ensure someone is on the other side to bring the torch back."
              pattern="Resource optimization and 'bottleneck bundling'."
              script="The intuitive approach of using the fastest person as a shuttle fails because it exposes the slow speeds of C and D twice. By sending C and D together, we only count the 10-minute penalty once. We just need to ensure someone is on the other side to bring the torch back."
              mistakes={[
                "Sending the slowest people separately.",
                "Forgetting that someone must bring the torch back.",
              ]}
              variations={[
                "Different time values.",
                "3 people at a time (changes the strategy significantly).",
              ]}
            />

            <PuzzleCard
              id={7}
              title="Two Eggs and 100 Floors"
              problem="You have two identical eggs and a 100-story building. Find the highest floor an egg can be dropped from without breaking. If an egg breaks, it's gone. What's the minimum number of drops needed in the worst case?"
              instinct="Drop the first egg every 10 floors (10, 20, 30...). If it breaks at 20, test 11-19 with the second egg. (Max 19 drops)."
              insight="To minimize the worst case, the total number of drops (Egg 1 + Egg 2) should stay constant as you go higher."
              steps={[
                "Let 'x' be the number of drops.",
                "If the first egg breaks, the second egg will have x-1 more drops to make.",
                "The next jump for the first egg should be x-1 floors, then x-2, and so on.",
                "Solve: x + (x-1) + (x-2) + ... + 1 >= 100.",
              ]}
              analysis="The formula for the sum of first x integers is x(x+1)/2.\nx(x+1)/2 >= 100 leads to x = 14.\nStrategy: Drop at floor 14, 27 (14+13), 39 (27+12), 50, 60, 69, 77, 84, 90, 95, 99, 100."
              pattern="Load balancing and triangular numbers."
              script="We want to balance the risk. If the first egg lasts longer, we have fewer drops left for the second egg. This leads to a decreasing step size. Solving the quadratic equation gives us 14 drops as the optimal worst-case scenario."
              mistakes={[
                "Suggesting Binary Search (doesn't work with only 2 eggs).",
                "Using a constant step size (like 10).",
              ]}
              variations={[
                "3 eggs and 100 floors.",
                "N eggs and K floors (Dynamic Programming).",
              ]}
            />

            <PuzzleCard
              id={8}
              title="25 Horses and 5 Tracks"
              problem="You have 25 horses and a 5-lane track. No timer. Find the top 3 fastest horses. What is the minimum number of races?"
              instinct="Race 5 groups, then race the winners (6 races). But this only finds the #1 horse."
              insight="After finding the #1 horse, only a few others have a mathematical chance of being #2 or #3."
              steps={[
                "Race 5 groups of 5 (5 races). Let's call winners A1, B1, C1, D1, E1.",
                "Race the winners (1 race). Assume order is A1 > B1 > C1 > D1 > E1.",
                "A1 is definitely #1. D1 and E1 (and their groups) are out.",
                "Final race: A2, A3, B1, B2, C1 (1 race).",
              ]}
              analysis="Total: 5 + 1 + 1 = 7 races.\nWhy these 5 in the final? A2/A3 could be faster than B1. B2 could be faster than C1. C1 could be #3. Anything else (like B3 or C2) is mathematically impossible to be in the top 3."
              pattern="Elimination logic and tournament sorting."
              script="First, we find the fastest of each group. Then we race those winners to find the absolute fastest. The trick is identifying which horses could still be 2nd or 3rd. Only 5 horses remain as candidates, requiring one final race."
              mistakes={[
                "Thinking 6 races is enough.",
                "Including too many horses in the final race.",
              ]}
              variations={[
                "Find top 2 horses (6 races).",
                "Find top 5 horses.",
              ]}
            />

            <PuzzleCard
              id={9}
              title="Five Pirates and 100 Gold Coins"
              problem="Five rational pirates (A > B > C > D > E) must distribute 100 coins. Proposer needs 50% or more votes to survive. Pirates want to maximize coins, then stay alive, then throw others overboard. How should Pirate A distribute?"
              instinct="Give everyone an equal share (20 each) to be safe."
              insight="Work backwards from the simplest case (2 pirates) to see what leverage you have."
              steps={[
                "2 Pirates (D, E): D gives himself 100, E 0. D's vote is 50%.",
                "3 Pirates (C, D, E): C needs one more vote. He gives E 1 coin (better than 0 from D). C: 99, D: 0, E: 1.",
                "4 Pirates (B, C, D, E): B needs one more vote. He gives D 1 coin. B: 99, C: 0, D: 1, E: 0.",
                "5 Pirates (A, B, C, D, E): A needs two more votes. He gives C 1 and E 1.",
              ]}
              analysis="Final Distribution: A: 98, B: 0, C: 1, D: 0, E: 1.\nPirates C and E vote 'Yes' because 1 coin is better than the 0 they would get if B was the proposer."
              pattern="Game Theory and Backward Induction."
              script="By working backwards, we see that Pirate A only needs to bribe the pirates who would get nothing in the next round. Since B would give C and E nothing, A can buy their votes for just 1 coin each."
              mistakes={[
                "Being too generous.",
                "Not realizing that 50% includes the proposer's own vote.",
              ]}
              variations={[
                "100 pirates and 100 coins.",
                "Pirates prefer to kill if coins are equal.",
              ]}
            />

            <PuzzleCard
              id={10}
              title="Gold Bar with 7 Segments"
              problem="You hire a worker for 7 days. You must pay them 1 segment of gold each day. You have a 7-segment bar. What is the minimum number of cuts to make this possible? (You can take back change)."
              instinct="6 cuts to make 7 individual pieces."
              insight="Think in binary. You only need pieces of size 1, 2, and 4 to represent any number from 1 to 7."
              steps={[
                "Make two cuts to get pieces of size 1, 2, and 4.",
                "Day 1: Give 1.",
                "Day 2: Give 2, take back 1.",
                "Day 3: Give 1 (now they have 1+2).",
                "Day 4: Give 4, take back 1 and 2.",
              ]}
              analysis="This is exactly how binary counting works. With pieces of 2^0, 2^1, and 2^2, you can form any sum up to 2^3 - 1."
              pattern="Binary representation and change-making."
              script="I only need 2 cuts. By cutting the bar into segments of 1, 2, and 4, I can pay the worker every day by using the previously paid segments as change, similar to how we use currency."
              mistakes={[
                "Forgetting you can take segments back as change.",
                "Making 3 cuts.",
              ]}
              variations={["15 segments (3 cuts).", "31 segments (4 cuts)."]}
            />

            <PuzzleCard
              id={11}
              title="Camel and 3000 Bananas"
              problem="3000 bananas, 1000km to market. Camel carries 1000 max, eats 1 banana per km. What's the max bananas at market?"
              instinct="Camel takes 1000, travels 1000km, eats 1000. Result: 0."
              insight="You must create 'supply depots' along the way to move all bananas forward."
              steps={[
                "Step 1: Move 3000 bananas to a point where you have 2000 left. (5 trips, 3 forward, 2 back).",
                "Step 2: Move 2000 bananas to a point where you have 1000 left. (3 trips, 2 forward, 1 back).",
                "Step 3: Move the final 1000 to the market.",
              ]}
              analysis="Breakpoint 1: 5 trips * distance = 1000 bananas consumed. Distance = 200km.\nBreakpoint 2: 3 trips * distance = 1000 bananas consumed. Distance = 333.33km.\nRemaining distance: 1000 - 200 - 333.33 = 466.66km.\nFinal bananas: 1000 - 467 = 533."
              pattern="Dynamic programming and optimization of multi-stage transport."
              script="The key is to reduce the number of trips as soon as possible. We start with 5 trips to move 3000 bananas. Once we've consumed 1000, we only need 3 trips. Once we're down to 1000, we make one final trip."
              mistakes={[
                "Not accounting for the return trips.",
                "Trying to go the full distance in one go.",
              ]}
              variations={[
                "Jeep and Fuel problem (identical logic).",
                "Different carrying capacities.",
              ]}
            />

            <PuzzleCard
              id={12}
              title="Chain Link Problem"
              problem="5 pieces of chain, each with 3 links. You want one continuous chain. Opening a link costs $2, closing costs $3. Minimum cost?"
              instinct="Join the 5 pieces using 4 connections. (4 opens + 4 closes = $20)."
              insight="You can sacrifice one entire piece to provide the 'connectors' for the others."
              steps={[
                "Take one piece (3 links) and open all 3 links ($6).",
                "Use these 3 open links to join the remaining 4 pieces together.",
                "Close those 3 links ($9).",
              ]}
              analysis="Total cost: $6 + $9 = $15.\nBy completely dismantling one piece, we get 3 connectors which is exactly what's needed to join 4 separate pieces."
              pattern="Thinking outside the box / Resource sacrifice."
              script="Instead of joining pieces at their ends, I'll take one piece and break it apart completely. Those three individual links can then be used to bridge the gaps between the other four pieces, saving us one full open/close cycle."
              mistakes={[
                "Assuming you must keep all pieces intact.",
                "Calculating $20 as the only option.",
              ]}
              variations={[
                "6 pieces of 4 links.",
                "Varying costs for opening vs closing.",
              ]}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-400 mb-8 pb-4 border-b border-purple-500/20">
              Category 3: Measurement & Time
            </h2>

            <PuzzleCard
              id={13}
              title="Water Jug Problem (4L and 9L)"
              problem="You have two unmarked jugs (4L and 9L) and unlimited water. How do you measure exactly 6 liters?"
              instinct="Try to eyeball half a jug (Never allowed in puzzles!)."
              insight="You can use the jugs to 'subtract' volumes from each other repeatedly."
              steps={[
                "Fill the 9L jug.",
                "Pour from 9L into 4L until 4L is full. (5L left in 9L).",
                "Empty the 4L jug.",
                "Pour the 5L from the 9L into the 4L. (1L left in 9L).",
                "Empty the 4L jug.",
                "Pour the 1L from the 9L into the 4L.",
                "Fill the 9L jug.",
                "Pour from 9L into the 4L (which already has 1L) until 4L is full. (9 - 3 = 6L left in 9L).",
              ]}
              analysis="By using the 4L jug as a 'measuring cup' to remove specific amounts from the 9L jug, we eventually reach the target. This is a state-space search problem."
              pattern="State-space search and Diophantine equations."
              script="I'll use the 9L jug as my primary container and the 4L jug to subtract volume. After two subtractions and a transfer, I'm left with 1L. I'll then fill the 9L jug and pour out exactly 3L (to fill the 4L jug), leaving me with exactly 6L."
              mistakes={[
                "Assuming you can mark the jugs.",
                "Losing track of the water levels during transfers.",
              ]}
              variations={[
                "3L and 5L to get 4L (Die Hard 3 puzzle).",
                "General case: Can you measure 'Z' using 'X' and 'Y'?",
              ]}
            />

            <PuzzleCard
              id={14}
              title="Burning Ropes for 45 Minutes"
              problem="Two ropes, each takes 60 mins to burn but at non-uniform rates. How do you measure 45 minutes?"
              instinct="Burn 3/4th of a rope (Impossible because burn rate is non-uniform)."
              insight="A rope burned from both ends will finish in exactly half its total time, regardless of the burn rate."
              steps={[
                "Light Rope A at both ends and Rope B at one end.",
                "When Rope A finishes (30 mins have passed), Rope B has 30 mins of burn time left.",
                "Immediately light the other end of Rope B.",
                "When Rope B finishes, exactly 15 more minutes have passed (Total 45).",
              ]}
              analysis="Lighting both ends doubles the burn rate, effectively halving the time. This works even if one half burns in 1 min and the other in 59 mins."
              pattern="Parallel processing and rate doubling."
              script="I'll light the first rope at both ends and the second at one end. The first rope acts as a 30-minute timer. Once it's gone, I know the second rope has 30 minutes left. By lighting its other end, I turn that 30 minutes into 15."
              mistakes={[
                "Assuming the rope burns at a constant speed.",
                "Trying to measure the rope's length.",
              ]}
              variations={["Measure 15 minutes.", "Measure 75 minutes."]}
            />

            <PuzzleCard
              id={15}
              title="Two Hourglasses (4 and 7 Minutes)"
              problem="How do you measure exactly 9 minutes using a 4-minute and a 7-minute hourglass?"
              instinct="Wait for 7 to end, then try to guess 2 minutes from the 4."
              insight="You can 'store' time in an hourglass by stopping it (flipping it) when another one ends."
              steps={[
                "Start both hourglasses.",
                "When 4 ends (4 mins), flip it. (7 has 3 mins left).",
                "When 7 ends (7 mins), flip it. (4 has 1 min left).",
                "When 4 ends (8 mins), flip 7. (7 has been running for 1 min).",
                "When 7 ends, exactly 1 more minute has passed. (Total 9).",
              ]}
              analysis="Total time: 4 (first 4) + 3 (rest of 7) + 1 (rest of 4) + 1 (the 1 min we 'measured' in 7) = 9 minutes."
              pattern="Relative time measurement."
              script="I'll run both simultaneously. When the 4-minute one ends, I know the 7-minute one has 3 minutes left. By flipping them strategically, I can isolate a 1-minute interval and add it to the 8 minutes I've already tracked."
              mistakes={[
                "Not realizing you can flip an hourglass before it's empty.",
                "Simple addition/subtraction without considering the 'running' state.",
              ]}
              variations={["Measure 1 minute.", "Measure 11 minutes."]}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-400 mb-8 pb-4 border-b border-orange-500/20">
              Category 4: Weighing & Finding
            </h2>

            <PuzzleCard
              id={17}
              title="Eight Balls Problem"
              problem="8 identical balls, one is heavier. Find the heavy ball in only 2 weighings using a balance scale."
              instinct="Split into 4 vs 4 (1st weighing), then 2 vs 2 (2nd), then 1 vs 1 (3rd). (3 weighings)."
              insight="A balance scale has three outcomes (Left, Right, Equal), so you should split into three groups, not two."
              steps={[
                "Split balls into groups of 3, 3, and 2.",
                "Weigh 3 vs 3. If they balance, the heavy ball is in the group of 2.",
                "If they don't balance, the heavy ball is in the heavier group of 3.",
                "From the heavy group, pick 2 balls and weigh 1 vs 1. If they balance, the 3rd ball is heavy.",
              ]}
              analysis="By splitting into 3 groups, you maximize the information gained from each weighing. This is a base-3 search (Ternary Search)."
              pattern="Ternary logic and information maximization."
              script="Instead of a binary split, I'll use a ternary split. By weighing 3 against 3, I can eliminate 6 balls in one go if they balance, or narrow it down to 3 if they don't. This allows me to find the ball in just two steps."
              mistakes={[
                "Defaulting to binary search (2 groups).",
                "Not considering the 'Equal' outcome as a source of information.",
              ]}
              variations={[
                "9 balls (still 2 weighings).",
                "27 balls (3 weighings).",
              ]}
            />

            <PuzzleCard
              id={19}
              title="Ten Bottles with Poisoned Pills"
              problem="10 bottles of pills. 9 have 10g pills, 1 has 9g pills. You have a digital scale (exact weight). Find the light bottle in 1 weighing."
              instinct="Weigh each bottle one by one."
              insight="You can encode the bottle number into the total weight by taking a different number of pills from each."
              steps={[
                "Take 1 pill from Bottle 1, 2 from Bottle 2, ..., 10 from Bottle 10.",
                "Total pills = 55. Expected weight if all were 10g = 550g.",
                "Weigh the 55 pills.",
                "The difference (550 - actual weight) is the bottle number.",
              ]}
              analysis="If Bottle 3 is light, the total weight will be 550 - 3(1) = 547g. The 'missing' weight directly points to the bottle index."
              pattern="Weighted sums and unique encoding."
              script="I'll take a unique number of pills from each bottle—1 from the first, 2 from the second, and so on. This way, the total weight deficit will uniquely identify which bottle the lighter pills came from."
              mistakes={[
                "Trying to use a balance scale instead of a digital scale.",
                "Taking only 1 pill from each bottle.",
              ]}
              variations={[
                "Two light bottles (requires more complex encoding).",
                "Infinite pills per bottle.",
              ]}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-400 mb-8 pb-4 border-b border-red-500/20">
              Category 5: River Crossing
            </h2>

            <PuzzleCard
              id={20}
              title="Farmer, Goat, Wolf, and Cabbage"
              problem="A farmer needs to cross a river with a goat, a wolf, and a cabbage. Boat carries him and one item. Wolf eats goat, goat eats cabbage if left alone. How to cross safely?"
              instinct="Take the wolf first, then the cabbage."
              insight="You can bring an item BACK to the starting side to prevent a conflict."
              steps={[
                "Take the Goat across.",
                "Return alone.",
                "Take the Wolf across.",
                "Return with the Goat.",
                "Take the Cabbage across.",
                "Return alone.",
                "Take the Goat across.",
              ]}
              analysis="The key move is Step 4. By bringing the goat back, you keep it away from the wolf (on the other side) and the cabbage (on the starting side)."
              pattern="State management and backtracking."
              script="I'll start by moving the only 'safe' item—the goat. Then, to move the wolf without it eating the goat, I'll swap them on the other side. I'll bring the goat back, leave it, and take the cabbage. Finally, I'll come back for the goat."
              mistakes={[
                "Leaving the wolf and goat together.",
                "Leaving the goat and cabbage together.",
              ]}
              variations={[
                "Cannibals and Missionaries.",
                "Bridge and Torch (similar constraints).",
              ]}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 pb-4 border-b border-yellow-500/20">
              Category 6: Trick & Wordplay
            </h2>

            <PuzzleCard
              id={22}
              title="Fake ₹500 Note"
              problem="Customer buys ₹200 goods with fake ₹500 note. Shopkeeper gets change from neighbor. Later, neighbor finds it's fake and shopkeeper pays him back ₹500. Total loss?"
              instinct="₹1000 (₹500 to neighbor + ₹200 goods + ₹300 change)."
              insight="The neighbor is a 'net zero' in this equation. Focus only on the shopkeeper and the customer."
              steps={[
                "Customer gets: ₹200 goods + ₹300 change = ₹500 value.",
                "Shopkeeper gives: ₹200 goods + ₹300 change = ₹500 value.",
                "Neighbor gives ₹500, then takes back ₹500 (Net 0).",
              ]}
              analysis="The shopkeeper's total loss is exactly what the customer gained: ₹500. The transaction with the neighbor was just a temporary loan."
              pattern="Accounting logic and boundary setting."
              script="If we look at the system as a whole, the neighbor neither gained nor lost anything. The customer walked away with ₹200 in goods and ₹300 in cash. Since that value had to come from somewhere, it came entirely from the shopkeeper. Total loss: ₹500."
              mistakes={[
                "Double-counting the ₹500 paid to the neighbor.",
                "Forgetting to include the cost of goods.",
              ]}
              variations={[
                "The missing dollar riddle.",
                "The horse trading puzzle.",
              ]}
            />

            <PuzzleCard
              id={23}
              title="Man Marrying His Widow's Sister"
              problem="A man living in California cannot legally marry his widow's sister. Why not?"
              instinct="There's a specific California law against it."
              insight="Read the definitions carefully."
              steps={[
                "Define 'Widow': A woman whose husband has died.",
                "If the man has a widow, he is dead.",
              ]}
              analysis="A dead man cannot marry anyone."
              pattern="Lateral thinking - checking preconditions."
              script="This is a play on words. For a man to have a 'widow,' he must be deceased. Therefore, he's in no position to be getting married!"
              mistakes={[
                "Searching for legal reasons.",
                "Assuming the man is still alive.",
              ]}
              variations={[
                "How many birthdays does the average man have?",
                "Some months have 31 days, how many have 28?",
              ]}
            />

            <PuzzleCard
              id={25}
              title="Taking Three Pills"
              problem="A doctor gives you three pills and tells you to take one every half hour. How many minutes pass from the first to the last?"
              instinct="90 minutes (3 * 30)."
              insight="The first pill is taken at T=0."
              steps={[
                "Pill 1: 0 minutes.",
                "Pill 2: 30 minutes.",
                "Pill 3: 60 minutes.",
              ]}
              analysis="There are only two 30-minute intervals between three pills."
              pattern="Fencepost error (Off-by-one)."
              script="It's a classic fencepost problem. We have three 'posts' (pills) but only two 'fences' (intervals). So it takes exactly 60 minutes."
              mistakes={[
                "Multiplying 3 by 30.",
                "Not accounting for the immediate first dose.",
              ]}
              variations={[
                "Clock striking 6 takes 6 seconds, how long for 12?",
                "Building a fence with 10 segments.",
              ]}
            />
          </div>
        </main>

        <section className="mt-24 p-8 rounded-3xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Pattern Recognition Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-blue-400 font-semibold">
                    Pattern
                  </th>
                  <th className="py-4 px-4 text-blue-400 font-semibold">
                    Puzzles
                  </th>
                  <th className="py-4 px-4 text-blue-400 font-semibold">
                    Key Technique
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">
                    Multi-dimensional thinking
                  </td>
                  <td className="py-4 px-4">1, 17, 19</td>
                  <td className="py-4 px-4">
                    Use multiple properties (heat, weight, etc.)
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">
                    Self-referential logic
                  </td>
                  <td className="py-4 px-4">2, 4</td>
                  <td className="py-4 px-4">Create paradoxes or parity bits</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Backward induction</td>
                  <td className="py-4 px-4">9, 11</td>
                  <td className="py-4 px-4">
                    Work from the end state backwards
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Greedy vs Optimal</td>
                  <td className="py-4 px-4">6, 8</td>
                  <td className="py-4 px-4">
                    Compare strategies for bottlenecks
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 font-medium">Parallel operations</td>
                  <td className="py-4 px-4">14, 15, 16</td>
                  <td className="py-4 px-4">
                    Do multiple things simultaneously
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Lateral thinking</td>
                  <td className="py-4 px-4">5, 22-25</td>
                  <td className="py-4 px-4">Question implicit assumptions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-24 space-y-12">
          <h2 className="text-3xl font-bold text-center">
            Interview Strategy Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">
                During the Puzzle
              </h3>
              <ol className="space-y-4 text-gray-300">
                <li>
                  <span className="text-white font-semibold">
                    1. Restate the problem:
                  </span>{" "}
                  &quot;Just to be sure, I have 3 switches and 1 entry...&quot;
                  (30 sec)
                </li>
                <li>
                  <span className="text-white font-semibold">
                    2. Ask clarifying questions:
                  </span>{" "}
                  &quot;Can I leave the switches on for as long as I want?&quot;
                  (30 sec)
                </li>
                <li>
                  <span className="text-white font-semibold">
                    3. Share initial thoughts:
                  </span>{" "}
                  &quot;My first instinct is X, but that only solves part of
                  it...&quot; (1 min)
                </li>
                <li>
                  <span className="text-white font-semibold">
                    4. Work systematically:
                  </span>{" "}
                  &quot;Let&apos;s try to use another property like
                  heat...&quot; (3-5 min)
                </li>
              </ol>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-400">
                What They&apos;re Testing
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="text-white font-semibold">
                    Structured Thinking:
                  </span>{" "}
                  Breaking complex problems into parts.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Communication:
                  </span>{" "}
                  Explaining the &quot;why&quot; not just the &quot;what&quot;.
                </li>
                <li>
                  <span className="text-white font-semibold">
                    Handling Ambiguity:
                  </span>{" "}
                  Not rushing to a guess.
                </li>
                <li>
                  <span className="text-white font-semibold">Persistence:</span>{" "}
                  Staying calm when stuck.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready for Coding Challenges?
          </h2>
          <p className="text-gray-400 mb-8">
            Puzzles test your logic, but coding tests your implementation. Check
            out our 80+ series.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-all transform hover:scale-105"
          >
            Back to All Lessons
          </Link>
        </footer>
      </div>
    </div>
  );
}
