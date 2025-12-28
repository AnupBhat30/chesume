export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface TestCase {
  input: unknown[];
  expected: unknown;
  description?: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  concepts: string[];
  estimatedTime: string;
  description: string;
  starterCode: {
    cpp: string;
    python: string;
  };
  testCases: TestCase[];
  hints: {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  };
  solution: {
    cpp: string;
    python: string;
  };
}

export const problemLibrary: Problem[] = [
  {
    id: 'reverse-string',
    title: '1. Reverse a String',
    difficulty: 'Easy',
    concepts: ['Strings', 'Two Pointers'],
    estimatedTime: '5 mins',
    description: 'Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array **in-place** with O(1) extra memory. This is a foundational problem for understanding how data is stored in contiguous memory and how to manipulate it without allocating new buffers.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        \n    }\n};',
      python: 'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        pass'
    },
    testCases: [
      { input: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"] },
      { input: [["H","a","n","n","a","h"]], expected: ["h","a","n","n","a","H"] }
    ],
    hints: {
      level1: "If you want to reverse something without using extra space, you need to swap the elements.",
      level2: "Try the 'Two Pointers' technique. Place one pointer at the very start (index 0) and one at the very end (n-1).",
      level3: "Swap the characters at the left and right pointers. After swapping, move the left pointer forward and the right pointer backward. When do they meet?",
      level4: "Use a while loop: `while (left < right)`. In C++, use `std::swap`. In Python, use `s[l], s[r] = s[r], s[l]`."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        int l = 0, r = s.size() - 1;\n        while (l < r) {\n            swap(s[l++], s[r--]);\n        }\n    }\n};',
      python: 'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        l, r = 0, len(s) - 1\n        while l < r:\n            s[l], s[r] = s[r], s[l]\n            l += 1\n            r -= 1'
    }
  },
  {
    id: 'palindrome-check',
    title: '2. Palindrome Check',
    difficulty: 'Easy',
    concepts: ['Strings', 'Two Pointers'],
    estimatedTime: '10 mins',
    description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. This problem tests your ability to clean data (string manipulation) and compare it efficiently.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        \n    }\n};',
      python: 'class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        pass'
    },
    testCases: [
      { input: ["A man, a plan, a canal: Panama"], expected: true },
      { input: ["race a car"], expected: false }
    ],
    hints: {
      level1: "First, you need to handle the 'cleaning'—ignore spaces, punctuation, and casing.",
      level2: "You can either create a new 'clean' string and check if it equals its reverse, or use two pointers on the original string.",
      level3: "If using two pointers, skip any character that isn't `isalnum()`. If the characters at the pointers don't match (case-insensitive), return false.",
      level4: "Python: `new_s = ''.join(c.lower() for c in s if c.isalnum())`. Then check `new_s == new_s[::-1]`."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (!isalnum(s[l])) l++;\n            else if (!isalnum(s[r])) r--;\n            else if (tolower(s[l++]) != tolower(s[r--])) return false;\n        }\n        return true;\n    }\n};',
      python: 'class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        cleaned = "".join(char.lower() for char in s if char.isalnum())\n        return cleaned == cleaned[::-1]'
    }
  },
  {
    id: 'two-sum-unsorted',
    title: '5. Two Sum (Unsorted)',
    difficulty: 'Easy',
    concepts: ['Arrays', 'Hash Tables'],
    estimatedTime: '15 mins',
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may not use the same element twice. This is the classic "Hash Map" interview question.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};',
      python: 'class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        pass'
    },
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ],
    hints: {
      level1: "A brute force solution using two loops is O(n²). Can you use a data structure to make it O(n)?",
      level2: "As you iterate through the array, you are looking for a specific 'complement' (target - current_value).",
      level3: "Store every number you have seen so far in a Hash Map (Value -> Index). For the current number, check if its complement is already in the map.",
      level4: "If `complement` exists in `map`, return `{map[complement], current_index}`. Otherwise, add `current_value` to the map."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> seen;\n        for (int i = 0; i < nums.size(); i++) {\n            int complement = target - nums[i];\n            if (seen.count(complement)) return {seen[complement], i};\n            seen[nums[i]] = i;\n        }\n        return {};\n    }\n};',
      python: 'class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        seen = {}\n        for i, val in enumerate(nums):\n            complement = target - val\n            if complement in seen:\n                return [seen[complement], i]\n            seen[val] = i'
    }
  },
  {
    id: 'detect-loop-ll',
    title: '8. Detect Loop in Linked List',
    difficulty: 'Easy',
    concepts: ['Linked List', 'Two Pointers'],
    estimatedTime: '15 mins',
    description: 'Given `head`, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle if some node can be reached again by continuously following the `next` pointer. This is solved using the famous "Floyd\'s Tortoise and Hare" algorithm.',
    starterCode: {
      cpp: '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        \n    }\n};',
      python: 'class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        pass'
    },
    testCases: [],
    hints: {
      level1: "If you walk in a circular track, and someone runs twice as fast as you, will they eventually lap you?",
      level2: "Use two pointers: a 'slow' pointer that moves one step and a 'fast' pointer that moves two steps.",
      level3: "If there is no cycle, the fast pointer will reach the end (NULL). If there IS a cycle, the fast pointer will eventually catch up to the slow pointer.",
      level4: "Initialize `slow = head` and `fast = head`. In a loop, `slow = slow->next` and `fast = fast->next->next`. Check if `slow == fast`."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n};',
      python: 'class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow == fast: return True\n        return False'
    }
  },
  {
    id: 'dutch-national-flag',
    title: '13. Dutch National Flag (Sort 0s, 1s, 2s)',
    difficulty: 'Medium',
    concepts: ['Arrays', 'Two Pointers'],
    estimatedTime: '15 mins',
    description: 'Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue (0, 1, and 2). This must be done in a single pass O(n) without using the library sort function.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        \n    }\n};',
      python: 'class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        pass'
    },
    testCases: [
      { input: [[2, 0, 2, 1, 1, 0]], expected: [0, 0, 1, 1, 2, 2] }
    ],
    hints: {
      level1: "You could count the number of 0s, 1s, and 2s and then overwrite the array, but that takes two passes. Can you do it in one pass?",
      level2: "Think of three regions: the 'zeros' region at the start, the 'twos' region at the end, and the 'ones' in the middle.",
      level3: "Use three pointers: `low` (boundary of 0s), `mid` (current element), and `high` (boundary of 2s).",
      level4: "If `nums[mid]` is 0, swap it with `nums[low]` and increment both. If it is 2, swap with `nums[high]` and decrement high. If it is 1, just increment mid."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int low = 0, mid = 0, high = nums.size() - 1;\n        while (mid <= high) {\n            if (nums[mid] == 0) swap(nums[low++], nums[mid++]);\n            else if (nums[mid] == 1) mid++;\n            else swap(nums[mid], nums[high--]);\n        }\n    }\n};',
      python: 'class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        low, mid, high = 0, 0, len(nums) - 1\n        while mid <= high:\n            if nums[mid] == 0:\n                nums[low], nums[mid] = nums[mid], nums[low]\n                low += 1; mid += 1\n            elif nums[mid] == 1: mid += 1\n            else:\n                nums[mid], nums[high] = nums[high], nums[mid]\n                high -= 1'
    }
  },
  {
    id: 'binary-search',
    title: '20. Binary Search',
    difficulty: 'Easy',
    concepts: ['Arrays', 'Binary Search'],
    estimatedTime: '10 mins',
    description: 'Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1. You must write an algorithm with **O(log n)** runtime complexity.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};',
      python: 'class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        pass'
    },
    testCases: [
      { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
      { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 }
    ],
    hints: {
      level1: "Since the array is sorted, you don't need to check every element. You can eliminate half of the remaining elements in each step.",
      level2: "Pick the middle element. Is it the target? If not, is the target larger or smaller than this middle element?",
      level3: "If `target > nums[mid]`, the target must be in the right half. If `target < nums[mid]`, it's in the left half.",
      level4: "Use `low` and `high` pointers. Calculate `mid = low + (high - low) / 2` to prevent integer overflow."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int l = 0, r = nums.size() - 1;\n        while (l <= r) {\n            int mid = l + (r - l) / 2;\n            if (nums[mid] == target) return mid;\n            if (nums[mid] < target) l = mid + 1;\n            else r = mid - 1;\n        }\n        return -1;\n    }\n};',
      python: 'class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            mid = (l + r) // 2\n            if nums[mid] == target: return mid\n            elif nums[mid] < target: l = mid + 1\n            else: r = mid - 1\n        return -1'
    }
  },
  {
    id: 'balanced-parentheses',
    title: '19. Balanced Parentheses',
    difficulty: 'Easy',
    concepts: ['Stacks', 'Strings'],
    estimatedTime: '15 mins',
    description: 'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    bool isValid(string s) {\n        \n    }\n};',
      python: 'class Solution:\n    def isValid(self, s: str) -> bool:\n        pass'
    },
    testCases: [
      { input: ["()[]{}"], expected: true },
      { input: ["(]"], expected: false }
    ],
    hints: {
      level1: "The order matters. The most recently opened bracket must be the first one closed (LIFO).",
      level2: "What data structure supports Last-In-First-Out?",
      level3: "Push opening brackets onto a stack. When you see a closing bracket, it must match the top of the stack.",
      level4: "Don't forget to check if the stack is empty at the end, and also check if you try to pop from an empty stack."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n        for (char c : s) {\n            if (c == \'(\' || c == \'{\' || c == \'[\') st.push(c);\n            else {\n                if (st.empty()) return false;\n                if (c == \')\' && st.top() != \'(\') return false;\n                if (c == \'}\' && st.top() != \'{\') return false;\n                if (c == \']\' && st.top() != \'[\') return false;\n                st.pop();\n            }\n        }\n        return st.empty();\n    }\n};',
      python: 'class Solution:\n    def isValid(self, s: str) -> bool:\n        stack = []\n        mapping = {")": "(", "}": "{", "]": "["}\n        for char in s:\n            if char in mapping:\n                top_element = stack.pop() if stack else "#"\n                if mapping[char] != top_element:\n                    return False\n            else:\n                stack.append(char)\n        return not stack'
    }
  },
  {
    id: 'missing-number',
    title: '15. Find Missing Number (1 to N)',
    difficulty: 'Easy',
    concepts: ['Math', 'Arrays'],
    estimatedTime: '10 mins',
    description: 'Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array. This tests your knowledge of mathematical series and arithmetic progression.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        \n    }\n};',
      python: 'class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        pass'
    },
    testCases: [
      { input: [[3, 0, 1]], expected: 2 },
      { input: [[0, 1]], expected: 2 }
    ],
    hints: {
      level1: "If you had all the numbers from 0 to n, what would their total sum be?",
      level2: "The sum of a series from 0 to n is `(n * (n + 1)) / 2`.",
      level3: "Calculate the expected sum using the formula and calculate the actual sum of the array. What is the difference?",
      level4: "Result = `ExpectedSum - ActualSum`. Note: You could also solve this using XOR."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = nums.size();\n        int expected = n * (n + 1) / 2;\n        int actual = 0;\n        for (int x : nums) actual += x;\n        return expected - actual;\n    }\n};',
      python: 'class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        n = len(nums)\n        return (n * (n + 1) // 2) - sum(nums)'
    }
  },
  {
    id: 'first-non-repeating',
    title: '7. First Non-Repeating Character',
    difficulty: 'Easy',
    concepts: ['Hash Tables', 'Strings'],
    estimatedTime: '10 mins',
    description: 'Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return -1. This is a common task in processing data streams and text analysis.',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    int firstUniqChar(string s) {\n        \n    }\n};',
      python: 'class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        pass'
    },
    testCases: [
      { input: ["leetcode"], expected: 0 },
      { input: ["loveleetcode"], expected: 2 }
    ],
    hints: {
      level1: "You need to know how many times each character appears in the string.",
      level2: "Use a Hash Map or a frequency array (size 26 for English letters) to count occurrences.",
      level3: "After counting, iterate through the string a second time and check the count of each character in your map.",
      level4: "The first character you find with a count of 1 is your answer."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    int firstUniqChar(string s) {\n        int count[26] = {0};\n        for (char c : s) count[c - \'a\']++;\n        for (int i = 0; i < s.length(); i++) {\n            if (count[s[i] - \'a\'] == 1) return i;\n        }\n        return -1;\n    }\n};',
      python: 'class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        count = collections.Counter(s)\n        for i, char in enumerate(s):\n            if count[char] == 1:\n                return i\n        return -1'
    }
  },
  {
    id: 'fibonacci-sequence',
    title: '18. Fibonacci Sequence',
    difficulty: 'Easy',
    concepts: ['Recursion', 'Dynamic Programming'],
    estimatedTime: '10 mins',
    description: 'The Fibonacci numbers, commonly denoted `F(n)`, form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1. Calculate `F(n)`. This problem introduces you to recurrence relations and optimization (Memoization).',
    starterCode: {
      cpp: 'class Solution {\npublic:\n    int fib(int n) {\n        \n    }\n};',
      python: 'class Solution:\n    def fib(self, n: int) -> int:\n        pass'
    },
    testCases: [
      { input: [2], expected: 1 },
      { input: [4], expected: 3 }
    ],
    hints: {
      level1: "The formula is `F(n) = F(n-1) + F(n-2)`. What are the base cases?",
      level2: "Base cases: `F(0) = 0`, `F(1) = 1`.",
      level3: "Recursive solutions are simple but slow (O(2ⁿ)). Can you use a loop to make it O(n)?",
      level4: "Keep two variables, `prev1` and `prev2`. In each step, `current = prev1 + prev2`, then update the variables for the next iteration."
    },
    solution: {
      cpp: 'class Solution {\npublic:\n    int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n        return b;\n    }\n};',
      python: 'class Solution:\n    def fib(self, n: int) -> int:\n        if n <= 1: return n\n        a, b = 0, 1\n        for _ in range(2, n + 1):\n            a, b = b, a + b\n        return b'
    }
  }
];