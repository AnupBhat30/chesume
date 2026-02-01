import Navbar from "@/components/landing/Navbar";
import CodeBlock from "@/components/blog/CodeBlock";
import SyntaxSection from "@/components/blog/SyntaxSection";

export default function SyntaxGuideBlog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-12">
        <nav className="mb-12">
          <a
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            ← Back to Blog Index
          </a>
        </nav>

        <header className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
            The Complete Reference
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-green-200 to-gray-500 bg-clip-text text-transparent">
            Python & C++ Syntax + DSA Mastery
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know: from basic syntax to advanced
            techniques, plus complete implementations of all essential data
            structures and algorithms.
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-500">
                Python Syntax
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Basic Syntax & Data Types</li>
                <li>• Control Structures</li>
                <li>• Functions & Advanced Functions</li>
                <li>• Classes & OOP</li>
                <li>• Modules & Packages</li>
                <li>• File I/O & Exceptions</li>
                <li>• Advanced Features</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-500">
                C++ Syntax
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Basic Syntax & Data Types</li>
                <li>• Pointers & Memory</li>
                <li>• Classes & OOP</li>
                <li>• STL Containers</li>
                <li>• Algorithms & Utilities</li>
                <li>• File I/O & Exceptions</li>
                <li>• Advanced Features</li>
              </ul>
            </div>
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-lg font-semibold text-purple-500">
                Data Structures & Algorithms
              </h3>
              <ul className="space-y-2 text-sm text-gray-400 grid grid-cols-2 gap-4">
                <div>
                  <li>• Arrays & Strings</li>
                  <li>• Linked Lists</li>
                  <li>• Stacks & Queues</li>
                  <li>• Trees (BST, Heap, Trie)</li>
                  <li>• Hash Tables</li>
                </div>
                <div>
                  <li>• Graphs</li>
                  <li>• Sorting Algorithms</li>
                  <li>• Searching Algorithms</li>
                  <li>• Dynamic Programming</li>
                  <li>• Greedy Algorithms</li>
                </div>
              </ul>
            </div>
          </div>
        </section>

        <main className="space-y-24">
          {/* Python Section */}
          <section id="python-syntax">
            <div className="mb-12 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-green-500 mb-2">
                Python Syntax & Features
              </h2>
              <p className="text-gray-400">
                Complete guide from basics to advanced Python features used in
                interviews.
              </p>
            </div>

            {/* Python Syntax Content */}
            <div className="space-y-12">
              {/* Basic Syntax & Data Types */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  1. Basic Syntax & Data Types
                </h3>

                <h4 className="text-lg font-medium mb-6">
                  Variables & Numbers
                </h4>
                <SyntaxSection
                  title="Variables & Numbers"
                  explanation="Python uses dynamic typing. Variables are created on assignment and can change types."
                  pythonCode={`# Variables
x = 5          # int
y = 3.14       # float
z = 2 + 3j     # complex

# Type conversion
int(3.7)       # 3 (truncates)
float(5)       # 5.0
str(42)        # '42'

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0`}
                  interviewTips="Know type conversion edge cases like float to int truncation."
                  commonPitfalls="Don't use mutable objects as default arguments."
                  performance="Use integers for counters; floats are slower."
                />

                <SyntaxSection
                  title="Strings"
                  explanation="Immutable sequences of characters with rich string methods."
                  pythonCode={`# String literals
s1 = 'hello'
s2 = "world"
s3 = '''multi
line'''

# String operations
s = "Hello World"
len(s)              # 11
s[0]                # 'H'
s[1:4]              # 'ell'
s.upper()           # 'HELLO WORLD'
s.split()           # ['Hello', 'World']
" ".join(['a', 'b']) # 'a b'

# String formatting
f"Value: {x}"       # f-strings (Python 3.6+)
"Value: {}".format(x)
"Value: %s" % x`}
                  interviewTips="Use f-strings for readability; know slicing syntax."
                  commonPitfalls="Strings are immutable - s[0] = 'x' fails."
                  performance="String concatenation with + is O(n²); use join()."
                />

                <SyntaxSection
                  title="Lists"
                  explanation="Mutable, ordered sequences. Most versatile data structure."
                  pythonCode={`# List creation
lst = [1, 2, 3]
empty = []
nested = [[1, 2], [3, 4]]

# List operations
lst.append(4)       # [1, 2, 3, 4]
lst.insert(0, 0)    # [0, 1, 2, 3, 4]
lst.pop()           # removes last element
lst.remove(2)       # removes first occurrence of 2
lst.sort()          # sorts in place
lst.reverse()       # reverses in place

# List comprehensions
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
evens = [x for x in lst if x % 2 == 0]`}
                  interviewTips="List comprehensions are more Pythonic than loops."
                  commonPitfalls="Modifying list while iterating causes skips."
                  performance="append() is O(1) amortized; insert(0) is O(n)."
                />

                <SyntaxSection
                  title="Tuples"
                  explanation="Immutable ordered sequences. Use for fixed data."
                  pythonCode={`# Tuple creation
tup = (1, 2, 3)
single = (5,)      # comma required for single element
empty = ()
tup = 1, 2, 3      # parentheses optional

# Tuple operations
tup[0]             # 1
tup[1:3]           # (2, 3)
len(tup)           # 3
1 in tup           # True

# Tuple unpacking
a, b, c = tup
first, *rest = tup  # first=1, rest=[2, 3]
*head, last = tup   # head=[1, 2], last=3`}
                  interviewTips="Use tuples for dictionary keys; unpacking is powerful."
                  commonPitfalls="Single element needs comma: (5,) not (5)."
                  performance="Tuples are faster than lists for read-only data."
                />

                <SyntaxSection
                  title="Dictionaries"
                  explanation="Key-value mappings. Ordered since Python 3.7."
                  pythonCode={`# Dictionary creation
d = {'a': 1, 'b': 2}
d = dict(a=1, b=2)
d = dict([('a', 1), ('b', 2)])

# Dictionary operations
d['c'] = 3         # add/update
d.get('a', 0)      # 1 (safe access)
d.pop('b')         # removes and returns value
d.keys()           # dict_keys(['a', 'c'])
d.values()          # dict_values([1, 3])
d.items()          # dict_items([('a', 1), ('c', 3)])

# Dict comprehensions
squares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 4: 4, ...}`}
                  interviewTips="Use get() to avoid KeyError; dicts are O(1) lookup."
                  commonPitfalls="Keys must be hashable (immutable)."
                  performance="O(1) average case lookup; use for frequency counting."
                />

                <SyntaxSection
                  title="Sets"
                  explanation="Unordered collections of unique elements."
                  pythonCode={`# Set creation
s = {1, 2, 3}
s = set([1, 2, 2, 3])  # {1, 2, 3} (duplicates removed)
empty = set()

# Set operations
s.add(4)           # {1, 2, 3, 4}
s.remove(2)        # {1, 3, 4}
s.discard(5)       # no error if not present
2 in s             # True

# Set algebra
a = {1, 2, 3}
b = {2, 3, 4}
a | b              # union: {1, 2, 3, 4}
a & b              # intersection: {2, 3}
a - b              # difference: {1}
a ^ b              # symmetric difference: {1, 4}`}
                  interviewTips="Use sets for membership testing; deduplication."
                  commonPitfalls="Sets are unordered; no indexing."
                  performance="O(1) membership testing; faster than lists."
                />

                <SyntaxSection
                  title="Booleans"
                  explanation="Truth values with special behavior in conditionals."
                  pythonCode={`# Boolean values
True, False

# Truthy/falsy values
bool(0)        # False
bool(1)        # True
bool([])       # False
bool([1])      # True
bool('')       # False
bool('hi')     # True
bool(None)     # False

# Boolean operations
and, or, not

# Short-circuit evaluation
x = 5
y = 0
result = x > 0 and y != 0  # False (y != 0 not evaluated)`}
                  interviewTips="Know truthy/falsy values; use short-circuiting."
                  commonPitfalls="Don't compare with == True; use implicit boolean."
                  performance="Short-circuit evaluation can save computations."
                />
              </div>

              {/* Control Structures */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  2. Control Structures
                </h3>

                <SyntaxSection
                  title="If/Else Statements"
                  explanation="Conditional execution with elif chains."
                  pythonCode={`# Basic if/else
if condition:
    # do something
elif another_condition:
    # do something else
else:
    # default case

# Ternary operator
result = x if condition else y

# Multiple conditions
if x > 0 and y > 0:
    print("Both positive")

# Membership testing
if item in collection:
    print("Found it")`}
                  interviewTips="Use ternary for simple cases; chain conditions properly."
                  commonPitfalls="Indentation errors; forgetting colons."
                  performance="Short-circuit evaluation in and/or."
                />

                <SyntaxSection
                  title="Loops"
                  explanation="for and while loops with break/continue."
                  pythonCode={`# for loop
for item in iterable:
    if condition:
        continue  # skip to next iteration
    if exit_condition:
        break     # exit loop
    # process item

# while loop
while condition:
    # do something
    if exit_condition:
        break

# enumerate for index
for i, item in enumerate(items):
    print(f"Index {i}: {item}")

# range for numbers
for i in range(5):      # 0, 1, 2, 3, 4
for i in range(1, 6):   # 1, 2, 3, 4, 5
for i in range(0, 10, 2): # 0, 2, 4, 6, 8`}
                  interviewTips="Use enumerate() for indices; range() for counters."
                  commonPitfalls="Modifying list during iteration; infinite while loops."
                  performance="for loops are faster than while for known iterations."
                />

                <SyntaxSection
                  title="Comprehensions"
                  explanation="Concise syntax for creating collections."
                  pythonCode={`# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}

# Set comprehension
unique_squares = {x**2 for x in [-2, -1, 0, 1, 2]}

# Nested comprehensions
matrix = [[i*j for j in range(3)] for i in range(3)]

# Multiple conditions
filtered = [x for x in data if x > 0 and x < 100]

# Complex expressions
processed = [func(item) for item in data if condition(item)]`}
                  interviewTips="More readable than nested loops; use for filtering/mapping."
                  commonPitfalls="Don't overuse; can become unreadable."
                  performance="Often faster than equivalent loops due to optimization."
                />
              </div>

              {/* Functions */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  3. Functions
                </h3>

                <SyntaxSection
                  title="Function Definition"
                  explanation="First-class functions with flexible parameter handling."
                  pythonCode={`# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default arguments
def power(base, exponent=2):
    return base ** exponent

# Multiple return values
def divide(a, b):
    quotient = a // b
    remainder = a % b
    return quotient, remainder

# Unpacking return values
q, r = divide(10, 3)`}
                  interviewTips="Use descriptive names; return multiple values as tuples."
                  commonPitfalls="Mutable defaults are shared across calls."
                  performance="Function calls have overhead; inline simple operations."
                />

                <SyntaxSection
                  title="Arguments & Keyword Arguments"
                  explanation="Flexible parameter passing with *args and **kwargs."
                  pythonCode={`# *args for variable positional arguments
def sum_all(*args):
    return sum(args)

sum_all(1, 2, 3, 4)  # 10

# **kwargs for variable keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30)

# Mixed parameters
def func(required, *args, default=None, **kwargs):
    pass

# Calling with unpacking
args = (1, 2, 3)
kwargs = {'key': 'value'}
func(*args, **kwargs)`}
                  interviewTips="Use *args/**kwargs for flexible APIs; order matters."
                  commonPitfalls="Wrong parameter order causes errors."
                  performance="Unpacking has minimal overhead."
                />

                <SyntaxSection
                  title="Lambda Functions"
                  explanation="Anonymous functions for simple operations."
                  pythonCode={`# Basic lambda
square = lambda x: x ** 2
square(5)  # 25

# Lambda with multiple arguments
add = lambda x, y: x + y

# Common use cases
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Sorting with key function
points = [(1, 2), (3, 1), (5, 0)]
points.sort(key=lambda p: p[1])  # sort by y-coordinate`}
                  interviewTips="Use for simple functions; great with map/filter/sort."
                  commonPitfalls="Lambdas can't contain statements (only expressions)."
                  performance="Same as regular functions for simple cases."
                />

                <SyntaxSection
                  title="Recursion"
                  explanation="Functions calling themselves. Need base case."
                  pythonCode={`# Factorial
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Tail recursion (Python doesn't optimize)
def tail_factorial(n, acc=1):
    if n <= 1:
        return acc
    return tail_factorial(n-1, n * acc)

# Memoization for performance
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1:
        return n
    return fib_memo(n-1) + fib_memo(n-2)`}
                  interviewTips="Always have base case; use memoization for optimization."
                  commonPitfalls="Stack overflow for deep recursion; forgetting base case."
                  performance="Exponential without memoization; use iterative for large n."
                />
              </div>

              {/* Classes & OOP */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  4. Classes & OOP
                </h3>

                <SyntaxSection
                  title="Class Definition"
                  explanation="Blueprint for creating objects with methods and attributes."
                  pythonCode={`# Basic class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"

# Creating instances
person = Person("Alice", 30)
person.greet()  # "Hello, I'm Alice"

# Class vs instance attributes
class Counter:
    count = 0  # class attribute
    
    def __init__(self):
        self.value = 0  # instance attribute
        Counter.count += 1`}
                  interviewTips="self is explicit; __init__ is constructor."
                  commonPitfalls="Forgetting self parameter; confusing class/instance attributes."
                  performance="Classes have overhead; use for complex data structures."
                />

                <SyntaxSection
                  title="Inheritance"
                  explanation="Creating subclasses that inherit and extend behavior."
                  pythonCode={`# Single inheritance
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

# Multiple inheritance
class A:
    def method(self):
        return "A"

class B:
    def method(self):
        return "B"

class C(A, B):
    pass

c = C()
c.method()  # "A" (MRO: Method Resolution Order)

# super() for parent calls
class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed`}
                  interviewTips="Use super() for parent initialization; understand MRO."
                  commonPitfalls="Diamond problem in multiple inheritance."
                  performance="Inheritance has lookup overhead; prefer composition."
                />

                <SyntaxSection
                  title="Magic Methods"
                  explanation="Special methods for operator overloading and object behavior."
                  pythonCode={`class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __len__(self):
        return 2  # number of components

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2  # Vector(4, 6)
print(v3)     # Vector(4, 6)
len(v3)       # 2`}
                  interviewTips="Implement __eq__ and __hash__ together; __str__ vs __repr__."
                  commonPitfalls="Forgetting __hash__ when implementing __eq__."
                  performance="Magic methods enable efficient operator use."
                />
              </div>

              {/* Modules & Packages */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  5. Modules & Packages
                </h3>

                <SyntaxSection
                  title="Import Statements"
                  explanation="Loading code from other files and packages."
                  pythonCode={`# Import module
import math
math.sqrt(16)  # 4.0

# Import specific items
from math import sqrt, pi
sqrt(16)  # 4.0

# Import with alias
import numpy as np
np.array([1, 2, 3])

# Import all (avoid in production)
from math import *

# Relative imports (in packages)
from .utils import helper  # same package
from ..data import loader  # parent package`}
                  interviewTips="Use explicit imports; avoid wildcard imports."
                  commonPitfalls="Circular imports; import order matters."
                  performance="Imports are cached; first import is slower."
                />

                <SyntaxSection
                  title="__name__ and Main Guard"
                  explanation="Special variable for script vs module execution."
                  pythonCode={`# In mymodule.py
print(__name__)  # "__main__" if run directly, "mymodule" if imported

def main():
    print("Running as script")

if __name__ == "__main__":
    main()  # Only runs when executed directly

# Usage
# python mymodule.py -> runs main()
# import mymodule -> doesn't run main()`}
                  interviewTips="Always use if __name__ == '__main__' for scripts."
                  commonPitfalls="Code runs on import without guard."
                  performance="Guard prevents unnecessary execution on import."
                />
              </div>

              {/* File I/O & Exceptions */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  6. File I/O & Exceptions
                </h3>

                <SyntaxSection
                  title="File Operations"
                  explanation="Reading from and writing to files."
                  pythonCode={`# Reading files
with open('file.txt', 'r') as f:
    content = f.read()        # read all
    lines = f.readlines()     # read lines as list
    line = f.readline()       # read one line

# Writing files
with open('output.txt', 'w') as f:
    f.write("Hello World\\n")
    f.writelines(["line1\\n", "line2\\n"])

# Binary files
with open('data.bin', 'rb') as f:
    data = f.read()

# Context manager ensures file is closed
# Manual closing (avoid)
f = open('file.txt')
try:
    content = f.read()
finally:
    f.close()`}
                  interviewTips="Always use with statement; know read modes."
                  commonPitfalls="Forgetting to close files; wrong encoding."
                  performance="read() loads entire file; use readline() for large files."
                />

                <SyntaxSection
                  title="Exception Handling"
                  explanation="Handling runtime errors gracefully."
                  pythonCode={`# Basic try/except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# Multiple exceptions
try:
    value = int(input("Enter number: "))
except ValueError:
    print("Not a valid number")
except KeyboardInterrupt:
    print("User cancelled")

# Exception with else/finally
try:
    result = risky_operation()
except Exception as e:
    print(f"Error: {e}")
else:
    print("Success!")  # runs if no exception
finally:
    cleanup()  # always runs

# Raising exceptions
if x < 0:
    raise ValueError("x must be non-negative")

# Custom exceptions
class CustomError(Exception):
    pass`}
                  interviewTips="Catch specific exceptions; use finally for cleanup."
                  commonPitfalls="Bare except: catches everything including KeyboardInterrupt."
                  performance="Exceptions are expensive; use for exceptional cases only."
                />
              </div>

              {/* Advanced Features */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  7. Advanced Features
                </h3>

                <SyntaxSection
                  title="Decorators"
                  explanation="Functions that modify other functions."
                  pythonCode={`# Function decorator
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)

slow_function()  # prints timing

# Decorator with parameters
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello {name}")

# Built-in decorators
class MyClass:
    @property
    def name(self):
        return self._name
    
    @staticmethod
    def utility():
        pass
    
    @classmethod
    def from_string(cls, s):
        return cls(s)`}
                  interviewTips="Understand closure; common in frameworks."
                  commonPitfalls="Forgetting functools.wraps for metadata."
                  performance="Adds function call overhead."
                />

                <SyntaxSection
                  title="Generators"
                  explanation="Functions that yield values lazily."
                  pythonCode={`# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)

# Generator expression
squares = (x**2 for x in range(10))  # lazy
list(squares)  # [0, 1, 4, 9, ...]

# Memory efficient
def read_large_file(filename):
    with open(filename) as f:
        for line in f:
            yield line.strip()

# Pipeline with generators
data = (line for line in open('file.txt'))
processed = (process(line) for line in data)
filtered = (item for item in processed if condition(item))`}
                  interviewTips="Use for large datasets; itertools for combinations."
                  commonPitfalls="Generators are exhausted after one use."
                  performance="Memory efficient; faster startup than lists."
                />

                <SyntaxSection
                  title="Context Managers"
                  explanation="Objects that manage resources with with statement."
                  pythonCode={`# Using context managers
with open('file.txt', 'r') as f:
    content = f.read()

# Custom context manager
class Timer:
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time.time()
        print(f"Elapsed: {self.end - self.start:.2f}s")

with Timer():
    do_work()

# contextlib for simple cases
from contextlib import contextmanager

@contextmanager
def temp_dir():
    import tempfile, os
    dir_path = tempfile.mkdtemp()
    try:
        yield dir_path
    finally:
        import shutil
        shutil.rmtree(dir_path)

with temp_dir() as tmp:
    # use tmp directory`}
                  interviewTips="Implement __enter__ and __exit__; use contextlib."
                  commonPitfalls="Exceptions in __exit__ can mask original errors."
                  performance="Ensures cleanup even with exceptions."
                />

                <SyntaxSection
                  title="Type Hints"
                  explanation="Optional static typing for better code clarity."
                  pythonCode={`from typing import List, Dict, Optional, Union

# Function type hints
def greet(name: str) -> str:
    return f"Hello {name}"

# Complex types
def process_data(data: List[Dict[str, Union[int, str]]]) -> Optional[str]:
    pass

# Generic types
from typing import TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):
    def __init__(self):
        self.items: List[T] = []
    
    def push(self, item: T) -> None:
        self.items.append(item)
    
    def pop(self) -> T:
        return self.items.pop()

# Union types
def add(x: Union[int, float], y: Union[int, float]) -> Union[int, float]:
    return x + y`}
                  interviewTips="Use for complex functions; helps IDEs and documentation."
                  commonPitfalls="Type hints don't enforce types at runtime."
                  performance="Minimal runtime overhead; helps optimization."
                />

                <SyntaxSection
                  title="Dataclasses"
                  explanation="Automatic class generation for data storage."
                  pythonCode={`from dataclasses import dataclass, field
from typing import List

@dataclass
class Person:
    name: str
    age: int
    email: str = ""  # default value
    
    def greet(self):
        return f"Hello, I'm {self.name}"

@dataclass
class AddressBook:
    owner: str
    contacts: List[Person] = field(default_factory=list)
    
    def add_contact(self, person: Person):
        self.contacts.append(person)

# Automatic methods
p1 = Person("Alice", 30, "alice@email.com")
p2 = Person("Bob", 25)
print(p1)  # Person(name='Alice', age=30, email='alice@email.com')
p1 == Person("Alice", 30, "alice@email.com")  # True

# Frozen dataclasses
@dataclass(frozen=True)
class ImmutablePoint:
    x: int
    y: int

point = ImmutablePoint(1, 2)
point.x = 3  # FrozenInstanceError`}
                  interviewTips="Use for data containers; automatic __eq__, __repr__, etc."
                  commonPitfalls="Mutable defaults need default_factory."
                  performance="Faster than regular classes for simple data structures."
                />
              </div>

              {/* Advanced Python Features */}
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  7. Advanced Python Features
                </h3>

                <SyntaxSection
                  title="Itertools Module"
                  explanation="Powerful functions for efficient looping and combinations."
                  pythonCode={`import itertools

# Infinite iterators
count = itertools.count(10, 2)  # 10, 12, 14, ...
cycle = itertools.cycle('ABC')  # A, B, C, A, B, C, ...
repeat = itertools.repeat(5, 3)  # 5, 5, 5

# Combinatorics
permutations = list(itertools.permutations([1, 2, 3], 2))
# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]

combinations = list(itertools.combinations([1, 2, 3], 2))
# [(1,2), (1,3), (2,3)]

combinations_with_replacement = list(itertools.combinations_with_replacement([1, 2, 3], 2))
# [(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)]

# Grouping and filtering
grouped = itertools.groupby(sorted([1, 1, 2, 2, 3]), key=lambda x: x)
# Groups consecutive equal elements

# Accumulate (prefix sums)
prefix = list(itertools.accumulate([1, 2, 3, 4]))
# [1, 3, 6, 10]

# Chain (flatten)
chained = list(itertools.chain([1, 2], [3, 4], [5]))
# [1, 2, 3, 4, 5]

# Product (Cartesian product)
product = list(itertools.product([1, 2], ['a', 'b']))
# [(1,'a'), (1,'b'), (2,'a'), (2,'b')]`}
                  interviewTips="Use for combinations/permutations; more memory efficient than nested loops."
                  commonPitfalls="groupby requires sorted input; iterators are exhausted after use."
                  performance="Lazy evaluation; better than manual nested loops."
                />

                <SyntaxSection
                  title="Collections Module"
                  explanation="High-performance container datatypes."
                  pythonCode={`import collections

# Counter - frequency counting
counter = collections.Counter(['a', 'b', 'a', 'c', 'b', 'a'])
# Counter({'a': 3, 'b': 2, 'c': 1})
counter.most_common(2)  # [('a', 3), ('b', 2)]

# defaultdict - dict with default values
dd = collections.defaultdict(int)
dd['key'] += 1  # No KeyError, defaults to 0

dd_list = collections.defaultdict(list)
dd_list['key'].append(1)  # Defaults to []

# deque - double-ended queue
dq = collections.deque([1, 2, 3])
dq.append(4)      # [1, 2, 3, 4]
dq.appendleft(0)  # [0, 1, 2, 3, 4]
dq.pop()          # 4, deque([0, 1, 2, 3])
dq.popleft()      # 0, deque([1, 2, 3])

# namedtuple - tuple with named fields
Point = collections.namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
p.x, p.y  # 1, 2
p[0], p[1]  # 1, 2

# OrderedDict - dict that remembers insertion order (Python < 3.7)
od = collections.OrderedDict()
od['a'] = 1
od['b'] = 2
list(od.keys())  # ['a', 'b']`}
                  interviewTips="Counter for frequency; defaultdict avoids KeyError; deque for queues."
                  commonPitfalls="defaultdict factory function called every time."
                  performance="deque O(1) for append/pop from both ends."
                />

                <SyntaxSection
                  title="Bisect Module"
                  explanation="Binary search utilities for sorted lists."
                  pythonCode={`import bisect

# bisect_left - find insertion point for x
arr = [1, 3, 5, 7, 9]
bisect.bisect_left(arr, 4)  # 2 (insert at index 2)
bisect.bisect_left(arr, 5)  # 2 (already exists)

# bisect_right - find insertion point for x (after equal elements)
bisect.bisect_right(arr, 5)  # 3

# insort - insert while maintaining sorted order
bisect.insort_left(arr, 4)   # arr = [1, 3, 4, 5, 7, 9]
bisect.insort_right(arr, 5)  # arr = [1, 3, 4, 5, 5, 7, 9]

# For custom comparison
import bisect
def bisect_custom(arr, x, key=lambda x: x):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if key(arr[mid]) < x:
            lo = mid + 1
        else:
            hi = mid
    return lo`}
                  interviewTips="Use for binary search problems; insort maintains sorted order."
                  commonPitfalls="List must be sorted; bisect assumes ascending order."
                  performance="O(log n) search time."
                />

                <SyntaxSection
                  title="Heapq Module"
                  explanation="Min-heap priority queue implementation."
                  pythonCode={`import heapq

# Basic heap operations
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappop(heap)  # 1

# Convert list to heap
arr = [3, 1, 4, 1, 5]
heapq.heapify(arr)  # arr becomes [1, 1, 4, 3, 5]

# Max-heap (using negative values)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
-heapq.heappop(max_heap)  # 3

# Custom heap with tuples
heap = []
heapq.heappush(heap, (2, 'task2'))
heapq.heappush(heap, (1, 'task1'))
heapq.heappop(heap)  # (1, 'task1')

# nlargest/nsmallest
numbers = [3, 1, 4, 1, 5, 9, 2]
heapq.nlargest(3, numbers)  # [9, 5, 4]
heapq.nsmallest(3, numbers)  # [1, 1, 2]

# Merge sorted iterables
list(heapq.merge([1, 3, 5], [2, 4, 6]))  # [1, 2, 3, 4, 5, 6]`}
                  interviewTips="Use for priority queues; heapify is O(n)."
                  commonPitfalls="Only min-heap; use negatives for max-heap."
                  performance="push/pop O(log n); heapify O(n)."
                />

                <SyntaxSection
                  title="Functools Module"
                  explanation="Higher-order functions and operations on callable objects."
                  pythonCode={`import functools

# lru_cache - memoization decorator
@functools.lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

# reduce - apply function cumulatively
numbers = [1, 2, 3, 4]
functools.reduce(lambda x, y: x + y, numbers)  # 10
functools.reduce(lambda x, y: x * y, numbers)  # 24

# partial - fix some arguments
def multiply(x, y):
    return x * y

double = functools.partial(multiply, 2)
double(5)  # 10

# cmp_to_key - convert comparison function to key function
def compare(a, b):
    if a < b:
        return -1
    elif a > b:
        return 1
    else:
        return 0

sorted_list = sorted([3, 1, 4, 1, 5], key=functools.cmp_to_key(compare))

# total_ordering - auto-generate comparison methods
@functools.total_ordering
class Person:
    def __init__(self, age):
        self.age = age
    
    def __eq__(self, other):
        return self.age == other.age
    
    def __lt__(self, other):
        return self.age < other.age
    
    # __le__, __gt__, __ge__ auto-generated`}
                  interviewTips="lru_cache for DP; partial for currying; cmp_to_key for custom sorting."
                  commonPitfalls="lru_cache with unhashable arguments fails."
                  performance="lru_cache can speed up recursive functions dramatically."
                />

                <SyntaxSection
                  title="Regular Expressions (re module)"
                  explanation="Pattern matching for strings."
                  pythonCode={`import re

# Basic patterns
pattern = r'\d+'  # one or more digits
text = "I have 123 apples and 456 bananas"
re.findall(pattern, text)  # ['123', '456']

# Compile for reuse
compiled = re.compile(r'\b\w+\b')  # word boundaries
words = compiled.findall("Hello world!")  # ['Hello', 'world']

# Match vs Search vs Findall
re.match(r'hello', 'hello world')    # matches at start
re.search(r'world', 'hello world')   # searches anywhere
re.findall(r'\d', 'a1b2c3')          # ['1', '2', '3']

# Groups and capturing
pattern = r'(\w+) (\w+)'
match = re.search(pattern, 'John Doe')
match.groups()  # ('John', 'Doe')
match.group(1)  # 'John'

# Substitution
re.sub(r'\d', 'X', 'a1b2c3')  # 'aXbXcX'

# Flags
re.findall(r'hello', 'Hello HELLO', re.IGNORECASE)  # ['Hello', 'HELLO']

# Common patterns
email_pattern = r'[\w\.-]+@[\w\.-]+\.\w+'
phone_pattern = r'\(\d{3}\)\s*\d{3}-\d{4}'
url_pattern = r'https?://(?:[-\w.])+(?:[:\d]+)?(?:/(?:[\w/_.])*(?:\?(?:[\w&=%.])*)?(?:#(?:\w*))?)?.*`}
                  interviewTips="Use raw strings (r'') for patterns; compile for repeated use."
                  commonPitfalls="Greedy matching; forgetting word boundaries."
                  performance="Compile patterns once; avoid .* when possible."
                />

                <SyntaxSection
                  title="Python-Specific Patterns"
                  explanation="Unique Python features and idioms."
                  pythonCode={`# Walrus operator (:=) - Python 3.8+
if (n := len(data)) > 0:
    print(f"Data has {n} items")

# Match-case - Python 3.10+
def classify(value):
    match value:
        case int() if value > 0:
            return "positive integer"
        case str():
            return "string"
        case [x, y]:
            return f"pair: {x}, {y}"
        case _:
            return "other"

# Global vs nonlocal
def outer():
    x = "outer"
    def inner():
        nonlocal x  # refers to outer's x
        x = "inner"
    inner()
    print(x)  # "inner"

# Async/await basics
import asyncio

async def async_function():
    await asyncio.sleep(1)
    return "done"

async def main():
    result = await async_function()
    print(result)

# asyncio.run(main())

# F-string advanced formatting
name = "Alice"
age = 30
print(f"{name:>10}")    # right-align
print(f"{age:04d}")     # zero-pad
print(f"{3.14159:.2f}") # precision
print(f"{1000:,}")      # comma separator`}
                  interviewTips="Walrus operator reduces code; match-case for complex conditions."
                  commonPitfalls="nonlocal vs global confusion; async requires event loop."
                  performance="F-strings faster than % formatting or .format()."
                />
              </div>
            </div>
          </section>

          {/* C++ Section */}
          <section id="cpp-syntax">
            <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-blue-500 mb-2">
                C++ Syntax & Features
              </h2>
              <p className="text-gray-400">
                Complete guide from basics to advanced C++ features, STL, and
                interview tricks.
              </p>
            </div>

            {/* Basic Syntax & Data Types */}
            <h3 className="text-xl font-bold mb-6 text-green-400">
              1. Basic Syntax & Data Types
            </h3>

            <SyntaxSection
              title="Variables & Assignment"
              explanation="Variable declaration and assignment in C++."
              pythonCode={`# Variables - no declaration needed
x = 5
name = "Alice"
is_valid = True

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0  # All point to same object

# Interview tip: Use descriptive names, avoid single letters except in loops`}
            />

            <SyntaxSection
              title="Data Types"
              explanation="Basic data types in C++."
              pythonCode={`# Numbers
int_num = 42
float_num = 3.14
complex_num = 2 + 3j

# Strings
single = 'hello'
double = "world"
multi = """Multi
line
string"""

# Lists (mutable arrays)
my_list = [1, 2, 3, "mixed"]
my_list.append(4)
my_list[0] = 0

# Tuples (immutable)
my_tuple = (1, 2, 3)
# my_tuple[0] = 0  # Error!

# Dictionaries (hash maps)
my_dict = {"key": "value", "num": 42}
my_dict["new"] = "added"

# Sets (unique elements)
my_set = {1, 2, 3, 3}  # {1, 2, 3}

# Booleans
truthy = True
falsy = False`}
              interviewTips="Python is dynamically typed but understand type implications. Lists are arrays, dicts are hash tables. Know time complexities: list access O(1), insert/delete O(n), dict operations O(1) average."
            />

            {/* Control Structures */}
            <h3 className="text-xl font-bold mb-6 text-green-400">
              2. Control Structures
            </h3>

            <SyntaxSection
              title="Conditionals"
              explanation="Conditional statements in C++."
              pythonCode={`# if/elif/else
if x > 0:
    print("positive")
elif x < 0:
    print("negative")
else:
    print("zero")

# Ternary operator
result = "positive" if x > 0 else "non-positive"

# Truthy/falsy values
if my_list:  # Empty list is falsy
    print("not empty")

# Common pitfall: Don't use == for None, use 'is'
if my_var is None:
    print("is None")`}
            />

            <SyntaxSection
              title="Loops"
              explanation="Loop constructs in C++."
              pythonCode={`# for loops
for i in range(5):  # 0 to 4
    print(i)

for item in my_list:
    print(item)

# enumerate for index
for i, item in enumerate(my_list):
    print(f"{i}: {item}")

# while loops
while condition:
    # do something
    if some_break:
        break
    if skip:
        continue

# List comprehensions (powerful!)
squares = [x**2 for x in range(10)]
evens = [x for x in my_list if x % 2 == 0]
matrix = [[i*j for j in range(3)] for i in range(3)]

# Dict/set comprehensions
squared_dict = {x: x**2 for x in range(5)}
unique_lengths = {len(word) for word in words}`}
              interviewTips="Prefer list comprehensions for readability. Use enumerate() instead of manual indexing. Remember: for loops are foreach, use while for conditions. Comprehensions are faster than loops for simple operations."
            />

            {/* Functions */}
            <h3 className="text-xl font-bold mb-6 text-green-400">
              3. Functions
            </h3>

            <h4 className="text-lg font-semibold mb-4">Basic Functions</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`def greet(name, age=25):
    """Docstring - describes function"""
    return f"Hello {name}, age {age}"

# Call with positional args
greet("Alice", 30)

# Call with keyword args
greet(age=30, name="Alice")

# Unpacking
args = ["Alice", 30]
greet(*args)

kwargs = {"name": "Alice", "age": 30}
greet(**kwargs)`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Advanced Parameters</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# *args for variable positional args
def sum_all(*args):
    return sum(args)

sum_all(1, 2, 3, 4)  # 10

# **kwargs for variable keyword args
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="NYC")

# Combined
def complex_func(a, b=10, *args, **kwargs):
    print(a, b, args, kwargs)

complex_func(1, 2, 3, 4, x=5, y=6)`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Lambda Functions</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Anonymous functions
square = lambda x: x ** 2
print(square(5))  # 25

# With multiple args
add = lambda x, y: x + y

# In sorting
points = [(1, 2), (3, 1), (2, 3)]
points.sort(key=lambda p: p[1])  # Sort by y-coordinate

# Common in interviews for custom sorting
names = ["Alice", "Bob", "Charlie"]
names.sort(key=lambda x: len(x))`}</code>
            </pre>

            <p className="text-gray-300 mb-6">
              <strong>Interview Tips:</strong> Use *args/**kwargs for flexible
              functions. Lambdas are great for simple operations, especially in
              sorting. Always add docstrings to functions. Remember: functions
              are first-class objects.
            </p>

            {/* Content will be added here */}
            <div className="text-center text-gray-500">
              [Rest of Python syntax sections to be added: Classes & OOP,
              Modules, File I/O, Advanced Features]
            </div>
          </section>

          {/* C++ Section */}
          <section id="cpp-syntax">
            <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-blue-500 mb-2">
                C++ Syntax & Features
              </h2>
              <p className="text-gray-400">
                Complete guide from basics to advanced C++ features, STL, and
                interview tricks.
              </p>
            </div>

            {/* Basic Syntax & Data Types */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              1. Basic Syntax & Data Types
            </h3>

            <h4 className="text-lg font-semibold mb-4">Variables & Types</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <iostream>
using namespace std;

int main() {
    // Variables must be declared with types
    int x = 5;
    double pi = 3.14159;
    char letter = 'A';
    bool is_valid = true;
    string name = "Alice";
    
    // Constants
    const int MAX_SIZE = 100;
    
    // Auto type deduction (C++11)
    auto result = x * 2;  // int
    
    cout << "Hello " << name << endl;
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Arrays & Vectors</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <vector>
#include <array>

int main() {
    // C-style arrays (fixed size)
    int arr[5] = {1, 2, 3, 4, 5};
    
    // std::array (fixed size, safer)
    array<int, 5> std_arr = {1, 2, 3, 4, 5};
    
    // std::vector (dynamic size)
    vector<int> vec = {1, 2, 3};
    vec.push_back(4);
    
    cout << "Size: " << vec.size() << endl;
    return 0;
}`}</code>
            </pre>

            <p className="text-gray-300 mb-6">
              <strong>Interview Tips:</strong> Use std::vector over C-arrays.
              Know size() vs capacity().
            </p>

            {/* Pointers & Memory */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              2. Pointers & Memory Management
            </h3>

            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`int main() {
    int x = 42;
    int* ptr = &x;  // Pointer to x
    
    cout << "Value: " << *ptr << endl;
    
    // Smart pointers (modern C++)
    unique_ptr<int> smart = make_unique<int>(42);
    // Automatically deleted
    
    return 0;
}`}</code>
            </pre>

            <p className="text-gray-300 mb-6">
              <strong>Interview Tips:</strong> Use smart pointers to avoid
              leaks.
            </p>

            {/* STL Containers */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              3. STL Containers
            </h3>

            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <vector>
#include <map>
#include <set>

int main() {
    // Vector - dynamic array
    vector<int> vec = {1, 2, 3};
    vec.push_back(4);
    
    // Map - ordered key-value
    map<string, int> my_map;
    my_map["Alice"] = 30;
    
    // Unordered map - hash table
    unordered_map<string, int> hash_map;
    
    return 0;
}`}</code>
            </pre>

            <p className="text-gray-300 mb-6">
              <strong>Interview Tips:</strong> unordered_map for O(1), map for
              ordered.
            </p>

            {/* Complete STL Coverage */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              4. Complete STL Coverage
            </h3>

            <h4 className="text-lg font-semibold mb-4">All STL Containers</h4>
            <pre className="bg-gray-900 p-4 rounded-lg mb-4 overflow-x-auto border-l-4 border-blue-500 relative">
              <div className="absolute top-2 right-2 text-xs text-blue-400 font-mono bg-gray-800 px-2 py-1 rounded">
                C++
              </div>
              <code className="text-cyan-300 block pt-6">{`#include <vector>
#include <deque>
#include <list>
#include <set>
#include <multiset>
#include <map>
#include <multimap>
#include <unordered_set>
#include <unordered_map>
#include <unordered_multiset>
#include <unordered_multimap>
#include <stack>
#include <queue>
#include <priority_queue>

int main() {
    // Sequence containers
    vector<int> vec;           // Dynamic array
    deque<int> deq;            // Double-ended queue
    list<int> lst;             // Doubly-linked list
    
    // Associative containers (ordered)
    set<int> s;                // Unique elements, sorted
    multiset<int> ms;          // Multiple elements, sorted
    map<int, string> m;        // Key-value, sorted
    multimap<int, string> mm;  // Multiple values per key, sorted
    
    // Unordered associative (hash-based)
    unordered_set<int> us;
    unordered_multiset<int> ums;
    unordered_map<int, string> um;
    unordered_multimap<int, string> umm;
    
    // Container adaptors
    stack<int> stk;            // LIFO
    queue<int> q;              // FIFO
    priority_queue<int> pq;    // Max-heap
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Iterators</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <vector>
#include <algorithm>

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    
    // Iterator types
    vector<int>::iterator it;           // Read/write
    vector<int>::const_iterator cit;    // Read-only
    vector<int>::reverse_iterator rit;  // Reverse
    
    // Using iterators
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    
    // Reverse iteration
    for (auto it = vec.rbegin(); it != vec.rend(); ++it) {
        cout << *it << " ";
    }
    
    // Algorithms with iterators
    sort(vec.begin(), vec.end());
    auto found = find(vec.begin(), vec.end(), 3);
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">STL Algorithms</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <algorithm>
#include <vector>
#include <numeric>

int main() {
    vector<int> vec = {3, 1, 4, 1, 5};
    
    // Sorting
    sort(vec.begin(), vec.end());
    sort(vec.rbegin(), vec.rend());  // descending
    
    // Binary search (requires sorted)
    bool found = binary_search(vec.begin(), vec.end(), 4);
    auto it = lower_bound(vec.begin(), vec.end(), 4);
    auto it2 = upper_bound(vec.begin(), vec.end(), 4);
    
    // Finding
    auto min_it = min_element(vec.begin(), vec.end());
    auto max_it = max_element(vec.begin(), vec.end());
    auto found_it = find(vec.begin(), vec.end(), 5);
    
    // Counting
    int count = count(vec.begin(), vec.end(), 1);
    
    // Modifying
    reverse(vec.begin(), vec.end());
    unique(vec.begin(), vec.end());  // removes consecutive duplicates
    
    // Numeric
    int sum = accumulate(vec.begin(), vec.end(), 0);
    
    // Permutations
    next_permutation(vec.begin(), vec.end());
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Pairs & Tuples</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <utility>
#include <tuple>

int main() {
    // Pair
    pair<int, string> p = make_pair(1, "one");
    pair<int, string> p2 = {2, "two"};
    
    cout << p.first << ", " << p.second << endl;
    
    // Tie (unpacking)
    int num;
    string str;
    tie(num, str) = p;
    
    // Tuple (C++11)
    tuple<int, string, double> t = make_tuple(1, "hello", 3.14);
    
    // Structured bindings (C++17)
    auto [a, b, c] = t;
    cout << a << ", " << b << ", " << c << endl;
    
    // Get by index
    cout << get<0>(t) << endl;
    
    return 0;
}`}</code>
            </pre>

            {/* Memory Management */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              5. Memory Management
            </h3>

            <h4 className="text-lg font-semibold mb-4">Smart Pointers</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <memory>

int main() {
    // unique_ptr - exclusive ownership
    unique_ptr<int> uptr = make_unique<int>(42);
    cout << *uptr << endl;
    
    // Transfer ownership
    unique_ptr<int> uptr2 = move(uptr);
    // uptr is now nullptr
    
    // shared_ptr - shared ownership
    shared_ptr<int> sptr = make_shared<int>(42);
    shared_ptr<int> sptr2 = sptr;  // Reference count = 2
    cout << sptr.use_count() << endl;  // 2
    
    // weak_ptr - non-owning reference
    weak_ptr<int> wptr = sptr;
    if (auto locked = wptr.lock()) {
        cout << *locked << endl;
    }
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              RAII & Move Semantics
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <memory>
#include <vector>

class Resource {
public:
    Resource() { cout << "Resource acquired" << endl; }
    ~Resource() { cout << "Resource released" << endl; }
};

class RAIIWrapper {
    unique_ptr<Resource> res;
public:
    RAIIWrapper() : res(make_unique<Resource>()) {}
    // Destructor automatically cleans up
};

int main() {
    // RAII - automatic cleanup
    {
        RAIIWrapper wrapper;
        // Resource automatically released when wrapper goes out of scope
    }
    
    // Move semantics
    vector<int> vec1 = {1, 2, 3};
    vector<int> vec2 = move(vec1);  // vec1 is now empty
    
    // Custom move constructor
    class MyClass {
        vector<int> data;
    public:
        MyClass(vector<int>&& d) : data(move(d)) {}
    };
    
    return 0;
}`}</code>
            </pre>

            {/* Modern C++ Features */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              6. Modern C++ Features
            </h3>

            <h4 className="text-lg font-semibold mb-4">Lambda Expressions</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <algorithm>
#include <vector>

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    
    // Basic lambda
    auto square = [](int x) { return x * x; };
    cout << square(5) << endl;
    
    // Lambda with capture
    int factor = 2;
    auto multiply = [factor](int x) { return x * factor; };
    
    // Capture by reference
    auto divide = [&factor](int x) { return x / factor; };
    
    // Mutable lambda
    int counter = 0;
    auto increment = [&counter]() mutable { return ++counter; };
    
    // Lambda in algorithms
    sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; });
    
    // Generic lambda (C++14)
    auto add = [](auto a, auto b) { return a + b; };
    cout << add(1, 2) << endl;       // 3
    cout << add(1.5, 2.5) << endl;   // 4.0
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Range-based For & Structured Bindings
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <vector>
#include <map>

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    
    // Range-based for
    for (int& x : vec) {
        x *= 2;
    }
    
    // With auto
    for (auto x : vec) {
        cout << x << " ";
    }
    
    // Structured bindings
    pair<int, string> p = {1, "hello"};
    auto [num, str] = p;
    cout << num << ", " << str << endl;
    
    // With map
    map<int, string> m = {{1, "one"}, {2, "two"}};
    for (auto& [key, value] : m) {
        cout << key << ": " << value << endl;
    }
    
    // With arrays
    int arr[] = {1, 2, 3};
    for (auto x : arr) {
        cout << x << " ";
    }
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Optional & Other Utilities
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`#include <optional>
#include <variant>
#include <any>

int main() {
    // optional (C++17)
    optional<int> opt = 42;
    if (opt.has_value()) {
        cout << *opt << endl;
    }
    
    opt = nullopt;  // Clear it
    cout << opt.value_or(0) << endl;  // Default value
    
    // variant (C++17) - type-safe union
    variant<int, string, double> v = 42;
    v = "hello";
    v = 3.14;
    
    // Visit variant
    visit([](auto&& arg) { cout << arg << endl; }, v);
    
    // any (C++17) - type-safe container
    any a = 42;
    a = string("hello");
    cout << any_cast<string>(a) << endl;
    
    return 0;
}`}</code>
            </pre>

            {/* OOP in C++ */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              7. OOP in C++
            </h3>

            <h4 className="text-lg font-semibold mb-4">
              Classes & Constructors
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`class Person {
private:
    string name;
    int age;
    
public:
    // Constructor
    Person(string n, int a) : name(n), age(a) {}
    
    // Copy constructor
    Person(const Person& other) : name(other.name), age(other.age) {}
    
    // Move constructor (C++11)
    Person(Person&& other) noexcept : name(move(other.name)), age(other.age) {}
    
    // Destructor
    ~Person() { cout << "Person destroyed" << endl; }
    
    // Methods
    void greet() const {
        cout << "Hello, I'm " << name << endl;
    }
    
    // Getters/setters
    string getName() const { return name; }
    void setName(string n) { name = n; }
};

// Usage
int main() {
    Person p("Alice", 30);
    p.greet();
    
    Person p2 = p;  // Copy
    Person p3 = move(p);  // Move
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Inheritance & Polymorphism
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`class Animal {
public:
    virtual void speak() const {
        cout << "Animal makes a sound" << endl;
    }
    
    virtual ~Animal() {}  // Virtual destructor
};

class Dog : public Animal {
public:
    void speak() const override {
        cout << "Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    void speak() const override {
        cout << "Meow!" << endl;
    }
};

int main() {
    Animal* animals[] = {new Dog(), new Cat()};
    
    for (auto animal : animals) {
        animal->speak();  // Polymorphism
        delete animal;
    }
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Operator Overloading</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`class Complex {
private:
    double real, imag;
    
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}
    
    // Binary operator +
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
    
    // Unary operator -
    Complex operator-() const {
        return Complex(-real, -imag);
    }
    
    // Assignment operator
    Complex& operator=(const Complex& other) {
        if (this != &other) {
            real = other.real;
            imag = other.imag;
        }
        return *this;
    }
    
    // Stream operator
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
};

int main() {
    Complex c1(1, 2), c2(3, 4);
    Complex c3 = c1 + c2;
    cout << c3 << endl;  // 4 + 6i
    
    return 0;
}`}</code>
            </pre>

            {/* C++ Best Practices */}
            <h3 className="text-xl font-bold mb-6 text-blue-400">
              8. C++ Best Practices
            </h3>

            <h4 className="text-lg font-semibold mb-4">
              Pass by Reference vs Value
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`// Pass by value (copy)
void func1(int x) {  // Copy of int
    x = 10;
}

// Pass by reference
void func2(int& x) {  // Reference to int
    x = 10;
}

// Pass by const reference (for large objects)
void func3(const vector<int>& vec) {
    // Can't modify vec
}

// Pass by pointer
void func4(int* x) {
    if (x) *x = 10;
}

int main() {
    int a = 5;
    func1(a);  // a is still 5
    func2(a);  // a is now 10
    
    vector<int> large_vec(1000);
    func3(large_vec);  // No copy, efficient
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Const Correctness</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`class MyClass {
private:
    int data;
    
public:
    // Const method - doesn't modify object
    int getData() const {
        return data;
    }
    
    // Const parameter
    void setData(const int& new_data) {
        data = new_data;
    }
    
    // Const pointer/ reference
    void process(const vector<int>* const vec) {
        // vec is const pointer to const vector
    }
};

// Const object
int main() {
    const MyClass obj;
    obj.getData();  // OK
    // obj.setData(5);  // Error - const object
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Header Guards & Namespaces
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`// myheader.h
#ifndef MYHEADER_H
#define MYHEADER_H

#include <iostream>

// Namespace to avoid name conflicts
namespace mylib {
    class MyClass {
    public:
        void func();
    };
    
    void MyClass::func() {
        std::cout << "Hello from mylib" << std::endl;
    }
}

#endif  // MYHEADER_H

// main.cpp
#include "myheader.h"

// Using namespace (avoid in headers)
using namespace std;
using namespace mylib;

int main() {
    MyClass obj;
    obj.func();
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Template Basics</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-blue-300">{`// Function template
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template <typename T, int Size>
class Array {
private:
    T arr[Size];
    
public:
    T& operator[](int index) {
        return arr[index];
    }
};

// Template specialization
template <>
class Array<bool, 1> {
    // Special handling for bool
};

int main() {
    cout << maximum(5, 10) << endl;        // 10
    cout << maximum(3.14, 2.71) << endl;   // 3.14
    
    Array<int, 5> int_array;
    int_array[0] = 42;
    
    return 0;
}`}</code>
            </pre>
          </section>

          {/* DSA Section */}
          <section id="data-structures">
            <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
              <h2 className="text-2xl font-bold text-purple-500 mb-2">
                Data Structures & Algorithms
              </h2>
              <p className="text-gray-400">
                Complete implementations of all essential DSA for FAANG
                interviews.
              </p>
            </div>

            {/* Content will be added here */}
            <div className="text-center text-gray-500">
              [Comprehensive DSA implementations to be added]
            </div>

            {/* Time & Space Complexity */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              Time & Space Complexity
            </h3>

            <h4 className="text-lg font-semibold mb-4">Big O Notation</h4>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <table className="w-full text-left text-blue-300">
                <thead>
                  <tr>
                    <th className="border-b border-gray-600 pb-2">Notation</th>
                    <th className="border-b border-gray-600 pb-2">Name</th>
                    <th className="border-b border-gray-600 pb-2">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">O(1)</td>
                    <td>Constant</td>
                    <td>Array access, hash table lookup</td>
                  </tr>
                  <tr>
                    <td className="py-2">O(log n)</td>
                    <td>Logarithmic</td>
                    <td>Binary search, BST operations</td>
                  </tr>
                  <tr>
                    <td className="py-2">O(n)</td>
                    <td>Linear</td>
                    <td>Single pass through array</td>
                  </tr>
                  <tr>
                    <td className="py-2">O(n log n)</td>
                    <td>Linearithmic</td>
                    <td>Sorting algorithms (quick, merge, heap)</td>
                  </tr>
                  <tr>
                    <td className="py-2">O(n²)</td>
                    <td>Quadratic</td>
                    <td>Nested loops, bubble sort</td>
                  </tr>
                  <tr>
                    <td className="py-2">O(2ⁿ)</td>
                    <td>Exponential</td>
                    <td>Subset generation, naive recursion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mb-4">
              Common Data Structure Complexities
            </h4>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <table className="w-full text-left text-blue-300">
                <thead>
                  <tr>
                    <th className="border-b border-gray-600 pb-2">
                      Data Structure
                    </th>
                    <th className="border-b border-gray-600 pb-2">Access</th>
                    <th className="border-b border-gray-600 pb-2">Search</th>
                    <th className="border-b border-gray-600 pb-2">Insert</th>
                    <th className="border-b border-gray-600 pb-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Array</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Linked List</td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Hash Table</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                  </tr>
                  <tr>
                    <td className="py-2">BST</td>
                    <td>O(log n)</td>
                    <td>O(log n)</td>
                    <td>O(log n)</td>
                    <td>O(log n)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Heap</td>
                    <td>O(log n)</td>
                    <td>O(n)</td>
                    <td>O(log n)</td>
                    <td>O(log n)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Trees */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">2. Trees</h3>

            <SyntaxSection
              title="Binary Search Tree (BST)"
              explanation="Ordered binary tree with O(log n) operations."
              pythonCode={`class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
            return
        
        node = self.root
        while node:
            if val < node.val:
                if node.left:
                    node = node.left
                else:
                    node.left = TreeNode(val)
                    return
            else:
                if node.right:
                    node = node.right
                else:
                    node.right = TreeNode(val)
                    return
    
    def search(self, val):
        node = self.root
        while node:
            if val == node.val:
                return True
            elif val < node.val:
                node = node.left
            else:
                node = node.right
        return False
    
    def delete(self, val):
        def _delete(node, val):
            if not node:
                return None
            
            if val < node.val:
                node.left = _delete(node.left, val)
            elif val > node.val:
                node.right = _delete(node.right, val)
            else:
                # Node with one or no child
                if not node.left:
                    return node.right
                elif not node.right:
                    return node.left
                
                # Node with two children
                temp = self._min_value_node(node.right)
                node.val = temp.val
                node.right = _delete(node.right, temp.val)
            
            return node
        
        self.root = _delete(self.root, val)
    
    def _min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current`}
              cppCode={`struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class BST {
private:
    TreeNode* root;
    
    TreeNode* insert(TreeNode* node, int val) {
        if (!node) return new TreeNode(val);
        
        if (val < node->val) {
            node->left = insert(node->left, val);
        } else {
            node->right = insert(node->right, val);
        }
        return node;
    }
    
    bool search(TreeNode* node, int val) {
        if (!node) return false;
        if (val == node->val) return true;
        return val < node->val ? search(node->left, val) : search(node->right, val);
    }
    
    TreeNode* deleteNode(TreeNode* node, int val) {
        if (!node) return nullptr;
        
        if (val < node->val) {
            node->left = deleteNode(node->left, val);
        } else if (val > node->val) {
            node->right = deleteNode(node->right, val);
        } else {
            if (!node->left) {
                TreeNode* temp = node->right;
                delete node;
                return temp;
            } else if (!node->right) {
                TreeNode* temp = node->left;
                delete node;
                return temp;
            }
            
            TreeNode* temp = minValueNode(node->right);
            node->val = temp->val;
            node->right = deleteNode(node->right, temp->val);
        }
        return node;
    }
    
    TreeNode* minValueNode(TreeNode* node) {
        TreeNode* current = node;
        while (current && current->left) {
            current = current->left;
        }
        return current;
    }
    
public:
    BST() : root(nullptr) {}
    
    void insert(int val) {
        root = insert(root, val);
    }
    
    bool search(int val) {
        return search(root, val);
    }
    
    void deleteVal(int val) {
        root = deleteNode(root, val);
    }
};

int main() {
    BST bst;
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    cout << bst.search(30) << endl;  // 1
    bst.deleteVal(30);
    cout << bst.search(30) << endl;  // 0
    return 0;
}`}
              interviewTips="Know inorder traversal gives sorted order; balance for O(log n)."
              commonPitfalls="Unbalanced trees become O(n); handle deletion carefully."
              performance="Insert/Search/Delete: O(log n) average, O(n) worst case."
            />

            <SyntaxSection
              title="Tree Traversals"
              explanation="DFS (inorder, preorder, postorder) and BFS (level order) traversals."
              pythonCode={`def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=' ')
        inorder(root.right)

def preorder(root):
    if root:
        print(root.val, end=' ')
        preorder(root.left)
        preorder(root.right)

def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val, end=' ')

def level_order(root):
    if not root:
        return
    queue = [root]
    while queue:
        node = queue.pop(0)
        print(node.val, end=' ')
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)`}
              cppCode={`void inorder(TreeNode* root) {
    if (root) {
        inorder(root->left);
        cout << root->val << " ";
        inorder(root->right);
    }
}

void preorder(TreeNode* root) {
    if (root) {
        cout << root->val << " ";
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(TreeNode* root) {
    if (root) {
        postorder(root->left);
        postorder(root->right);
        cout << root->val << " ";
    }
}

void levelOrder(TreeNode* root) {
    if (!root) return;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        cout << node->val << " ";
        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
}

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    cout << "Inorder: ";
    inorder(root);
    cout << endl;
    
    cout << "Level Order: ";
    levelOrder(root);
    cout << endl;
    
    return 0;
}`}
              interviewTips="Inorder gives sorted order for BST; level order uses queue."
              commonPitfalls="Recursive stack overflow for deep trees; iterative preferred."
              performance="All traversals: O(n) time, O(h) space (h=height)."
            />

            <SyntaxSection
              title="Binary Tree Maximum Path Sum"
              explanation="Find maximum path sum in binary tree (any node to any node)."
              pythonCode={`class Solution:
    def maxPathSum(self, root):
        self.max_sum = float('-inf')
        
        def dfs(node):
            if not node:
                return 0
            
            left = max(dfs(node.left), 0)
            right = max(dfs(node.right), 0)
            
            current = node.val + left + right
            self.max_sum = max(self.max_sum, current)
            
            return node.val + max(left, right)
        
        dfs(root)
        return self.max_sum`}
              cppCode={`class Solution {
private:
    int max_sum = INT_MIN;
    
    int dfs(TreeNode* node) {
        if (!node) return 0;
        
        int left = max(dfs(node->left), 0);
        int right = max(dfs(node->right), 0);
        
        int current = node->val + left + right;
        max_sum = max(max_sum, current);
        
        return node->val + max(left, right);
    }
    
public:
    int maxPathSum(TreeNode* root) {
        dfs(root);
        return max_sum;
    }
};

int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    
    Solution sol;
    cout << sol.maxPathSum(root) << endl;
    
    return 0;
}`}
              interviewTips="Path can start/end at any node; use DFS with global max."
              commonPitfalls="Forgetting max(0, child_sum) for negative nodes."
              performance="O(n) time, O(h) space (h=height)."
            />

            {/* Graphs */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              3. Graphs
            </h3>

            <SyntaxSection
              title="Graph Representations"
              explanation="Adjacency list (space-efficient) vs adjacency matrix (fast lookups)."
              pythonCode={`# Adjacency List
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        self.graph[u].append(v)
        # For undirected: self.graph[v].append(u)
    
    def print_graph(self):
        for node in self.graph:
            print(f"{node} -> {self.graph[node]}")

# Adjacency Matrix
class GraphMatrix:
    def __init__(self, vertices):
        self.vertices = vertices
        self.matrix = [[0] * vertices for _ in range(vertices)]
    
    def add_edge(self, u, v):
        self.matrix[u][v] = 1
        # For undirected: self.matrix[v][u] = 1
    
    def print_matrix(self):
        for row in self.matrix:
            print(row)`}
              cppCode={`// Adjacency List
class Graph {
private:
    int vertices;
    vector<list<int>> adj_list;
    
public:
    Graph(int v) : vertices(v), adj_list(v) {}
    
    void addEdge(int u, int v) {
        adj_list[u].push_back(v);
        // For undirected: adj_list[v].push_back(u);
    }
    
    void printGraph() {
        for (int i = 0; i < vertices; ++i) {
            cout << i << " -> ";
            for (int neighbor : adj_list[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
    
    const vector<list<int>>& getAdjList() const {
        return adj_list;
    }
};

// Adjacency Matrix
class GraphMatrix {
private:
    int vertices;
    vector<vector<int>> matrix;
    
public:
    GraphMatrix(int v) : vertices(v), matrix(v, vector<int>(v, 0)) {}
    
    void addEdge(int u, int v) {
        matrix[u][v] = 1;
        // For undirected: matrix[v][u] = 1;
    }
    
    void printMatrix() {
        for (const auto& row : matrix) {
            for (int val : row) {
                cout << val << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    Graph g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    
    g.printGraph();
    
    return 0;
}`}
              interviewTips="Use adjacency list for sparse graphs; matrix for dense/complete graphs."
              commonPitfalls="Matrix uses O(V²) space; list is O(V+E)."
              performance="List: O(1) degree check; Matrix: O(1) edge check."
            />

            <SyntaxSection
              title="DFS & BFS"
              explanation="Depth-first (stack/recursive) vs breadth-first (queue) graph traversal."
              pythonCode={`class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        self.graph[u].append(v)
    
    def dfs(self, start):
        visited = set()
        stack = [start]
        
        while stack:
            node = stack.pop()
            if node not in visited:
                visited.add(node)
                print(node, end=' ')
                # Add neighbors in reverse order for correct traversal
                for neighbor in reversed(self.graph[node]):
                    if neighbor not in visited:
                        stack.append(neighbor)
    
    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            node = queue.popleft()
            print(node, end=' ')
            
            for neighbor in self.graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

# Recursive DFS
def dfs_recursive(graph, node, visited):
    visited.add(node)
    print(node, end=' ')
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)`}
              cppCode={`class Graph {
private:
    int vertices;
    vector<list<int>> adj_list;
    
public:
    Graph(int v) : vertices(v), adj_list(v) {}
    
    void addEdge(int u, int v) {
        adj_list[u].push_back(v);
    }
    
    // Iterative DFS
    void DFS(int start) {
        vector<bool> visited(vertices, false);
        stack<int> stk;
        stk.push(start);
        
        while (!stk.empty()) {
            int node = stk.top();
            stk.pop();
            
            if (!visited[node]) {
                visited[node] = true;
                cout << node << " ";
                
                // Push neighbors (reverse order for correct traversal)
                for (auto it = adj_list[node].rbegin(); it != adj_list[node].rend(); ++it) {
                    if (!visited[*it]) {
                        stk.push(*it);
                    }
                }
            }
        }
    }
    
    // BFS
    void BFS(int start) {
        vector<bool> visited(vertices, false);
        queue<int> q;
        q.push(start);
        visited[start] = true;
        
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            cout << node << " ";
            
            for (int neighbor : adj_list[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
    }
    
    // Recursive DFS
    void DFSRecursive(int node, vector<bool>& visited) {
        visited[node] = true;
        cout << node << " ";
        
        for (int neighbor : adj_list[node]) {
            if (!visited[neighbor]) {
                DFSRecursive(neighbor, visited);
            }
        }
    }
    
    void DFSRecursive(int start) {
        vector<bool> visited(vertices, false);
        DFSRecursive(start, visited);
    }
};

int main() {
    Graph g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    
    cout << "DFS: ";
    g.DFS(2);
    cout << endl;
    
    cout << "BFS: ";
    g.BFS(2);
    cout << endl;
    
    return 0;
}`}
              interviewTips="DFS for topological sort/connectivity; BFS for shortest path in unweighted graphs."
              commonPitfalls="DFS recursion depth limit; BFS needs queue."
              performance="Both O(V+E); DFS uses stack space O(V), BFS uses queue O(V)."
            />

            <h4 className="text-lg font-semibold mb-4">Topological Sort</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Topological Sort (Kahn's Algorithm)
from collections import deque, defaultdict

def topological_sort(vertices, edges):
    graph = defaultdict(list)
    indegree = {i: 0 for i in range(vertices)}
    
    for u, v in edges:
        graph[u].append(v)
        indegree[v] += 1
    
    queue = deque([node for node in indegree if indegree[node] == 0])
    result = []
    
    while queue:
        node = queue.popleft()
        result.append(node)
        
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    
    return result if len(result) == vertices else []  # Cycle detection

# DFS-based topological sort
def topological_sort_dfs(vertices, edges):
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
    
    visited = [0] * vertices  # 0: not visited, 1: visiting, 2: visited
    result = []
    
    def dfs(node):
        visited[node] = 1  # visiting
        
        for neighbor in graph[node]:
            if visited[neighbor] == 1:  # cycle
                return False
            if visited[neighbor] == 0:
                if not dfs(neighbor):
                    return False
        
        visited[node] = 2  # visited
        result.append(node)
        return True
    
    for i in range(vertices):
        if visited[i] == 0:
            if not dfs(i):
                return []  # cycle
    
    return result[::-1]

# C++: Topological Sort
#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;

class Graph {
private:
    int vertices;
    vector<vector<int>> adj_list;
    
public:
    Graph(int v) : vertices(v), adj_list(v) {}
    
    void addEdge(int u, int v) {
        adj_list[u].push_back(v);
    }
    
    // Kahn's Algorithm
    vector<int> topologicalSort() {
        vector<int> indegree(vertices, 0);
        
        // Calculate indegrees
        for (int u = 0; u < vertices; ++u) {
            for (int v : adj_list[u]) {
                indegree[v]++;
            }
        }
        
        queue<int> q;
        for (int i = 0; i < vertices; ++i) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }
        
        vector<int> result;
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            result.push_back(node);
            
            for (int neighbor : adj_list[node]) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        return result.size() == vertices ? result : vector<int>();  // Cycle check
    }
    
    // DFS-based topological sort
    void topologicalSortDFS(int node, vector<bool>& visited, stack<int>& stk) {
        visited[node] = true;
        
        for (int neighbor : adj_list[node]) {
            if (!visited[neighbor]) {
                topologicalSortDFS(neighbor, visited, stk);
            }
        }
        
        stk.push(node);
    }
    
    vector<int> topologicalSortDFS() {
        vector<bool> visited(vertices, false);
        stack<int> stk;
        
        for (int i = 0; i < vertices; ++i) {
            if (!visited[i]) {
                topologicalSortDFS(i, visited, stk);
            }
        }
        
        vector<int> result;
        while (!stk.empty()) {
            result.push_back(stk.top());
            stk.pop();
        }
        
        return result;
    }
};

int main() {
    Graph g(6);
    g.addEdge(5, 2);
    g.addEdge(5, 0);
    g.addEdge(4, 0);
    g.addEdge(4, 1);
    g.addEdge(2, 3);
    g.addEdge(3, 1);
    
    vector<int> result = g.topologicalSort();
    cout << "Topological Sort (Kahn's): ";
    for (int node : result) {
        cout << node << " ";
    }
    cout << endl;
    
    return 0;
}`}</code>
            </pre>

            {/* Dynamic Programming */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              4. Dynamic Programming
            </h3>

            <h4 className="text-lg font-semibold mb-4">1D DP Patterns</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Fibonacci with DP
def fib_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# Space optimized
def fib_optimized(n):
    if n <= 1:
        return n
    
    prev2, prev1 = 0, 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    
    return prev1

# House Robber
def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
    
    return dp[-1]

# C++: 1D DP
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int fibDP(int n) {
    if (n <= 1) return n;
    
    vector<int> dp(n + 1, 0);
    dp[1] = 1;
    
    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

int fibOptimized(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; ++i) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

int rob(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return 0;
    if (n == 1) return nums[0];
    
    vector<int> dp(n, 0);
    dp[0] = nums[0];
    dp[1] = max(nums[0], nums[1]);
    
    for (int i = 2; i < n; ++i) {
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[n - 1];
}

int main() {
    cout << fibDP(10) << endl;
    cout << fibOptimized(10) << endl;
    
    vector<int> houses = {1, 2, 3, 1};
    cout << rob(houses) << endl;
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">2D DP Patterns</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Longest Common Subsequence
def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]

# Edit Distance
def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j],      # delete
                                   dp[i][j - 1],      # insert
                                   dp[i - 1][j - 1])  # replace
    
    return dp[m][n]

# C++: 2D DP
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int lcs(string text1, string text2) {
    int m = text1.size(), n = text2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

int minDistance(string word1, string word2) {
    int m = word1.size(), n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    
    // Initialize base cases
    for (int i = 0; i <= m; ++i) {
        dp[i][0] = i;
    }
    for (int j = 0; j <= n; ++j) {
        dp[0][j] = j;
    }
    
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min({dp[i - 1][j],      // delete
                                    dp[i][j - 1],      // insert
                                    dp[i - 1][j - 1]}); // replace
            }
        }
    }
    
    return dp[m][n];
}

int main() {
    cout << lcs("abcde", "ace") << endl;  // 3
    cout << minDistance("horse", "ros") << endl;  // 3
    
    return 0;
}`}</code>
            </pre>

            {/* Interview-Specific Patterns */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              5. Interview-Specific Patterns
            </h3>

            <h4 className="text-lg font-semibold mb-4">Sliding Window</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Maximum sum subarray of size k
def max_sum_subarray(arr, k):
    if not arr or k <= 0:
        return 0
    
    max_sum = float('-inf')
    window_sum = 0
    
    for i in range(len(arr)):
        window_sum += arr[i]
        
        if i >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[i - k + 1]
    
    return max_sum

# Variable size: Minimum window substring
def min_window(s, t):
    if not s or not t:
        return ""
    
    from collections import Counter
    required = Counter(t)
    window = Counter()
    have, need = 0, len(required)
    left = 0
    min_len = float('inf')
    result = ""
    
    for right in range(len(s)):
        char = s[right]
        window[char] += 1
        
        if char in required and window[char] == required[char]:
            have += 1
        
        while have == need:
            # Update result
            if right - left + 1 < min_len:
                min_len = right - left + 1
                result = s[left:right + 1]
            
            # Shrink window
            left_char = s[left]
            window[left_char] -= 1
            if left_char in required and window[left_char] < required[left_char]:
                have -= 1
            left += 1
    
    return result

# C++: Sliding Window
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

int maxSumSubarray(vector<int>& arr, int k) {
    if (arr.empty() || k <= 0) return 0;
    
    int max_sum = INT_MIN;
    int window_sum = 0;
    
    for (int i = 0; i < arr.size(); ++i) {
        window_sum += arr[i];
        
        if (i >= k - 1) {
            max_sum = max(max_sum, window_sum);
            window_sum -= arr[i - k + 1];
        }
    }
    
    return max_sum;
}

string minWindow(string s, string t) {
    if (s.empty() || t.empty()) return "";
    
    unordered_map<char, int> required, window;
    for (char c : t) required[c]++;
    
    int have = 0, need = required.size();
    int left = 0, min_len = INT_MAX;
    string result = "";
    
    for (int right = 0; right < s.size(); ++right) {
        char c = s[right];
        window[c]++;
        
        if (required.count(c) && window[c] == required[c]) {
            have++;
        }
        
        while (have == need) {
            // Update result
            if (right - left + 1 < min_len) {
                min_len = right - left + 1;
                result = s.substr(left, min_len);
            }
            
            // Shrink window
            char left_char = s[left];
            window[left_char]--;
            if (required.count(left_char) && window[left_char] < required[left_char]) {
                have--;
            }
            left++;
        }
    }
    
    return result;
}

int main() {
    vector<int> arr = {1, 4, 2, 10, 2, 3, 1, 0, 20};
    cout << maxSumSubarray(arr, 4) << endl;
    
    cout << minWindow("ADOBECODEBANC", "ABC") << endl;
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Two Pointers</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Two pointers patterns
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []

def remove_duplicates(nums):
    if not nums:
        return 0
    
    # Fast/slow pointers
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    
    return slow + 1

def trap_rain_water(height):
    if not height:
        return 0
    
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    
    return water

# C++: Two Pointers
#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSumSorted(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int current_sum = nums[left] + nums[right];
        if (current_sum == target) {
            return {left, right};
        } else if (current_sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return {};
}

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int slow = 0;
    for (int fast = 1; fast < nums.size(); ++fast) {
        if (nums[fast] != nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}

int trap(vector<int>& height) {
    if (height.empty()) return 0;
    
    int left = 0, right = height.size() - 1;
    int left_max = 0, right_max = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water += right_max - height[right];
            }
            right--;
        }
    }
    
    return water;
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = twoSumSorted(nums, 9);
    cout << result[0] << ", " << result[1] << endl;
    
    vector<int> dup = {1, 1, 2, 2, 3};
    cout << removeDuplicates(dup) << endl;
    
    vector<int> height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    cout << trap(height) << endl;
    
    return 0;
}`}</code>
            </pre>

            {/* Code Templates */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              6. Code Templates
            </h3>

            <h4 className="text-lg font-semibold mb-4">
              Binary Search Templates
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Binary Search Templates

# Template 1: Find exact match
def binary_search_exact(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

# Template 2: Find first occurrence
def binary_search_first(arr, target):
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            result = mid
            right = mid - 1  # Continue searching left
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

# Template 3: Find last occurrence
def binary_search_last(arr, target):
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            result = mid
            left = mid + 1  # Continue searching right
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return result

# Template 4: Binary search on answer
def binary_search_answer(arr, condition):
    left, right = 0, len(arr) - 1
    
    while left < right:
        mid = left + (right - left) // 2
        
        if condition(mid):  # Adjust based on problem
            right = mid
        else:
            left = mid + 1
    
    return left

# C++: Binary Search Templates
#include <iostream>
#include <vector>
using namespace std;

// Template 1: Find exact match
int binarySearchExact(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Template 2: Find first occurrence
int binarySearchFirst(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1;  // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Template 3: Find last occurrence
int binarySearchLast(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            left = mid + 1;  // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

int main() {
    vector<int> arr = {1, 2, 2, 2, 3, 4, 5};
    
    cout << binarySearchExact(arr, 2) << endl;   // 2 or 3 or 4
    cout << binarySearchFirst(arr, 2) << endl;   // 1
    cout << binarySearchLast(arr, 2) << endl;    // 3
    
    return 0;
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Backtracking Template
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Backtracking Template
def backtrack_template():
    def backtrack(current_state, choices, result):
        # Base case
        if is_solution(current_state):
            result.append(current_state[:])  # Copy
            return
        
        # Try each choice
        for choice in get_choices(current_state, choices):
            # Make choice
            make_choice(current_state, choice)
            
            # Recurse
            backtrack(current_state, choices, result)
            
            # Backtrack
            undo_choice(current_state, choice)
    
    result = []
    backtrack(initial_state, choices, result)
    return result

# Example: Subsets
def subsets(nums):
    def backtrack(start, current, result):
        result.append(current[:])
        
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current, result)
            current.pop()
    
    result = []
    backtrack(0, [], result)
    return result

# Example: Permutations
def permute(nums):
    def backtrack(current, remaining):
        if not remaining:
            result.append(current[:])
            return
        
        for i in range(len(remaining)):
            # Choose
            current.append(remaining[i])
            # Recurse with remaining
            backtrack(current, remaining[:i] + remaining[i+1:])
            # Backtrack
            current.pop()
    
    result = []
    backtrack([], nums)
    return result

# C++: Backtracking Template
#include <iostream>
#include <vector>
using namespace std;

class Backtracking {
public:
    // Subsets
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        backtrackSubsets(0, current, nums, result);
        return result;
    }
    
private:
    void backtrackSubsets(int start, vector<int>& current, 
                         vector<int>& nums, vector<vector<int>>& result) {
        result.push_back(current);
        
        for (int i = start; i < nums.size(); ++i) {
            current.push_back(nums[i]);
            backtrackSubsets(i + 1, current, nums, result);
            current.pop_back();
        }
    }
    
public:
    // Permutations
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        vector<bool> used(nums.size(), false);
        backtrackPermute(current, nums, used, result);
        return result;
    }
    
private:
    void backtrackPermute(vector<int>& current, vector<int>& nums,
                         vector<bool>& used, vector<vector<int>>& result) {
        if (current.size() == nums.size()) {
            result.push_back(current);
            return;
        }
        
        for (int i = 0; i < nums.size(); ++i) {
            if (used[i]) continue;
            
            used[i] = true;
            current.push_back(nums[i]);
            backtrackPermute(current, nums, used, result);
            current.pop_back();
            used[i] = false;
        }
    }
};

int main() {
    Backtracking bt;
    vector<int> nums = {1, 2, 3};
    
    auto subsets = bt.subsets(nums);
    cout << "Subsets:" << endl;
    for (auto& subset : subsets) {
        cout << "[";
        for (int num : subset) cout << num << ",";
        cout << "] ";
    }
    cout << endl;
    
    auto perms = bt.permute(nums);
    cout << "Permutations:" << endl;
    for (auto& perm : perms) {
        cout << "[";
        for (int num : perm) cout << num << ",";
        cout << "] ";
    }
    cout << endl;
    
    return 0;
}`}</code>
            </pre>

            {/* Common Mistakes */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              7. Common Mistakes & Tips
            </h3>

            <div className="space-y-6">
              <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-red-400 mb-2">
                  Edge Cases to Test
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Empty input arrays/strings</li>
                  <li>• Single element arrays</li>
                  <li>• Arrays with duplicates</li>
                  <li>• Maximum/minimum constraints</li>
                  <li>• Negative numbers</li>
                  <li>• Null/None values</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                  Common Bugs
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Off-by-one errors in loops</li>
                  <li>• Integer overflow/underflow</li>
                  <li>• Not handling null pointers</li>
                  <li>• Modifying collections during iteration</li>
                  <li>• Wrong base cases in recursion</li>
                  <li>• Stack overflow in deep recursion</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  Optimization Traps
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Premature optimization</li>
                  <li>• Choosing wrong data structure</li>
                  <li>• Not considering time/space tradeoffs</li>
                  <li>• Ignoring constants in Big O</li>
                  <li>• Recursive solutions for large inputs</li>
                </ul>
              </div>
            </div>

            {/* Arrays & Strings */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              1. Arrays & Strings
            </h3>

            <h4 className="text-lg font-semibold mb-4">
              Two Pointers Technique
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Reverse array in-place
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

# C++: Two sum with two pointers
vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return {left, right};
        else if (sum < target) left++;
        else right--;
    }
    return {};
}`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">Sliding Window</h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Maximum sum subarray of size k
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    window_sum = 0
    
    for i in range(len(arr)):
        window_sum += arr[i]
        if i >= k - 1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[i - k + 1]
    
    return max_sum

# C++: Longest substring without repeating characters
int lengthOfLongestSubstring(string s) {
    unordered_set<char> chars;
    int left = 0, max_len = 0;
    
    for (int right = 0; right < s.size(); ++right) {
        while (chars.count(s[right])) {
            chars.erase(s[left]);
            left++;
        }
        chars.insert(s[right]);
        max_len = max(max_len, right - left + 1);
    }
    return max_len;
}`}</code>
            </pre>

            {/* Linked Lists */}
            <h3 className="text-xl font-bold mb-6 text-purple-400">
              2. Linked Lists
            </h3>

            <h4 className="text-lg font-semibold mb-4">
              Singly Linked List Implementation
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, val):
        if not self.head:
            self.head = ListNode(val)
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = ListNode(val)

# C++
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class LinkedList {
public:
    ListNode* head;
    LinkedList() : head(nullptr) {}
    
    void append(int val) {
        if (!head) {
            head = new ListNode(val);
            return;
        }
        ListNode* curr = head;
        while (curr->next) curr = curr->next;
        curr->next = new ListNode(val);
    }
};`}</code>
            </pre>

            <h4 className="text-lg font-semibold mb-4">
              Fast/Slow Pointers (Cycle Detection)
            </h4>
            <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-green-300">{`# Python: Detect cycle
def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

# C++: Find cycle start
ListNode* detectCycle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            // Find start
            slow = head;
            while (slow != fast) {
                slow = slow->next;
                fast = fast->next;
            }
            return slow;
        }
    }
    return nullptr;
}`}</code>
            </pre>

            <div className="text-center text-gray-500">
              [Rest of DSA: Stacks, Queues, Trees, Graphs, Sorting, Searching,
              DP, etc.]
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
