import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function Blind75Blog() {
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
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
            The Complete Guide
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-blue-200 to-gray-500 bg-clip-text text-transparent">
            Blind 75: Master LeetCode
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Conquer the 75 most important LeetCode problems. Master data
            structures, algorithms, and problem-solving patterns that will
            prepare you for any coding interview.
          </p>
        </header>

        <main className="space-y-24">
          {/* Array Section */}
          <section id="array">
            <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-500 mb-4">
                Array Problems
              </h2>
              <p className="text-gray-400">
                Master array manipulation, sliding windows, and two-pointer
                techniques.
              </p>
            </div>

            <QuestionCard
              title="Two Sum"
              learn="Hash maps for O(1) lookups and efficient pair finding."
              context="Find two numbers in an array that add up to a target sum."
              steps={[
                "Create a hash map to store numbers and their indices",
                "Iterate through the array",
                "For each number, check if target - current exists in map",
                "Return indices if found, otherwise add current to map",
              ]}
              pythonCode={`def twoSum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []`}
              cppCode={`vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> num_map;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (num_map.find(complement) != num_map.end()) {
            return {num_map[complement], i};
        }
        num_map[nums[i]] = i;
    }
    return {};
}`}
              walkthrough="Using a hash map allows us to check for complements in constant time. This approach handles duplicates correctly and runs in linear time with linear space."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Single pass through array with hash map storage",
              }}
              mistakes={[
                {
                  mistake: "Using nested loops resulting in O(N²) time",
                  fix: "Use hash map for O(1) complement checks",
                },
                {
                  mistake: "Not handling duplicate values properly",
                  fix: "Store indices in map, not just presence",
                },
              ]}
              tryIt="Three Sum - Find three numbers that sum to target"
            />

            <QuestionCard
              title="Best Time to Buy and Sell Stock"
              learn="Single pass tracking of minimum and maximum profit."
              context="Find the maximum profit from buying and selling a stock once."
              steps={[
                "Initialize minimum price and maximum profit",
                "Iterate through prices",
                "Update minimum price if current is lower",
                "Update maximum profit if current profit is higher",
                "Return maximum profit",
              ]}
              pythonCode={`def maxProfit(prices):
    if not prices:
        return 0
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`}
              cppCode={`int maxProfit(vector<int>& prices) {
    if (prices.empty()) return 0;
    int min_price = INT_MAX;
    int max_profit = 0;
    for (int price : prices) {
        min_price = min(min_price, price);
        max_profit = max(max_profit, price - min_price);
    }
    return max_profit;
}`}
              walkthrough="By tracking the minimum price seen so far and calculating profit at each step, we find the optimal buy and sell points in one pass."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass with constant extra space",
              }}
              mistakes={[
                {
                  mistake: "Trying all pairs of buy/sell dates",
                  fix: "Track minimum price and update profit continuously",
                },
              ]}
              tryIt="Best Time to Buy and Sell Stock II - Multiple transactions allowed"
            />

            <QuestionCard
              title="Contains Duplicate"
              learn="Using hash sets for efficient duplicate detection."
              context="Determine if an array contains any duplicate values."
              steps={[
                "Create a hash set to store seen numbers",
                "Iterate through the array",
                "If number is already in set, return true",
                "Otherwise add to set",
                "Return false if no duplicates found",
              ]}
              pythonCode={`def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`}
              cppCode={`bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.find(num) != seen.end()) {
            return true;
        }
        seen.insert(num);
    }
    return false;
}`}
              walkthrough="Hash sets provide O(1) average time complexity for insertions and lookups, making this approach efficient for large arrays."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Single pass with hash set storage",
              }}
              mistakes={[
                {
                  mistake: "Sorting the array and checking adjacent elements",
                  fix: "Use hash set for O(N) time instead of O(N log N)",
                },
              ]}
              tryIt="Contains Duplicate II - Check for duplicates within k distance"
            />

            <QuestionCard
              title="Product of Array Except Self"
              learn="Prefix and suffix products to avoid division and handle zeros."
              context="Return an array where each element is the product of all elements except itself."
              steps={[
                "Create result array initialized to 1",
                "Compute prefix products from left to right",
                "Compute suffix products from right to left",
                "Multiply prefix and suffix for each position",
                "Handle zeros by tracking zero count",
              ]}
              pythonCode={`def productExceptSelf(nums):
    n = len(nums)
    result = [1] * n
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(n-1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result`}
              cppCode={`vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, 1);
    int prefix = 1;
    for (int i = 0; i < n; ++i) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    int suffix = 1;
    for (int i = n - 1; i >= 0; --i) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}`}
              walkthrough="By computing prefix and suffix products separately, we avoid using division and handle zeros correctly. This approach runs in linear time with constant extra space (excluding output)."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Two passes with output array as extra space",
              }}
              mistakes={[
                {
                  mistake: "Using division by total product",
                  fix: "Use prefix/suffix products to handle zeros",
                },
              ]}
              tryIt="Maximum Product Subarray - Find subarray with maximum product"
            />

            <QuestionCard
              title="Maximum Subarray"
              learn="Kadane's algorithm for maximum subarray sum."
              context="Find the contiguous subarray with the largest sum."
              steps={[
                "Initialize current sum and maximum sum to first element",
                "Iterate through the array from second element",
                "Update current sum: max(current + num, num)",
                "Update maximum sum if current is larger",
                "Return maximum sum",
              ]}
              pythonCode={`def maxSubArray(nums):
    if not nums:
        return 0
    max_current = max_global = nums[0]
    for num in nums[1:]:
        max_current = max(num, max_current + num)
        if max_current > max_global:
            max_global = max_current
    return max_global`}
              cppCode={`int maxSubArray(vector<int>& nums) {
    if (nums.empty()) return 0;
    int max_current = nums[0];
    int max_global = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        max_current = max(nums[i], max_current + nums[i]);
        if (max_current > max_global) {
            max_global = max_current;
        }
    }
    return max_global;
}`}
              walkthrough="Kadane's algorithm keeps track of the maximum sum ending at each position. When the current sum becomes negative, we start a new subarray."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass with constant space",
              }}
              mistakes={[
                {
                  mistake: "Using brute force O(N²) approach",
                  fix: "Use Kadane's algorithm for O(N) time",
                },
              ]}
              tryIt="Maximum Product Subarray - Similar but for product"
            />

            <QuestionCard
              title="Maximum Product Subarray"
              learn="Tracking both maximum and minimum products for negative numbers."
              context="Find the contiguous subarray with the largest product."
              steps={[
                "Initialize max_so_far, min_so_far, and result to first element",
                "Iterate through the array",
                "If current is negative, swap max and min",
                "Update max_so_far and min_so_far",
                "Update result with max_so_far",
                "Return result",
              ]}
              pythonCode={`def maxProduct(nums):
    if not nums:
        return 0
    max_so_far = min_so_far = result = nums[0]
    for num in nums[1:]:
        if num < 0:
            max_so_far, min_so_far = min_so_far, max_so_far
        max_so_far = max(num, max_so_far * num)
        min_so_far = min(num, min_so_far * num)
        result = max(result, max_so_far)
    return result`}
              cppCode={`int maxProduct(vector<int>& nums) {
    if (nums.empty()) return 0;
    int max_so_far = nums[0];
    int min_so_far = nums[0];
    int result = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        if (nums[i] < 0) {
            swap(max_so_far, min_so_far);
        }
        max_so_far = max(nums[i], max_so_far * nums[i]);
        min_so_far = min(nums[i], min_so_far * nums[i]);
        result = max(result, max_so_far);
    }
    return result;
}`}
              walkthrough="Because of negative numbers, we need to track both the maximum and minimum product ending at each position. Negative numbers can turn a minimum into a maximum when multiplied."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass with constant space",
              }}
              mistakes={[
                {
                  mistake: "Not handling negative numbers properly",
                  fix: "Track both max and min products",
                },
              ]}
              tryIt="Maximum Subarray - Sum instead of product"
            />

            <QuestionCard
              title="Find Minimum in Rotated Sorted Array"
              learn="Binary search in rotated arrays."
              context="Find the minimum element in a rotated sorted array."
              steps={[
                "Use binary search with left and right pointers",
                "If array is not rotated, return first element",
                "Check middle element",
                "If mid > right, minimum is in right half",
                "If mid < right, minimum is in left half",
                "Return the minimum found",
              ]}
              pythonCode={`def findMin(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]`}
              cppCode={`int findMin(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}`}
              walkthrough="The rotation point is where the minimum is. We use binary search to find where the array is no longer sorted."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "Binary search with constant space",
              }}
              mistakes={[
                {
                  mistake: "Linear search",
                  fix: "Use binary search for log N time",
                },
              ]}
              tryIt="Search in Rotated Sorted Array - Find specific element"
            />

            <QuestionCard
              title="Search in Rotated Sorted Array"
              learn="Modified binary search for rotated arrays."
              context="Search for a target in a rotated sorted array."
              steps={[
                "Use binary search",
                "Determine which half is sorted",
                "Check if target is in the sorted half",
                "Adjust pointers accordingly",
                "Return index or -1 if not found",
              ]}
              pythonCode={`def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`}
              cppCode={`int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}`}
              walkthrough="We determine which half is sorted and check if the target could be in that half, then search accordingly."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "Modified binary search",
              }}
              mistakes={[
                {
                  mistake: "Not identifying the sorted half",
                  fix: "Check nums[left] <= nums[mid] to determine sorted half",
                },
              ]}
              tryIt="Find Minimum in Rotated Sorted Array - Find minimum instead of search"
            />

            <QuestionCard
              title="3Sum"
              learn="Two pointers with sorting for efficient triplet finding."
              context="Find all unique triplets that sum to zero."
              steps={[
                "Sort the array",
                "For each element, use two pointers on the rest",
                "Skip duplicates to avoid duplicate triplets",
                "Move pointers based on sum comparison",
                "Add valid triplets to result",
              ]}
              pythonCode={`def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]:
                    left += 1
                while left < right and nums[right] == nums[right-1]:
                    right -= 1
                left += 1
                right -= 1
    return result`}
              cppCode={`vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    for (int i = 0; i < nums.size() - 2; ++i) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                result.push_back({nums[i], nums[left], nums[right]});
                while (left < right && nums[left] == nums[left+1]) left++;
                while (left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
}`}
              walkthrough="Sorting allows us to use two pointers efficiently. We fix one element and find pairs that sum to its negative."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Sorting is O(N log N), two pointers is O(N²)",
              }}
              mistakes={[
                {
                  mistake: "Not skipping duplicates",
                  fix: "Skip duplicate elements to avoid duplicate triplets",
                },
              ]}
              tryIt="4Sum - Find four numbers that sum to target"
            />

            <QuestionCard
              title="Container With Most Water"
              learn="Two pointers for maximum area calculation."
              context="Find two lines that form a container with the most water."
              steps={[
                "Use two pointers at start and end",
                "Calculate area as min(height[left], height[right]) * (right - left)",
                "Move the pointer with smaller height inward",
                "Track maximum area",
                "Return maximum area",
              ]}
              pythonCode={`def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    while left < right:
        width = right - left
        h = min(height[left], height[right])
        area = width * h
        max_area = max(max_area, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area`}
              cppCode={`int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int max_area = 0;
    while (left < right) {
        int width = right - left;
        int h = min(height[left], height[right]);
        int area = width * h;
        max_area = max(max_area, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
}`}
              walkthrough="Moving the shorter line inward gives a chance for a taller line, potentially increasing the area."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass with two pointers",
              }}
              mistakes={[
                {
                  mistake: "Brute force all pairs",
                  fix: "Use two pointers to achieve O(N) time",
                },
              ]}
              tryIt="Trapping Rain Water - Calculate trapped water"
            />
          </section>

          {/* Binary Section */}
          <section id="binary">
            <div className="mb-12 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-green-500 mb-4">
                Binary Problems
              </h2>
              <p className="text-gray-400">
                Bit manipulation, bitwise operations, and binary
                representations.
              </p>
            </div>

            <QuestionCard
              title="Sum of Two Integers"
              learn="Bit manipulation for addition without + or -."
              context="Calculate sum of two integers using bitwise operations."
              steps={[
                "Use XOR for sum without carry",
                "Use AND and left shift for carry",
                "Repeat until no carry",
                "Return the result",
              ]}
              pythonCode={`def getSum(a, b):
    while b != 0:
        carry = a & b
        a = a ^ b
        b = carry << 1
    return a`}
              cppCode={`int getSum(int a, int b) {
    while (b != 0) {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}`}
              walkthrough="This simulates binary addition: XOR gives sum bits, AND gives carry bits."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed number of bits",
              }}
              mistakes={[
                {
                  mistake: "Using + operator",
                  fix: "Use bitwise operations",
                },
              ]}
              tryIt="Subtract two numbers using bitwise operations"
            />

            <QuestionCard
              title="Number of 1 Bits"
              learn="Bit manipulation and counting set bits efficiently."
              context="Count the number of 1 bits in the binary representation of a number."
              steps={[
                "Initialize counter to 0",
                "While number is not zero",
                "Check if least significant bit is 1 using n & 1",
                "Add to counter and right shift n by 1",
                "Return counter",
              ]}
              pythonCode={`def hammingWeight(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count`}
              cppCode={`int hammingWeight(uint32_t n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}`}
              walkthrough="By checking each bit individually through right shifts, we count all set bits. This works for both positive and unsigned integers."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed 32-bit operations regardless of input",
              }}
              mistakes={[
                {
                  mistake: "Using string conversion and counting '1's",
                  fix: "Use bitwise operations for efficiency",
                },
              ]}
              tryIt="Counting Bits - Count bits for all numbers up to n"
            />

            <QuestionCard
              title="Counting Bits"
              learn="Dynamic programming for bit counting."
              context="Count the number of 1 bits for all numbers from 0 to n."
              steps={[
                "Initialize dp array of size n+1",
                "For each number i from 1 to n",
                "dp[i] = dp[i >> 1] + (i & 1)",
                "Return the dp array",
              ]}
              pythonCode={`def countBits(n):
    dp = [0] * (n + 1)
    for i in range(1, n + 1):
        dp[i] = dp[i >> 1] + (i & 1)
    return dp`}
              cppCode={`vector<int> countBits(int n) {
    vector<int> dp(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
}`}
              walkthrough="Each number's bit count is the bit count of its half plus the least significant bit."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Linear pass building dp array",
              }}
              mistakes={[
                {
                  mistake: "Counting bits for each number separately",
                  fix: "Use DP to reuse previous calculations",
                },
              ]}
              tryIt="Number of 1 Bits - Count for single number"
            />

            <QuestionCard
              title="Missing Number"
              learn="XOR for finding missing element in sequence."
              context="Find the missing number in array of 0 to n."
              steps={[
                "XOR all numbers from 0 to n",
                "XOR all numbers in the array",
                "XOR the two results to find missing number",
                "Return the missing number",
              ]}
              pythonCode={`def missingNumber(nums):
    n = len(nums)
    xor_all = 0
    for i in range(n + 1):
        xor_all ^= i
    for num in nums:
        xor_all ^= num
    return xor_all`}
              cppCode={`int missingNumber(vector<int>& nums) {
    int n = nums.size();
    int xor_all = 0;
    for (int i = 0; i <= n; ++i) {
        xor_all ^= i;
    }
    for (int num : nums) {
        xor_all ^= num;
    }
    return xor_all;
}`}
              walkthrough="XOR of a number with itself is 0, so all present numbers cancel out, leaving the missing one."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass with XOR",
              }}
              mistakes={[
                {
                  mistake: "Using sum and subtracting",
                  fix: "Use XOR to avoid overflow issues",
                },
              ]}
              tryIt="Find the duplicate number - Similar but with duplicate"
            />

            <QuestionCard
              title="Reverse Bits"
              learn="Bit manipulation for reversing bit order."
              context="Reverse the bits of a 32-bit unsigned integer."
              steps={[
                "Initialize result to 0",
                "For 32 bits",
                "Shift result left by 1",
                "Add least significant bit of n to result",
                "Shift n right by 1",
                "Return result",
              ]}
              pythonCode={`def reverseBits(n):
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result`}
              cppCode={`uint32_t reverseBits(uint32_t n) {
    uint32_t result = 0;
    for (int i = 0; i < 32; ++i) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}`}
              walkthrough="We build the reversed number bit by bit, taking the LSB of n and putting it as MSB of result."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed 32 operations",
              }}
              mistakes={[
                {
                  mistake: "Not handling 32 bits properly",
                  fix: "Loop exactly 32 times",
                },
              ]}
              tryIt="Number of 1 Bits - Count set bits instead of reverse"
            />
          </section>

          {/* Dynamic Programming Section */}
          <section id="dp">
            <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-purple-500 mb-4">
                Dynamic Programming
              </h2>
              <p className="text-gray-400">
                Breaking problems into subproblems and optimal substructure.
              </p>
            </div>

            <QuestionCard
              title="Climbing Stairs"
              learn="Bottom-up DP for counting ways with recurrence relations."
              context="Find the number of ways to climb n stairs, taking 1 or 2 steps at a time."
              steps={[
                "Handle base cases: 0 stairs = 1 way, 1 stair = 1 way",
                "Initialize dp array or variables for previous two steps",
                "For each step from 2 to n, ways = ways(n-1) + ways(n-2)",
                "Return the nth step ways",
              ]}
              pythonCode={`def climbStairs(n):
    if n <= 1:
        return 1
    prev1, prev2 = 1, 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    return prev1`}
              cppCode={`int climbStairs(int n) {
    if (n <= 1) return 1;
    int prev1 = 1, prev2 = 1;
    for (int i = 2; i <= n; ++i) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}`}
              walkthrough="This is the Fibonacci sequence where each step depends on the previous two. Using iterative DP avoids recursion stack overflow."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Linear pass with constant space using two variables",
              }}
              mistakes={[
                {
                  mistake: "Using full recursion without memoization",
                  fix: "Use iterative approach or memoization to avoid exponential time",
                },
              ]}
              tryIt="House Robber - Maximize robbery with adjacent house constraint"
            />

            <QuestionCard
              title="Coin Change"
              learn="DP for minimum coins to make amount."
              context="Find the minimum number of coins needed to make a given amount."
              steps={[
                "Initialize dp array with infinity, dp[0] = 0",
                "For each coin, for each amount from coin to target",
                "dp[amount] = min(dp[amount], dp[amount - coin] + 1)",
                "Return dp[target] if not infinity, else -1",
              ]}
              pythonCode={`def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`}
              cppCode={`int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
    for (int coin : coins) {
        for (int i = coin; i <= amount; ++i) {
            if (dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}`}
              walkthrough="We build up the minimum coins for each amount using previously computed values."
              complexity={{
                time: "O(amount * coins)",
                space: "O(amount)",
                why: "Nested loops over coins and amounts",
              }}
              mistakes={[
                {
                  mistake: "Greedy approach without checking all possibilities",
                  fix: "Use DP to consider all combinations",
                },
              ]}
              tryIt="Coin Change 2 - Number of ways to make amount"
            />

            <QuestionCard
              title="Longest Increasing Subsequence"
              learn="DP for longest increasing subsequence."
              context="Find the length of the longest increasing subsequence."
              steps={[
                "Initialize dp array with 1s",
                "For each element, check all previous elements",
                "If nums[i] > nums[j], dp[i] = max(dp[i], dp[j] + 1)",
                "Return the maximum in dp",
              ]}
              pythonCode={`def lengthOfLIS(nums):
    if not nums:
        return 0
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)`}
              cppCode={`int lengthOfLIS(vector<int>& nums) {
    if (nums.empty()) return 0;
    vector<int> dp(nums.size(), 1);
    for (size_t i = 1; i < nums.size(); ++i) {
        for (size_t j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    return *max_element(dp.begin(), dp.end());
}`}
              walkthrough="For each element, we look at all previous elements and extend the longest subsequence ending before it."
              complexity={{
                time: "O(N²)",
                space: "O(N)",
                why: "Nested loops for each pair",
              }}
              mistakes={[
                {
                  mistake: "Not considering all previous elements",
                  fix: "Check every previous element for extension",
                },
              ]}
              tryIt="Longest Common Subsequence - Between two strings"
            />

            <QuestionCard
              title="Longest Common Subsequence"
              learn="2D DP for string comparison."
              context="Find the length of the longest common subsequence between two strings."
              steps={[
                "Create 2D dp table of size (m+1) x (n+1)",
                "If characters match, dp[i][j] = dp[i-1][j-1] + 1",
                "Else, dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
                "Return dp[m][n]",
              ]}
              pythonCode={`def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`}
              cppCode={`int longestCommonSubsequence(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}`}
              walkthrough="The DP table represents the LCS length for substrings. We build it bottom-up."
              complexity={{
                time: "O(M*N)",
                space: "O(M*N)",
                why: "2D table for both strings",
              }}
              mistakes={[
                {
                  mistake: "Not using DP, trying recursive approach",
                  fix: "Use 2D DP for efficiency",
                },
              ]}
              tryIt="Edit Distance - Minimum operations to transform one string to another"
            />

            <QuestionCard
              title="Word Break"
              learn="DP for string segmentation."
              context="Determine if a string can be segmented into words from a dictionary."
              steps={[
                "Initialize dp array of size len(s) + 1, dp[0] = True",
                "For each position i, if dp[i] is True",
                "Check substrings from i to j",
                "If substring in wordDict, set dp[j] = True",
                "Return dp[len(s)]",
              ]}
              pythonCode={`def wordBreak(s, wordDict):
    wordSet = set(wordDict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    for i in range(len(s) + 1):
        if dp[i]:
            for j in range(i + 1, len(s) + 1):
                if s[i:j] in wordSet:
                    dp[j] = True
    return dp[len(s)]`}
              cppCode={`bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.size() + 1, false);
    dp[0] = true;
    for (int i = 0; i <= s.size(); ++i) {
        if (dp[i]) {
            for (int j = i + 1; j <= s.size(); ++j) {
                if (wordSet.count(s.substr(i, j - i))) {
                    dp[j] = true;
                }
            }
        }
    }
    return dp[s.size()];
}`}
              walkthrough="We use DP to mark positions where we can reach with dictionary words."
              complexity={{
                time: "O(N²)",
                space: "O(N)",
                why: "Nested loops over string positions",
              }}
              mistakes={[
                {
                  mistake: "Not using DP, trying all combinations",
                  fix: "Use DP to avoid redundant checks",
                },
              ]}
              tryIt="Word Break II - Return all possible sentences"
            />

            <QuestionCard
              title="Combination Sum"
              learn="Backtracking for combination problems."
              context="Find all unique combinations that sum to target."
              steps={[
                "Sort the candidates",
                "Use backtracking function",
                "For each candidate, add to current combination",
                "Recurse with remaining target",
                "Backtrack by removing the candidate",
                "Skip duplicates",
              ]}
              pythonCode={`def combinationSum(candidates, target):
    def backtrack(start, target, path):
        if target == 0:
            result.append(path[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > target:
                break
            path.append(candidates[i])
            backtrack(i, target - candidates[i], path)
            path.pop()
    candidates.sort()
    result = []
    backtrack(0, target, [])
    return result`}
              cppCode={`vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    sort(candidates.begin(), candidates.end());
    vector<vector<int>> result;
    vector<int> path;
    function<void(int, int)> backtrack = [&](int start, int target) {
        if (target == 0) {
            result.push_back(path);
            return;
        }
        for (int i = start; i < candidates.size(); ++i) {
            if (candidates[i] > target) break;
            path.push_back(candidates[i]);
            backtrack(i, target - candidates[i]);
            path.pop_back();
        }
    };
    backtrack(0, target);
    return result;
}`}
              walkthrough="Backtracking explores all possible combinations, pruning when sum exceeds target."
              complexity={{
                time: "O(2^N)",
                space: "O(N)",
                why: "Exponential in worst case, but pruning helps",
              }}
              mistakes={[
                {
                  mistake: "Not sorting and skipping duplicates",
                  fix: "Sort candidates and start from current index",
                },
              ]}
              tryIt="Combination Sum II - Each number used at most once"
            />

            <QuestionCard
              title="House Robber"
              learn="DP for maximum sum with constraints."
              context="Maximize the amount of money robbed with no adjacent houses."
              steps={[
                "Initialize dp[0] = nums[0], dp[1] = max(nums[0], nums[1])",
                "For i from 2 to n-1, dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
                "Return dp[n-1]",
              ]}
              pythonCode={`def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    for i in range(2, len(nums)):
        dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    return dp[-1]`}
              cppCode={`int rob(vector<int>& nums) {
    if (nums.empty()) return 0;
    if (nums.size() == 1) return nums[0];
    vector<int> dp(nums.size());
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    for (size_t i = 2; i < nums.size(); ++i) {
        dp[i] = max(dp[i-1], dp[i-2] + nums[i]);
    }
    return dp.back();
}`}
              walkthrough="We choose for each house whether to rob it or not, based on previous decisions."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Linear pass with dp array",
              }}
              mistakes={[
                {
                  mistake: "Not considering the constraint",
                  fix: "Use DP to track maximum at each step",
                },
              ]}
              tryIt="House Robber II - Circular houses"
            />

            <QuestionCard
              title="House Robber II"
              learn="DP with circular constraint."
              context="Maximize robbery in a circle of houses."
              steps={[
                "Handle edge cases",
                "Compute max for houses 0 to n-2",
                "Compute max for houses 1 to n-1",
                "Return the maximum of the two",
              ]}
              pythonCode={`def rob(nums):
    def rob_linear(nums):
        if not nums:
            return 0
        prev1, prev2 = 0, 0
        for num in nums:
            current = max(prev1, prev2 + num)
            prev2 = prev1
            prev1 = current
        return prev1
    if len(nums) == 1:
        return nums[0]
    return max(rob_linear(nums[:-1]), rob_linear(nums[1:]))`}
              cppCode={`int rob(vector<int>& nums) {
    if (nums.empty()) return 0;
    if (nums.size() == 1) return nums[0];
    auto rob_linear = [](const vector<int>& nums) {
        int prev1 = 0, prev2 = 0;
        for (int num : nums) {
            int current = max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    };
    return max(rob_linear(vector<int>(nums.begin(), nums.end() - 1)),
               rob_linear(vector<int>(nums.begin() + 1, nums.end())));
}`}
              walkthrough="Since it's circular, we can't rob both first and last. So we compute max excluding first and excluding last."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Two linear passes",
              }}
              mistakes={[
                {
                  mistake: "Not handling the circular constraint",
                  fix: "Compute max for two separate ranges",
                },
              ]}
              tryIt="House Robber - Linear houses"
            />

            <QuestionCard
              title="Decode Ways"
              learn="DP for counting ways to decode string."
              context="Number of ways to decode a string of digits."
              steps={[
                "Initialize dp[0] = 1, dp[1] = 1 if s[0] != '0'",
                "For i from 2 to len(s)",
                "If s[i-1] != '0', dp[i] += dp[i-1]",
                "If s[i-2:i] is valid two-digit, dp[i] += dp[i-2]",
                "Return dp[len(s)]",
              ]}
              pythonCode={`def numDecodings(s):
    if not s or s[0] == '0':
        return 0
    dp = [0] * (len(s) + 1)
    dp[0] = 1
    dp[1] = 1
    for i in range(2, len(s) + 1):
        if s[i-1] != '0':
            dp[i] += dp[i-1]
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            dp[i] += dp[i-2]
    return dp[len(s)]`}
              cppCode={`int numDecodings(string s) {
    if (s.empty() || s[0] == '0') return 0;
    vector<int> dp(s.size() + 1, 0);
    dp[0] = 1;
    dp[1] = 1;
    for (int i = 2; i <= s.size(); ++i) {
        if (s[i-1] != '0') {
            dp[i] += dp[i-1];
        }
        int two_digit = stoi(s.substr(i-2, 2));
        if (10 <= two_digit && two_digit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    return dp[s.size()];
}`}
              walkthrough="Each position can be reached from previous one or two positions if valid."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Linear pass with dp array",
              }}
              mistakes={[
                {
                  mistake: "Not checking for leading zeros",
                  fix: "Handle '0' cases carefully",
                },
              ]}
              tryIt="Decode Ways II - With '*' wildcards"
            />

            <QuestionCard
              title="Unique Paths"
              learn="2D DP for grid path counting."
              context="Number of unique paths from top-left to bottom-right in grid."
              steps={[
                "Initialize dp grid with 1s for first row and column",
                "For each cell, dp[i][j] = dp[i-1][j] + dp[i][j-1]",
                "Return dp[m-1][n-1]",
              ]}
              pythonCode={`def uniquePaths(m, n):
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]`}
              cppCode={`int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}`}
              walkthrough="Each cell's paths come from top and left cells."
              complexity={{
                time: "O(M*N)",
                space: "O(M*N)",
                why: "Fill the grid",
              }}
              mistakes={[
                {
                  mistake: "Using recursion without memoization",
                  fix: "Use DP to avoid recomputation",
                },
              ]}
              tryIt="Unique Paths II - With obstacles"
            />

            <QuestionCard
              title="Jump Game"
              learn="Greedy for jump reachability."
              context="Determine if you can reach the last index."
              steps={[
                "Initialize farthest = 0",
                "For each index i up to farthest",
                "Update farthest = max(farthest, i + nums[i])",
                "If farthest >= len-1, return true",
                "Return false",
              ]}
              pythonCode={`def canJump(nums):
    farthest = 0
    for i in range(len(nums)):
        if i > farthest:
            return False
        farthest = max(farthest, i + nums[i])
        if farthest >= len(nums) - 1:
            return True
    return True`}
              cppCode={`bool canJump(vector<int>& nums) {
    int farthest = 0;
    for (int i = 0; i < nums.size(); ++i) {
        if (i > farthest) return false;
        farthest = max(farthest, i + nums[i]);
        if (farthest >= nums.size() - 1) return true;
    }
    return true;
}`}
              walkthrough="We keep track of the farthest we can reach so far."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass",
              }}
              mistakes={[
                {
                  mistake: "Using DP for each position",
                  fix: "Use greedy to track maximum reach",
                },
              ]}
              tryIt="Jump Game II - Minimum jumps to reach end"
            />
          </section>

          {/* Graph Section */}
          <section id="graph">
            <div className="mb-12 p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Graph Problems
              </h2>
              <p className="text-gray-400">
                Graph traversal, cycles, and connectivity.
              </p>
            </div>

            <QuestionCard
              title="Clone Graph"
              learn="DFS or BFS for graph cloning."
              context="Create a deep copy of a connected undirected graph."
              steps={[
                "Use DFS or BFS",
                "Maintain a map from original to cloned nodes",
                "For each neighbor, clone if not already cloned",
                "Return the cloned start node",
              ]}
              pythonCode={`def cloneGraph(node):
    if not node:
        return None
    cloned = {}
    def dfs(node):
        if node in cloned:
            return cloned[node]
        clone = Node(node.val)
        cloned[node] = clone
        for neighbor in node.neighbors:
            clone.neighbors.append(dfs(neighbor))
        return clone
    return dfs(node)`}
              cppCode={`Node* cloneGraph(Node* node) {
    if (!node) return nullptr;
    unordered_map<Node*, Node*> cloned;
    function<Node*(Node*)> dfs = [&](Node* node) -> Node* {
        if (cloned.count(node)) return cloned[node];
        Node* clone = new Node(node->val);
        cloned[node] = clone;
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(dfs(neighbor));
        }
        return clone;
    };
    return dfs(node);
}`}
              walkthrough="We use a map to keep track of cloned nodes to avoid infinite recursion."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Visit each node and edge once",
              }}
              mistakes={[
                {
                  mistake: "Not using a map, causing infinite loops",
                  fix: "Use map to track cloned nodes",
                },
              ]}
              tryIt="Copy List with Random Pointer - Similar with random pointers"
            />

            <QuestionCard
              title="Course Schedule"
              learn="Topological sort with DFS or Kahn's algorithm."
              context="Determine if you can finish all courses given prerequisites."
              steps={[
                "Build adjacency list and indegree array",
                "Use queue for Kahn's algorithm",
                "Add nodes with indegree 0 to queue",
                "Process queue, reduce indegrees",
                "If all nodes processed, no cycle",
              ]}
              pythonCode={`def canFinish(numCourses, prerequisites):
    from collections import deque
    adj = [[] for _ in range(numCourses)]
    indegree = [0] * numCourses
    for course, prereq in prerequisites:
        adj[prereq].append(course)
        indegree[course] += 1
    queue = deque([i for i in range(numCourses) if indegree[i] == 0])
    count = 0
    while queue:
        course = queue.popleft()
        count += 1
        for neighbor in adj[course]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return count == numCourses`}
              cppCode={`bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> adj(numCourses);
    vector<int> indegree(numCourses, 0);
    for (auto& prereq : prerequisites) {
        adj[prereq[1]].push_back(prereq[0]);
        indegree[prereq[0]]++;
    }
    queue<int> q;
    for (int i = 0; i < numCourses; ++i) {
        if (indegree[i] == 0) q.push(i);
    }
    int count = 0;
    while (!q.empty()) {
        int course = q.front(); q.pop();
        count++;
        for (int neighbor : adj[course]) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) q.push(neighbor);
        }
    }
    return count == numCourses;
}`}
              walkthrough="If there's a cycle, not all courses can be finished. Topological sort detects this."
              complexity={{
                time: "O(V+E)",
                space: "O(V+E)",
                why: "Adjacency list and queue",
              }}
              mistakes={[
                {
                  mistake: "Not detecting cycles",
                  fix: "Use topological sort",
                },
              ]}
              tryIt="Course Schedule II - Return the order"
            />

            <QuestionCard
              title="Pacific Atlantic Water Flow"
              learn="Multi-source BFS or DFS for flow problems."
              context="Find cells that can flow to both oceans."
              steps={[
                "Use DFS or BFS from Pacific and Atlantic borders",
                "Mark cells reachable to each ocean",
                "Find intersection of both sets",
              ]}
              pythonCode={`def pacificAtlantic(matrix):
    if not matrix or not matrix[0]:
        return []
    m, n = len(matrix), len(matrix[0])
    pacific = set()
    atlantic = set()
    def dfs(i, j, visited, prev_height):
        if (i, j) in visited or i < 0 or i >= m or j < 0 or j >= n or matrix[i][j] < prev_height:
            return
        visited.add((i, j))
        dfs(i+1, j, visited, matrix[i][j])
        dfs(i-1, j, visited, matrix[i][j])
        dfs(i, j+1, visited, matrix[i][j])
        dfs(i, j-1, visited, matrix[i][j])
    for i in range(m):
        dfs(i, 0, pacific, matrix[i][0])
        dfs(i, n-1, atlantic, matrix[i][n-1])
    for j in range(n):
        dfs(0, j, pacific, matrix[0][j])
        dfs(m-1, j, atlantic, matrix[m-1][j])
    return list(pacific & atlantic)`}
              cppCode={`vector<vector<int>> pacificAtlantic(vector<vector<int>>& matrix) {
    if (matrix.empty() || matrix[0].empty()) return {};
    int m = matrix.size(), n = matrix[0].size();
    set<pair<int, int>> pacific, atlantic;
    function<void(int, int, set<pair<int, int>>&, int)> dfs = [&](int i, int j, auto& visited, int prev) {
        if (visited.count({i, j}) || i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] < prev) return;
        visited.insert({i, j});
        dfs(i+1, j, visited, matrix[i][j]);
        dfs(i-1, j, visited, matrix[i][j]);
        dfs(i, j+1, visited, matrix[i][j]);
        dfs(i, j-1, visited, matrix[i][j]);
    };
    for (int i = 0; i < m; ++i) {
        dfs(i, 0, pacific, matrix[i][0]);
        dfs(i, n-1, atlantic, matrix[i][n-1]);
    }
    for (int j = 0; j < n; ++j) {
        dfs(0, j, pacific, matrix[0][j]);
        dfs(m-1, j, atlantic, matrix[m-1][j]);
    }
    vector<vector<int>> result;
    for (auto& p : pacific) {
        if (atlantic.count(p)) result.push_back({p.first, p.second});
    }
    return result;
}`}
              walkthrough="We start from the borders and flow to higher or equal heights."
              complexity={{
                time: "O(M*N)",
                space: "O(M*N)",
                why: "Visit each cell multiple times",
              }}
              mistakes={[
                {
                  mistake: "Not starting from borders",
                  fix: "Multi-source from ocean borders",
                },
              ]}
              tryIt="Surrounded Regions - Mark regions not surrounded"
            />

            <QuestionCard
              title="Number of Islands"
              learn="DFS or BFS for connected components."
              context="Count the number of islands in a grid."
              steps={[
                "Iterate through grid",
                "When find '1', increment count and DFS/BFS to mark visited",
                "Mark all connected '1's as visited",
                "Return count",
              ]}
              pythonCode={`def numIslands(grid):
    if not grid or not grid[0]:
        return 0
    m, n = len(grid), len(grid[0])
    count = 0
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
    return count`}
              cppCode={`int numIslands(vector<vector<char>>& grid) {
    if (grid.empty() || grid[0].empty()) return 0;
    int m = grid.size(), n = grid[0].size();
    int count = 0;
    function<void(int, int)> dfs = [&](int i, int j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i, j-1);
    };
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] == '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
}`}
              walkthrough="Each DFS/BFS marks one island and all its connected land."
              complexity={{
                time: "O(M*N)",
                space: "O(M*N)",
                why: "Visit each cell once",
              }}
              mistakes={[
                {
                  mistake: "Not marking visited",
                  fix: "Mark cells as visited during traversal",
                },
              ]}
              tryIt="Max Area of Island - Find largest island area"
            />

            <QuestionCard
              title="Longest Consecutive Sequence"
              learn="Hash set for efficient lookups."
              context="Find the longest consecutive sequence in array."
              steps={[
                "Put all numbers in a hash set",
                "For each number, if it's the start of a sequence",
                "Count consecutive numbers",
                "Update max length",
              ]}
              pythonCode={`def longestConsecutive(nums):
    num_set = set(nums)
    max_length = 0
    for num in nums:
        if num - 1 not in num_set:
            current = num
            length = 1
            while current + 1 in num_set:
                current += 1
                length += 1
            max_length = max(max_length, length)
    return max_length`}
              cppCode={`int longestConsecutive(vector<int>& nums) {
    unordered_set<int> num_set(nums.begin(), nums.end());
    int max_length = 0;
    for (int num : nums) {
        if (num_set.find(num - 1) == num_set.end()) {
            int current = num;
            int length = 1;
            while (num_set.find(current + 1) != num_set.end()) {
                current++;
                length++;
            }
            max_length = max(max_length, length);
        }
    }
    return max_length;
}`}
              walkthrough="We only start counting from numbers that are the beginning of sequences."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Hash set operations",
              }}
              mistakes={[
                {
                  mistake: "Sorting the array",
                  fix: "Use hash set for O(1) lookups",
                },
              ]}
              tryIt="Consecutive Numbers Sum - Number of ways to write as sum of consecutives"
            />

            <QuestionCard
              title="Alien Dictionary"
              learn="Topological sort for ordering."
              context="Derive the order of letters from alien dictionary."
              steps={[
                "Build graph from adjacent words",
                "Use topological sort",
                "Return the order or detect cycle",
              ]}
              pythonCode={`def alienOrder(words):
    from collections import defaultdict, deque
    adj = defaultdict(list)
    indegree = {c: 0 for word in words for c in word}
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i+1]
        for j in range(min(len(w1), len(w2))):
            if w1[j] != w2[j]:
                if w2[j] not in adj[w1[j]]:
                    adj[w1[j]].append(w2[j])
                    indegree[w2[j]] += 1
                break
        else:
            if len(w1) > len(w2):
                return ""
    queue = deque([c for c in indegree if indegree[c] == 0])
    result = []
    while queue:
        c = queue.popleft()
        result.append(c)
        for neighbor in adj[c]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return "".join(result) if len(result) == len(indegree) else ""`}
              cppCode={`string alienOrder(vector<string>& words) {
    unordered_map<char, vector<char>> adj;
    unordered_map<char, int> indegree;
    for (auto& word : words) {
        for (char c : word) indegree[c] = 0;
    }
    for (int i = 0; i < words.size() - 1; ++i) {
        string w1 = words[i], w2 = words[i+1];
        int len = min(w1.size(), w2.size());
        bool found = false;
        for (int j = 0; j < len; ++j) {
            if (w1[j] != w2[j]) {
                if (find(adj[w1[j]].begin(), adj[w1[j]].end(), w2[j]) == adj[w1[j]].end()) {
                    adj[w1[j]].push_back(w2[j]);
                    indegree[w2[j]]++;
                }
                found = true;
                break;
            }
        }
        if (!found && w1.size() > w2.size()) return "";
    }
    queue<char> q;
    for (auto& p : indegree) {
        if (p.second == 0) q.push(p.first);
    }
    string result;
    while (!q.empty()) {
        char c = q.front(); q.pop();
        result += c;
        for (char neighbor : adj[c]) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) q.push(neighbor);
        }
    }
    return result.size() == indegree.size() ? result : "";
}`}
              walkthrough="We build edges between letters that appear in order in adjacent words."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Limited alphabet size",
              }}
              mistakes={[
                {
                  mistake: "Not handling invalid cases",
                  fix: "Check for cycles and invalid orders",
                },
              ]}
              tryIt="Course Schedule - Similar topological sort"
            />
          </section>

          {/* Interval Section */}
          <section id="interval">
            <div className="mb-12 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Interval Problems
              </h2>
              <p className="text-gray-400">Sorting and merging intervals.</p>
            </div>

            <QuestionCard
              title="Insert Interval"
              learn="Insert and merge intervals."
              context="Insert a new interval into sorted intervals and merge overlapping."
              steps={[
                "Find position to insert",
                "Insert the interval",
                "Merge overlapping intervals",
              ]}
              pythonCode={`def insert(intervals, newInterval):
    result = []
    i = 0
    while i < len(intervals) and intervals[i][1] < newInterval[0]:
        result.append(intervals[i])
        i += 1
    while i < len(intervals) and intervals[i][0] <= newInterval[1]:
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i += 1
    result.append(newInterval)
    while i < len(intervals):
        result.append(intervals[i])
        i += 1
    return result`}
              cppCode={`vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
    vector<vector<int>> result;
    int i = 0;
    while (i < intervals.size() && intervals[i][1] < newInterval[0]) {
        result.push_back(intervals[i]);
        i++;
    }
    while (i < intervals.size() && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = min(newInterval[0], intervals[i][0]);
        newInterval[1] = max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push_back(newInterval);
    while (i < intervals.size()) {
        result.push_back(intervals[i]);
        i++;
    }
    return result;
}`}
              walkthrough="We insert the new interval and merge with overlapping ones."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Single pass through intervals",
              }}
              mistakes={[
                {
                  mistake: "Not merging properly",
                  fix: "Update the new interval bounds",
                },
              ]}
              tryIt="Merge Intervals - Merge all overlapping"
            />

            <QuestionCard
              title="Merge Intervals"
              learn="Sort and merge overlapping intervals."
              context="Merge all overlapping intervals."
              steps={[
                "Sort intervals by start time",
                "Initialize result with first interval",
                "For each interval, if overlaps with last in result, merge",
                "Else append to result",
              ]}
              pythonCode={`def merge(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    result = [intervals[0]]
    for interval in intervals[1:]:
        if interval[0] <= result[-1][1]:
            result[-1][1] = max(result[-1][1], interval[1])
        else:
            result.append(interval)
    return result`}
              cppCode={`vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if (intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> result = {intervals[0]};
    for (int i = 1; i < intervals.size(); ++i) {
        if (intervals[i][0] <= result.back()[1]) {
            result.back()[1] = max(result.back()[1], intervals[i][1]);
        } else {
            result.push_back(intervals[i]);
        }
    }
    return result;
}`}
              walkthrough="Sorting allows us to merge adjacent overlapping intervals."
              complexity={{
                time: "O(N log N)",
                space: "O(N)",
                why: "Sorting dominates",
              }}
              mistakes={[
                {
                  mistake: "Not sorting first",
                  fix: "Sort by start time",
                },
              ]}
              tryIt="Insert Interval - Insert one interval"
            />

            <QuestionCard
              title="Non-overlapping Intervals"
              learn="Greedy for minimum removals."
              context="Find minimum number of intervals to remove to make non-overlapping."
              steps={[
                "Sort by end time",
                "Initialize count and end",
                "For each interval, if overlaps, increment count",
                "Else update end",
              ]}
              pythonCode={`def eraseOverlapIntervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[1])
    count = 0
    end = intervals[0][1]
    for interval in intervals[1:]:
        if interval[0] < end:
            count += 1
        else:
            end = interval[1]
    return count`}
              cppCode={`int eraseOverlapIntervals(vector<vector<int>>& intervals) {
    if (intervals.empty()) return 0;
    sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
        return a[1] < b[1];
    });
    int count = 0;
    int end = intervals[0][1];
    for (int i = 1; i < intervals.size(); ++i) {
        if (intervals[i][0] < end) {
            count++;
        } else {
            end = intervals[i][1];
        }
    }
    return count;
}`}
              walkthrough="By sorting by end time, we greedily keep intervals that end earliest."
              complexity={{
                time: "O(N log N)",
                space: "O(1)",
                why: "Sorting",
              }}
              mistakes={[
                {
                  mistake: "Sorting by start time",
                  fix: "Sort by end time for greedy choice",
                },
              ]}
              tryIt="Meeting Rooms - Check if can attend all meetings"
            />

            <QuestionCard
              title="Meeting Rooms II"
              learn="Priority queue for minimum rooms."
              context="Find minimum number of meeting rooms required."
              steps={[
                "Sort meetings by start time",
                "Use min-heap for end times",
                "For each meeting, if heap top <= start, pop",
                "Push current end, update max rooms",
              ]}
              pythonCode={`def minMeetingRooms(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])
    import heapq
    heap = []
    max_rooms = 0
    for interval in intervals:
        while heap and heap[0] <= interval[0]:
            heapq.heappop(heap)
        heapq.heappush(heap, interval[1])
        max_rooms = max(max_rooms, len(heap))
    return max_rooms`}
              cppCode={`int minMeetingRooms(vector<vector<int>>& intervals) {
    if (intervals.empty()) return 0;
    sort(intervals.begin(), intervals.end());
    priority_queue<int, vector<int>, greater<int>> pq;
    int max_rooms = 0;
    for (auto& interval : intervals) {
        while (!pq.empty() && pq.top() <= interval[0]) {
            pq.pop();
        }
        pq.push(interval[1]);
        max_rooms = max(max_rooms, (int)pq.size());
    }
    return max_rooms;
}`}
              walkthrough="The heap keeps track of the earliest ending meeting in each room."
              complexity={{
                time: "O(N log N)",
                space: "O(N)",
                why: "Sorting and heap operations",
              }}
              mistakes={[
                {
                  mistake: "Not using heap",
                  fix: "Use min-heap for end times",
                },
              ]}
              tryIt="Meeting Rooms - Check if one room suffices"
            />
          </section>

          {/* Linked List Section */}
          <section id="linkedlist">
            <div className="mb-12 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-cyan-500 mb-4">
                Linked List Problems
              </h2>
              <p className="text-gray-400">
                Pointer manipulation and traversal.
              </p>
            </div>

            <QuestionCard
              title="Reverse a Linked List"
              learn="Iterative and recursive reversal."
              context="Reverse a singly linked list."
              steps={[
                "Initialize prev = None, current = head",
                "While current, next = current.next",
                "current.next = prev",
                "prev = current, current = next",
                "Return prev",
              ]}
              pythonCode={`def reverseList(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev`}
              cppCode={`ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* current = head;
    while (current) {
        ListNode* next_node = current->next;
        current->next = prev;
        prev = current;
        current = next_node;
    }
    return prev;
}`}
              walkthrough="We reverse the links one by one, keeping track of previous node."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass",
              }}
              mistakes={[
                {
                  mistake: "Losing the next pointer",
                  fix: "Store next before changing links",
                },
              ]}
              tryIt="Reverse Linked List II - Reverse portion of list"
            />

            <QuestionCard
              title="Detect Cycle in a Linked List"
              learn="Floyd's cycle detection algorithm."
              context="Determine if linked list has a cycle."
              steps={[
                "Use slow and fast pointers",
                "Slow moves one step, fast two steps",
                "If they meet, cycle exists",
                "Return true if meet, false if fast reaches end",
              ]}
              pythonCode={`def hasCycle(head):
    if not head or not head.next:
        return False
    slow = head
    fast = head.next
    while fast and fast.next:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next
    return False`}
              cppCode={`bool hasCycle(ListNode* head) {
    if (!head || !head->next) return false;
    ListNode* slow = head;
    ListNode* fast = head->next;
    while (fast && fast->next) {
        if (slow == fast) return true;
        slow = slow->next;
        fast = fast->next->next;
    }
    return false;
}`}
              walkthrough="If there's a cycle, fast will eventually catch up to slow."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Linear traversal",
              }}
              mistakes={[
                {
                  mistake: "Using hash set",
                  fix: "Use two pointers for O(1) space",
                },
              ]}
              tryIt="Linked List Cycle II - Find cycle start"
            />

            <QuestionCard
              title="Merge Two Sorted Lists"
              learn="Merging two sorted lists."
              context="Merge two sorted linked lists."
              steps={[
                "Use dummy node",
                "Compare heads, append smaller",
                "Move pointers",
                "Append remaining list",
              ]}
              pythonCode={`def mergeTwoLists(list1, list2):
    dummy = ListNode()
    current = dummy
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    current.next = list1 if list1 else list2
    return dummy.next`}
              cppCode={`ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode* dummy = new ListNode();
    ListNode* current = dummy;
    while (list1 && list2) {
        if (list1->val < list2->val) {
            current->next = list1;
            list1 = list1->next;
        } else {
            current->next = list2;
            list2 = list2->next;
        }
        current = current->next;
    }
    current->next = list1 ? list1 : list2;
    return dummy->next;
}`}
              walkthrough="We build the merged list by always taking the smaller head."
              complexity={{
                time: "O(N + M)",
                space: "O(1)",
                why: "Single pass through both lists",
              }}
              mistakes={[
                {
                  mistake: "Not handling remaining nodes",
                  fix: "Append the remaining list at the end",
                },
              ]}
              tryIt="Merge K Sorted Lists - Merge multiple lists"
            />

            <QuestionCard
              title="Merge K Sorted Lists"
              learn="Priority queue for merging k lists."
              context="Merge k sorted linked lists."
              steps={[
                "Use min-heap with first node of each list",
                "While heap not empty, pop smallest",
                "Add its next to heap",
                "Append to result",
              ]}
              pythonCode={`def mergeKLists(lists):
    import heapq
    heap = []
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    dummy = ListNode()
    current = dummy
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next`}
              cppCode={`ListNode* mergeKLists(vector<ListNode*>& lists) {
    auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };
    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
    for (ListNode* list : lists) {
        if (list) pq.push(list);
    }
    ListNode* dummy = new ListNode();
    ListNode* current = dummy;
    while (!pq.empty()) {
        ListNode* node = pq.top(); pq.pop();
        current->next = node;
        current = current->next;
        if (node->next) pq.push(node->next);
    }
    return dummy->next;
}`}
              walkthrough="The heap always gives us the smallest current node."
              complexity={{
                time: "O(N log K)",
                space: "O(K)",
                why: "Heap of size K",
              }}
              mistakes={[
                {
                  mistake: "Merging pairwise",
                  fix: "Use heap for efficient merging",
                },
              ]}
              tryIt="Merge Two Sorted Lists - For two lists"
            />

            <QuestionCard
              title="Remove Nth Node From End Of List"
              learn="Two pointers for nth from end."
              context="Remove the nth node from the end of linked list."
              steps={[
                "Use dummy node",
                "Two pointers, fast moves n+1 steps ahead",
                "Then move both until fast reaches end",
                "Remove the node at slow.next",
              ]}
              pythonCode={`def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    fast = dummy
    for _ in range(n + 1):
        fast = fast.next
    slow = dummy
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next`}
              cppCode={`ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode* dummy = new ListNode(0, head);
    ListNode* fast = dummy;
    for (int i = 0; i < n + 1; ++i) {
        fast = fast->next;
    }
    ListNode* slow = dummy;
    while (fast) {
        fast = fast->next;
        slow = slow->next;
    }
    slow->next = slow->next->next;
    return dummy->next;
}`}
              walkthrough="The fast pointer creates the gap of n nodes between slow and fast."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Single pass",
              }}
              mistakes={[
                {
                  mistake: "Counting from beginning",
                  fix: "Use two pointers",
                },
              ]}
              tryIt="Remove Duplicates from Sorted List - Remove duplicates"
            />

            <QuestionCard
              title="Reorder List"
              learn="Finding middle and reversing second half."
              context="Reorder list to L0->Ln->L1->Ln-1->..."
              steps={[
                "Find middle with slow/fast",
                "Reverse second half",
                "Merge the two halves alternately",
              ]}
              pythonCode={`def reorderList(head):
    if not head or not head.next:
        return
    # Find middle
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    prev = None
    current = slow
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    # Merge
    first = head
    second = prev
    while second.next:
        temp1 = first.next
        temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2`}
              cppCode={`void reorderList(ListNode* head) {
    if (!head || !head->next) return;
    // Find middle
    ListNode* slow = head;
    ListNode* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    // Reverse second half
    ListNode* prev = nullptr;
    ListNode* current = slow;
    while (current) {
        ListNode* next_node = current->next;
        current->next = prev;
        prev = current;
        current = next_node;
    }
    // Merge
    ListNode* first = head;
    ListNode* second = prev;
    while (second->next) {
        ListNode* temp1 = first->next;
        ListNode* temp2 = second->next;
        first->next = second;
        second->next = temp1;
        first = temp1;
        second = temp2;
    }
}`}
              walkthrough="We split the list, reverse the second part, and interleave them."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Three passes",
              }}
              mistakes={[
                {
                  mistake: "Not finding middle correctly",
                  fix: "Use slow/fast pointers",
                },
              ]}
              tryIt="Palindrome Linked List - Check if palindrome"
            />
          </section>

          {/* Matrix Section */}
          <section id="matrix">
            <div className="mb-12 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-indigo-500 mb-4">
                Matrix Problems
              </h2>
              <p className="text-gray-400">
                2D array manipulation and traversal.
              </p>
            </div>

            <QuestionCard
              title="Set Matrix Zeroes"
              learn="Using first row and column as markers."
              context="Set entire row and column to zero if element is zero."
              steps={[
                "Check if first row/column have zero",
                "Use first row/column to mark",
                "Iterate matrix, mark rows/columns",
                "Set marked rows/columns to zero",
                "Handle first row/column separately",
              ]}
              pythonCode={`def setZeroes(matrix):
    if not matrix or not matrix[0]:
        return
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    for i in range(1, m):
        if matrix[i][0] == 0:
            for j in range(n):
                matrix[i][j] = 0
    for j in range(1, n):
        if matrix[0][j] == 0:
            for i in range(m):
                matrix[i][j] = 0
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0`}
              cppCode={`void setZeroes(vector<vector<int>>& matrix) {
    if (matrix.empty() || matrix[0].empty()) return;
    int m = matrix.size(), n = matrix[0].size();
    bool first_row_zero = false;
    for (int j = 0; j < n; ++j) {
        if (matrix[0][j] == 0) first_row_zero = true;
    }
    bool first_col_zero = false;
    for (int i = 0; i < m; ++i) {
        if (matrix[i][0] == 0) first_col_zero = true;
    }
    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (int i = 1; i < m; ++i) {
        if (matrix[i][0] == 0) {
            for (int j = 0; j < n; ++j) {
                matrix[i][j] = 0;
            }
        }
    }
    for (int j = 1; j < n; ++j) {
        if (matrix[0][j] == 0) {
            for (int i = 0; i < m; ++i) {
                matrix[i][j] = 0;
            }
        }
    }
    if (first_row_zero) {
        for (int j = 0; j < n; ++j) {
            matrix[0][j] = 0;
        }
    }
    if (first_col_zero) {
        for (int i = 0; i < m; ++i) {
            matrix[i][0] = 0;
        }
    }
}`}
              walkthrough="We use the first row and column to record which rows and columns need to be zeroed."
              complexity={{
                time: "O(M*N)",
                space: "O(1)",
                why: "In-place modification",
              }}
              mistakes={[
                {
                  mistake: "Using extra space",
                  fix: "Use first row and column as markers",
                },
              ]}
              tryIt="Game of Life - Similar in-place modification"
            />

            <QuestionCard
              title="Spiral Matrix"
              learn="Directional traversal in matrix."
              context="Traverse matrix in spiral order."
              steps={[
                "Initialize boundaries",
                "While within bounds",
                "Traverse right, down, left, up",
                "Update boundaries after each direction",
              ]}
              pythonCode={`def spiralOrder(matrix):
    if not matrix or not matrix[0]:
        return []
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        # Traverse left
        if top <= bottom:
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        # Traverse up
        if left <= right:
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    return result`}
              cppCode={`vector<int> spiralOrder(vector<vector<int>>& matrix) {
    if (matrix.empty() || matrix[0].empty()) return {};
    vector<int> result;
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    while (top <= bottom && left <= right) {
        // Traverse right
        for (int j = left; j <= right; ++j) {
            result.push_back(matrix[top][j]);
        }
        top++;
        // Traverse down
        for (int i = top; i <= bottom; ++i) {
            result.push_back(matrix[i][right]);
        }
        right--;
        // Traverse left
        if (top <= bottom) {
            for (int j = right; j >= left; --j) {
                result.push_back(matrix[bottom][j]);
            }
            bottom--;
        }
        // Traverse up
        if (left <= right) {
            for (int i = bottom; i >= top; --i) {
                result.push_back(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}`}
              walkthrough="We peel the matrix layer by layer, updating the boundaries."
              complexity={{
                time: "O(M*N)",
                space: "O(1)",
                why: "Visit each cell once",
              }}
              mistakes={[
                {
                  mistake: "Not updating boundaries correctly",
                  fix: "Update after each direction traversal",
                },
              ]}
              tryIt="Spiral Matrix II - Generate spiral matrix"
            />

            <QuestionCard
              title="Rotate Image"
              learn="In-place matrix rotation."
              context="Rotate matrix 90 degrees clockwise in-place."
              steps={["Transpose the matrix", "Reverse each row"]}
              pythonCode={`def rotate(matrix):
    n = len(matrix)
    # Transpose
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for row in matrix:
        row.reverse()`}
              cppCode={`void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    // Transpose
    for (int i = 0; i < n; ++i) {
        for (int j = i; j < n; ++j) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    // Reverse each row
    for (int i = 0; i < n; ++i) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}`}
              walkthrough="Transposing swaps elements across diagonal, reversing rows completes the rotation."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "In-place operations",
              }}
              mistakes={[
                {
                  mistake: "Rotating element by element",
                  fix: "Use transpose and reverse",
                },
              ]}
              tryIt="Rotate Image - Counter-clockwise"
            />

            <QuestionCard
              title="Word Search"
              learn="DFS with backtracking in matrix."
              context="Find if word exists in matrix."
              steps={[
                "For each cell, if matches first char",
                "DFS in four directions",
                "Mark visited, backtrack",
                "Return true if found",
              ]}
              pythonCode={`def exist(board, word):
    if not board or not board[0]:
        return False
    m, n = len(board), len(board[0])
    def dfs(i, j, index):
        if index == len(word):
            return True
        if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[index]:
            return False
        temp = board[i][j]
        board[i][j] = '#'
        found = dfs(i+1, j, index+1) or dfs(i-1, j, index+1) or dfs(i, j+1, index+1) or dfs(i, j-1, index+1)
        board[i][j] = temp
        return found
    for i in range(m):
        for j in range(n):
            if board[i][j] == word[0] and dfs(i, j, 0):
                return True
    return False`}
              cppCode={`bool exist(vector<vector<char>>& board, string word) {
    if (board.empty() || board[0].empty()) return false;
    int m = board.size(), n = board[0].size();
    function<bool(int, int, int)> dfs = [&](int i, int j, int index) -> bool {
        if (index == word.size()) return true;
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[index]) return false;
        char temp = board[i][j];
        board[i][j] = '#';
        bool found = dfs(i+1, j, index+1) || dfs(i-1, j, index+1) || dfs(i, j+1, index+1) || dfs(i, j-1, index+1);
        board[i][j] = temp;
        return found;
    };
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (board[i][j] == word[0] && dfs(i, j, 0)) return true;
        }
    }
    return false;
}`}
              walkthrough="We try to match the word starting from each cell, using DFS to explore paths."
              complexity={{
                time: "O(M*N*4^L)",
                space: "O(L)",
                why: "DFS recursion depth",
              }}
              mistakes={[
                {
                  mistake: "Not marking visited",
                  fix: "Temporarily mark cells to prevent reuse",
                },
              ]}
              tryIt="Word Search II - Find all words"
            />
          </section>

          {/* String Section */}
          <section id="string">
            <div className="mb-12 p-6 bg-pink-500/5 border border-pink-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                String Problems
              </h2>
              <p className="text-gray-400">
                String manipulation and pattern matching.
              </p>
            </div>

            <QuestionCard
              title="Longest Substring Without Repeating Characters"
              learn="Sliding window with hash set."
              context="Find length of longest substring without repeating characters."
              steps={[
                "Use sliding window with hash set",
                "Expand right, add to set",
                "If duplicate, move left until removed",
                "Update max length",
              ]}
              pythonCode={`def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    return max_length`}
              cppCode={`int lengthOfLongestSubstring(string s) {
    unordered_set<char> char_set;
    int left = 0;
    int max_length = 0;
    for (int right = 0; right < s.size(); ++right) {
        while (char_set.find(s[right]) != char_set.end()) {
            char_set.erase(s[left]);
            left++;
        }
        char_set.insert(s[right]);
        max_length = max(max_length, right - left + 1);
    }
    return max_length;
}`}
              walkthrough="The window expands until a duplicate is found, then contracts from the left."
              complexity={{
                time: "O(N)",
                space: "O(min(N, 128))",
                why: "Sliding window",
              }}
              mistakes={[
                {
                  mistake: "Using brute force",
                  fix: "Use sliding window",
                },
              ]}
              tryIt="Longest Substring with At Most K Distinct Characters"
            />

            <QuestionCard
              title="Longest Repeating Character Replacement"
              learn="Sliding window with character count."
              context="Find longest substring after replacing k characters."
              steps={[
                "Use sliding window",
                "Track max frequency in window",
                "If window size - max_freq > k, shrink left",
                "Update max length",
              ]}
              pythonCode={`def characterReplacement(s, k):
    count = {}
    left = 0
    max_length = 0
    max_freq = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_freq = max(max_freq, count[s[right]])
        if (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1
        max_length = max(max_length, right - left + 1)
    return max_length`}
              cppCode={`int characterReplacement(string s, int k) {
    vector<int> count(26, 0);
    int left = 0;
    int max_length = 0;
    int max_freq = 0;
    for (int right = 0; right < s.size(); ++right) {
        count[s[right] - 'A']++;
        max_freq = max(max_freq, count[s[right] - 'A']);
        if ((right - left + 1) - max_freq > k) {
            count[s[left] - 'A']--;
            left++;
        }
        max_length = max(max_length, right - left + 1);
    }
    return max_length;
}`}
              walkthrough="We maintain a window where the number of replacements needed is <= k."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Fixed alphabet size",
              }}
              mistakes={[
                {
                  mistake: "Not tracking max frequency",
                  fix: "Keep track of highest count in window",
                },
              ]}
              tryIt="Max Consecutive Ones III - Similar with flips"
            />

            <QuestionCard
              title="Minimum Window Substring"
              learn="Sliding window with character counts."
              context="Find minimum window containing all characters of t in s."
              steps={[
                "Use two pointers",
                "Expand right until window has all chars",
                "Shrink left while maintaining validity",
                "Update min window",
              ]}
              pythonCode={`def minWindow(s, t):
    if not t or not s:
        return ""
    from collections import Counter
    t_count = Counter(t)
    required = len(t_count)
    left = 0
    min_len = float('inf')
    min_start = 0
    window_count = Counter()
    formed = 0
    for right in range(len(s)):
        window_count[s[right]] += 1
        if s[right] in t_count and window_count[s[right]] == t_count[s[right]]:
            formed += 1
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_start = left
            window_count[s[left]] -= 1
            if s[left] in t_count and window_count[s[left]] < t_count[s[left]]:
                formed -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_start:min_start + min_len]`}
              cppCode={`string minWindow(string s, string t) {
    if (t.empty() || s.empty()) return "";
    unordered_map<char, int> t_count;
    for (char c : t) t_count[c]++;
    int required = t_count.size();
    int left = 0;
    int min_len = INT_MAX;
    int min_start = 0;
    unordered_map<char, int> window_count;
    int formed = 0;
    for (int right = 0; right < s.size(); ++right) {
        window_count[s[right]]++;
        if (t_count.find(s[right]) != t_count.end() && window_count[s[right]] == t_count[s[right]]) {
            formed++;
        }
        while (left <= right && formed == required) {
            if (right - left + 1 < min_len) {
                min_len = right - left + 1;
                min_start = left;
            }
            window_count[s[left]]--;
            if (t_count.find(s[left]) != t_count.end() && window_count[s[left]] < t_count[s[left]]) {
                formed--;
            }
            left++;
        }
    }
    return min_len == INT_MAX ? "" : s.substr(min_start, min_len);
}`}
              walkthrough="We expand the window until it contains all characters, then shrink from left."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Fixed alphabet",
              }}
              mistakes={[
                {
                  mistake: "Not shrinking window",
                  fix: "Shrink when window is valid",
                },
              ]}
              tryIt="Substring with Concatenation of All Words"
            />

            <QuestionCard
              title="Valid Anagram"
              learn="Character count comparison."
              context="Check if two strings are anagrams."
              steps={[
                "If lengths differ, false",
                "Count characters in first string",
                "Decrement for second string",
                "Check all counts are zero",
              ]}
              pythonCode={`def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('a')] += 1
    for c in t:
        count[ord(c) - ord('a')] -= 1
    return all(c == 0 for c in count)`}
              cppCode={`bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    for (char c : t) count[c - 'a']--;
    for (int c : count) if (c != 0) return false;
    return true;
}`}
              walkthrough="Anagrams have the same character counts."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "Fixed size count array",
              }}
              mistakes={[
                {
                  mistake: "Sorting strings",
                  fix: "Use count array for efficiency",
                },
              ]}
              tryIt="Group Anagrams - Group strings by anagrams"
            />

            <QuestionCard
              title="Group Anagrams"
              learn="Hash map with sorted strings as keys."
              context="Group strings that are anagrams."
              steps={[
                "Use hash map with sorted string as key",
                "For each string, sort and add to map",
                "Return the groups",
              ]}
              pythonCode={`def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())`}
              cppCode={`vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> groups;
    for (string s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        groups[key].push_back(s);
    }
    vector<vector<string>> result;
    for (auto& p : groups) {
        result.push_back(p.second);
    }
    return result;
}`}
              walkthrough="Anagrams sort to the same string."
              complexity={{
                time: "O(N K log K)",
                space: "O(N K)",
                why: "Sorting each string",
              }}
              mistakes={[
                {
                  mistake: "Using count arrays as keys",
                  fix: "Sort strings for simple keys",
                },
              ]}
              tryIt="Valid Anagram - Check two strings"
            />

            <QuestionCard
              title="Valid Parentheses"
              learn="Stack for parentheses matching."
              context="Check if string has valid parentheses."
              steps={[
                "Use stack",
                "For each char, if open, push",
                "If close, check if matches top",
                "Stack empty at end",
              ]}
              pythonCode={`def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in mapping:
            if not stack or stack[-1] != mapping[c]:
                return False
            stack.pop()
        else:
            stack.append(c)
    return not stack`}
              cppCode={`bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> mapping = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (mapping.find(c) != mapping.end()) {
            if (st.empty() || st.top() != mapping[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}`}
              walkthrough="Stack keeps track of open parentheses."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "Stack usage",
              }}
              mistakes={[
                {
                  mistake: "Not checking order",
                  fix: "Use stack to match pairs",
                },
              ]}
              tryIt="Generate Parentheses - Generate valid combinations"
            />

            <QuestionCard
              title="Valid Palindrome"
              learn="Two pointers for palindrome check."
              context="Check if string is palindrome ignoring case and non-alphanumeric."
              steps={[
                "Use two pointers",
                "Skip non-alphanumeric",
                "Compare lowercase chars",
                "Pointers meet or cross",
              ]}
              pythonCode={`def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True`}
              cppCode={`bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}`}
              walkthrough="We compare from both ends, skipping invalid characters."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "In-place check",
              }}
              mistakes={[
                {
                  mistake: "Not ignoring case",
                  fix: "Convert to lowercase",
                },
              ]}
              tryIt="Valid Palindrome II - Delete one character"
            />

            <QuestionCard
              title="Longest Palindromic Substring"
              learn="Expand around centers."
              context="Find longest palindromic substring."
              steps={[
                "For each center, expand",
                "Check odd and even lengths",
                "Track max length and start",
              ]}
              pythonCode={`def longestPalindrome(s):
    if not s:
        return ""
    start = 0
    max_len = 1
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    for i in range(len(s)):
        len1 = expand(i, i)
        len2 = expand(i, i+1)
        curr_len = max(len1, len2)
        if curr_len > max_len:
            max_len = curr_len
            start = i - (curr_len - 1) // 2
    return s[start:start + max_len]`}
              cppCode={`string longestPalindrome(string s) {
    if (s.empty()) return "";
    int start = 0;
    int max_len = 1;
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };
    for (int i = 0; i < s.size(); ++i) {
        int len1 = expand(i, i);
        int len2 = expand(i, i + 1);
        int curr_len = max(len1, len2);
        if (curr_len > max_len) {
            max_len = curr_len;
            start = i - (curr_len - 1) / 2;
        }
    }
    return s.substr(start, max_len);
}`}
              walkthrough="We try expanding from each possible center."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Expansion from each center",
              }}
              mistakes={[
                {
                  mistake: "DP approach",
                  fix: "Expand around centers for simplicity",
                },
              ]}
              tryIt="Palindromic Substrings - Count all palindromes"
            />

            <QuestionCard
              title="Palindromic Substrings"
              learn="Count palindromes by expanding."
              context="Count number of palindromic substrings."
              steps={[
                "For each center, expand and count",
                "Odd and even lengths",
              ]}
              pythonCode={`def countSubstrings(s):
    count = 0
    def expand(left, right):
        nonlocal count
        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
    for i in range(len(s)):
        expand(i, i)  # odd
        expand(i, i+1)  # even
    return count`}
              cppCode={`int countSubstrings(string s) {
    int count = 0;
    auto expand = [&](int left, int right) {
        while (left >= 0 && right < s.size() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
    };
    for (int i = 0; i < s.size(); ++i) {
        expand(i, i);
        expand(i, i + 1);
    }
    return count;
}`}
              walkthrough="Each valid expansion is a palindrome."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "Expansion from each center",
              }}
              mistakes={[
                {
                  mistake: "Brute force check",
                  fix: "Expand around centers",
                },
              ]}
              tryIt="Longest Palindromic Substring - Find longest"
            />
          </section>

          {/* Tree Section */}
          <section id="tree">
            <div className="mb-12 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-emerald-500 mb-4">
                Tree Problems
              </h2>
              <p className="text-gray-400">
                Binary tree traversal and manipulation.
              </p>
            </div>

            <QuestionCard
              title="Maximum Depth of Binary Tree"
              learn="Recursive tree traversal."
              context="Find maximum depth of binary tree."
              steps={[
                "If root is null, return 0",
                "Return 1 + max(left depth, right depth)",
              ]}
              pythonCode={`def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`}
              cppCode={`int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`}
              walkthrough="The depth is 1 plus the maximum of subtree depths."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Tree traversal",
              }}
              mistakes={[
                {
                  mistake: "Iterative approach",
                  fix: "Recursive is simpler",
                },
              ]}
              tryIt="Minimum Depth of Binary Tree - Find minimum depth"
            />

            <QuestionCard
              title="Same Tree"
              learn="Recursive tree comparison."
              context="Check if two trees are identical."
              steps={[
                "If both null, true",
                "If one null, false",
                "If values differ, false",
                "Recurse on left and right",
              ]}
              pythonCode={`def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    if p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`}
              cppCode={`bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p->val != q->val) return false;
    return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
}`}
              walkthrough="We check structure and values recursively."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Tree traversal",
              }}
              mistakes={[
                {
                  mistake: "Not checking null cases",
                  fix: "Handle null nodes properly",
                },
              ]}
              tryIt="Symmetric Tree - Check if mirror"
            />

            <QuestionCard
              title="Invert/Flip Binary Tree"
              learn="Recursive tree inversion."
              context="Invert a binary tree."
              steps={[
                "If root null, return",
                "Swap left and right",
                "Recurse on left and right",
              ]}
              pythonCode={`def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`}
              cppCode={`TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    swap(root->left, root->right);
    invertTree(root->left);
    invertTree(root->right);
    return root;
}`}
              walkthrough="Swap subtrees and recurse."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Tree traversal",
              }}
              mistakes={[
                {
                  mistake: "Not recursing",
                  fix: "Invert subtrees too",
                },
              ]}
              tryIt="Same Tree - Check if inverted matches original"
            />

            <QuestionCard
              title="Binary Tree Maximum Path Sum"
              learn="Recursive path sum calculation."
              context="Find maximum path sum in binary tree."
              steps={[
                "Use helper to return max path from node",
                "Update global max with path through node",
                "Return max single path",
              ]}
              pythonCode={`def maxPathSum(root):
    max_sum = float('-inf')
    def helper(node):
        nonlocal max_sum
        if not node:
            return 0
        left = max(helper(node.left), 0)
        right = max(helper(node.right), 0)
        current = node.val + left + right
        max_sum = max(max_sum, current)
        return node.val + max(left, right)
    helper(root)
    return max_sum`}
              cppCode={`int maxPathSum(TreeNode* root) {
    int max_sum = INT_MIN;
    function<int(TreeNode*)> helper = [&](TreeNode* node) -> int {
        if (!node) return 0;
        int left = max(helper(node.left), 0);
        int right = max(helper(node.right), 0);
        int current = node.val + left + right;
        max_sum = max(max_sum, current);
        return node.val + max(left, right);
    };
    helper(root);
    return max_sum;
}`}
              walkthrough="For each node, consider path through it, update global max."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Tree traversal",
              }}
              mistakes={[
                {
                  mistake: "Not considering negative values",
                  fix: "Take max with 0 for paths",
                },
              ]}
              tryIt="Path Sum - Check if path sums to target"
            />

            <QuestionCard
              title="Binary Tree Level Order Traversal"
              learn="BFS with queue."
              context="Traverse tree level by level."
              steps={[
                "Use queue",
                "While queue not empty",
                "Process level, add children",
                "Collect levels",
              ]}
              pythonCode={`def levelOrder(root):
    if not root:
        return []
    from collections import deque
    queue = deque([root])
    result = []
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result`}
              cppCode={`vector<vector<int>> levelOrder(TreeNode* root) {
    if (!root) return {};
    queue<TreeNode*> q;
    q.push(root);
    vector<vector<int>> result;
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; ++i) {
            TreeNode* node = q.front(); q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}`}
              walkthrough="BFS processes nodes level by level."
              complexity={{
                time: "O(N)",
                space: "O(W)",
                why: "Queue usage",
              }}
              mistakes={[
                {
                  mistake: "DFS approach",
                  fix: "Use BFS for levels",
                },
              ]}
              tryIt="Zigzag Level Order - Alternate directions"
            />

            <QuestionCard
              title="Serialize and Deserialize Binary Tree"
              learn="Preorder traversal with null markers."
              context="Serialize and deserialize binary tree."
              steps={[
                "Serialize: preorder with null markers",
                "Deserialize: reconstruct from list",
              ]}
              pythonCode={`def serialize(root):
    def helper(node):
        if not node:
            return ['null']
        return [str(node.val)] + helper(node.left) + helper(node.right)
    return ','.join(helper(root))

def deserialize(data):
    vals = data.split(',')
    i = 0
    def helper():
        nonlocal i
        if vals[i] == 'null':
            i += 1
            return None
        node = TreeNode(int(vals[i]))
        i += 1
        node.left = helper()
        node.right = helper()
        return node
    return helper()`}
              cppCode={`string serialize(TreeNode* root) {
    function<void(TreeNode*, string&)> helper = [&](TreeNode* node, string& s) {
        if (!node) {
            s += "null,";
            return;
        }
        s += to_string(node->val) + ",";
        helper(node->left, s);
        helper(node->right, s);
    };
    string result;
    helper(root, result);
    if (!result.empty()) result.pop_back();
    return result;
}

TreeNode* deserialize(string data) {
    if (data.empty()) return nullptr;
    vector<string> vals;
    stringstream ss(data);
    string token;
    while (getline(ss, token, ',')) {
        vals.push_back(token);
    }
    int i = 0;
    function<TreeNode*()> helper = [&]() -> TreeNode* {
        if (vals[i] == "null") {
            i++;
            return nullptr;
        }
        TreeNode* node = new TreeNode(stoi(vals[i]));
        i++;
        node->left = helper();
        node->right = helper();
        return node;
    };
    return helper();
}`}
              walkthrough="Preorder traversal with null markers preserves structure."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "String and recursion",
              }}
              mistakes={[
                {
                  mistake: "Level order",
                  fix: "Preorder preserves structure",
                },
              ]}
              tryIt="Construct Binary Tree from Preorder and Inorder Traversal"
            />

            <QuestionCard
              title="Subtree of Another Tree"
              learn="Recursive subtree check."
              context="Check if one tree is subtree of another."
              steps={[
                "Check if trees are same",
                "Or check left or right subtrees",
              ]}
              pythonCode={`def isSubtree(root, subRoot):
    def isSame(p, q):
        if not p and not q:
            return True
        if not p or not q:
            return False
        return p.val == q.val and isSame(p.left, q.left) and isSame(p.right, q.right)
    if not root:
        return False
    if isSame(root, subRoot):
        return True
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`}
              cppCode={`bool isSubtree(TreeNode* root, TreeNode* subRoot) {
    function<bool(TreeNode*, TreeNode*)> isSame = [&](TreeNode* p, TreeNode* q) -> bool {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p->val == q->val && isSame(p->left, q->left) && isSame(p->right, q->right);
    };
    if (!root) return false;
    if (isSame(root, subRoot)) return true;
    return isSubtree(root->left, subRoot) || isSubtree(root.right, subRoot);
}`}
              walkthrough="Check if subRoot matches any subtree of root."
              complexity={{
                time: "O(N*M)",
                space: "O(H)",
                why: "Traversal and comparison",
              }}
              mistakes={[
                {
                  mistake: "Not checking all subtrees",
                  fix: "Recurse on left and right",
                },
              ]}
              tryIt="Same Tree - Check if identical"
            />

            <QuestionCard
              title="Construct Binary Tree from Preorder and Inorder Traversal"
              learn="Recursive construction using indices."
              context="Build tree from preorder and inorder."
              steps={[
                "Use inorder to find root position",
                "Recurse on left and right subtrees",
              ]}
              pythonCode={`def buildTree(preorder, inorder):
    if not preorder or not inorder:
        return None
    root_val = preorder[0]
    root = TreeNode(root_val)
    mid = inorder.index(root_val)
    root.left = buildTree(preorder[1:mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])
    return root`}
              cppCode={`TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    if (preorder.empty() || inorder.empty()) return nullptr;
    int root_val = preorder[0];
    TreeNode* root = new TreeNode(root_val);
    auto it = find(inorder.begin(), inorder.end(), root_val);
    int mid = it - inorder.begin();
    vector<int> left_pre(preorder.begin() + 1, preorder.begin() + mid + 1);
    vector<int> right_pre(preorder.begin() + mid + 1, preorder.end());
    vector<int> left_in(inorder.begin(), inorder.begin() + mid);
    vector<int> right_in(inorder.begin() + mid + 1, inorder.end());
    root->left = buildTree(left_pre, left_in);
    root->right = buildTree(right_pre, right_in);
    return root;
}`}
              walkthrough="Preorder gives root, inorder gives left/right split."
              complexity={{
                time: "O(N²)",
                space: "O(N)",
                why: "Index search and slicing",
              }}
              mistakes={[
                {
                  mistake: "Wrong slicing",
                  fix: "Careful with indices",
                },
              ]}
              tryIt="Construct from Inorder and Postorder"
            />

            <QuestionCard
              title="Validate Binary Search Tree"
              learn="Inorder traversal check."
              context="Check if tree is valid BST."
              steps={[
                "Inorder traversal should be sorted",
                "Check ascending order",
              ]}
              pythonCode={`def isValidBST(root):
    def inorder(node, prev):
        if not node:
            return True
        if not inorder(node.left, prev):
            return False
        if prev[0] is not None and node.val <= prev[0]:
            return False
        prev[0] = node.val
        return inorder(node.right, prev)
    return inorder(root, [None])`}
              cppCode={`bool isValidBST(TreeNode* root) {
    function<bool(TreeNode*, long long, long long)> helper = [&](TreeNode* node, long long min_val, long long max_val) -> bool {
        if (!node) return true;
        if (node->val <= min_val || node->val >= max_val) return false;
        return helper(node->left, min_val, node->val) && helper(node->right, node->val, max_val);
    };
    return helper(root, LLONG_MIN, LLONG_MAX);
}`}
              walkthrough="Each node must be within bounds from ancestors."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Tree traversal",
              }}
              mistakes={[
                {
                  mistake: "Not checking bounds",
                  fix: "Pass min/max to recursion",
                },
              ]}
              tryIt="Kth Smallest Element in a BST"
            />

            <QuestionCard
              title="Kth Smallest Element in a BST"
              learn="Inorder traversal for sorted order."
              context="Find kth smallest element in BST."
              steps={["Inorder traversal", "Count until kth"]}
              pythonCode={`def kthSmallest(root, k):
    count = 0
    result = None
    def inorder(node):
        nonlocal count, result
        if not node or result is not None:
            return
        inorder(node.left)
        count += 1
        if count == k:
            result = node.val
            return
        inorder(node.right)
    inorder(root)
    return result`}
              cppCode={`int kthSmallest(TreeNode* root, int k) {
    int count = 0;
    int result = 0;
    function<void(TreeNode*)> inorder = [&](TreeNode* node) {
        if (!node || count >= k) return;
        inorder(node->left);
        count++;
        if (count == k) {
            result = node.val;
            return;
        }
        inorder(node->right);
    };
    inorder(root);
    return result;
}`}
              walkthrough="Inorder gives sorted order, count to k."
              complexity={{
                time: "O(N)",
                space: "O(H)",
                why: "Traversal",
              }}
              mistakes={[
                {
                  mistake: "Not using BST property",
                  fix: "Inorder gives order",
                },
              ]}
              tryIt="Validate Binary Search Tree"
            />

            <QuestionCard
              title="Lowest Common Ancestor of BST"
              learn="BST property for LCA."
              context="Find LCA in BST."
              steps={[
                "If both < root, go left",
                "If both > root, go right",
                "Else root is LCA",
              ]}
              pythonCode={`def lowestCommonAncestor(root, p, q):
    if p.val < root.val and q.val < root.val:
        return lowestCommonAncestor(root.left, p, q)
    elif p.val > root.val and q.val > root.val:
        return lowestCommonAncestor(root.right, p, q)
    else:
        return root`}
              cppCode={`TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (p->val < root->val && q->val < root->val) {
        return lowestCommonAncestor(root->left, p, q);
    } else if (p->val > root->val && q->val > root->val) {
        return lowestCommonAncestor(root->right, p, q);
    } else {
        return root;
    }
}`}
              walkthrough="LCA is where paths diverge."
              complexity={{
                time: "O(H)",
                space: "O(H)",
                why: "Tree height",
              }}
              mistakes={[
                {
                  mistake: "Iterative approach",
                  fix: "Recursive is simple",
                },
              ]}
              tryIt="Lowest Common Ancestor of Binary Tree - Without BST property"
            />

            <QuestionCard
              title="Implement Trie (Prefix Tree)"
              learn="Trie data structure."
              context="Implement trie with insert, search, startsWith."
              steps={[
                "Node with children map and isEnd",
                "Insert: traverse/create nodes",
                "Search: traverse and check isEnd",
                "StartsWith: traverse",
              ]}
              pythonCode={`class Trie:
    def __init__(self):
        self.children = {}
        self.isEnd = False
    def insert(self, word):
        node = self
        for c in word:
            if c not in node.children:
                node.children[c] = Trie()
            node = node.children[c]
        node.isEnd = True
    def search(self, word):
        node = self
        for c in word:
            if c not in node.children:
                return False
            node = node.children[c]
        return node.isEnd
    def startsWith(self, prefix):
        node = self
        for c in prefix:
            if c not in node.children:
                return False
            node = node.children[c]
        return True`}
              cppCode={`class Trie {
public:
    unordered_map<char, Trie*> children;
    bool isEnd = false;
    void insert(string word) {
        Trie* node = this;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new Trie();
            }
            node = node->children[c];
        }
        node->isEnd = true;
    }
    bool search(string word) {
        Trie* node = this;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }
        return node->isEnd;
    }
    bool startsWith(string prefix) {
        Trie* node = this;
        for (char c : prefix) {
            if (node->children.find(c) == node->children.end()) {
                return false;
            }
            node = node->children[c];
        }
        return true;
    }
};`}
              walkthrough="Trie stores prefixes efficiently."
              complexity={{
                time: "O(L)",
                space: "O(N)",
                why: "Length of word",
              }}
              mistakes={[
                {
                  mistake: "Using hash set",
                  fix: "Trie for prefixes",
                },
              ]}
              tryIt="Add and Search Word - With wildcards"
            />

            <QuestionCard
              title="Add and Search Word - Data structure design"
              learn="Trie with wildcards."
              context="Implement word dictionary with wildcards."
              steps={[
                "Use trie",
                "For search, handle '.' as any char",
                "DFS for wildcards",
              ]}
              pythonCode={`class WordDictionary:
    def __init__(self):
        self.trie = {}
    def addWord(self, word):
        node = self.trie
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node['#'] = True
    def search(self, word):
        def dfs(node, i):
            if i == len(word):
                return '#' in node
            c = word[i]
            if c == '.':
                for child in node:
                    if child != '#' and dfs(node[child], i+1):
                        return True
                return False
            else:
                if c not in node:
                    return False
                return dfs(node[c], i+1)
        return dfs(self.trie, 0)`}
              cppCode={`class WordDictionary {
public:
    unordered_map<char, WordDictionary*> children;
    bool isEnd = false;
    void addWord(string word) {
        WordDictionary* node = this;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new WordDictionary();
            }
            node = node->children[c];
        }
        node->isEnd = true;
    }
    bool search(string word) {
        function<bool(WordDictionary*, int)> dfs = [&](WordDictionary* node, int i) -> bool {
            if (i == word.size()) return node->isEnd;
            char c = word[i];
            if (c == '.') {
                for (auto& p : node->children) {
                    if (dfs(p.second, i + 1)) return true;
                }
                return false;
            } else {
                if (node->children.find(c) == node->children.end()) return false;
                return dfs(node->children[c], i + 1);
            }
        };
        return dfs(this, 0);
    }
};`}
              walkthrough="DFS handles the wildcard by trying all possibilities."
              complexity={{
                time: "O(26^L)",
                space: "O(N)",
                why: "Wildcard branching",
              }}
              mistakes={[
                {
                  mistake: "No DFS for '.'",
                  fix: "Use DFS to explore all",
                },
              ]}
              tryIt="Implement Trie - Without wildcards"
            />

            <QuestionCard
              title="Word Search II"
              learn="Trie + DFS for word search."
              context="Find all words in board."
              steps={[
                "Build trie with words",
                "DFS from each cell",
                "Mark visited, check trie",
              ]}
              pythonCode={`def findWords(board, words):
    trie = {}
    for word in words:
        node = trie
        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]
        node['#'] = word
    m, n = len(board), len(board[0])
    result = set()
    def dfs(i, j, node):
        if '#' in node:
            result.add(node['#'])
        for di, dj in [(-1,0),(1,0),(0,-1),(0,1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and board[ni][nj] in node:
                temp = board[ni][nj]
                board[ni][nj] = '#'
                dfs(ni, nj, node[temp])
                board[ni][nj] = temp
    for i in range(m):
        for j in range(n):
            if board[i][j] in trie:
                temp = board[i][j]
                board[i][j] = '#'
                dfs(i, j, trie[temp])
                board[i][j] = temp
    return list(result)`}
              cppCode={`vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    unordered_map<char, unordered_map<char, any>> trie;
    for (string word : words) {
        unordered_map<char, any>* node = &trie;
        for (char c : word) {
            if (node->find(c) == node->end()) {
                (*node)[c] = unordered_map<char, any>();
            }
            node = &(*node)[c];
        }
        (*node)['#'] = word;
    }
    int m = board.size(), n = board[0].size();
    set<string> result;
    function<void(int, int, unordered_map<char, any>&)> dfs = [&](int i, int j, unordered_map<char, any>& node) {
        if (node.find('#') != node.end()) {
            result.insert(any_cast<string>(node['#']));
        }
        for (auto& d : vector<pair<int, int>>{{-1,0},{1,0},{0,-1},{0,1}}) {
            int ni = i + d.first, nj = j + d.second;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && node.find(board[ni][nj]) != node.end()) {
                char temp = board[ni][nj];
                board[ni][nj] = '#';
                dfs(ni, nj, any_cast<unordered_map<char, any>&>(node[temp]));
                board[ni][nj] = temp;
            }
        }
    };
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (trie.find(board[i][j]) != trie.end()) {
                char temp = board[i][j];
                board[i][j] = '#';
                dfs(i, j, trie[temp]);
                board[i][j] = temp;
            }
        }
    }
    return vector<string>(result.begin(), result.end());
}`}
              walkthrough="Trie prunes invalid paths."
              complexity={{
                time: "O(M*N*4^L)",
                space: "O(N)",
                why: "Board traversal",
              }}
              mistakes={[
                {
                  mistake: "No trie",
                  fix: "Use trie to optimize",
                },
              ]}
              tryIt="Word Search - Single word"
            />
          </section>

          {/* Heap Section */}
          <section id="heap">
            <div className="mb-12 p-6 bg-violet-500/5 border border-violet-500/10 rounded-xl">
              <h2 className="text-3xl font-bold text-violet-500 mb-4">
                Heap Problems
              </h2>
              <p className="text-gray-400">
                Priority queues and heap operations.
              </p>
            </div>

            <QuestionCard
              title="Top K Frequent Elements"
              learn="Heap for top k elements."
              context="Find k most frequent elements."
              steps={[
                "Count frequencies",
                "Use heap to keep top k",
                "Return top k",
              ]}
              pythonCode={`def topKFrequent(nums, k):
    from collections import Counter
    import heapq
    count = Counter(nums)
    heap = []
    for num, freq in count.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    return [num for freq, num in heap]`}
              cppCode={`vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> count;
    for (int num : nums) count[num]++;
    auto cmp = [](pair<int, int> a, pair<int, int> b) { return a.second > b.second; };
    priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(cmp)> pq(cmp);
    for (auto& p : count) {
        pq.push(p);
        if (pq.size() > k) pq.pop();
    }
    vector<int> result;
    while (!pq.empty()) {
        result.push_back(pq.top().first);
        pq.pop();
    }
    reverse(result.begin(), result.end());
    return result;
}`}
              walkthrough="Min-heap keeps smallest of top k."
              complexity={{
                time: "O(N log K)",
                space: "O(N)",
                why: "Heap operations",
              }}
              mistakes={[
                {
                  mistake: "Sorting",
                  fix: "Use heap for efficiency",
                },
              ]}
              tryIt="Kth Largest Element in Array"
            />

            <QuestionCard
              title="Find Median from Data Stream"
              learn="Two heaps for median."
              context="Find median in running stream."
              steps={[
                "Max-heap for lower half",
                "Min-heap for upper half",
                "Balance heaps",
                "Median from heaps",
              ]}
              pythonCode={`class MedianFinder:
    def __init__(self):
        self.small = []  # max-heap
        self.large = []  # min-heap
    def addNum(self, num):
        import heapq
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`}
              cppCode={`class MedianFinder {
public:
    priority_queue<int> small; // max-heap
    priority_queue<int, vector<int>, greater<int>> large; // min-heap
    void addNum(int num) {
        small.push(num);
        large.push(small.top());
        small.pop();
        if (large.size() > small.size()) {
            small.push(large.top());
            large.pop();
        }
    }
    double findMedian() {
        if (small.size() > large.size()) {
            return small.top();
        }
        return (small.top() + large.top()) / 2.0;
    }
};`}
              walkthrough="Max-heap for lower, min-heap for upper, keep balanced."
              complexity={{
                time: "O(log N)",
                space: "O(N)",
                why: "Heap operations",
              }}
              mistakes={[
                {
                  mistake: "Single heap",
                  fix: "Two heaps for balance",
                },
              ]}
              tryIt="Sliding Window Median"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
