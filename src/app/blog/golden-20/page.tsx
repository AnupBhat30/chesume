import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function Golden20Blog() {
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
          <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
            The Fast Track
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-yellow-200 to-gray-500 bg-clip-text text-transparent">
            The Golden 20: Master the Patterns
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            If you only have 48 hours to prepare, master these 20 questions.
            They teach the 8 fundamental patterns that unlock 200+ other
            problems.
          </p>
        </header>

        {/* Patterns Overview */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Two Pointers", desc: "Palindrome, Pair Sum, Reverse" },
            { title: "Hashing", desc: "Anagrams, Frequency, Duplicates" },
            {
              title: "Slow/Fast Pointers",
              desc: "Cycle Detection, Middle Finding",
            },
            { title: "Single-Pass", desc: "Max/Min, Tracking Variables" },
            { title: "In-Place Swapping", desc: "Reverse, Rotate, Partition" },
            { title: "Math Optimization", desc: "Prime, GCD, Missing Number" },
            { title: "Recursion", desc: "Factorial, Fibonacci, Trees" },
            { title: "Stack/LIFO", desc: "Parentheses, Next Greater" },
          ].map((p, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <h3 className="text-yellow-500 font-bold mb-1">{p.title}</h3>
              <p className="text-xs text-gray-500">{p.desc}</p>
            </div>
          ))}
        </section>

        <main className="space-y-24">
          {/* Pattern 1: Two Pointers */}
          <section id="two-pointers">
            <div className="mb-12 p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-yellow-500 mb-2">
                Pattern 1: Two Pointers
              </h2>
              <p className="text-gray-400">
                Using two indices to traverse from different ends or at
                different speeds. Essential for strings and sorted arrays.
              </p>
            </div>

            <QuestionCard
              title="Reverse a String"
              learn="The foundation of in-place modification."
              context="Flipping a string without using extra memory."
              steps={[
                "Place one pointer at the start (0) and one at the end (len-1)",
                "Swap the characters at these positions",
                "Move pointers toward each other",
                "Stop when they meet or cross",
              ]}
              pythonCode={`def reverse_string(s):
    chars = list(s)
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return "".join(chars)`}
              cppCode={`void reverseString(string &s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
}`}
              walkthrough="By swapping from both ends, we only need to traverse half the string. This is O(N) time and O(1) extra space in C++."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass, in-place swaps.",
              }}
              mistakes={[
                {
                  mistake: "Using extra space",
                  fix: "Use two pointers to swap in-place",
                },
              ]}
              tryIt="Can you reverse it recursively?"
            />

            <QuestionCard
              title="Palindrome Check"
              learn="Symmetry detection using pointers."
              context="Checking if 'radar' or 'madam' reads the same backwards."
              steps={[
                "Clean the string (lowercase, remove non-alphanumeric)",
                "Use two pointers at start and end",
                "If characters don't match, it's not a palindrome",
                "If pointers meet, it is a palindrome",
              ]}
              pythonCode={`def is_palindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        if s[l].lower() != s[r].lower():
            return False
        l += 1
        r -= 1
    return True`}
              cppCode={`bool isPalindrome(string s) {
    int l = 0, r = s.length() - 1;
    while (l < r) {
        if (tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}`}
              walkthrough="Similar to reversal, but we compare instead of swap. This pattern is used in 'Valid Palindrome II' and 'Longest Palindromic Substring'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Linear scan with no extra storage.",
              }}
              mistakes={[
                {
                  mistake: "Not handling case sensitivity",
                  fix: "Convert to lowercase before comparing",
                },
              ]}
              tryIt="Try 'Valid Palindrome II' where you can delete one character."
            />

            <QuestionCard
              title="Pairs with Given Sum"
              learn="Searching in a sorted space."
              context="Find two numbers in a sorted array that add up to a target."
              steps={[
                "Sort the array (if not already sorted)",
                "Start pointers at both ends",
                "If sum > target, move right pointer left (to decrease sum)",
                "If sum < target, move left pointer right (to increase sum)",
              ]}
              pythonCode={`def find_pairs(arr, target):
    arr.sort()
    l, r = 0, len(arr) - 1
    while l < r:
        curr_sum = arr[l] + arr[r]
        if curr_sum == target:
            return [arr[l], arr[r]]
        elif curr_sum < target:
            l += 1
        else:
            r -= 1
    return []`}
              cppCode={`vector<int> findPairs(vector<int>& arr, int target) {
    sort(arr.begin(), arr.end());
    int l = 0, r = arr.size() - 1;
    while (l < r) {
        int sum = arr[l] + arr[r];
        if (sum == target) return {arr[l], arr[r]};
        if (sum < target) l++;
        else r--;
    }
    return {};
}`}
              walkthrough="This 'Two-Sum II' pattern is much faster than nested loops (O(N) vs O(N²)) once the array is sorted."
              complexity={{
                time: "O(N log N) for sorting",
                space: "O(1)",
                why: "Sorting dominates, then a linear scan.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting to sort",
                  fix: "Two pointers only work on sorted arrays",
                },
              ]}
              tryIt="What if the array isn't sorted? Use a HashSet."
            />

            <QuestionCard
              title="Remove Duplicates"
              learn="In-place array modification."
              context="Remove duplicates from a sorted array without extra space."
              steps={[
                "Use a 'slow' pointer for the unique elements",
                "Use a 'fast' pointer to scan the array",
                "If fast element != slow element, increment slow and update",
              ]}
              pythonCode={`def remove_duplicates(nums):
    if not nums: return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1`}
              cppCode={`int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    int slow = 0;
    for (int fast = 1; fast < nums.size(); fast++) {
        if (nums[fast] != nums[slow]) {
            nums[++slow] = nums[fast];
        }
    }
    return slow + 1;
}`}
              walkthrough="This pattern is essential for 'Move Zeroes' and 'Remove Element'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass, in-place.",
              }}
              mistakes={[
                {
                  mistake: "Using a new array",
                  fix: "The problem usually requires O(1) space",
                },
              ]}
              tryIt="Can you allow at most two duplicates?"
            />
          </section>

          {/* Pattern 2: Hashing */}
          <section id="hashing">
            <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-purple-400 mb-2">
                Pattern 2: Hashing / Frequency Counting
              </h2>
              <p className="text-gray-400">
                Using HashMaps or Arrays to store and look up data in O(1) time.
                {"The most powerful tool for 'existence' problems."}
              </p>
            </div>

            <QuestionCard
              title="Two Sum (Unsorted)"
              learn="The classic HashMap lookup."
              context="Find two numbers that add to target in an unsorted array."
              steps={[
                "Create an empty HashMap (value -> index)",
                "For each number, calculate the complement (target - num)",
                "If complement exists in map, return the pair",
                "Otherwise, add current number to map",
              ]}
              pythonCode={`def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`}
              cppCode={`vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int diff = target - nums[i];
        if (seen.count(diff)) return {seen[diff], i};
        seen[nums[i]] = i;
    }
    return {};
}`}
              walkthrough="This is the O(N) version of Two Sum. It trades space for time."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We store up to N elements in the map.",
              }}
              mistakes={[
                {
                  mistake: "Checking for the same element twice",
                  fix: "Add the element to the map AFTER checking the complement",
                },
              ]}
              tryIt="What if there are multiple pairs?"
            />

            <QuestionCard
              title="Anagram Check"
              learn="Comparing content regardless of order."
              context="Are 'listen' and 'silent' made of the same letters?"
              steps={[
                "Check if lengths are equal",
                "Count frequency of each character in string A",
                "Subtract frequency for each character in string B",
                "If all counts are zero, they are anagrams",
              ]}
              pythonCode={`from collections import Counter
def are_anagrams(s1, s2):
    return Counter(s1) == Counter(s2)`}
              cppCode={`bool areAnagrams(string s1, string s2) {
    if (s1.length() != s2.length()) return false;
    int counts[256] = {0};
    for (char c : s1) counts[c]++;
    for (char c : s2) {
        counts[c]--;
        if (counts[c] < 0) return false;
    }
    return true;
}`}
              walkthrough="Instead of sorting (O(N log N)), hashing gives us O(N). This pattern solves 'Group Anagrams' and 'Find All Anagrams in a String'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Fixed size array (256) for ASCII.",
              }}
              mistakes={[
                {
                  mistake: "Sorting both strings",
                  fix: "Sorting is O(N log N), hashing is O(N)",
                },
              ]}
              tryIt="How would you handle Unicode characters instead of just ASCII?"
            />

            <QuestionCard
              title="First Non-Repeating Character"
              learn="Two-pass hashing."
              context="Find the first character that appears only once in 'swiss' (it's 'w')."
              steps={[
                "Pass 1: Build a frequency map of all characters",
                "Pass 2: Iterate through the string and return the first char with count 1",
              ]}
              pythonCode={`def first_unique(s):
    counts = {}
    for c in s: counts[c] = counts.get(c, 0) + 1
    for c in s:
        if counts[c] == 1: return c
    return None`}
              cppCode={`char firstUnique(string s) {
    unordered_map<char, int> counts;
    for (char c : s) counts[c]++;
    for (char c : s) {
        if (counts[c] == 1) return c;
    }
    return '\\0';
}`}
              walkthrough="The first pass 'remembers' the counts, the second pass 'finds' the result. Essential for 'Top K Frequent Elements'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Max 256 unique characters.",
              }}
              mistakes={[
                {
                  mistake: "Only doing one pass",
                  fix: "You need the first pass to know the total counts",
                },
              ]}
              tryIt="Can you do this with a single pass using a LinkedHashMap?"
            />
          </section>

          {/* Pattern 3: Slow/Fast Pointers */}
          <section id="slow-fast">
            <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                Pattern 3: Slow & Fast Pointers
              </h2>
              <p className="text-gray-400">
                Also known as the Tortoise and Hare algorithm. Used primarily
                for Linked Lists and cycle detection.
              </p>
            </div>

            <QuestionCard
              title="Detect Loop in Linked List"
              learn="Floyd's Cycle-Finding Algorithm."
              context="Does the linked list go on forever in a circle?"
              steps={[
                "Initialize 'slow' and 'fast' pointers at the head",
                "Move slow by 1 step, fast by 2 steps",
                "If they ever meet, there is a loop",
                "If fast hits NULL, there is no loop",
              ]}
              pythonCode={`def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False`}
              cppCode={`bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`}
              walkthrough="In a circular track, the faster runner will eventually lap the slower one. This is O(N) time and O(1) space."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Linear traversal with two pointers.",
              }}
              mistakes={[
                {
                  mistake: "Not checking fast.next",
                  fix: "Always check both fast and fast.next to avoid null pointer errors",
                },
              ]}
              tryIt="Can you find the exact node where the cycle starts?"
            />

            <QuestionCard
              title="Find Middle of Linked List"
              learn="Single-pass middle finding."
              context="Find the center node without knowing the total length."
              steps={[
                "Move slow by 1, fast by 2",
                "When fast reaches the end, slow is exactly at the middle",
              ]}
              pythonCode={`def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`}
              cppCode={`ListNode* findMiddle(ListNode* head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}`}
              walkthrough="This avoids the 'two-pass' approach (count then find). Used in 'Reorder List' and 'Palindrome Linked List'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Traverses the list once.",
              }}
              mistakes={[
                {
                  mistake: "Off-by-one errors",
                  fix: "Carefully trace if you need the first or second middle for even lengths",
                },
              ]}
              tryIt="How would you find the 1/3rd point of the list?"
            />
          </section>

          {/* Pattern 4: Single-Pass Traversal */}
          <section id="single-pass">
            <div className="mb-12 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                Pattern 4: Single-Pass Traversal
              </h2>
              <p className="text-gray-400">
                Solving problems by visiting each element exactly once and
                maintaining state in variables.
              </p>
            </div>

            <QuestionCard
              title="Find Maximum Element"
              learn="The 'King of the Hill' logic."
              context="Finding the largest number in an unsorted array."
              steps={[
                "Assume the first element is the maximum",
                "Compare it with every other element",
                "Update maximum if a larger one is found",
              ]}
              pythonCode={`def find_max(arr):
    max_val = arr[0]
    for x in arr:
        if x > max_val: max_val = x
    return max_val`}
              cppCode={`int findMax(vector<int>& arr) {
    int max_val = arr[0];
    for (int x : arr) if (x > max_val) max_val = x;
    return max_val;
}`}
              walkthrough="The simplest but most fundamental pattern. Used in 'Kadane's Algorithm' and 'Best Time to Buy and Sell Stock'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "One loop, one variable.",
              }}
              mistakes={[
                {
                  mistake: "Initializing max to 0",
                  fix: "Use the first element or negative infinity to handle negative numbers",
                },
              ]}
              tryIt="Find the minimum and maximum in a single pass with fewer comparisons."
            />

            <QuestionCard
              title="Second Largest Element"
              learn="Tracking multiple states simultaneously."
              context="Find the runner-up without sorting."
              steps={[
                "Maintain 'largest' and 'second_largest'",
                "If current > largest: update both",
                "Else if current > second_largest: update only second",
              ]}
              pythonCode={`def second_largest(arr):
    first = second = float('-inf')
    for x in arr:
        if x > first:
            second = first
            first = x
        elif x > second and x != first:
            second = x
    return second`}
              cppCode={`int secondLargest(vector<int>& arr) {
    int first = INT_MIN, second = INT_MIN;
    for (int x : arr) {
        if (x > first) { second = first; first = x; }
        else if (x > second && x != first) { second = x; }
    }
    return second;
}`}
              walkthrough="Teaches you how to maintain multiple 'best' values. Essential for 'Kth Largest Element' problems."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass, constant variables.",
              }}
              mistakes={[
                {
                  mistake: "Not handling duplicates",
                  fix: "Ensure second_largest is only updated if current != largest",
                },
              ]}
              tryIt="Find the Kth largest element using a Min-Heap."
            />
          </section>

          {/* Pattern 5: In-Place Swapping */}
          <section id="in-place">
            <div className="mb-12 p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-red-400 mb-2">
                Pattern 5: In-Place Swapping
              </h2>
              <p className="text-gray-400">
                Modifying the input data structure directly to save memory.
                Crucial for system-level programming.
              </p>
            </div>

            <QuestionCard
              title="Reverse an Array"
              learn="Memory-efficient data manipulation."
              context="Flip an array [1,2,3] to [3,2,1] without creating a new one."
              steps={[
                "Use two pointers (start, end)",
                "Swap elements and move pointers",
                "Stop at the middle",
              ]}
              pythonCode={`def reverse_array(arr):
    l, r = 0, len(arr) - 1
    while l < r:
        arr[l], arr[r] = arr[r], arr[l]
        l += 1; r -= 1`}
              cppCode={`void reverseArray(vector<int>& arr) {
    int l = 0, r = arr.size() - 1;
    while (l < r) swap(arr[l++], arr[r--]);
}`}
              walkthrough="This is the array version of string reversal. It's the basis for 'Rotate Array' and 'Reverse Words in a String'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "No extra memory used.",
              }}
              mistakes={[
                {
                  mistake: "Swapping until the end",
                  fix: "If you swap until the end, you'll just reverse it back to original",
                },
              ]}
              tryIt="Rotate an array by K positions using three reversals."
            />

            <QuestionCard
              title="Dutch National Flag (Sort 0s, 1s, 2s)"
              learn="Three-pointer partitioning."
              context="Sort an array of only 0s, 1s, and 2s in one pass."
              steps={[
                "Use three pointers: low, mid, high",
                "If mid is 0: swap with low, increment low and mid",
                "If mid is 1: just increment mid",
                "If mid is 2: swap with high, decrement high",
              ]}
              pythonCode={`def sort_colors(arr):
    low, mid, high = 0, 0, len(arr) - 1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1; mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1`}
              cppCode={`void sortColors(vector<int>& arr) {
    int low = 0, mid = 0, high = arr.size() - 1;
    while (mid <= high) {
        if (arr[mid] == 0) swap(arr[low++], arr[mid++]);
        else if (arr[mid] == 1) mid++;
        else swap(arr[mid], arr[high--]);
    }
}`}
              walkthrough="This is a masterclass in pointer management. It's the core logic behind 'QuickSort Partitioning'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass, three pointers.",
              }}
              mistakes={[
                {
                  mistake: "Incrementing mid after swapping with high",
                  fix: "The new element from high hasn't been checked yet, so don't increment mid",
                },
              ]}
              tryIt="Sort an array with 4 distinct values."
            />
          </section>

          {/* Pattern 6: Math Optimization */}
          <section id="math">
            <div className="mb-12 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                Pattern 6: Mathematical Optimization
              </h2>
              <p className="text-gray-400">
                Using mathematical properties to avoid unnecessary work. Turns
                O(N) into O(√N) or O(log N).
              </p>
            </div>

            <QuestionCard
              title="Check if Prime"
              learn="The Square Root optimization."
              context="Is 1000003 a prime number?"
              steps={[
                "If n <= 1, return False",
                "Loop from 2 up to √n",
                "If any number divides n, it's not prime",
              ]}
              pythonCode={`import math
def is_prime(n):
    if n <= 1: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0: return False
    return True`}
              cppCode={`bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}`}
              walkthrough="If a number has a factor larger than its square root, it must also have one smaller than it. This saves millions of iterations for large numbers."
              complexity={{
                time: "O(√N)",
                space: "O(1)",
                why: "Loop runs only up to square root.",
              }}
              mistakes={[
                {
                  mistake: "Looping up to N",
                  fix: "Looping to √N is significantly faster for large primes",
                },
              ]}
              tryIt="Implement the Sieve of Eratosthenes to find all primes up to N."
            />

            <QuestionCard
              title="Find Missing Number (1 to N)"
              learn="The Summation Formula / XOR trick."
              context="An array has numbers 1 to N, but one is missing. Find it."
              steps={[
                "Calculate expected sum: N * (N + 1) / 2",
                "Calculate actual sum of array",
                "Missing = Expected - Actual",
              ]}
              pythonCode={`def missing_number(arr, n):
    expected = n * (n + 1) // 2
    return expected - sum(arr)`}
              cppCode={`int missingNumber(vector<int>& arr, int n) {
    int expected = n * (n + 1) / 2;
    int actual = 0;
    for (int x : arr) actual += x;
    return expected - actual;
}`}
              walkthrough="This is O(N) time and O(1) space. The XOR version is even better as it prevents integer overflow."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass, simple math.",
              }}
              mistakes={[
                {
                  mistake: "Integer overflow",
                  fix: "Use XOR or long long for very large N",
                },
              ]}
              tryIt="Find two missing numbers in the same range."
            />

            <QuestionCard
              title="GCD (Euclidean Algorithm)"
              learn="Recursive reduction."
              context="Find the Greatest Common Divisor of 48 and 18."
              steps={[
                "GCD(a, b) is the same as GCD(b, a % b)",
                "Repeat until b becomes 0",
                "The remaining 'a' is the GCD",
              ]}
              pythonCode={`def gcd(a, b):
    while b:
        a, b = b, a % b
    return a`}
              cppCode={`int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}`}
              walkthrough="One of the oldest and most efficient algorithms. Used in 'Fraction Simplification' and 'RSA Encryption'."
              complexity={{
                time: "O(log(min(a,b)))",
                space: "O(1)",
                why: "Numbers decrease exponentially.",
              }}
              mistakes={[
                {
                  mistake: "Not handling zero",
                  fix: "Ensure you don't divide by zero if b is 0",
                },
              ]}
              tryIt="Find the LCM (Least Common Multiple) using the GCD."
            />
          </section>

          {/* Pattern 7: Recursion */}
          <section id="recursion">
            <div className="mb-12 p-6 bg-pink-500/5 border border-pink-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-pink-400 mb-2">
                Pattern 7: Recursion Thinking
              </h2>
              <p className="text-gray-400">
                Breaking a problem into smaller sub-problems. The foundation for
                Trees, Graphs, and Dynamic Programming.
              </p>
            </div>

            <QuestionCard
              title="Factorial (Iterative & Recursive)"
              learn="Base cases and recursive calls."
              context="Calculate 5! (5 * 4 * 3 * 2 * 1)."
              steps={[
                "Base case: if n is 0 or 1, return 1",
                "Recursive step: return n * factorial(n-1)",
              ]}
              pythonCode={`def factorial(n):
    if n <= 1: return 1
    return n * factorial(n - 1)`}
              cppCode={`int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`}
              walkthrough="Teaches you how to trust the 'recursive leap of faith'. Essential for 'Tree Traversals' (DFS)."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Recursive stack depth is N.",
              }}
              mistakes={[
                {
                  mistake: "Stack overflow",
                  fix: "For very large N, recursion will crash; use iteration",
                },
              ]}
              tryIt="Calculate the number of trailing zeros in N!."
            />

            <QuestionCard
              title="Fibonacci Sequence"
              learn="State dependency."
              context="0, 1, 1, 2, 3, 5, 8... each number is the sum of the two before it."
              steps={[
                "Start with 0 and 1",
                "Next = Prev1 + Prev2",
                "Update Prev1 and Prev2",
              ]}
              pythonCode={`def fib(n):
    a, b = 0, 1
    for _ in range(n):
        print(a)
        a, b = b, a + b`}
              cppCode={`void fib(int n) {
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        int next = a + b;
        a = b; b = next;
    }
}`}
              walkthrough="While recursion is intuitive here, iteration is much more efficient (O(N) vs O(2^N)). This is the gateway to 'Dynamic Programming'."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Iterative approach uses constant space.",
              }}
              mistakes={[
                {
                  mistake: "Naive recursion",
                  fix: "fib(n-1) + fib(n-2) without memoization is O(2^N)",
                },
              ]}
              tryIt="Solve this using Dynamic Programming (Memoization)."
            />
          </section>

          {/* Pattern 8: Stack/LIFO */}
          <section id="stack">
            <div className="mb-12 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">
                Pattern 8: Stack / LIFO Pattern
              </h2>
              <p className="text-gray-400">
                Last-In, First-Out.{" "}
                {
                  "Used for problems involving nested structures or 'undo' operations."
                }
              </p>
            </div>

            <QuestionCard
              title="Balanced Parentheses"
              learn="Matching nested structures."
              context="Is '[{()}]' valid? Is '[(])' valid?"
              steps={[
                "Use a stack to store opening brackets",
                "When you see a closing bracket, check if it matches the top of the stack",
                "If it matches, pop the stack. If not, it's invalid",
                "At the end, the stack must be empty",
              ]}
              pythonCode={`def is_valid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top: return False
        else:
            stack.append(char)
    return not stack`}
              cppCode={`bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`}
              walkthrough="The stack 'remembers' the order of opening brackets. This pattern is used in 'Min Stack', 'Evaluate Reverse Polish Notation', and 'Daily Temperatures'."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We might store all characters in the stack.",
              }}
              mistakes={[
                {
                  mistake: "Not checking if stack is empty before popping",
                  fix: "A closing bracket with no opening bracket is invalid",
                },
              ]}
              tryIt="Handle multiple types of brackets like [], {}, and ()."
            />
          </section>

          {/* Bonus: Searching & Sorting */}
          <section id="search-sort">
            <div className="mb-12 p-6 bg-gray-500/5 border border-gray-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-400 mb-2">
                Bonus: Searching & Sorting
              </h2>
              <p className="text-sm text-gray-500">
                The algorithms that power the world.
              </p>
            </div>

            <QuestionCard
              title="Binary Search"
              learn="Divide and Conquer."
              context="Find a number in a sorted array in O(log N) time."
              steps={[
                "Find the middle element",
                "If target == mid, return index",
                "If target < mid, search the left half",
                "If target > mid, search the right half",
              ]}
              pythonCode={`def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = (l + r) // 2
        if arr[mid] == target: return mid
        if arr[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1`}
              cppCode={`int binarySearch(vector<int>& arr, int target) {
    int l = 0, r = arr.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`}
              walkthrough="Binary search is the most important algorithm to understand. It's the basis for 'Search in Rotated Sorted Array' and 'Find Peak Element'."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "Search space halves each step.",
              }}
              mistakes={[
                {
                  mistake: "Midpoint overflow",
                  fix: "Use low + (high - low) / 2 instead of (low + high) / 2",
                },
              ]}
              tryIt="Find the first occurrence of a duplicate element."
            />
          </section>
        </main>

        <footer className="mt-32 pt-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Mastered these 20?</h2>
          <p className="text-gray-400 mb-8">
            You now have the tools to solve 70% of interview questions. Ready
            for the full 80+ series?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              View Full 80+ Series →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
