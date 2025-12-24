import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function BlogPart2() {
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
          <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
            Part 2 of 5
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            String Mastery: The Most Asked Category
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Strings appear in nearly 40% of technical interviews. Mastering
            these 18 questions will give you a massive advantage in any coding
            round.
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
                  "Reverse String",
                  "Palindrome String",
                  "Anagram Check",
                  "First Non-Repeating",
                  "Reverse Words",
                  "Count Vowels",
                  "Remove Spaces",
                  "Case Conversion",
                  "Max Occurring Char",
                  "Frequency Count",
                  "Only Digits Check",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <QuestionCard
              title="Reverse String"
              learn="In-place modification vs creating new strings."
              context="Like flipping a cassette tape or reading a word in a mirror. 'hello' becomes 'olleh'."
              steps={[
                "Convert string to a mutable format (like a list or array)",
                "Use two pointers: one at start, one at end",
                "Swap characters and move pointers toward center",
                "Join back into a string",
              ]}
              pythonCode={`def reverse_string(s):
    # Python strings are immutable, so we use slicing or list
    return s[::-1]

# Two-pointer approach
def reverse_string_2p(s):
    chars = list(s)
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return "".join(chars)`}
              cppCode={`#include <string>
#include <algorithm>
using namespace std;

string reverseString(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
    return s;
}`}
              walkthrough="In Python, s[::-1] is the most efficient way. In C++, we can modify the string in-place using two pointers, which is very memory efficient."
              complexity={{
                time: "O(N)",
                space: "O(N) for Python (new string), O(1) for C++ (in-place)",
                why: "We visit each character once.",
              }}
              mistakes={[
                {
                  mistake:
                    "Trying to modify a Python string directly (s[0] = 'a')",
                  fix: "Strings in Python are immutable. Convert to a list first.",
                },
              ]}
              tryIt="Can you reverse a string without using any extra space in Python?"
            />

            <QuestionCard
              title="Palindrome String"
              learn="Case sensitivity and special character handling."
              context="A word that reads the same both ways, like 'radar' or 'madam'."
              steps={[
                "Clean the string (remove spaces, convert to lowercase)",
                "Compare the string with its reverse",
                "Or use two pointers to compare characters from both ends",
              ]}
              pythonCode={`def is_palindrome(s):
    s = s.lower().replace(" ", "")
    return s == s[::-1]`}
              cppCode={`bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}`}
              walkthrough="The two-pointer approach is better as it doesn't require creating a reversed copy of the string, saving memory."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We only use two pointers.",
              }}
              mistakes={[
                {
                  mistake:
                    "Forgetting to handle uppercase/lowercase differences",
                  fix: "Always normalize the string using .lower() or tolower() before comparing.",
                },
              ]}
              tryIt="Modify the code to ignore all non-alphanumeric characters (like punctuation)."
            />

            <QuestionCard
              title="Anagram Check"
              learn="Using frequency arrays or sorting to compare content."
              context="Two words are anagrams if they use the exact same letters, like 'listen' and 'silent'."
              steps={[
                "Check if lengths are equal",
                "Sort both strings and compare",
                "OR: Count frequency of each character in both strings and compare counts",
              ]}
              pythonCode={`def are_anagrams(s1, s2):
    return sorted(s1) == sorted(s2)

# Frequency count approach
from collections import Counter
def are_anagrams_fast(s1, s2):
    return Counter(s1) == Counter(s2)`}
              cppCode={`#include <algorithm>
bool areAnagrams(string s1, string s2) {
    if (s1.length() != s2.length()) return false;
    sort(s1.begin(), s1.end());
    sort(s2.begin(), s2.end());
    return s1 == s2;
}`}
              walkthrough="Sorting is easy to implement but takes O(N log N). Using a frequency array (size 256 for ASCII) takes O(N) and is the preferred interview solution."
              complexity={{
                time: "O(N log N) for sorting, O(N) for frequency count",
                space: "O(1) if we use a fixed-size array of 256",
                why: "Frequency count only needs to visit each character once.",
              }}
              mistakes={[
                {
                  mistake: "Not checking length first",
                  fix: "If lengths are different, they can't be anagrams. This is a quick O(1) exit.",
                },
              ]}
              tryIt="How would you handle anagrams if the strings contained Unicode characters (like emojis)?"
            />

            <QuestionCard
              title="First Non-Repeating"
              learn="Using a hash map or frequency array for lookups."
              context="Finding the first character that appears only once. In 'swiss', 'w' is the first non-repeating character."
              steps={[
                "Create a frequency map of all characters",
                "Iterate through the string again",
                "Return the first character that has a count of 1",
              ]}
              pythonCode={`def first_unique(s):
    counts = {}
    for char in s:
        counts[char] = counts.get(char, 0) + 1
    
    for char in s:
        if counts[char] == 1:
            return char
    return None`}
              cppCode={`#include <unordered_map>
char firstUnique(string s) {
    unordered_map<char, int> counts;
    for (char c : s) counts[c]++;
    for (char c : s) {
        if (counts[c] == 1) return c;
    }
    return '\\0';
}`}
              walkthrough="We need two passes: one to count everything, and one to find the first one that appeared only once. This is a classic 'trade space for time' problem."
              complexity={{
                time: "O(N)",
                space: "O(1) (max 256 characters for ASCII)",
                why: "We visit each character twice.",
              }}
              mistakes={[
                {
                  mistake:
                    "Returning the first character with count 1 from the map",
                  fix: "Maps don't always preserve order. You must iterate through the original string to find the 'first' one.",
                },
              ]}
              tryIt="Can you solve this in a single pass? (Hint: Store the index in the map)"
            />

            <QuestionCard
              title="Reverse Words"
              learn="Splitting, reversing, and joining."
              context="Turning 'Sky is blue' into 'blue is Sky'. Common in text processing apps."
              steps={[
                "Split the string into a list of words",
                "Reverse the list of words",
                "Join the words back with spaces",
              ]}
              pythonCode={`def reverse_words(s):
    words = s.split()
    return " ".join(words[::-1])`}
              cppCode={`#include <sstream>
#include <vector>
string reverseWords(string s) {
    stringstream ss(s);
    string word;
    vector<string> words;
    while (ss >> word) words.push_back(word);
    
    string res = "";
    for (int i = words.size() - 1; i >= 0; i--) {
        res += words[i] + (i == 0 ? "" : " ");
    }
    return res;
}`}
              walkthrough="In Python, this is a one-liner. In C++, we use stringstream to easily extract words, then build the result backwards."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We store all words in a new structure.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting to handle multiple spaces between words",
                  fix: "Use split() in Python or stringstream in C++ which automatically handle whitespace.",
                },
              ]}
              tryIt="Can you reverse the words in-place without using extra space for a list/vector?"
            />

            <QuestionCard
              title="Count Vowels"
              learn="Iterating and checking against a set of characters."
              context="Counting how many a, e, i, o, u are in a sentence."
              steps={[
                "Initialize vowel and consonant counters to 0",
                "Convert string to lowercase",
                "Iterate through each character",
                "If it's a vowel, increment vowel count",
                "If it's an alphabet but not a vowel, increment consonant count",
              ]}
              pythonCode={`def count_vowels_consonants(s):
    vowels = "aeiou"
    v_count = c_count = 0
    for char in s.lower():
        if char.isalpha():
            if char in vowels:
                v_count += 1
            else:
                c_count += 1
    return v_count, c_count`}
              cppCode={`void countVC(string s) {
    int v = 0, c = 0;
    for (char ch : s) {
        ch = tolower(ch);
        if (isalpha(ch)) {
            if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') v++;
            else c++;
        }
    }
    cout << "Vowels: " << v << ", Consonants: " << c;
}`}
              walkthrough="We use a simple loop and check each character. Normalizing to lowercase first simplifies the logic."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We visit each character once.",
              }}
              mistakes={[
                {
                  mistake: "Counting spaces or numbers as consonants",
                  fix: "Always use isalpha() to ensure you're only counting letters.",
                },
              ]}
              tryIt="Can you count the number of digits in the string as well?"
            />

            <QuestionCard
              title="Remove Spaces"
              learn="String filtering and joining."
              context="Cleaning up a string by removing all whitespace. 'a b c' becomes 'abc'."
              steps={[
                "Iterate through the string",
                "If character is not a space, add it to the result",
              ]}
              pythonCode={`def remove_spaces(s):
    return "".join(s.split())

# Alternative
def remove_spaces_manual(s):
    return s.replace(" ", "")`}
              cppCode={`string removeSpaces(string s) {
    string res = "";
    for (char c : s) {
        if (c != ' ') res += c;
    }
    return res;
}`}
              walkthrough="In Python, split() and join() is very efficient as it handles all types of whitespace (tabs, newlines). In C++, we build a new string character by character."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We create a new string without spaces.",
              }}
              mistakes={[
                {
                  mistake: "Only removing the first space",
                  fix: "Use a loop or a global replace function to remove all occurrences.",
                },
              ]}
              tryIt="Can you remove spaces in-place in C++ using the 'erase-remove' idiom?"
            />

            <QuestionCard
              title="Case Conversion"
              learn="ASCII manipulation and built-in functions."
              context="Swapping uppercase to lowercase and vice versa. 'AbC' becomes 'aBc'."
              steps={[
                "Iterate through each character",
                "If uppercase, convert to lowercase",
                "If lowercase, convert to uppercase",
              ]}
              pythonCode={`def swap_case(s):
    return s.swapcase()`}
              cppCode={`string swapCase(string s) {
    for (int i = 0; i < s.length(); i++) {
        if (isupper(s[i])) s[i] = tolower(s[i]);
        else if (islower(s[i])) s[i] = toupper(s[i]);
    }
    return s;
}`}
              walkthrough="Most languages have built-in functions for this. Under the hood, it's often done by adding or subtracting 32 from the ASCII value of the character."
              complexity={{
                time: "O(N)",
                space: "O(1) if in-place, O(N) if new string",
                why: "We visit each character once.",
              }}
              mistakes={[
                {
                  mistake: "Trying to convert non-alphabetic characters",
                  fix: "Built-in functions like tolower() usually handle non-alphabetic characters by returning them unchanged.",
                },
              ]}
              tryIt="Can you implement this using bitwise XOR with 32?"
            />

            <QuestionCard
              title="Max Occurring Char"
              learn="Frequency mapping and finding the maximum."
              context="Finding which character appears most often in a string. In 'apple', 'p' is the max occurring character."
              steps={[
                "Create a frequency map (dictionary or array)",
                "Find the character with the highest count",
              ]}
              pythonCode={`def max_char(s):
    counts = {}
    for char in s:
        counts[char] = counts.get(char, 0) + 1
    return max(counts, key=counts.get)`}
              cppCode={`char maxChar(string s) {
    int counts[256] = {0};
    for (char c : s) counts[(unsigned char)c]++;
    
    char res;
    int max_count = -1;
    for (int i = 0; i < 256; i++) {
        if (counts[i] > max_count) {
            max_count = counts[i];
            res = (char)i;
        }
    }
    return res;
}`}
              walkthrough="We use an array of size 256 to store counts for all possible ASCII characters. This is very fast and uses constant extra space."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "The frequency array size is fixed at 256.",
              }}
              mistakes={[
                {
                  mistake: "Not handling ties",
                  fix: "Decide if you want to return the first one found or all of them.",
                },
              ]}
              tryIt="How would you handle this for Unicode strings with thousands of possible characters?"
            />

            <QuestionCard
              title="Only Digits Check"
              learn="String validation logic."
              context="Checking if a string contains only numbers, like a phone number or zip code."
              steps={[
                "Iterate through the string",
                "If any character is not a digit, return False",
                "If loop finishes, return True",
              ]}
              pythonCode={`def is_only_digits(s):
    return s.isdigit()`}
              cppCode={`bool isOnlyDigits(string s) {
    if (s.empty()) return false;
    for (char c : s) {
        if (!isdigit(c)) return false;
    }
    return true;
}`}
              walkthrough="A simple validation loop. In Python, .isdigit() is the standard way."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We check each character once.",
              }}
              mistakes={[
                {
                  mistake: "Returning True for an empty string",
                  fix: "Always check if the string is empty first, as an empty string usually shouldn't count as 'only digits'.",
                },
              ]}
              tryIt="How would you modify this to allow a single decimal point (for float numbers)?"
            />

            <QuestionCard
              title="Frequency Count"
              learn="Mapping characters to their occurrence counts."
              context="Counting how many times each character appears in a string."
              steps={[
                "Initialize an empty map or array of size 256",
                "Iterate through the string",
                "Increment the count for each character",
              ]}
              pythonCode={`from collections import Counter
def char_frequency(s):
    return dict(Counter(s))`}
              cppCode={`#include <map>
void charFrequency(string s) {
    map<char, int> freq;
    for (char c : s) freq[c]++;
    for (auto const& [key, val] : freq) {
        cout << key << ": " << val << endl;
    }
}`}
              walkthrough="We use a hash map (or a frequency array) to store the count of each character encountered."
              complexity={{
                time: "O(N)",
                space: "O(1) (max 256 for ASCII)",
                why: "We visit each character once.",
              }}
              mistakes={[
                {
                  mistake:
                    "Using a map in C++ (O(N log K)) instead of unordered_map (O(N))",
                  fix: "Use unordered_map for better performance if order doesn't matter.",
                },
              ]}
              tryIt="Can you print the characters in descending order of their frequency?"
            />

            <QuestionCard
              title="Remove Non-Alphabetic"
              learn="Filtering strings based on character properties."
              context="Cleaning a string to keep only letters. 'Hello, 123!' becomes 'Hello'."
              steps={[
                "Iterate through the string",
                "If character is alphabetic, keep it",
                "Otherwise, discard it",
              ]}
              pythonCode={`def remove_non_alpha(s):
    return "".join(c for c in s if c.isalpha())`}
              cppCode={`string removeNonAlpha(string s) {
    string res = "";
    for (char c : s) {
        if (isalpha(c)) res += c;
    }
    return res;
}`}
              walkthrough="We use the isalpha() function to filter out numbers, spaces, and special characters."
              complexity={{
                time: "O(N)",
                space: "O(N)",
                why: "We create a new string with only alphabetic characters.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting to handle spaces",
                  fix: "If you want to keep spaces, add a check for c == ' '.",
                },
              ]}
              tryIt="How would you remove only the digits from a string?"
            />

            <div className="mt-16 p-8 bg-purple-600/10 border border-purple-500/20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                String Mastery Continued
              </h2>
              <p className="text-gray-400 mb-6">
                You've mastered the core patterns! The remaining questions like
                "Count Vowels", "Remove Spaces", and "Case Conversion" are
                simple variations of these loops.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/part-3"
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Next: Arrays & Sorting →
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
