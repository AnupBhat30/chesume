import { GoogleGenerativeAI } from '@google/generative-ai';

const getModel = (apiKey?: string) => {
  const key = apiKey || process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error('Gemini API Key is missing. Please provide it in the landing page or set GEMINI_API_KEY in .env');
  }
  const genAI = new GoogleGenerativeAI(key);
  return genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
};

export const analyzeResumeQuick = async (resumeText: string, apiKey?: string) => {
  const model = getModel(apiKey);
  const prompt = `Analyze this resume and return ONLY a JSON object with these counts:
{
  "technicalSkills": <count of technical skills>,
  "projects": <count of projects>,
  "claimsToVerify": <count of specific claims that need verification>
}

Resume:
${resumeText}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const cleaned = text.replace(/```json\n?/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned);
};

export const generateQuestions = async (resumeText: string, jobDescription: string = '', apiKey?: string) => {
  const model = getModel(apiKey);
  const jobDescriptionSection = jobDescription && jobDescription.trim() 
    ? `**Job Description:**\n---\n${jobDescription}\n---` 
    : "No job description provided.";

  const prompt = `You are an expert technical interviewer who specializes in preparing candidates for competitive internship positions. Analyze the provided resume and job description to generate high-impact interview questions that:

1. Match actual questions asked in real internship interviews
2. Test both fundamental concepts and practical application skills
3. Focus on technologies and skills that appear in both the resume and job description
4. Include appropriate difficulty progression from screening to final rounds

**Input Materials:**
---
Resume: ${resumeText}
---
${jobDescriptionSection}
---

**Question Categories (25+ questions total):**

1. **Technical Fundamentals (8-10 questions)**
   * Data structure implementation and optimization questions
   * Algorithm complexity analysis and optimization challenges
   * Programming language specifics (based on resume languages)
   * Common coding patterns relevant to the internship domain
   * Database query optimization questions (if applicable)
   * System design fundamentals at appropriate scale for interns
   * Technical questions that often appear in first-round screenings

2. **Applied Skills (6-8 questions)**
   * Project-based questions requiring practical implementation knowledge
   * Tool and framework-specific questions (IDE, Git, CI/CD pipelines)
   * Questions testing ability to debug common issues
   * Questions about adapting existing code/systems
   * Questions testing ability to translate requirements to technical solutions
   * Challenges that simulate real tasks from the internship description

3. **Project Experience (6-8 questions)**
   * Questions challenging claimed technical contributions
   * "How would you implement X?" based on resume projects
   * Questions asking to explain technical decisions made in projects
   * "What would you do differently?" questions for each major project
   * Questions about scaling solutions beyond academic/personal project scope
   * Questions connecting coursework to practical implementation

4. **Problem-Solving Simulations (4-6 questions)**
   * Whiteboard-style problem-solving scenarios
   * Common internship technical assessment questions
   * Questions simulating live coding challenges
   * "Explain your thought process" scenarios
   * Questions with deliberately vague requirements to test clarification skills
   * Real-world scenarios that test practical thinking

**Output Format:**
Return a single, valid JSON object with the following structure:

{
    "technical": ["Question 1 about tech...", "Question 2 about tech..."],
    "behavioral": ["Question 1 about behavior...", "Question 2 about behavior..."],
    "project_specific": ["Question 1 about project...", "Question 2 about project..."],
    "scenario_based": ["Scenario question 1...", "Scenario question 2..."]
}

Return ONLY the JSON object, no markdown formatting.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  const cleaned = text.replace(/```json\n?/g, '').replace(/```/g, '').trim();
  return JSON.parse(cleaned);
};

export const generateAnswer = async (questionText: string, questionType: string = 'technical', apiKey?: string) => {
  const model = getModel(apiKey);
  const prompt = `Generate a PERFECT MODEL ANSWER that a candidate will memorize and replicate. Use psychology and learning principles to make it stick in their memory.

**QUESTION:** "${questionText}"
**TYPE:** ${questionType}

${questionType === 'behavioral' ? `
Write a STAR answer (250-300 words) optimized for memory retention:

**PSYCHOLOGICAL PRINCIPLES TO USE:**
- Chunking: Break into 4 clear mental blocks (S-T-A-R)
- Specificity: Use concrete numbers (dates, percentages, team sizes) - easier to remember than vague statements
- Sensory details: Include 1-2 vivid details that create mental images
- Emotional peaks: Mention the challenge/pressure moment - emotions aid memory
- Power words: "I implemented", "I decided", "I resolved" (not "we handled")
- Metric anchors: 3 specific numbers in Result section (40% improvement, 2 weeks, $50K saved)

**STRUCTURE (Natural flow, not robotic):**

Opening (Situation): "During my [time period] at [Company/Project], our team of [X] faced [specific problem]. This was critical because [impact]." (2 sentences, sets scene)

Context (Task): "I was tasked with [specific responsibility]. The deadline was tight - [timeframe] - and [what was at stake]." (2 sentences, creates urgency)

Core Story (Action - LONGEST, 6-8 sentences): 
"I started by [specific action 1] which revealed [finding]. Based on this, I decided to [action 2] using [specific tool/tech] rather than [alternative] because [reasoning]. The biggest challenge was [obstacle]. To overcome this, I [solution] and collaborated with [who] by [how]. I also [action 5] to ensure [goal]. Throughout the process, I [communication action]."

Payoff (Result): "This resulted in [metric 1: 40% improvement], which meant [business impact]. We delivered [metric 2: 2 weeks early], leading to [metric 3: outcome]. Most importantly, I learned [one powerful insight]." (3 sentences, each with a number)

**MAKE IT MEMORABLE:**
- Use the "Rule of 3" (3 actions, 3 metrics)
- Create a mini-narrative arc (problem → struggle → triumph)
- End with a learning that sounds mature and insightful
- Write it like they're telling a friend, not reading a script
- Use transition words: "Based on this", "The biggest challenge", "Throughout"
` : questionType === 'coding' ? `
Write a TECHNICAL ANSWER (400-500 words) that demonstrates mastery while being easy to internalize:

**PSYCHOLOGICAL FRAMEWORK:**
- Pattern recognition: Name the algorithm pattern upfront ("This is a Two Pointers problem")
- Chunking: 7 clear steps they can remember (Clarify → Brute → Optimize → Code → Test → Optimize → Scale)
- Confidence markers: "I would approach this...", "The optimal solution is...", "In production, I'd also consider..."
- Technical anchors: State complexities multiple times (repetition aids memory)
- Show thought process: Make them sound smart by "thinking aloud" naturally

**WRITE AS A FLOWING MONOLOGUE:**

"Let me make sure I understand the requirements... [2 clarifying questions]. I'll assume [assumptions]. Great.

My initial thought is a brute force approach using [method] - essentially [explain]. This would work but runs in O(n²) time with O(1) space, which isn't optimal for large inputs.

I can optimize this using [PATTERN NAME]. The key insight here is [critical observation that makes solution click]. Here's how it works: [explain algorithm with mini example using small numbers like [1,3,5,7]].

Let me code this up:
\`\`\`python
def solution(arr):
    # [Meaningful comment]
    result = 0
    # [Implementation with clear variable names]
    # Handle edge case: empty input
    if not arr: return 0
    # Main logic
    for i in range(len(arr)):
        # [Core algorithm]
    return result
\`\`\`

Walking through with the example: if input is [concrete example], we'd [step by step]. For edge cases like an empty array, we return 0. For a single element, [handle it].

Time complexity is O(n log n) because [reason]. Space is O(n) for [data structure used]. 

An alternative approach would be [method 2], which has [complexity]. I'd choose my solution for [scenario 1], but the alternative is better if [scenario 2] due to [trade-off].

In production, I'd also add input validation, consider thread-safety if [context], and maybe cache [something] if we're calling this repeatedly."

**MAKE IT REPLICABLE:**
- Use template phrases they can reuse: "Let me make sure...", "My initial thought...", "The key insight is...", "Walking through the example..."
- Include psychological confidence: never say "I'm not sure" - instead "I would need to verify [X], but my approach would be..."
- Embed the 7-step structure naturally without numbering
- Make complexity analysis sound effortless
- End with production considerations (shows maturity)
` : `
Write a thoughtful technical answer (300-400 words) optimized for internalization:

**STRUCTURE FOR MEMORY:**
- Hook: Start with clear understanding: "This question is essentially about [core concept]"
- Framework: Pick a mental model (3 approaches, 3 considerations, 3 trade-offs)
- Examples: Use specific technologies/numbers they can remember
- Decision: Show reasoning: "I would choose [X] over [Y] because..."
- Depth: Add one impressive detail that shows expertise
- Close: Real-world context or production consideration

**WRITE NATURALLY:**
Make it sound conversational but knowledgeable. Use phrases like:
- "In my experience with [project]..."
- "The trade-off here is..."
- "Most importantly..."
- "One thing to consider is..."

Include 2-3 specific technical terms/metrics that demonstrate depth without overcomplicating.
`}

**CRITICAL RULES:**
1. Start immediately with answer (NO "Here's my answer:" or "I would say:")
2. Write in first person as if THEY are answering (use "I", "my experience")
3. Make every sentence earn its place - no fluff
4. Use specific numbers and names (they're memory anchors)
5. Build in natural pauses with transitions - easier to remember chunks
6. End strong with insight/learning - last words stick in memory

Generate the model answer they'll memorize:`;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
};
