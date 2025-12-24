import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function BlogPart3() {
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

        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
            Part 3 of 5
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Arrays & Core DSA Fundamentals
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Arrays are the most fundamental data structure. 90% of technical
            rounds will feature at least one array problem. Let's master them.
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
                  "Second Largest",
                  "Missing Number",
                  "Rotate Array",
                  "Binary Search",
                  "Bubble Sort",
                  "Reverse Array",
                  "Max and Min",
                  "Check Sorted",
                  "Find Duplicates",
                  "Intersection",
                  "Linear Search",
                  "Selection Sort",
                  "Insertion Sort",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <QuestionCard
              title="Second Largest"
              learn="Finding specific elements in a single pass."
              context="Like finding the runner-up in a race without sorting the entire list of participants."
              steps={[
                "Initialize largest and second_largest to negative infinity",
                "Iterate through the array",
                "If current > largest, update second_largest to largest, then largest to current",
                "Else if current > second_largest and current != largest, update second_largest",
              ]}
              pythonCode={`def second_largest(arr):
    largest = second = float('-inf')
    for x in arr:
        if x > largest:
            second = largest
            largest = x
        elif x > second and x != largest:
            second = x
    return second`}
              cppCode={`#include <climits>
int secondLargest(vector<int>& arr) {
    int largest = INT_MIN, second = INT_MIN;
    for (int x : arr) {
        if (x > largest) {
            second = largest;
            largest = x;
        } else if (x > second && x != largest) {
            second = x;
        }
    }
    return second;
}`}
              walkthrough="The key is to update the 'runner-up' whenever we find a new 'winner'. This allows us to find the answer in one pass (O(N)) instead of sorting (O(N log N))."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We only visit each element once and use two variables.",
              }}
              mistakes={[
                {
                  mistake: "Sorting the array first",
                  fix: "Sorting takes O(N log N). A single pass is O(N) and much more efficient.",
                },
              ]}
              tryIt="How would you find the K-th largest element?"
            />

            <QuestionCard
              title="Missing Number"
              learn="Using mathematical formulas for array problems."
              context="You have numbers from 1 to 100, but one is missing. How do you find it without checking every single one?"
              steps={[
                "Calculate the expected sum of 1 to N using formula: N*(N+1)/2",
                "Calculate the actual sum of elements in the array",
                "Missing number = Expected Sum - Actual Sum",
              ]}
              pythonCode={`def find_missing(arr, n):
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum`}
              cppCode={`int findMissing(vector<int>& arr, int n) {
    int expected = n * (n + 1) / 2;
    int actual = 0;
    for (int x : arr) actual += x;
    return expected - actual;
}`}
              walkthrough="This is a beautiful example of using math to solve a coding problem. The sum of first N natural numbers is a constant time calculation."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We sum the array once.",
              }}
              mistakes={[
                {
                  mistake: "Potential integer overflow for very large N",
                  fix: "Use long long in C++ or the XOR approach to avoid large sums.",
                },
              ]}
              tryIt="Can you solve this using the XOR operator? (Hint: XOR all numbers from 1 to N and all numbers in the array)"
            />

            <QuestionCard
              title="Rotate Array"
              learn="Array manipulation and the 'reversal trick'."
              context="Shifting elements to the right by K positions. [1,2,3,4,5] rotated by 2 becomes [4,5,1,2,3]."
              steps={[
                "Reverse the entire array",
                "Reverse the first K elements",
                "Reverse the remaining N-K elements",
              ]}
              pythonCode={`def rotate(arr, k):
    n = len(arr)
    k %= n
    arr.reverse()
    arr[:k] = reversed(arr[:k])
    arr[k:] = reversed(arr[k:])
    return arr`}
              cppCode={`#include <algorithm>
void rotate(vector<int>& arr, int k) {
    int n = arr.size();
    k %= n;
    reverse(arr.begin(), arr.end());
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
}`}
              walkthrough="The reversal trick is the most elegant way to rotate an array in-place. It avoids using extra space for a temporary array."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We perform three reversals, each visiting elements once.",
              }}
              mistakes={[
                {
                  mistake: "Not handling k > n",
                  fix: "Always use k = k % n to handle cases where rotation count is larger than array size.",
                },
              ]}
              tryIt="Can you rotate the array to the left instead of the right?"
            />

            <div className="my-16 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-green-400 mb-2">
                Searching & Sorting
              </h2>
              <p className="text-sm text-gray-400">
                The bread and butter of algorithm interviews.
              </p>
            </div>

            <QuestionCard
              title="Binary Search"
              learn="The 'Divide and Conquer' strategy."
              context="Finding a name in a sorted phone book by opening it in the middle, then narrowing down the half."
              steps={[
                "Set low = 0, high = n-1",
                "While low <= high, find mid = (low + high) / 2",
                "If arr[mid] == target, return mid",
                "If arr[mid] < target, low = mid + 1",
                "Else high = mid - 1",
              ]}
              pythonCode={`def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`}
              cppCode={`int binarySearch(vector<int>& arr, int target) {
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`}
              walkthrough="Binary search is incredibly fast (O(log N)). For an array of 1 million elements, it only takes about 20 steps to find any number!"
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We halve the search space in each step.",
              }}
              mistakes={[
                {
                  mistake: "Using (low + high) / 2",
                  fix: "In some languages, this can cause overflow. Use low + (high - low) / 2 instead.",
                },
              ]}
              tryIt="What happens if the array is not sorted? Can you still use binary search?"
            />

            <QuestionCard
              title="Bubble Sort"
              learn="The simplest (but slowest) sorting algorithm."
              context="Like bubbles rising in a glass of soda - the largest elements 'bubble up' to the end of the array."
              steps={[
                "Compare adjacent elements",
                "Swap them if they are in the wrong order",
                "Repeat for all elements until sorted",
              ]}
              pythonCode={`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped: break
    return arr`}
              cppCode={`void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}`}
              walkthrough="Bubble sort is great for learning but inefficient for large data. The 'swapped' flag is an optimization to stop early if the array is already sorted."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to compare every pair.",
              }}
              mistakes={[
                {
                  mistake: "Not using the 'swapped' optimization",
                  fix: "Without it, the algorithm always runs O(N²) even if the array is already sorted.",
                },
              ]}
              tryIt="Can you implement Selection Sort? How is it different from Bubble Sort?"
            />

            <QuestionCard
              title="Reverse Array"
              learn="In-place swapping with two pointers."
              context="Flipping the order of elements. [1, 2, 3] becomes [3, 2, 1]."
              steps={[
                "Initialize left = 0, right = n-1",
                "While left < right, swap arr[left] and arr[right]",
                "Increment left, decrement right",
              ]}
              pythonCode={`def reverse_array(arr):
    return arr[::-1]

# In-place
def reverse_inplace(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr`}
              cppCode={`void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}`}
              walkthrough="The two-pointer approach is the most efficient way to reverse an array in-place without using extra memory."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We visit each element once and swap in-place.",
              }}
              mistakes={[
                {
                  mistake: "Iterating through the whole array",
                  fix: "If you swap everything, you'll swap them twice and end up with the original array! Stop at the middle.",
                },
              ]}
              tryIt="Can you reverse an array using recursion?"
            />

            <QuestionCard
              title="Max and Min"
              learn="Linear scan to find extremes."
              context="Finding the highest and lowest values in a list."
              steps={[
                "Initialize max and min with the first element",
                "Iterate through the rest of the array",
                "Update max if current > max",
                "Update min if current < min",
              ]}
              pythonCode={`def find_max_min(arr):
    if not arr: return None, None
    max_val = min_val = arr[0]
    for x in arr:
        if x > max_val: max_val = x
        if x < min_val: min_val = x
    return max_val, min_val`}
              cppCode={`pair<int, int> findMaxMin(vector<int>& arr) {
    int max_val = arr[0], min_val = arr[0];
    for (int x : arr) {
        if (x > max_val) max_val = x;
        if (x < min_val) min_val = x;
    }
    return {max_val, min_val};
}`}
              walkthrough="A single pass through the array is enough to find both the maximum and minimum values."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We visit each element once.",
              }}
              mistakes={[
                {
                  mistake: "Initializing max/min with 0",
                  fix: "If all numbers are negative, max will incorrectly stay 0. Always initialize with the first element or infinity.",
                },
              ]}
              tryIt="Can you find the max and min using the minimum number of comparisons? (Hint: Compare in pairs)"
            />

            <QuestionCard
              title="Check Sorted"
              learn="Validating order in a single pass."
              context="Checking if a list is already in ascending order."
              steps={[
                "Iterate from index 1 to n-1",
                "If arr[i] < arr[i-1], return False",
                "If loop finishes, return True",
              ]}
              pythonCode={`def is_sorted(arr):
    for i in range(1, len(arr)):
        if arr[i] < arr[i-1]:
            return False
    return True`}
              cppCode={`bool isSorted(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] < arr[i-1]) return false;
    }
    return true;
}`}
              walkthrough="We only need to check if every element is greater than or equal to the one before it."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We visit each element once.",
              }}
              mistakes={[
                {
                  mistake: "Checking all pairs (O(N²))",
                  fix: "You only need to check adjacent pairs to verify if the whole array is sorted.",
                },
              ]}
              tryIt="How would you check if an array is sorted in descending order?"
            />

            <QuestionCard
              title="Find Duplicates"
              learn="Using sets or frequency maps for existence checks."
              context="Finding all numbers that appear more than once in a list."
              steps={[
                "Create an empty set for seen elements",
                "Create an empty set for duplicates",
                "Iterate through the array",
                "If element in seen, add to duplicates",
                "Else add to seen",
              ]}
              pythonCode={`def find_duplicates(arr):
    seen = set()
    dups = set()
    for x in arr:
        if x in seen:
            dups.add(x)
        else:
            seen.add(x)
    return list(dups)`}
              cppCode={`#include <unordered_set>
vector<int> findDuplicates(vector<int>& arr) {
    unordered_set<int> seen, dups;
    for (int x : arr) {
        if (seen.count(x)) dups.insert(x);
        else seen.insert(x);
    }
    return vector<int>(dups.begin(), dups.end());
}`}
              walkthrough="Using a Hash Set (unordered_set) allows us to check for existence in O(1) time on average."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We store elements in a set.",
              }}
              mistakes={[
                {
                  mistake: "Using nested loops (O(N²))",
                  fix: "Hashing is much faster for large arrays.",
                },
              ]}
              tryIt="Can you find duplicates in O(N) time and O(1) space if the numbers are in the range [0, n-1]?"
            />

            <QuestionCard
              title="Selection Sort"
              learn="Finding the minimum and placing it at the start."
              context="Sorting by repeatedly picking the smallest remaining element."
              steps={[
                "Find the minimum element in the unsorted part",
                "Swap it with the first element of the unsorted part",
                "Repeat for the rest of the array",
              ]}
              pythonCode={`def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`}
              cppCode={`void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) min_idx = j;
        }
        swap(arr[i], arr[min_idx]);
    }
}`}
              walkthrough="Selection sort performs fewer swaps than bubble sort but still has O(N²) time complexity."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to find the minimum.",
              }}
              mistakes={[
                {
                  mistake: "Thinking it's faster than Bubble Sort",
                  fix: "Both are O(N²), but Selection Sort is generally better because it does fewer swaps.",
                },
              ]}
              tryIt="Is Selection Sort stable? (Does it preserve the relative order of equal elements?)"
            />

            <QuestionCard
              title="Insertion Sort"
              learn="Building a sorted array one element at a time."
              context="Like sorting a hand of playing cards. You take one card and insert it into its correct position among the cards you're already holding."
              steps={[
                "Start from the second element",
                "Compare it with elements to its left",
                "Shift elements to the right until you find the correct spot",
                "Insert the element",
              ]}
              pythonCode={`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`}
              cppCode={`void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}`}
              walkthrough="Insertion sort is very efficient for small datasets or arrays that are already mostly sorted."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Nested loops to shift elements.",
              }}
              mistakes={[
                {
                  mistake: "Using it for large datasets",
                  fix: "For large data, use Merge Sort or Quick Sort (O(N log N)).",
                },
              ]}
              tryIt="Can you implement Insertion Sort using recursion?"
            />

            <QuestionCard
              title="Linear Search"
              learn="The most basic searching algorithm."
              context="Checking every element one by one until you find the target."
              steps={[
                "Iterate through the array",
                "If current element == target, return index",
                "If loop finishes, return -1",
              ]}
              pythonCode={`def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`}
              cppCode={`int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`}
              walkthrough="Linear search is the only option if the array is not sorted."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "In the worst case, we check every element.",
              }}
              mistakes={[
                {
                  mistake: "Using linear search on a sorted array",
                  fix: "Use Binary Search (O(log N)) if the array is sorted.",
                },
              ]}
              tryIt="How would you find all occurrences of a target instead of just the first one?"
            />

            <div className="mt-16 p-8 bg-green-600/10 border border-green-500/20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Array Mastery Continued
              </h2>
              <p className="text-gray-400 mb-6">
                You've covered the core array patterns. The remaining questions
                like "Intersection", "Union", and "Pairs with Sum" often use
                Hashing or Two-Pointer techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/part-4"
                  className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Next: Recursion & Linked Lists →
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
