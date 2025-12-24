import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";

export default function BlogPart1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-12">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </nav>

        <header className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Part 1 of 5
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Foundation Questions: Numbers & Basic Logic
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Master the fundamentals of programming with these 22 essential
            number-based questions. These build the logical foundation
            you'll need for more complex data structures.
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
                  "Odd or Even",
                  "Swap Numbers",
                  "Sum of Digits",
                  "Reverse Digits",
                  "Palindrome Number",
                  "Armstrong Number",
                  "Prime Number",
                  "Factorial",
                  "Fibonacci",
                  "GCD and LCM",
                  "Leap Year",
                  "Perfect Square",
                  "Square Root",
                  "Power of N",
                  "Perfect Number",
                  "Automorphic",
                  "Simple Interest",
                  "Greatest of Three",
                  "Multiplication Table",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-blue-400 mb-2">
                Section 1: Basic Arithmetic
              </h2>
              <p className="text-sm text-gray-400">
                These questions focus on digit manipulation and basic operators.
              </p>
            </div>
            <QuestionCard
              title="Odd or Even"
              learn="How to use the modulo operator to check for divisibility."
              context="Think of sharing a bag of candies between two people. If there's one left over, it's odd. If not, it's even!"
              steps={[
                "Take the input number",
                "Divide it by 2 and check the remainder",
                "If remainder is 0, it's Even",
                "Otherwise, it's Odd",
              ]}
              pythonCode={`def is_even(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"`}
              cppCode={`#include <iostream>
using namespace std;

string isEven(int n) {
    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}`}
              walkthrough="We use the % (modulo) operator which gives us the remainder of a division. Any number divisible by 2 with no remainder is even."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "A single mathematical operation regardless of number size.",
              }}
              mistakes={[
                {
                  mistake: "Using division (/) instead of modulo (%)",
                  fix: "Modulo gives the remainder, which is what we need.",
                },
              ]}
              tryIt="Can you check if a number is divisible by 3 without using the modulo operator?"
            />

            <QuestionCard
              title="Swap Numbers"
              learn="How to swap two values without using a temporary third variable."
              context="Imagine you have a glass of juice and a glass of milk. How do you swap them if you don't have a third glass? (Hint: It involves some math magic!)"
              steps={[
                "Add both numbers and store in the first variable",
                "Subtract the second from the new first to get the original first value",
                "Subtract the new second from the new first to get the original second value",
              ]}
              pythonCode={`def swap(a, b):
    a = a + b
    b = a - b
    a = a - b
    return a, b`}
              cppCode={`void swap(int &a, int &b) {
    a = a + b;
    b = a - b;
    a = a - b;
}`}
              walkthrough="By adding the two numbers, we store their combined 'weight' in one variable. We then use subtraction to peel off the original values one by one."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Three simple arithmetic operations.",
              }}
              mistakes={[
                {
                  mistake: "Potential integer overflow in languages like C++",
                  fix: "Use XOR bitwise operator for a safer swap.",
                },
              ]}
              tryIt="Try swapping two numbers using the XOR (^) operator."
            />

            <QuestionCard
              title="Sum of Digits"
              learn="How to extract individual digits from a number using loops."
              context="Like counting the total value of coins in your pocket by looking at each coin one by one."
              steps={[
                "Initialize sum to 0",
                "Use a loop while the number is greater than 0",
                "Get the last digit using modulo 10",
                "Add it to sum",
                "Remove the last digit using integer division by 10",
              ]}
              pythonCode={`def sum_of_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total`}
              cppCode={`int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`}
              walkthrough="The modulo 10 trick always gives you the last digit. Dividing by 10 'shifts' the number to the right, effectively removing that last digit."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "The number of iterations depends on the number of digits, which is log10(N).",
              }}
              mistakes={[
                {
                  mistake: "Forgetting to update the number (n /= 10)",
                  fix: "This leads to an infinite loop!",
                },
              ]}
              tryIt="Can you solve this using recursion instead of a while loop?"
            />

            <QuestionCard
              title="Reverse Digits"
              learn="Building a new number by shifting digits."
              context="Turning 123 into 321. It's like taking a stack of plates and moving them one by one to a new stack."
              steps={[
                "Initialize reversed_num to 0",
                "Extract the last digit of the input",
                "Multiply reversed_num by 10 and add the extracted digit",
                "Remove the last digit from input",
                "Repeat until input is 0",
              ]}
              pythonCode={`def reverse_number(n):
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return rev`}
              cppCode={`int reverseNumber(int n) {
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}`}
              walkthrough="Each time we add a digit to 'rev', we multiply the existing 'rev' by 10 to make room for the new digit in the ones place."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We process each digit once.",
              }}
              mistakes={[
                {
                  mistake: "Not handling negative numbers",
                  fix: "Store the sign, work with absolute value, then re-apply sign.",
                },
              ]}
              tryIt="What happens if the reversed number exceeds the maximum integer limit (overflow)?"
            />

            <QuestionCard
              title="Palindrome Number"
              learn="Combining reversal logic with comparison."
              context="A number that reads the same forwards and backwards, like 121 or 1331. Like the word 'level' but for numbers!"
              steps={[
                "Store the original number in a temporary variable",
                "Reverse the number using the 'Reverse Digits' logic",
                "Compare the reversed number with the original",
                "If they are equal, it's a palindrome",
              ]}
              pythonCode={`def is_palindrome(n):
    if n < 0: return False
    original = n
    rev = 0
    while n > 0:
        rev = rev * 10 + (n % 10)
        n //= 10
    return original == rev`}
              cppCode={`bool isPalindrome(int n) {
    if (n < 0) return false;
    long long original = n;
    long long rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return original == rev;
}`}
              walkthrough="We reuse the reversal logic. If the flipped version is identical to the start, it's a palindrome. Note: Negative numbers are never palindromes because of the '-' sign."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We iterate through the digits once.",
              }}
              mistakes={[
                {
                  mistake:
                    "Comparing the modified 'n' (which becomes 0) instead of the original",
                  fix: "Always store the original value in a separate variable first.",
                },
              ]}
              tryIt="Can you check if a number is a palindrome without reversing the whole number? (Hint: Reverse only half!)"
            />

            <div className="my-16 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-purple-400 mb-2">
                Section 2: Mathematical Checks
              </h2>
              <p className="text-sm text-gray-400">
                Moving into logic that requires understanding number properties.
              </p>
            </div>

            <QuestionCard
              title="Armstrong Number"
              learn="Power operations and digit extraction."
              context="An Armstrong number (like 153) is a number that is the sum of its own digits each raised to the power of the number of digits. It's like a number that is 'self-made'!"
              steps={[
                "Count the number of digits (k)",
                "Extract each digit",
                "Raise each digit to the power of k and add to sum",
                "Check if sum equals original number",
              ]}
              pythonCode={`def is_armstrong(n):
    num_str = str(n)
    k = len(num_str)
    total = sum(int(digit)**k for digit in num_str)
    return total == n`}
              cppCode={`#include <cmath>
bool isArmstrong(int n) {
    int original = n, temp = n, k = 0, sum = 0;
    while (temp > 0) { temp /= 10; k++; }
    temp = n;
    while (temp > 0) {
        sum += pow(temp % 10, k);
        temp /= 10;
    }
    return sum == original;
}`}
              walkthrough="We first find how many digits the number has. Then, we take each digit, raise it to that power, and see if the total matches the start."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We process each digit twice (once to count, once to sum).",
              }}
              mistakes={[
                {
                  mistake: "Hardcoding the power to 3",
                  fix: "Armstrong numbers can have any number of digits; the power must match the digit count.",
                },
              ]}
              tryIt="Find all Armstrong numbers between 1 and 1000."
            />

            <QuestionCard
              title="Prime Number"
              learn="Efficient looping and divisibility rules."
              context="A prime number is like a 'loner' - it only hangs out with itself and 1. Examples: 2, 3, 5, 7, 11."
              steps={[
                "If number <= 1, it's not prime",
                "Loop from 2 up to the square root of the number",
                "If any number divides it evenly, it's not prime",
                "If the loop finishes, it is prime",
              ]}
              pythonCode={`import math
def is_prime(n):
    if n <= 1: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True`}
              cppCode={`#include <cmath>
bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}`}
              walkthrough="We only need to check up to the square root because if a number has a factor larger than its square root, it must also have one smaller than it."
              complexity={{
                time: "O(√N)",
                space: "O(1)",
                why: "The loop runs at most square root of N times.",
              }}
              mistakes={[
                {
                  mistake: "Checking all the way up to N",
                  fix: "Checking up to √N is much faster and mathematically sufficient.",
                },
              ]}
              tryIt="Can you optimize this further by skipping even numbers after checking 2?"
            />

            <div className="my-16 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-green-400 mb-2">
                Section 3: Sequences & Recursion
              </h2>
              <p className="text-sm text-gray-400">
                Learning how functions can call themselves or repeat patterns.
              </p>
            </div>

            <QuestionCard
              title="Factorial"
              learn="Iterative vs Recursive approaches."
              context="Factorial (5!) is 5 × 4 × 3 × 2 × 1. It's like calculating the number of ways you can arrange books on a shelf."
              steps={[
                "Base case: factorial of 0 or 1 is 1",
                "Recursive: n * factorial(n-1)",
                "Iterative: Multiply numbers from 1 to n",
              ]}
              pythonCode={`# Iterative
def factorial_iter(n):
    res = 1
    for i in range(2, n + 1):
        res *= i
    return res

# Recursive
def factorial_rec(n):
    if n <= 1: return 1
    return n * factorial_rec(n - 1)`}
              cppCode={`// Iterative
long long factorialIter(int n) {
    long long res = 1;
    for (int i = 2; i <= n; i++) res *= i;
    return res;
}

// Recursive
long long factorialRec(int n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}`}
              walkthrough="The iterative version uses a loop to accumulate the product. The recursive version breaks the problem down into smaller versions of itself until it hits 1."
              complexity={{
                time: "O(N)",
                space: "O(1) for iterative, O(N) for recursive",
                why: "Recursive uses stack space for each call.",
              }}
              mistakes={[
                {
                  mistake: "Not handling the base case (0! = 1)",
                  fix: "Always define what happens at the smallest possible input.",
                },
              ]}
              tryIt="Which version would you use for a very large N? Why?"
            />

            <QuestionCard
              title="Fibonacci"
              learn="Generating a sequence where each number is the sum of the two preceding ones."
              context="0, 1, 1, 2, 3, 5, 8... This pattern appears everywhere in nature, from sunflower seeds to snail shells!"
              steps={[
                "Start with 0 and 1",
                "Next number = sum of previous two",
                "Update previous two numbers",
                "Repeat for N terms",
              ]}
              pythonCode={`def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b`}
              cppCode={`void fibonacci(int n) {
    long long a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        long long next = a + b;
        a = b;
        b = next;
    }
}`}
              walkthrough="We keep track of the last two numbers. In each step, we calculate the next one and 'slide' our window forward."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We only store two variables regardless of N.",
              }}
              mistakes={[
                {
                  mistake: "Using simple recursion without memoization",
                  fix: "Simple recursion for Fibonacci is O(2^N), which is extremely slow. Use iteration or memoization.",
                },
              ]}
              tryIt="Can you find the Nth Fibonacci number using the Golden Ratio formula (Binet's Formula)?"
            />

            <div className="my-16 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-orange-400 mb-2">
                Section 4: Advanced Math
              </h2>
              <p className="text-sm text-gray-400">
                Using algorithms like Euclidean for GCD and handling multiple
                inputs.
              </p>
            </div>

            <QuestionCard
              title="GCD and LCM"
              learn="The Euclidean Algorithm for finding the Greatest Common Divisor."
              context="GCD is the largest number that divides both. LCM is the smallest number they both divide into. Like finding the common denominator for fractions!"
              steps={[
                "GCD: While b is not 0, a, b = b, a % b",
                "LCM: (a * b) / GCD(a, b)",
              ]}
              pythonCode={`def get_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def get_lcm(a, b):
    return abs(a * b) // get_gcd(a, b)`}
              cppCode={`int getGCD(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int getLCM(int a, int b) {
    return (a * b) / getGCD(a, b);
}`}
              walkthrough="The Euclidean algorithm is a very efficient way to find GCD by repeatedly taking the remainder. LCM is then easily found using the relationship between GCD and LCM."
              complexity={{
                time: "O(log(min(a, b)))",
                space: "O(1)",
                why: "The numbers decrease exponentially in the Euclidean algorithm.",
              }}
              mistakes={[
                {
                  mistake: "Calculating LCM first and then GCD",
                  fix: "Always find GCD first to avoid large number overflows when multiplying a * b.",
                },
              ]}
              tryIt="Can you find the GCD of three numbers?"
            />

            <QuestionCard
              title="Binary to Decimal"
              learn="Understanding base-2 vs base-10 systems."
              context="How computers read numbers (0s and 1s) vs how humans read them. Like translating a secret code!"
              steps={[
                "Initialize decimal = 0, power = 0",
                "Extract last digit of binary number",
                "Multiply digit by 2 raised to the power",
                "Add to decimal",
                "Increment power, remove last digit",
                "Repeat until binary is 0",
              ]}
              pythonCode={`def binary_to_decimal(binary):
    decimal, i = 0, 0
    while binary != 0:
        dec = binary % 10
        decimal = decimal + dec * pow(2, i)
        binary = binary // 10
        i += 1
    return decimal`}
              cppCode={`#include <cmath>
int binaryToDecimal(long long n) {
    int decimal = 0, i = 0, remainder;
    while (n != 0) {
        remainder = n % 10;
        n /= 10;
        decimal += remainder * pow(2, i);
        ++i;
    }
    return decimal;
}`}
              walkthrough="Each digit in a binary number represents a power of 2. We start from the right (2^0) and move left, adding up the values where we see a '1'."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We process each bit of the binary number.",
              }}
              mistakes={[
                {
                  mistake: "Starting the power from 1 instead of 0",
                  fix: "The rightmost digit is always 2^0.",
                },
              ]}
              tryIt="Can you write a program to convert Decimal to Binary?"
            />

            <QuestionCard
              title="Leap Year"
              learn="Complex conditional logic and divisibility rules."
              context="A year with 366 days. It happens every 4 years, except for century years which must be divisible by 400."
              steps={[
                "Check if divisible by 400 -> Leap",
                "Else check if divisible by 100 -> Not Leap",
                "Else check if divisible by 4 -> Leap",
                "Otherwise -> Not Leap",
              ]}
              pythonCode={`def is_leap_year(year):
    if (year % 400 == 0): return True
    if (year % 100 == 0): return False
    if (year % 4 == 0): return True
    return False`}
              cppCode={`bool isLeapYear(int year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}`}
              walkthrough="The logic follows a hierarchy: 400 overrides 100, and 100 overrides 4."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Constant number of checks.",
              }}
              mistakes={[
                {
                  mistake: "Only checking divisibility by 4",
                  fix: "Century years like 1900 are not leap years even though they are divisible by 4.",
                },
              ]}
              tryIt="How many leap years are there between 2000 and 2100?"
            />

            <QuestionCard
              title="Perfect Square"
              learn="Using square root and integer conversion."
              context="A number like 16 or 25 that is the product of an integer with itself."
              steps={[
                "Calculate the square root of the number",
                "Check if the square of the integer part of the root equals the number",
              ]}
              pythonCode={`import math
def is_perfect_square(n):
    if n < 0: return False
    root = int(math.sqrt(n))
    return root * root == n`}
              cppCode={`#include <cmath>
bool isPerfectSquare(int n) {
    if (n < 0) return false;
    int root = sqrt(n);
    return root * root == n;
}`}
              walkthrough="We take the square root, truncate it to an integer, and see if squaring it back gives us the original number."
              complexity={{
                time: "O(1) or O(log N)",
                space: "O(1)",
                why: "Depends on the implementation of the sqrt function.",
              }}
              mistakes={[
                {
                  mistake: "Not handling negative numbers",
                  fix: "Negative numbers cannot be perfect squares in real numbers.",
                },
              ]}
              tryIt="Can you check for a perfect square without using the sqrt() function? (Hint: Use Binary Search)"
            />

            <QuestionCard
              title="Perfect Number"
              learn="Finding divisors and summing them."
              context="A number that equals the sum of its proper divisors (excluding itself). Example: 6 (1+2+3=6)."
              steps={[
                "Initialize sum = 1 (since 1 is a divisor for all n > 1)",
                "Loop from 2 to sqrt(n)",
                "If i divides n, add i and n/i to sum",
                "Check if sum == n",
              ]}
              pythonCode={`def is_perfect(n):
    if n <= 1: return False
    total = 1
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            total += i
            if i*i != n:
                total += n // i
    return total == n`}
              cppCode={`bool isPerfect(int n) {
    if (n <= 1) return false;
    int sum = 1;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i * i != n) sum += n / i;
        }
    }
    return sum == n;
}`}
              walkthrough="We find all divisors up to the square root to optimize the search, similar to the prime number check."
              complexity={{
                time: "O(√N)",
                space: "O(1)",
                why: "We only loop up to the square root of N.",
              }}
              mistakes={[
                {
                  mistake: "Including the number itself as a divisor",
                  fix: "A perfect number is the sum of its *proper* divisors.",
                },
              ]}
              tryIt="What is the next perfect number after 6 and 28?"
            />

            <QuestionCard
              title="Automorphic"
              learn="Comparing the end of a number's square."
              context="A number whose square ends with the number itself. Example: 5 (5²=25), 25 (25²=625)."
              steps={[
                "Calculate square of n",
                "Check if square % (10 ^ number_of_digits_in_n) == n",
              ]}
              pythonCode={`def is_automorphic(n):
    sq = n * n
    return str(sq).endswith(str(n))`}
              cppCode={`bool isAutomorphic(int n) {
    long long sq = (long long)n * n;
    int temp = n;
    while (temp > 0) {
        if (n % 10 != sq % 10) return false;
        n /= 10;
        sq /= 10;
        temp /= 10;
    }
    return true;
}`}
              walkthrough="In Python, string comparison is easiest. In C++, we compare digits from the right one by one."
              complexity={{
                time: "O(log N)",
                space: "O(1)",
                why: "We process each digit of the number.",
              }}
              mistakes={[
                {
                  mistake: "Integer overflow when squaring",
                  fix: "Use long long for the square in C++.",
                },
              ]}
              tryIt="Find all automorphic numbers up to 100."
            />

            <QuestionCard
              title="Greatest of Three"
              learn="Nested conditionals and logical operators."
              context="Finding the largest value among three inputs. Like picking the tallest person in a group of three."
              steps={[
                "Compare a with b and c",
                "If a is greater than both, a is greatest",
                "Else if b is greater than c, b is greatest",
                "Otherwise c is greatest",
              ]}
              pythonCode={`def greatest_of_three(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c`}
              cppCode={`int greatestOfThree(int a, int b, int c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}`}
              walkthrough="We use logical AND (&&) to check multiple conditions at once. This is cleaner than nested if-else blocks."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed number of comparisons.",
              }}
              mistakes={[
                {
                  mistake: "Not handling equal numbers",
                  fix: "Use >= instead of > to correctly handle cases where numbers are the same.",
                },
              ]}
              tryIt="Can you find the greatest of three numbers using the ternary operator?"
            />

            <QuestionCard
              title="Multiplication Table"
              learn="Simple loops and formatted output."
              context="Printing the table for a number, e.g., 5 x 1 = 5, 5 x 2 = 10..."
              steps={[
                "Loop from 1 to 10",
                "Multiply the number by the loop index",
                "Print the result in a readable format",
              ]}
              pythonCode={`def print_table(n):
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")`}
              cppCode={`void printTable(int n) {
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
}`}
              walkthrough="A basic for-loop that iterates 10 times to generate the products."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "The loop always runs 10 times.",
              }}
              mistakes={[
                {
                  mistake: "Starting the loop from 0",
                  fix: "Multiplication tables usually start from 1.",
                },
              ]}
              tryIt="Can you print a multiplication table up to 20?"
            />

            <QuestionCard
              title="Simple Interest"
              learn="Applying mathematical formulas in code."
              context="Calculating the interest on a loan or investment. Formula: (P * R * T) / 100."
              steps={[
                "Take Principal (P), Rate (R), and Time (T) as input",
                "Calculate (P * R * T) / 100",
                "Return the result",
              ]}
              pythonCode={`def calculate_si(p, r, t):
    return (p * r * t) / 100`}
              cppCode={`float calculateSI(float p, float r, float t) {
    return (p * r * t) / 100;
}`}
              walkthrough="A straightforward implementation of the mathematical formula. Use floating-point numbers for precision."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Single calculation.",
              }}
              mistakes={[
                {
                  mistake: "Using integer division",
                  fix: "Interest often involves decimals, so use float or double.",
                },
              ]}
              tryIt="Can you calculate Compound Interest?"
            />

            <QuestionCard
              title="Sum of N Natural Numbers"
              learn="Using the arithmetic series formula."
              context="Finding the sum of 1 + 2 + 3 + ... + N."
              steps={[
                "Use the formula: N * (N + 1) / 2",
                "Or use a loop from 1 to N",
              ]}
              pythonCode={`def sum_n(n):
    return n * (n + 1) // 2`}
              cppCode={`int sumN(int n) {
    return n * (n + 1) / 2;
}`}
              walkthrough="The formula N*(N+1)/2 is the most efficient way (O(1)) to find the sum of the first N natural numbers."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Single mathematical formula.",
              }}
              mistakes={[
                {
                  mistake: "Using a loop for very large N",
                  fix: "A loop takes O(N) time, while the formula is O(1).",
                },
              ]}
              tryIt="Can you find the sum of squares of the first N natural numbers?"
            />

            <QuestionCard
              title="ASCII Value"
              learn="Character to integer conversion."
              context="Finding the numerical code for a character. 'A' is 65, 'a' is 97."
              steps={[
                "In Python, use ord(char)",
                "In C++, simply cast the char to an int",
              ]}
              pythonCode={`def get_ascii(char):
    return ord(char)`}
              cppCode={`int getASCII(char c) {
    return (int)c;
}`}
              walkthrough="Computers store characters as numbers. ASCII is the standard mapping for these numbers."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Direct conversion.",
              }}
              mistakes={[
                {
                  mistake: "Confusing ASCII with Unicode",
                  fix: "ASCII is a subset of Unicode (UTF-8).",
                },
              ]}
              tryIt="What is the ASCII value of the space character?"
            />

            <div className="mt-16 p-8 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Keep Practicing!
              </h2>
              <p className="text-gray-400 mb-6">
                We've covered the most critical foundation questions. The
                remaining 10+ logic questions (like ASCII values, Simple
                Interest, and Greatest of Three) follow similar patterns. Master
                these first, and the rest will feel like a breeze!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/part-2"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Next: String Mastery →
                </Link>
              </div>
            </div>
          </main>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 mb-4">Ready for the next set?</p>
          <Link
            href="/blog/part-2"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105"
          >
            Go to Part 2: String Mastery →
          </Link>
        </footer>
      </div>
    </div>
  );
}
