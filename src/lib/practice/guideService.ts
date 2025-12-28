import { GoogleGenerativeAI } from "@google/generative-ai";
import { Problem } from "./problemLibrary";

export type PracticePhase = 'understanding' | 'approach' | 'implementation' | 'optimization' | 'reflection';

export interface GuideContext {
  problem: Problem;
  phase: PracticePhase;
  messages: { role: 'user' | 'ai' | 'system'; content: string }[];
  code?: string;
  language?: string;
  testResults?: {
    input: unknown;
    passed: boolean;
    expected: unknown;
    actual?: unknown;
    error?: string;
  }[];
}

export async function getAiGuideResponse(apiKey: string, context: GuideContext) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  const { problem, phase, messages, code, language, testResults } = context;

  const systemPrompt = `
You are a senior developer pair-programming with a student. Your goal is to guide them to solve the coding problem "${problem.title}" using Socratic questioning.
DO NOT give the answer directly. Instead, ask questions that lead them to the answer.

Current Phase: ${phase}

Problem Description:
${problem.description}

Phase Instructions:
1. **Understanding**: Ensure they understand the inputs, outputs, and constraints. Ask what they are trying to find.
2. **Approach**: Guide them to a brute force solution first, then nudge towards optimization (e.g., using a Hash Map for O(n) instead of O(n^2)).
3. **Implementation**: As they write code, watch for milestones. If they get stuck, offer a nudge.
4. **Optimization**: Once solved, ask about time/space complexity and if any further improvements are possible.
5. **Reflection**: Ask what pattern they learned and when it might not work.

Guidelines:
- Keep responses concise and encouraging.
- Use Markdown for formatting.
- If they are stuck, provide a small hint or ask a clarifying question.
- If they provide a correct explanation, validate it and move to the next step.
- If they provide code, analyze it for logic errors but don't just fix it for them.
- If they have failing test cases, help them debug by asking about the specific input that failed.

Current Code (${language}):
\`\`\`${language}
${code || 'No code yet'}
\`\`\`

Test Results:
${testResults && testResults.length > 0 
  ? JSON.stringify(testResults.map(r => ({ 
      input: r.input, 
      passed: r.passed, 
      expected: r.expected, 
      actual: r.actual 
    })), null, 2)
  : 'No tests run yet'}

Conversation History:
${messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n')}

Respond as the AI Guide.
`;

  const result = await model.generateContent(systemPrompt);
  const response = await result.response;
  return response.text();
}
