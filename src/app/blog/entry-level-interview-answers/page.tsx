import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function EntryLevelInterviewAnswers() {
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
          <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
            Interview Prep
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-white via-green-200 to-gray-500 bg-clip-text text-transparent">
            Entry-Level Interview Answers
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Comprehensive answers to 200+ questions for 5-10 LPA companies.
            Master the fundamentals that get you hired.
          </p>
        </header>

        {/* OOP Basics Answers */}
        <section id="oop-basics">
          <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              OOP Basics Answers (1-20)
            </h2>
            <p className="text-gray-400">
              Fundamental object-oriented programming concepts with examples.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                1. What is a class and an object? Give a simple example.
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> A class is a blueprint or template for
                creating objects. An object is an instance of a class.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                {`class Car {
  String model;
  int year;
}

Car myCar = new Car(); // myCar is an object`}
              </pre>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                2. What is the difference between public, private, and
                protected?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <strong>Public:</strong> Accessible from anywhere
                </li>
                <li>
                  <strong>Private:</strong> Accessible only within the same
                  class
                </li>
                <li>
                  <strong>Protected:</strong> Accessible within the same class
                  and subclasses
                </li>
              </ul>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                3. What is a constructor? What happens if you don't write one?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> A constructor is a special method
                called when an object is created. It initializes the object. If
                you don't write one, Java provides a default no-argument
                constructor.
              </p>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                4. Can a constructor return a value?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> No, constructors don't have a return
                type, not even void. They return the instance of the class
                implicitly.
              </p>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                5. What is 'this' keyword? Give an example of when you use it.
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> 'this' refers to the current object
                instance. Used to distinguish between instance variables and
                parameters.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                {`class Person {
  String name;
  Person(String name) {
    this.name = name; // 'this.name' is instance variable
  }
}`}
              </pre>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                6. What is inheritance? Write a simple example.
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> Inheritance allows a class to inherit
                properties and methods from another class.
              </p>
              <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                {`class Animal {
  void eat() { System.out.println("Eating"); }
}

class Dog extends Animal {
  void bark() { System.out.println("Barking"); }
}`}
              </pre>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                7. What is the difference between method overloading and
                overriding?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <strong>Overloading:</strong> Same method name, different
                  parameters in the same class
                </li>
                <li>
                  <strong>Overriding:</strong> Same method name and parameters
                  in subclass
                </li>
              </ul>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                8. Can you have two methods with the same name in a class?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> Yes, through method overloading
                (different parameters) or overriding (in subclasses).
              </p>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                9. What is a destructor? Do you need to write one in Java?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> A destructor cleans up resources when
                an object is destroyed. Java has automatic garbage collection,
                so you don't need to write destructors. Use finalize() method if
                needed.
              </p>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                10. What does 'static' mean? Why is the main() method static?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> Static means it belongs to the class,
                not instances. main() is static so JVM can call it without
                creating an object.
              </p>
            </div>

            {/* Continue with more questions... */}
            <QuestionCard
              title="11. Can you access a non-static variable from a static method?"
              learn="Understanding static vs instance members."
              context="Scope and accessibility of class members."
              steps={[
                "Static methods belong to the class, not instances",
                "They can only access static variables and methods",
                "Instance variables require an object instance",
              ]}
              pythonCode={`class Example:
    static_var = "static"
    def __init__(self):
        self.instance_var = "instance"
    
    @staticmethod
    def static_method():
        return Example.static_var  # ✅ Works
        # return self.instance_var  # ❌ Error
    
    def instance_method(self):
        return self.instance_var  # ✅ Works`}
              cppCode={`class Example {
public:
    static std::string static_var;
    std::string instance_var;
    
    static std::string staticMethod() {
        return static_var;  // ✅ Works
        // return instance_var;  // ❌ Error
    }
    
    std::string instanceMethod() {
        return instance_var;  // ✅ Works
    }
};`}
              walkthrough="Static methods are called on the class itself and don't have access to 'this' or instance variables. This is why main() is static - it needs to run before any objects exist."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Simple access check.",
              }}
              mistakes={[
                {
                  mistake: "Trying to use 'this' in static method",
                  fix: "Static methods don't have 'this' pointer",
                },
              ]}
              tryIt="Create a static counter that tracks how many objects of a class have been created."
            />

            <QuestionCard
              title="12. What is the final keyword used for?"
              learn="Immutability and inheritance control."
              context="Making classes, methods, or variables unchangeable."
              steps={[
                "For variables: makes them constants",
                "For methods: prevents overriding",
                "For classes: prevents inheritance",
              ]}
              pythonCode={`# Python equivalent using naming convention
class Example:
    CONSTANT = "final"  # Convention: uppercase means final
    
    def normal_method(self):
        return "can be overridden"
    
    # No direct equivalent to final methods in Python`}
              cppCode={`class Example {
public:
    const int CONSTANT = 42;  // Final variable
    
    virtual void normalMethod() {
        // Can be overridden
    }
    
    virtual void finalMethod() final {
        // Cannot be overridden in derived classes
    }
};

class Derived final : public Example {  // Cannot be inherited from
    // This class cannot have children
};`}
              walkthrough="Final prevents modification or extension. Variables become constants, methods can't be overridden, and classes can't be inherited. This is similar to Python's naming conventions and frozen classes."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Compile-time restrictions.",
              }}
              mistakes={[
                {
                  mistake: "Trying to override final method",
                  fix: "Remove final keyword if overriding is needed",
                },
              ]}
              tryIt="Design a class hierarchy where some methods are final and some are not."
            />

            <QuestionCard
              title="13. What is an abstract class? Can you create an object of it?"
              learn="Blueprint classes for inheritance."
              context="Classes that define structure but not complete implementation."
              steps={[
                "Abstract classes contain abstract methods (no implementation)",
                "Concrete subclasses must implement all abstract methods",
                "Cannot instantiate abstract classes directly",
              ]}
              pythonCode={`from abc import ABC, abstractmethod

class Animal(ABC):  # Abstract class
    @abstractmethod
    def make_sound(self):
        pass  # No implementation
    
    def breathe(self):
        return "breathing"  # Concrete method

class Dog(Animal):
    def make_sound(self):
        return "woof"  # Must implement

# animal = Animal()  # ❌ Error: can't instantiate
dog = Dog()  # ✅ Works`}
              cppCode={`class Animal {  // Abstract class
public:
    virtual void makeSound() = 0;  // Pure virtual = abstract
    
    void breathe() {
        std::cout << "breathing" << std::endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "woof" << std::endl;
    }
};

// Animal animal;  // ❌ Error: can't instantiate abstract class
Dog dog;  // ✅ Works`}
              walkthrough="Abstract classes define 'what' should be done, concrete classes define 'how'. They're essential for creating frameworks and ensuring subclasses implement required functionality."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Design-time concept.",
              }}
              mistakes={[
                {
                  mistake: "Trying to instantiate abstract class",
                  fix: "Create concrete subclass and instantiate that",
                },
              ]}
              tryIt="Create an abstract Shape class with area() method, and concrete Circle and Rectangle classes."
            />

            <QuestionCard
              title="14. What is an interface? How is it different from an Abstract Class?"
              learn="Contracts for class behavior."
              context="Pure behavior specification without implementation."
              steps={[
                "Interface defines method signatures only",
                "Classes implement interfaces",
                "Can implement multiple interfaces",
                "No instance variables (only constants)",
              ]}
              pythonCode={`from abc import ABC, abstractmethod

class Flyable(ABC):  # Interface equivalent
    @abstractmethod
    def fly(self):
        pass

class Swimmable(ABC):
    @abstractmethod
    def swim(self):
        pass

class Duck(Flyable, Swimmable):  # Multiple inheritance
    def fly(self):
        return "flying"
    
    def swim(self):
        return "swimming"`}
              cppCode={`class Flyable {
public:
    virtual void fly() = 0;
};

class Swimmable {
public:
    virtual void swim() = 0;
};

class Duck : public Flyable, public Swimmable {
public:
    void fly() override {
        std::cout << "flying" << std::endl;
    }
    
    void swim() override {
        std::cout << "swimming" << std::endl;
    }
};`}
              walkthrough="Interfaces are like contracts - they specify what a class must do, but not how. Unlike abstract classes, interfaces support multiple inheritance and contain no implementation."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Pure design concept.",
              }}
              mistakes={[
                {
                  mistake: "Adding implementation to interface methods",
                  fix: "Interfaces should only have method signatures",
                },
              ]}
              tryIt="Design interfaces for Vehicle (start, stop) and MusicPlayer (play, pause) and implement in a CarWithStereo class."
            />

            <QuestionCard
              title="15. Can an interface have variables? Can it have methods with code?"
              learn="Interface capabilities and limitations."
              context="What can and cannot be in an interface."
              steps={[
                "Variables: Only public static final constants",
                "Methods: Can have default methods with implementation (Java 8+)",
                "Abstract methods: Must be implemented by implementing classes",
              ]}
              pythonCode={`# Python protocols/interfaces don't have variables
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...
    
    # No variables in protocol itself
    # Implementing classes define their own variables`}
              cppCode={`class Shape {
public:
    static const double PI = 3.14159;  // Constant variable
    
    virtual double area() = 0;  // Abstract method
    
    // Default method with implementation (C++20 concepts)
    void print() const {
        std::cout << "Shape" << std::endl;
    }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    
    double area() override {
        return PI * radius * radius;
    }
};`}
              walkthrough="Modern interfaces can have default implementations and constants, but the core purpose remains behavior specification. This allows interface evolution without breaking existing implementations."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Language feature.",
              }}
              mistakes={[
                {
                  mistake: "Trying to add non-final variables to interface",
                  fix: "Use constants or put variables in implementing classes",
                },
              ]}
              tryIt="Create an interface with a default method and see how implementing classes can override or inherit it."
            />
          </div>
        </section>

        {/* Practical OOP Answers */}
        <section id="practical-oop" className="mt-24">
          <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">
              Practical OOP Answers (21-50)
            </h2>
            <p className="text-gray-400">
              Hands-on OOP concepts with code examples.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="21. Write a class for a Bank Account with deposit and withdraw methods."
              learn="Basic class design with encapsulation."
              context="Creating a simple banking system class."
              steps={[
                "Create a class with private balance field",
                "Add deposit method to increase balance",
                "Add withdraw method to decrease balance with validation",
                "Add getter for balance",
              ]}
              pythonCode={`class BankAccount:
    def __init__(self, initial_balance=0):
        self.__balance = initial_balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance`}
              cppCode={`class BankAccount {
private:
    double balance;
public:
    BankAccount(double initial = 0) : balance(initial) {}
    
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    
    bool withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    double getBalance() { return balance; }
};`}
              walkthrough="This demonstrates encapsulation by keeping balance private and providing controlled access through methods."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Simple operations on a single field.",
              }}
              mistakes={[
                {
                  mistake: "Making balance public",
                  fix: "Use private field with getter methods",
                },
              ]}
              tryIt="Add interest calculation method."
            />

            {/* Add more QuestionCard components for key practical questions */}
            <QuestionCard
              title="22. How do you prevent a class from being inherited?"
              learn="Inheritance control mechanisms."
              context="Making classes final or sealed."
              steps={[
                "Use 'final' keyword in Java",
                "Use 'sealed' keyword in C# (newer versions)",
                "Make constructor private (Singleton pattern)",
              ]}
              pythonCode={`# Python doesn't have direct equivalent
# Convention: use _ prefix for "private" but still inheritable

class FinalClass:
    def __init__(self):
        self._private = "can't inherit easily"
    
    def __init_subclass__(cls, **kwargs):
        raise TypeError("Cannot inherit from FinalClass")

# class Child(FinalClass):  # ❌ Will raise TypeError
#     pass`}
              cppCode={`class FinalClass final {  // 'final' prevents inheritance
public:
    void method() {
        std::cout << "Final class method" << std::endl;
    }
};

// class Derived : public FinalClass {  // ❌ Compile error
// };

class Singleton {
private:
    Singleton() {}  // Private constructor
    static Singleton* instance;
public:
    static Singleton* getInstance() {
        if (instance == nullptr) {
            instance = new Singleton();
        }
        return instance;
    }
};`}
              walkthrough="Final classes prevent inheritance for security or design reasons. Private constructors prevent direct instantiation but allow controlled creation through factory methods."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Language-level restriction.",
              }}
              mistakes={[
                {
                  mistake: "Thinking final methods prevent inheritance",
                  fix: "Final classes prevent inheritance, final methods prevent overriding",
                },
              ]}
              tryIt="Implement a Singleton class that cannot be inherited."
            />

            <QuestionCard
              title="23. What is the difference between pass by value and pass by reference?"
              learn="Parameter passing mechanisms."
              context="How arguments are passed to functions/methods."
              steps={[
                "Pass by value: Copy of the value is passed",
                "Pass by reference: Reference/address is passed",
                "Changes to reference affect original, changes to value don't",
              ]}
              pythonCode={`def pass_by_value(x):
    x = x + 1  # Changes local copy
    print(f"Inside function: {x}")

def pass_by_reference(lst):
    lst.append(4)  # Changes original list
    print(f"Inside function: {lst}")

num = 5
pass_by_value(num)
print(f"Outside function: {num}")  # Still 5

my_list = [1, 2, 3]
pass_by_reference(my_list)
print(f"Outside function: {my_list}")  # [1, 2, 3, 4]`}
              cppCode={`void passByValue(int x) {
    x = x + 1;  // Changes local copy
    std::cout << "Inside function: " << x << std::endl;
}

void passByReference(int& x) {
    x = x + 1;  // Changes original
    std::cout << "Inside function: " << x << std::endl;
}

int main() {
    int num = 5;
    passByValue(num);
    std::cout << "Outside function: " << num << std::endl;  // Still 5
    
    passByReference(num);
    std::cout << "Outside function: " << num << std::endl;  // Now 6
    return 0;
}`}
              walkthrough="Understanding parameter passing is crucial for debugging. Python passes references to objects but copies immutable types. C++ gives explicit control with & for references."
              complexity={{
                time: "O(1)",
                space: "O(1) for primitives, O(n) for objects",
                why: "Depends on what is being passed.",
              }}
              mistakes={[
                {
                  mistake: "Thinking Python always passes by reference",
                  fix: "Python passes references to objects, but objects might be immutable",
                },
              ]}
              tryIt="Write a swap function that works correctly in both languages."
            />

            <QuestionCard
              title="24. What is a memory leak? Give an example."
              learn="Memory management issues."
              context="When memory is not properly freed."
              steps={[
                "Memory leak: Allocated memory not deallocated",
                "Causes: Forgetting to free/delete, circular references",
                "Symptoms: Program uses more memory over time",
              ]}
              pythonCode={`# Python has garbage collection, but circular references can cause leaks
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def create_circular_reference():
    node1 = Node(1)
    node2 = Node(2)
    node1.next = node2
    node2.next = node1  # Circular reference
    
    # Without breaking the cycle, these objects won't be garbage collected
    # even after function ends
    
    return node1

# Better approach: use weak references for circular structures
import weakref

class BetterNode:
    def __init__(self, value):
        self.value = value
        self.next = None  # Use weakref.ref() if needed`}
              cppCode={`#include <iostream>

class MemoryLeak {
public:
    MemoryLeak() { std::cout << "Object created" << std::endl; }
    ~MemoryLeak() { std::cout << "Object destroyed" << std::endl; }
};

void createLeak() {
    MemoryLeak* obj = new MemoryLeak();  // Allocated on heap
    // Forgot to delete obj;  // ❌ Memory leak!
}

void properCleanup() {
    MemoryLeak* obj = new MemoryLeak();
    delete obj;  // ✅ Properly cleaned up
}

int main() {
    createLeak();  // Object created but never destroyed
    properCleanup();  // Object created and destroyed
    return 0;
}`}
              walkthrough="Memory leaks cause programs to consume increasing amounts of memory. In languages with manual memory management like C++, forgetting to delete/free is common. Python's garbage collector helps but circular references can still cause issues."
              complexity={{
                time: "Varies",
                space: "Accumulates over time",
                why: "Memory not reclaimed.",
              }}
              mistakes={[
                {
                  mistake: "Relying on garbage collection in C++",
                  fix: "C++ requires manual memory management",
                },
              ]}
              tryIt="Write a program that demonstrates a memory leak and then fix it."
            />

            <QuestionCard
              title="25. What is the difference between '==' and 'equals()' method?"
              learn="Reference vs content comparison."
              context="How to properly compare objects in Java."
              steps={[
                "'==' compares memory addresses (references)",
                "'.equals()' compares content/values",
                "For primitives, '==' compares values",
                "Override equals() for custom comparison logic",
              ]}
              pythonCode={`# Python uses '==' for content comparison (like equals())
# 'is' is like '=='

class Person:
    def __init__(self, name):
        self.name = name
    
    def __eq__(self, other):  # Override == behavior
        if isinstance(other, Person):
            return self.name == other.name
        return False

person1 = Person("John")
person2 = Person("John")
person3 = person1

print(person1 == person2)  # True (content comparison)
print(person1 is person2)  # False (different objects)
print(person1 is person3)  # True (same object)`}
              cppCode={`#include <iostream>
#include <string>

class Person {
public:
    std::string name;
    Person(std::string n) : name(n) {}
    
    bool operator==(const Person& other) const {
        return name == other.name;  // Content comparison
    }
};

int main() {
    Person p1("John");
    Person p2("John");
    Person p3 = p1;  // Copy
    
    std::cout << (p1 == p2) << std::endl;  // True (overloaded ==)
    std::cout << (&p1 == &p2) << std::endl;  // False (different addresses)
    std::cout << (&p1 == &p3) << std::endl;  // False (different objects)
    
    return 0;
}`}
              walkthrough="'==' checks if two references point to the same memory location. '.equals()' (or overridden operators) checks if the contents are the same. Always override equals() for custom classes when you want content-based comparison."
              complexity={{
                time: "O(1) for references, varies for content",
                space: "O(1)",
                why: "Reference comparison is instant, content depends on data structure.",
              }}
              mistakes={[
                {
                  mistake: "Using == for String comparison in Java",
                  fix: "Use .equals() for String content comparison",
                },
              ]}
              tryIt="Create a custom class and override equals() to compare based on multiple fields."
            />

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                36-50. Memory & Advanced Basics
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>36.</strong> What is the difference between stack and
                heap memory? Stack for local variables, heap for objects.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>37.</strong> What is garbage collection? Automatic
                memory management in Java.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>38.</strong> What is exception handling?
                try-catch-finally blocks.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>39.</strong> What is the difference between throw and
                throws? throw throws exception, throws declares it.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>40.</strong> What is an ArrayList? Dynamic array
                implementation.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>41.</strong> What is a LinkedList? Doubly linked list,
                good for insertions/deletions.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>42.</strong> What is a HashSet? Set implementation using
                hash table, no duplicates.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>43.</strong> What is the difference between Iterator and
                ListIterator? ListIterator can traverse backwards.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>44.</strong> What is a Vector in Java? Thread-safe
                ArrayList.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>45.</strong> What is the difference between Comparable
                and Comparator? Comparable for natural ordering, Comparator for
                custom.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>46.</strong> What is serialization in Java? Converting
                object to byte stream.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>47.</strong> What is the transient keyword? Excludes
                field from serialization.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>48.</strong> What is the volatile keyword? Ensures
                visibility of changes across threads.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>49.</strong> What is the synchronized keyword? Makes
                method/block thread-safe.
              </p>
              <p className="text-gray-300 mb-2">
                <strong>50.</strong> What is a deadlock? Two threads waiting for
                each other's resources.
              </p>
            </div>
          </div>
        </section>

        {/* SQL Answers */}
        <section id="sql" className="mt-24">
          <div className="mb-12 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              SQL Answers (51-100)
            </h2>
            <p className="text-gray-400">
              Database query fundamentals and practical examples.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                51. What is SQL? What does RDBMS stand for?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> SQL (Structured Query Language) is used
                to manage relational databases. RDBMS stands for Relational
                Database Management System.
              </p>
            </div>

            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                52. What is a Primary Key? Can it be NULL?
              </h3>
              <p className="text-gray-300 mb-2">
                <strong>Answer:</strong> Primary Key uniquely identifies each
                record. No, it cannot be NULL.
              </p>
            </div>

            <QuestionCard
              title="57. Write a query to create a simple Employee table with id, name, salary."
              learn="Basic table creation."
              context="Creating a fundamental employee table."
              steps={[
                "Use CREATE TABLE statement",
                "Define columns with data types",
                "Add constraints like PRIMARY KEY",
              ]}
              pythonCode={`-- SQL Query
CREATE TABLE Employee (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2)
);`}
              cppCode={`-- Alternative with more constraints
CREATE TABLE Employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) CHECK (salary > 0)
);`}
              walkthrough="This creates a basic table structure. Always specify data types and constraints appropriately."
              complexity={{
                time: "O(1)",
                space: "Minimal",
                why: "DDL operation, no data processing.",
              }}
              mistakes={[
                {
                  mistake: "Not specifying data types",
                  fix: "Always define appropriate data types for columns",
                },
              ]}
              tryIt="Add department_id as foreign key."
            />

            <QuestionCard
              title="58. Write a query to insert 3 records into the Employee table."
              learn="Basic INSERT operations."
              context="Adding multiple records to a database table."
              steps={[
                "Use INSERT INTO statement",
                "Specify table name",
                "List column names (optional but recommended)",
                "Provide VALUES for each record",
              ]}
              pythonCode={`-- SQL Query
INSERT INTO Employee (id, name, salary) VALUES
(1, 'John Doe', 50000),
(2, 'Jane Smith', 55000),
(3, 'Bob Johnson', 48000);`}
              cppCode={`-- Alternative syntax
INSERT INTO Employee VALUES
(1, 'John Doe', 50000),
(2, 'Jane Smith', 55000),
(3, 'Bob Johnson', 48000);`}
              walkthrough="INSERT statements add new records to tables. Always specify column names for clarity and to avoid issues if table structure changes. Multiple records can be inserted in one statement for efficiency."
              complexity={{
                time: "O(1) per record",
                space: "O(1)",
                why: "Simple data insertion operation.",
              }}
              mistakes={[
                {
                  mistake: "Not specifying column names",
                  fix: "Always list columns explicitly for maintainability",
                },
              ]}
              tryIt="Insert records with some NULL values and see how it affects queries."
            />

            <QuestionCard
              title="59. Write a query to update the salary of an employee with id = 5."
              learn="Basic UPDATE operations."
              context="Modifying existing records in a database."
              steps={[
                "Use UPDATE statement",
                "Specify table name",
                "Use WHERE clause to identify specific record(s)",
                "Set new values with SET clause",
              ]}
              pythonCode={`-- SQL Query
UPDATE Employee
SET salary = 60000
WHERE id = 5;`}
              cppCode={`-- Update with multiple conditions
UPDATE Employee
SET salary = salary * 1.1,  -- 10% raise
    last_updated = CURRENT_DATE
WHERE id = 5 AND department = 'Engineering';`}
              walkthrough="UPDATE modifies existing data. Always use WHERE clause to avoid updating all records accidentally. Without WHERE, all rows in the table would be updated."
              complexity={{
                time: "O(1) to O(n)",
                space: "O(1)",
                why: "Depends on how many records match the WHERE condition.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting WHERE clause",
                  fix: "Always include WHERE or you'll update all records",
                },
              ]}
              tryIt="Update salaries for all employees in a specific department with a percentage increase."
            />

            <QuestionCard
              title="60. Write a query to delete all employees with salary less than 20000."
              learn="Basic DELETE operations."
              context="Removing records from a database table."
              steps={[
                "Use DELETE FROM statement",
                "Specify table name",
                "Use WHERE clause to identify records to delete",
                "Be careful - this permanently removes data",
              ]}
              pythonCode={`-- SQL Query
DELETE FROM Employee
WHERE salary < 20000;`}
              cppCode={`-- Delete with multiple conditions
DELETE FROM Employee
WHERE salary < 20000
  AND hire_date < '2020-01-01';`}
              walkthrough="DELETE permanently removes records. Always use WHERE clause to specify which records to delete. Without WHERE, all records in the table would be deleted. Consider using SELECT first to verify which records will be affected."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "May need to scan many records to find matches.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting WHERE clause",
                  fix: "Test with SELECT first, then use same WHERE in DELETE",
                },
              ]}
              tryIt="Delete employees who haven't logged in for 2 years (assuming you have a last_login column)."
            />

            <QuestionCard
              title="72. What is INNER JOIN? Write a simple example."
              learn="Combining data from multiple tables."
              context="Retrieving related data from two tables."
              steps={[
                "Identify related columns (foreign keys)",
                "Use INNER JOIN to combine tables",
                "Specify join condition with ON clause",
                "Select desired columns from both tables",
              ]}
              pythonCode={`-- SQL Query
SELECT e.name, d.department_name
FROM Employee e
INNER JOIN Department d ON e.department_id = d.id;`}
              cppCode={`-- More complex join with conditions
SELECT e.name, e.salary, d.department_name, m.name as manager
FROM Employee e
INNER JOIN Department d ON e.department_id = d.id
INNER JOIN Employee m ON e.manager_id = m.id
WHERE e.salary > 50000;`}
              walkthrough="INNER JOIN returns only records that have matching values in both tables. If an employee has no department or a department has no employees, those records won't appear in the result."
              complexity={{
                time: "O(n*m) worst case",
                space: "O(n*m)",
                why: "Cartesian product of matching records.",
              }}
              mistakes={[
                {
                  mistake: "Using wrong join condition",
                  fix: "Verify foreign key relationships before joining",
                },
              ]}
              tryIt="Join three tables: Employee, Department, and Project to show employees working on projects."
            />

            <QuestionCard
              title="76. Write a query to find all employees and their department names (using JOIN)."
              learn="Practical JOIN usage."
              context="Getting employee information with department details."
              steps={[
                "Identify the tables: Employee and Department",
                "Find the relationship: department_id foreign key",
                "Use appropriate JOIN type",
                "Select relevant columns",
              ]}
              pythonCode={`-- SQL Query using INNER JOIN
SELECT e.id, e.name, e.salary, d.department_name
FROM Employee e
INNER JOIN Department d ON e.department_id = d.id;`}
              cppCode={`-- Using LEFT JOIN to include employees without departments
SELECT e.id, e.name, COALESCE(d.department_name, 'No Department') as dept
FROM Employee e
LEFT JOIN Department d ON e.department_id = d.id;`}
              walkthrough="This query combines employee personal information with organizational structure. INNER JOIN ensures only employees with valid departments are shown. LEFT JOIN would include employees without departments."
              complexity={{
                time: "O(n log n) typically",
                space: "O(n)",
                why: "Database uses indexes for efficient joins.",
              }}
              mistakes={[
                {
                  mistake: "Selecting wrong columns",
                  fix: "Choose columns that provide meaningful information",
                },
              ]}
              tryIt="Add a WHERE clause to show only employees from 'Engineering' department."
            />

            <QuestionCard
              title="77. Write a query to count the number of employees in each department."
              learn="GROUP BY and aggregate functions."
              context="Summarizing data by categories."
              steps={[
                "Use GROUP BY to group records by department",
                "Use COUNT(*) to count employees per group",
                "Include department name in SELECT",
                "Optionally filter with HAVING",
              ]}
              pythonCode={`-- SQL Query
SELECT d.department_name, COUNT(e.id) as employee_count
FROM Department d
LEFT JOIN Employee e ON d.id = e.department_id
GROUP BY d.id, d.department_name;`}
              cppCode={`-- With HAVING clause for filtering
SELECT d.department_name, COUNT(e.id) as employee_count
FROM Department d
LEFT JOIN Employee e ON d.id = e.department_id
GROUP BY d.id, d.department_name
HAVING COUNT(e.id) > 5
ORDER BY employee_count DESC;`}
              walkthrough="GROUP BY creates groups of records with the same value. Aggregate functions like COUNT work on each group. LEFT JOIN ensures departments with 0 employees are included."
              complexity={{
                time: "O(n log n)",
                space: "O(k) where k is number of groups",
                why: "Sorting/grouping operation required.",
              }}
              mistakes={[
                {
                  mistake: "Using WHERE instead of HAVING",
                  fix: "WHERE filters before grouping, HAVING filters after",
                },
              ]}
              tryIt="Find departments with average salary above 60000."
            />

            <QuestionCard
              title="84. Write a query to find the second highest salary. (Without using LIMIT or TOP)"
              learn="Subqueries and MAX functions."
              context="Finding nth highest value without LIMIT."
              steps={[
                "Find the maximum salary",
                "Find the maximum salary that is less than the overall maximum",
                "Use subquery or self-join approach",
              ]}
              pythonCode={`-- Method 1: Using subquery
SELECT MAX(salary) as second_highest
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee);`}
              cppCode={`-- Method 2: Using self-join
SELECT DISTINCT e1.salary
FROM Employee e1
WHERE 1 = (SELECT COUNT(DISTINCT e2.salary)
           FROM Employee e2
           WHERE e2.salary > e1.salary);`}
              walkthrough="This finds the second highest by excluding the absolute highest value. The subquery approach is more efficient. For nth highest, you can modify the condition accordingly."
              complexity={{
                time: "O(n log n)",
                space: "O(1)",
                why: "Requires sorting to find max values.",
              }}
              mistakes={[
                {
                  mistake: "Not handling duplicates",
                  fix: "Use DISTINCT if salaries can be the same",
                },
              ]}
              tryIt="Find the third highest salary using the same approach."
            />
          </div>
        </section>

        {/* System Concepts & Web */}
        <section id="system-web" className="mt-24">
          <div className="mb-12 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">
              System Concepts & Web Answers (101-130)
            </h2>
            <p className="text-gray-400">
              Web technologies and general programming concepts.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="101. What is HTTP? What is HTTPS?"
              learn="Web communication protocols."
              context="How browsers and servers communicate."
              steps={[
                "HTTP: HyperText Transfer Protocol for web communication",
                "HTTPS: Secure HTTP with SSL/TLS encryption",
                "HTTP is plaintext, HTTPS encrypts data",
                "HTTPS uses port 443, HTTP uses port 80",
              ]}
              pythonCode={`# Python HTTP request
import requests

# HTTP (insecure)
response = requests.get('http://example.com')
print(f"Status: {response.status_code}")

# HTTPS (secure)
response = requests.get('https://example.com')
print(f"Secure connection: {response.url.startswith('https://')}")`}
              cppCode={`#include <iostream>
#include <curl/curl.h>

// Using libcurl for HTTP requests
size_t WriteCallback(void* contents, size_t size, size_t nmemb, void* userp) {
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

int main() {
    CURL* curl = curl_easy_init();
    std::string response;
    
    curl_easy_setopt(curl, CURLOPT_URL, "https://api.github.com");
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
    
    CURLcode res = curl_easy_perform(curl);
    if(res == CURLE_OK) {
        std::cout << "HTTPS request successful" << std::endl;
    }
    
    curl_easy_cleanup(curl);
    return 0;
}`}
              walkthrough="HTTP is the foundation of web communication. HTTPS adds encryption to protect sensitive data like passwords and credit card information. Modern websites should always use HTTPS."
              complexity={{
                time: "O(1) for connection, varies for data transfer",
                space: "O(data size)",
                why: "Network operations depend on data amount.",
              }}
              mistakes={[
                {
                  mistake: "Using HTTP for sensitive data",
                  fix: "Always use HTTPS for login forms and financial data",
                },
              ]}
              tryIt="Check if a website supports HTTP/2 using browser developer tools."
            />

            <QuestionCard
              title="102. What are HTTP methods? Explain GET and POST."
              learn="HTTP request types."
              context="Different ways to interact with web servers."
              steps={[
                "GET: Retrieve data from server",
                "POST: Send data to server to create/update resources",
                "PUT: Update existing resource",
                "DELETE: Remove resource",
                "PATCH: Partial update",
              ]}
              pythonCode={`import requests

# GET request - retrieve data
response = requests.get('https://api.example.com/users')
print(f"GET status: {response.status_code}")
print(f"Data: {response.json()}")

# POST request - send data
user_data = {'name': 'John', 'email': 'john@example.com'}
response = requests.post('https://api.example.com/users', 
                        json=user_data)
print(f"POST status: {response.status_code}")
print(f"Created user: {response.json()}")`}
              cppCode={`#include <iostream>
#include <curl/curl.h>

// GET request
void getRequest() {
    CURL* curl = curl_easy_init();
    curl_easy_setopt(curl, CURLOPT_URL, "https://httpbin.org/get");
    curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
    
    CURLcode res = curl_easy_perform(curl);
    if(res != CURLE_OK) {
        std::cout << "GET request failed" << std::endl;
    }
    curl_easy_cleanup(curl);
}

// POST request
void postRequest() {
    CURL* curl = curl_easy_init();
    std::string postData = "name=John&email=john@example.com";
    
    curl_easy_setopt(curl, CURLOPT_URL, "https://httpbin.org/post");
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postData.c_str());
    
    CURLcode res = curl_easy_perform(curl);
    if(res != CURLE_OK) {
        std::cout << "POST request failed" << std::endl;
    }
    curl_easy_cleanup(curl);
}`}
              walkthrough="GET requests are safe and can be cached/bookmarked. POST requests modify server state and should not be repeated. Understanding these is crucial for REST API design."
              complexity={{
                time: "O(network latency)",
                space: "O(request/response size)",
                why: "Network-bound operations.",
              }}
              mistakes={[
                {
                  mistake: "Using GET for sensitive data",
                  fix: "Sensitive data goes in POST body, not URL parameters",
                },
              ]}
              tryIt="Implement a simple REST API client that supports CRUD operations."
            />

            <QuestionCard
              title="116. What is an algorithm? What is time complexity?"
              learn="Algorithm analysis fundamentals."
              context="Measuring algorithm efficiency."
              steps={[
                "Algorithm: Step-by-step procedure to solve a problem",
                "Time complexity: How execution time grows with input size",
                "Big O notation: Upper bound of growth rate",
                "Common complexities: O(1), O(log n), O(n), O(n log n), O(n²)",
              ]}
              pythonCode={`# O(1) - Constant time
def get_first_element(arr):
    return arr[0] if arr else None

# O(n) - Linear time
def find_max(arr):
    max_val = arr[0]
    for num in arr:  # Visits each element once
        if num > max_val:
            max_val = num
    return max_val

# O(n²) - Quadratic time
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):  # Nested loops
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`}
              cppCode={`#include <vector>
#include <algorithm>

// O(1) - Constant time
int getFirstElement(const std::vector<int>& arr) {
    return arr.empty() ? -1 : arr[0];
}

// O(n) - Linear time
int findMax(const std::vector<int>& arr) {
    if (arr.empty()) return -1;
    int max_val = arr[0];
    for (int num : arr) {  // Single pass
        if (num > max_val) max_val = num;
    }
    return max_val;
}

// O(n log n) - Efficient sorting
void efficientSort(std::vector<int>& arr) {
    std::sort(arr.begin(), arr.end());  // Uses quicksort/merge sort
}`}
              walkthrough="Time complexity helps predict how an algorithm will perform with large inputs. O(1) is ideal, O(n²) algorithms become unusable for large datasets. Understanding this guides algorithm selection."
              complexity={{
                time: "Varies by algorithm",
                space: "Varies by algorithm",
                why: "Algorithm analysis is about asymptotic behavior.",
              }}
              mistakes={[
                {
                  mistake: "Confusing worst-case with average-case",
                  fix: "Always consider worst-case scenario for reliability",
                },
              ]}
              tryIt="Analyze the time complexity of finding duplicates in an array using different approaches."
            />

            <QuestionCard
              title="117. What is O(n)? What is O(1)?"
              learn="Specific complexity classes."
              context="Understanding common time complexities."
              steps={[
                "O(1): Constant time - execution time doesn't depend on input size",
                "O(n): Linear time - execution time grows linearly with input size",
                "O(1) examples: array access by index, hash table lookup",
                "O(n) examples: linear search, iterating through array",
              ]}
              pythonCode={`# O(1) examples
def get_element_by_index(arr, index):
    return arr[index]  # Same time regardless of array size

def check_if_empty(arr):
    return len(arr) == 0  # Constant time operation

# O(n) examples
def find_element_linear(arr, target):
    for item in arr:  # Time grows with array size
        if item == target:
            return True
    return False

def sum_array(arr):
    total = 0
    for num in arr:  # Must visit each element
        total += num
    return total`}
              cppCode={`#include <vector>

// O(1) examples
int getElementByIndex(const std::vector<int>& arr, size_t index) {
    return arr[index];  // Direct access, constant time
}

bool isEmpty(const std::vector<int>& arr) {
    return arr.empty();  // Constant time check
}

// O(n) examples
bool linearSearch(const std::vector<int>& arr, int target) {
    for (int item : arr) {  // Time proportional to size
        if (item == target) return true;
    }
    return false;
}

int sumArray(const std::vector<int>& arr) {
    int total = 0;
    for (int num : arr) {  // Must process each element
        total += num;
    }
    return total;
}`}
              walkthrough="O(1) operations are the fastest - their performance doesn't degrade with size. O(n) operations are acceptable for most applications but can be slow for very large datasets."
              complexity={{
                time: "O(1) or O(n)",
                space: "O(1)",
                why: "These are the most fundamental complexity classes.",
              }}
              mistakes={[
                {
                  mistake: "Thinking array access is O(n)",
                  fix: "Random access arrays provide O(1) access by index",
                },
              ]}
              tryIt="Identify O(1) vs O(n) operations in common programming tasks."
            />
          </div>
        </section>

        {/* Coding Problems */}
        <section id="coding" className="mt-24">
          <div className="mb-12 p-6 bg-pink-500/5 border border-pink-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">
              Coding Problems Answers (131-200)
            </h2>
            <p className="text-gray-400">
              Practical programming problems with solutions.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="131. Write a program to check if a number is even or odd."
              learn="Basic conditional logic."
              context="Simple number classification."
              steps={[
                "Take input number",
                "Check if divisible by 2",
                "Print appropriate message",
              ]}
              pythonCode={`def check_even_odd(n):
    if n % 2 == 0:
        print(f"{n} is even")
    else:
        print(f"{n} is odd")

# Example usage
check_even_odd(5)  # Output: 5 is odd`}
              cppCode={`#include <iostream>
using namespace std;

void checkEvenOdd(int n) {
    if (n % 2 == 0) {
        cout << n << " is even" << endl;
    } else {
        cout << n << " is odd" << endl;
    }
}

int main() {
    checkEvenOdd(5);  // Output: 5 is odd
    return 0;
}`}
              walkthrough="Uses modulo operator to check divisibility by 2. This is a fundamental conditional statement."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Single operation regardless of input size.",
              }}
              mistakes={[
                {
                  mistake: "Using n/2 == 0",
                  fix: "Use n % 2 == 0 for proper even check",
                },
              ]}
              tryIt="Handle negative numbers."
            />

            <QuestionCard
              title="132. Write a program to find the largest of 3 numbers."
              learn="Multiple condition comparison."
              context="Finding maximum among three values."
              steps={[
                "Take three numbers as input",
                "Compare them using nested if-else",
                "Print the largest number",
              ]}
              pythonCode={`def find_largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Example usage
print(find_largest(10, 25, 15))  # Output: 25`}
              cppCode={`#include <iostream>
using namespace std;

int findLargest(int a, int b, int c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}

int main() {
    cout << findLargest(10, 25, 15) << endl;  // Output: 25
    return 0;
}`}
              walkthrough="Uses logical AND operators to compare all combinations. This approach scales to more numbers."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed number of comparisons.",
              }}
              mistakes={[
                {
                  mistake: "Using multiple if statements",
                  fix: "Use if-else chain to avoid unnecessary checks",
                },
              ]}
              tryIt="Find largest of n numbers using array."
            />

            <QuestionCard
              title="133. Write a program to reverse a string."
              learn="String manipulation basics."
              context="Reversing character order in a string."
              steps={[
                "Take string input",
                "Use slicing or loop to reverse",
                "Print reversed string",
              ]}
              pythonCode={`def reverse_string(s):
    return s[::-1]

# Example usage
print(reverse_string("hello"))  # Output: olleh`}
              cppCode={`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseString(string s) {
    reverse(s.begin(), s.end());
    return s;
}

int main() {
    cout << reverseString("hello") << endl;  // Output: olleh
    return 0;
}`}
              walkthrough="Python uses slicing, C++ uses std::reverse algorithm. Both are efficient for string reversal."
              complexity={{
                time: "O(n)",
                space: "O(n)",
                why: "Creates new string of same length.",
              }}
              mistakes={[
                {
                  mistake: "Trying to reverse in-place",
                  fix: "Strings are immutable in Python, use slicing",
                },
              ]}
              tryIt="Reverse words in a sentence."
            />

            {/* Add more coding problems with solutions */}
            <div className="p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
              <h3 className="text-lg font-bold mb-2">
                134-145. More Easy Problems
              </h3>
              <QuestionCard
                title="134. Write a program to check if a string is a palindrome."
                learn="String reversal and comparison."
                context="Checking if a string reads the same forwards and backwards."
                steps={[
                  "Take input string",
                  "Compare string with its reverse",
                  "Return true if they match",
                  "Handle case sensitivity and spaces as needed",
                ]}
                pythonCode={`def is_palindrome(s):
    # Remove spaces and convert to lowercase for case-insensitive check
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

# Example usage
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))  # False`}
                cppCode={`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(string s) {
    // Clean the string: remove non-alphanumeric and convert to lowercase
    string cleaned;
    for (char c : s) {
        if (isalnum(c)) {
            cleaned += tolower(c);
        }
    }
    
    // Compare with reverse
    string reversed = cleaned;
    reverse(reversed.begin(), reversed.end());
    return cleaned == reversed;
}

int main() {
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl;  // 1 (true)
    cout << isPalindrome("race a car") << endl;  // 0 (false)
    return 0;
}`}
                walkthrough="A palindrome reads the same forwards and backwards. The key is cleaning the string (removing punctuation, spaces, and handling case) before comparison. Python's slicing makes this elegant."
                complexity={{
                  time: "O(n)",
                  space: "O(n)",
                  why: "Creating cleaned string and reverse copy.",
                }}
                mistakes={[
                  {
                    mistake: "Not handling case sensitivity",
                    fix: "Convert to lowercase before comparison",
                  },
                ]}
                tryIt="Check if a number is a palindrome (without converting to string)."
              />

              <QuestionCard
                title="135. Write a program to find the factorial of a number."
                learn="Recursive and iterative solutions."
                context="Calculating n! (n factorial)."
                steps={[
                  "Handle base case: 0! = 1",
                  "For iterative: multiply numbers from 1 to n",
                  "For recursive: n! = n * (n-1)!",
                  "Handle negative numbers (factorial undefined)",
                ]}
                pythonCode={`def factorial_iterative(n):
    if n < 0:
        raise ValueError("Factorial not defined for negative numbers")
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def factorial_recursive(n):
    if n < 0:
        raise ValueError("Factorial not defined for negative numbers")
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursive(n - 1)

# Example usage
print(factorial_iterative(5))  # 120
print(factorial_recursive(5))  # 120`}
                cppCode={`#include <iostream>
using namespace std;

long long factorialIterative(int n) {
    if (n < 0) {
        throw invalid_argument("Factorial not defined for negative numbers");
    }
    long long result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

long long factorialRecursive(int n) {
    if (n < 0) {
        throw invalid_argument("Factorial not defined for negative numbers");
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

int main() {
    cout << factorialIterative(5) << endl;  // 120
    cout << factorialRecursive(5) << endl;  // 120
    return 0;
}`}
                walkthrough="Factorial grows very quickly, so use appropriate data types (long long in C++). Iterative solution is better to avoid stack overflow. Both solutions handle the base cases properly."
                complexity={{
                  time: "O(n)",
                  space: "O(1) iterative, O(n) recursive",
                  why: "Iterative uses constant space, recursive uses stack space.",
                }}
                mistakes={[
                  {
                    mistake: "Not handling n = 0",
                    fix: "0! is defined as 1",
                  },
                ]}
                tryIt="Calculate factorial using big integer libraries for large numbers."
              />

              <QuestionCard
                title="136. Write a program to print Fibonacci series up to n terms."
                learn="Sequence generation with multiple approaches."
                context="Generating the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8..."
                steps={[
                  "Handle first two terms: 0 and 1",
                  "Each subsequent term is sum of previous two",
                  "Use iterative approach to avoid recursion depth issues",
                  "Print or return the sequence",
                ]}
                pythonCode={`def fibonacci_iterative(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_sequence = [0, 1]
    for i in range(2, n):
        next_fib = fib_sequence[i-1] + fib_sequence[i-2]
        fib_sequence.append(next_fib)
    
    return fib_sequence

def fibonacci_recursive(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib = fibonacci_recursive(n-1)
        fib.append(fib[-1] + fib[-2])
        return fib

# Example usage
print(fibonacci_iterative(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
print(fibonacci_recursive(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`}
                cppCode={`#include <iostream>
#include <vector>
using namespace std;

vector<long long> fibonacciIterative(int n) {
    vector<long long> fib;
    if (n <= 0) return fib;
    
    fib.push_back(0);
    if (n == 1) return fib;
    
    fib.push_back(1);
    if (n == 2) return fib;
    
    for (int i = 2; i < n; i++) {
        long long next = fib[i-1] + fib[i-2];
        fib.push_back(next);
    }
    return fib;
}

void printFibonacci(const vector<long long>& fib) {
    for (size_t i = 0; i < fib.size(); i++) {
        cout << fib[i];
        if (i < fib.size() - 1) cout << ", ";
    }
    cout << endl;
}

int main() {
    vector<long long> fib = fibonacciIterative(10);
    printFibonacci(fib);  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    return 0;
}`}
                walkthrough="Fibonacci sequence is fundamental in algorithm analysis. The iterative approach is more efficient and avoids recursion limits. Use long long for larger terms to prevent overflow."
                complexity={{
                  time: "O(n)",
                  space: "O(n)",
                  why: "Store all n terms in a list/vector.",
                }}
                mistakes={[
                  {
                    mistake: "Starting sequence with 1, 1, 2...",
                    fix: "Standard Fibonacci starts with 0, 1, 1, 2...",
                  },
                ]}
                tryIt="Find the nth Fibonacci number using matrix exponentiation for O(log n) time."
              />

              <QuestionCard
                title="137. Write a program to count vowels in a string."
                learn="String iteration and character checking."
                context="Counting vowel characters (a, e, i, o, u) in text."
                steps={[
                  "Define vowels (consider case sensitivity)",
                  "Iterate through each character in string",
                  "Check if character is a vowel",
                  "Increment counter for each vowel found",
                ]}
                pythonCode={`def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

# Example usage
print(count_vowels("Hello World"))  # 3 (e, o, o)
print(count_vowels("Programming"))  # 3 (o, a, i)`}
                cppCode={`#include <iostream>
#include <string>
using namespace std;

int countVowels(const string& s) {
    int count = 0;
    string vowels = "aeiouAEIOU";
    
    for (char c : s) {
        if (vowels.find(c) != string::npos) {
            count++;
        }
    }
    return count;
}

int main() {
    cout << countVowels("Hello World") << endl;  // 3
    cout << countVowels("Programming") << endl;  // 3
    return 0;
}`}
                walkthrough="This demonstrates basic string processing. The approach is straightforward: check each character against a set of vowels. Consider whether to count both uppercase and lowercase."
                complexity={{
                  time: "O(n)",
                  space: "O(1)",
                  why: "Single pass through string, constant extra space.",
                }}
                mistakes={[
                  {
                    mistake: "Only checking lowercase vowels",
                    fix: "Include both uppercase and lowercase vowels",
                  },
                ]}
                tryIt="Count consonants instead of vowels, or create a frequency map of all characters."
              />

              <QuestionCard
                title="138. Write a program to check if a number is prime."
                learn="Prime number detection algorithm."
                context="Determining if a number has no positive divisors other than 1 and itself."
                steps={[
                  "Handle edge cases: numbers < 2 are not prime",
                  "Check divisibility from 2 to √n",
                  "If any divisor found, number is not prime",
                  "If no divisors found, number is prime",
                ]}
                pythonCode={`import math

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    
    # Check divisibility up to √n
    for i in range(5, int(math.sqrt(n)) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False
    return True

# Example usage
print(is_prime(17))  # True
print(is_prime(18))  # False
print(is_prime(23))  # True`}
                cppCode={`#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    // Check divisibility up to √n, skipping even numbers
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    cout << boolalpha;
    cout << isPrime(17) << endl;  // true
    cout << isPrime(18) << endl;  // false
    cout << isPrime(23) << endl;  // true
    return 0;
}`}
                walkthrough="The √n optimization reduces checks significantly. For n=100, we check up to 10 instead of 99. The +6 pattern skips multiples of 2 and 3 for additional efficiency."
                complexity={{
                  time: "O(√n)",
                  space: "O(1)",
                  why: "Check up to square root of n, constant space.",
                }}
                mistakes={[
                  {
                    mistake: "Checking divisibility up to n/2",
                    fix: "Only need to check up to √n",
                  },
                ]}
                tryIt="Implement the Sieve of Eratosthenes to find all primes up to n."
              />
            </div>

            <QuestionCard
              title="146. Write a program to find the largest element in an array."
              learn="Array traversal basics."
              context="Finding maximum value in an array."
              steps={[
                "Initialize max with first element",
                "Iterate through array",
                "Update max if current element is larger",
                "Return max value",
              ]}
              pythonCode={`def find_max(arr):
    if not arr: return None
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

# Example usage
print(find_max([3, 7, 2, 9, 1]))  # Output: 9`}
              cppCode={`#include <iostream>
#include <vector>
using namespace std;

int findMax(vector<int>& arr) {
    if (arr.empty()) return -1;
    int max_val = arr[0];
    for (int num : arr) {
        if (num > max_val) max_val = num;
    }
    return max_val;
}

int main() {
    vector<int> arr = {3, 7, 2, 9, 1};
    cout << findMax(arr) << endl;  // Output: 9
    return 0;
}`}
              walkthrough="Simple linear search through array. This is the basic pattern for finding min/max in collections."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "Single pass through array, constant extra space.",
              }}
              mistakes={[
                {
                  mistake: "Initializing max to 0",
                  fix: "Use first element to handle negative numbers",
                },
              ]}
              tryIt="Find both min and max in single pass."
            />

            <QuestionCard
              title="147. Write a program to find the second largest element in an array."
              learn="Multiple variable tracking."
              context="Finding runner-up maximum value."
              steps={[
                "Initialize first and second max variables",
                "Iterate through array once",
                "Update both variables as needed",
                "Handle edge cases (array size < 2)",
              ]}
              pythonCode={`def second_largest(arr):
    if len(arr) < 2:
        return None
    
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    
    return second if second != float('-inf') else None

# Example usage
print(second_largest([3, 7, 2, 9, 1]))  # Output: 7
print(second_largest([9, 9, 8]))  # Output: 8`}
              cppCode={`#include <iostream>
#include <vector>
#include <limits>
using namespace std;

int secondLargest(vector<int>& arr) {
    if (arr.size() < 2) return -1;
    
    int first = INT_MIN, second = INT_MIN;
    for (int num : arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }
    
    return (second == INT_MIN) ? -1 : second;
}

int main() {
    vector<int> arr = {3, 7, 2, 9, 1};
    cout << secondLargest(arr) << endl;  // Output: 7
    return 0;
}`}
              walkthrough="Maintains two variables to track the largest and second largest. Handles duplicates correctly by checking num != first."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "Single pass, constant extra space.",
              }}
              mistakes={[
                {
                  mistake: "Not handling duplicates",
                  fix: "Check num != first when updating second",
                },
              ]}
              tryIt="Find kth largest element using sorting or heap."
            />

            <QuestionCard
              title="148. Write a program to reverse an array."
              learn="In-place array manipulation."
              context="Reversing elements without extra space."
              steps={[
                "Use two pointers (start and end)",
                "Swap elements at pointers",
                "Move pointers towards center",
                "Stop when pointers meet or cross",
              ]}
              pythonCode={`def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

# Example usage
arr = [1, 2, 3, 4, 5]
reverse_array(arr)
print(arr)  # Output: [5, 4, 3, 2, 1]`}
              cppCode={`#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

void printArray(const vector<int>& arr) {
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    reverseArray(arr);
    printArray(arr);  // Output: 5 4 3 2 1
    return 0;
}`}
              walkthrough="Two-pointer technique swaps elements from outside in. This is O(n) time and O(1) extra space, much better than creating a new array."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "In-place reversal with constant extra space.",
              }}
              mistakes={[
                {
                  mistake: "Using extra array",
                  fix: "Swap in-place using two pointers",
                },
              ]}
              tryIt="Reverse only part of the array (between given indices)."
            />

            <QuestionCard
              title="149. Write a program to check if an array is sorted."
              learn="Sequential comparison."
              context="Verifying if array elements are in ascending order."
              steps={[
                "Iterate through array from index 1 to end",
                "Compare each element with previous",
                "Return false if any element is smaller than previous",
                "Return true if all comparisons pass",
              ]}
              pythonCode={`def is_sorted(arr):
    if not arr:
        return True  # Empty array is considered sorted
    
    for i in range(1, len(arr)):
        if arr[i] < arr[i-1]:
            return False
    return True

# Example usage
print(is_sorted([1, 2, 3, 4, 5]))  # True
print(is_sorted([1, 3, 2, 4, 5]))  # False`}
              cppCode={`#include <iostream>
#include <vector>
using namespace std;

bool isSorted(const vector<int>& arr) {
    if (arr.empty()) return true;
    
    for (size_t i = 1; i < arr.size(); i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }
    return true;
}

int main() {
    vector<int> arr1 = {1, 2, 3, 4, 5};
    vector<int> arr2 = {1, 3, 2, 4, 5};
    
    cout << boolalpha;
    cout << isSorted(arr1) << endl;  // true
    cout << isSorted(arr2) << endl;  // false
    return 0;
}`}
              walkthrough="Simple linear scan checking adjacent elements. This assumes ascending order - modify the comparison for descending order."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "Single pass through array.",
              }}
              mistakes={[
                {
                  mistake: "Starting loop from index 0",
                  fix: "Start from index 1 to compare with previous element",
                },
              ]}
              tryIt="Check if array is sorted in descending order."
            />

            <QuestionCard
              title="150. Write a program to remove duplicates from an array."
              learn="In-place deduplication."
              context="Removing duplicate elements while preserving order."
              steps={[
                "Use two pointers (slow and fast)",
                "Slow pointer tracks unique elements position",
                "Fast pointer scans for new unique elements",
                "When unique element found, place at slow+1 and increment slow",
              ]}
              pythonCode={`def remove_duplicates(arr):
    if not arr:
        return 0
    
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    
    return slow + 1  # Length of unique elements

# Example usage
arr = [1, 1, 2, 2, 3, 4, 4, 5]
length = remove_duplicates(arr)
print(arr[:length])  # [1, 2, 3, 4, 5]`}
              cppCode={`#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& arr) {
    if (arr.empty()) return 0;
    
    int slow = 0;
    for (size_t fast = 1; fast < arr.size(); fast++) {
        if (arr[fast] != arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    
    return slow + 1;
}

void printArray(const vector<int>& arr, int length) {
    for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {1, 1, 2, 2, 3, 4, 4, 5};
    int length = removeDuplicates(arr);
    printArray(arr, length);  // 1 2 3 4 5
    return 0;
}`}
              walkthrough="Two-pointer technique maintains relative order while removing duplicates in-place. This is efficient for sorted arrays and preserves the original order."
              complexity={{
                time: "O(n)",
                space: "O(1)",
                why: "Single pass, in-place modification.",
              }}
              mistakes={[
                {
                  mistake: "Using a set or new array",
                  fix: "Use two pointers for in-place deduplication",
                },
              ]}
              tryIt="Remove duplicates allowing at most two occurrences of each element."
            />
            <QuestionCard
              title="161. Write a program to count words in a string."
              learn="String manipulation and splitting."
              context="Counting words in a sentence or paragraph."
              steps={[
                "Split string by whitespace",
                "Count the resulting list elements",
                "Handle edge cases (empty string, multiple spaces)",
              ]}
              pythonCode={`def count_words(text):
    if not text.strip():
        return 0
    return len(text.split())

# Example usage
print(count_words("Hello world"))  # 2
print(count_words("This is a test sentence."))  # 5
print(count_words("   "))  # 0`}
              cppCode={`#include <iostream>
#include <string>
#include <sstream>
#include <vector>
using namespace std;

int countWords(const string& text) {
    if (text.empty()) return 0;
    
    stringstream ss(text);
    string word;
    int count = 0;
    
    while (ss >> word) {
        count++;
    }
    
    return count;
}

int main() {
    cout << countWords("Hello world") << endl;  // 2
    cout << countWords("This is a test sentence.") << endl;  // 5
    cout << countWords("   ") << endl;  // 0
    return 0;
}`}
              walkthrough="Python's split() method handles multiple spaces automatically. C++ uses stringstream to extract words, which also handles whitespace correctly."
              complexity={{
                time: "O(n)",
                space: "O(n)",
                why: "Need to process entire string and store words temporarily.",
              }}
              mistakes={[
                {
                  mistake: "Not handling multiple spaces",
                  fix: "Use split() or stringstream which handle whitespace automatically",
                },
              ]}
              tryIt="Count words ignoring punctuation marks."
            />

            <QuestionCard
              title="162. Write a program to check if two strings are anagrams."
              learn="Character frequency counting."
              context="Checking if two strings contain the same characters with same frequencies."
              steps={[
                "Remove spaces and convert to lowercase",
                "Count frequency of each character in both strings",
                "Compare the frequency maps",
              ]}
              pythonCode={`from collections import Counter

def are_anagrams(s1, s2):
    # Remove spaces and convert to lowercase
    s1 = ''.join(s1.split()).lower()
    s2 = ''.join(s2.split()).lower()
    
    return Counter(s1) == Counter(s2)

# Example usage
print(are_anagrams("listen", "silent"))  # True
print(are_anagrams("hello", "world"))  # False
print(are_anagrams("Astronomer", "Moon starer"))  # True`}
              cppCode={`#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

bool areAnagrams(string s1, string s2) {
    // Remove spaces and convert to lowercase
    s1.erase(remove(s1.begin(), s1.end(), ' '), s1.end());
    s2.erase(remove(s2.begin(), s2.end(), ' '), s2.end());
    
    transform(s1.begin(), s1.end(), s1.begin(), ::tolower);
    transform(s2.begin(), s2.end(), s2.begin(), ::tolower);
    
    if (s1.length() != s2.length()) return false;
    
    unordered_map<char, int> freq;
    for (char c : s1) freq[c]++;
    for (char c : s2) freq[c]--;
    
    for (auto& pair : freq) {
        if (pair.second != 0) return false;
    }
    
    return true;
}

int main() {
    cout << boolalpha;
    cout << areAnagrams("listen", "silent") << endl;  // true
    cout << areAnagrams("hello", "world") << endl;  // false
    return 0;
}`}
              walkthrough="Anagrams have the same character frequencies. Counter in Python makes this trivial. In C++, we use a frequency map and check if all counts are zero after incrementing and decrementing."
              complexity={{
                time: "O(n)",
                space: "O(k)",
                why: "n is string length, k is unique characters (typically small).",
              }}
              mistakes={[
                {
                  mistake: "Not handling case sensitivity",
                  fix: "Convert both strings to lowercase",
                },
                {
                  mistake: "Not removing spaces",
                  fix: "Remove spaces before comparison",
                },
              ]}
              tryIt="Find all anagrams of a word from a list of words."
            />
          </div>
        </section>

        {/* Operating System Concepts */}
        <section id="operating-systems" className="mt-24">
          <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">
              Operating System Concepts (201-250)
            </h2>
            <p className="text-gray-400">
              Essential OS concepts for technical interviews.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="201. What is a deadlock? Explain with an example."
              learn="Resource allocation and synchronization."
              context="Deadlock occurs when two or more processes are waiting for resources held by each other."
              steps={[
                "Process A holds resource X, waits for Y",
                "Process B holds resource Y, waits for X",
                "Both processes are blocked forever",
              ]}
              pythonCode={`# Deadlock example (conceptual)
import threading
import time

lock1 = threading.Lock()
lock2 = threading.Lock()

def thread1():
    lock1.acquire()
    print("Thread 1: Got lock 1")
    time.sleep(1)
    lock2.acquire()  # Waits for lock 2
    print("Thread 1: Got lock 2")
    lock2.release()
    lock1.release()

def thread2():
    lock2.acquire()
    print("Thread 2: Got lock 2")
    time.sleep(1)
    lock1.acquire()  # Waits for lock 1
    print("Thread 2: Got lock 1")
    lock1.release()
    lock2.release()

# This will cause deadlock
t1 = threading.Thread(target=thread1)
t2 = threading.Thread(target=thread2)
t1.start()
t2.start()`}
              cppCode={`#include <iostream>
#include <thread>
#include <mutex>
#include <chrono>
using namespace std;

mutex lock1, lock2;

void thread1() {
    lock1.lock();
    cout << "Thread 1: Got lock 1" << endl;
    this_thread::sleep_for(chrono::seconds(1));
    lock2.lock();  // Deadlock here
    cout << "Thread 1: Got lock 2" << endl;
    lock2.unlock();
    lock1.unlock();
}

void thread2() {
    lock2.lock();
    cout << "Thread 2: Got lock 2" << endl;
    this_thread::sleep_for(chrono::seconds(1));
    lock1.lock();  // Deadlock here
    cout << "Thread 2: Got lock 1" << endl;
    lock1.unlock();
    lock2.unlock();
}

int main() {
    thread t1(thread1);
    thread t2(thread2);
    t1.join();
    t2.join();
    return 0;
}`}
              walkthrough="Deadlock requires four conditions: mutual exclusion, hold and wait, no preemption, and circular wait. The example shows two threads acquiring locks in different orders, creating a circular dependency."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "OS concept, not algorithmic complexity.",
              }}
              mistakes={[
                {
                  mistake: "Thinking deadlock is the same as starvation",
                  fix: "Deadlock is permanent blocking, starvation is temporary unfairness",
                },
              ]}
              tryIt="How would you prevent this deadlock?"
            />

            <QuestionCard
              title="202. What are the four necessary conditions for deadlock?"
              learn="Deadlock prevention strategies."
              context="Coffman conditions that must all be present for deadlock to occur."
              steps={[
                "Mutual Exclusion: Resources can't be shared",
                "Hold and Wait: Process holds one resource while waiting for another",
                "No Preemption: Resources can't be forcibly taken",
                "Circular Wait: Processes form a circular chain of waiting",
              ]}
              pythonCode={`# Deadlock prevention strategies
"""
1. Mutual Exclusion - Can't prevent (some resources are inherently non-shareable)
2. Hold and Wait - Require processes to request all resources at once
3. No Preemption - Allow preemption of resources
4. Circular Wait - Impose ordering on resource acquisition
"""

# Example of ordered resource acquisition (prevents circular wait)
import threading

lock1 = threading.Lock()
lock2 = threading.Lock()

def safe_thread():
    # Always acquire locks in same order
    lock1.acquire()
    print("Got lock 1")
    lock2.acquire()
    print("Got lock 2")
    
    # Critical section
    print("Doing work...")
    
    lock2.release()
    lock1.release()`}
              cppCode={`// Deadlock prevention: Resource ordering
#include <iostream>
#include <mutex>
using namespace std;

mutex lock1, lock2;

void safeFunction() {
    // Always acquire in same order
    lock_guard<mutex> guard1(lock1);
    cout << "Got lock 1" << endl;
    
    lock_guard<mutex> guard2(lock2);
    cout << "Got lock 2" << endl;
    
    // Critical section
    cout << "Doing work safely..." << endl;
    
    // Locks automatically released
}`}
              walkthrough="To prevent deadlock, you need to break at least one of these four conditions. The most practical approaches are resource ordering and avoiding hold-and-wait."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "OS design principle.",
              }}
              mistakes={[
                {
                  mistake: "Thinking you can prevent mutual exclusion",
                  fix: "Some resources (like printers) must be mutually exclusive",
                },
              ]}
              tryIt="Implement banker's algorithm for deadlock avoidance."
            />

            <QuestionCard
              title="203. What is virtual memory?"
              learn="Memory management concepts."
              context="Technique that gives processes the illusion of large contiguous memory."
              steps={[
                "Physical memory is limited",
                "OS maps virtual addresses to physical addresses",
                "Uses disk as extension of RAM",
                "Provides memory protection and isolation",
              ]}
              pythonCode={`# Virtual memory simulation (conceptual)
class VirtualMemory:
    def __init__(self, physical_pages=4):
        self.physical_pages = physical_pages
        self.page_table = {}  # virtual -> physical mapping
        self.disk = {}  # swapped out pages
        
    def access(self, virtual_addr):
        if virtual_addr in self.page_table:
            return f"Physical page: {self.page_table[virtual_addr]}"
        elif virtual_addr in self.disk:
            # Page fault - load from disk
            return f"Page fault! Loading from disk..."
        else:
            return "Segmentation fault!"

vm = VirtualMemory()
print(vm.access(0x1000))  # Page fault
vm.page_table[0x1000] = 0  # Map to physical page 0
print(vm.access(0x1000))  # Hit`}
              cppCode={`#include <iostream>
#include <unordered_map>
using namespace std;

class VirtualMemory {
private:
    unordered_map<int, int> pageTable;  // virtual -> physical
    unordered_map<int, int> disk;       // swapped pages
    int physicalPages;
    
public:
    VirtualMemory(int pages) : physicalPages(pages) {}
    
    string access(int virtualAddr) {
        if (pageTable.count(virtualAddr)) {
            return "Page hit: physical page " + to_string(pageTable[virtualAddr]);
        } else if (disk.count(virtualAddr)) {
            return "Page fault! Loading from disk...";
        } else {
            return "Segmentation fault!";
        }
    }
};

int main() {
    VirtualMemory vm(4);
    cout << vm.access(0x1000) << endl;  // Page fault
    return 0;
}`}
              walkthrough="Virtual memory allows programs to use more memory than physically available. When a page isn't in physical memory, a page fault occurs and the page is loaded from disk."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "Hardware/OS feature.",
              }}
              mistakes={[
                {
                  mistake: "Confusing virtual memory with physical memory",
                  fix: "Virtual addresses are translated to physical addresses by MMU",
                },
              ]}
              tryIt="Explain the difference between paging and segmentation."
            />

            <QuestionCard
              title="204. What is a process vs thread?"
              learn="Concurrency fundamentals."
              context="Processes are independent execution units, threads are lightweight subprocesses."
              steps={[
                "Process: Independent program execution with own memory space",
                "Thread: Lightweight process that shares memory with parent",
                "Processes communicate via IPC, threads via shared memory",
                "Context switching is more expensive for processes",
              ]}
              pythonCode={`import multiprocessing
import threading
import time

def worker(name):
    print(f"{name} starting")
    time.sleep(1)
    print(f"{name} finishing")

# Process example (separate memory)
if __name__ == "__main__":
    p = multiprocessing.Process(target=worker, args=("Process",))
    p.start()
    p.join()

# Thread example (shared memory)
t = threading.Thread(target=worker, args=("Thread",))
t.start()
t.join()`}
              cppCode={`#include <iostream>
#include <thread>
#include <process.h>  // For Windows
using namespace std;

void worker(const string& name) {
    cout << name << " starting" << endl;
    this_thread::sleep_for(chrono::seconds(1));
    cout << name << " finishing" << endl;
}

int main() {
    // Thread (shares memory with main process)
    thread t(worker, "Thread");
    t.join();
    
    // Process would require fork() or CreateProcess()
    cout << "Main process continues..." << endl;
    return 0;
}`}
              walkthrough="Processes are isolated and communicate via pipes/sockets. Threads share memory but need synchronization. Use processes for isolation, threads for performance."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "OS abstraction.",
              }}
              mistakes={[
                {
                  mistake: "Thinking threads are just lightweight processes",
                  fix: "Threads share memory, processes have separate address spaces",
                },
              ]}
              tryIt="When would you use multiprocessing vs multithreading?"
            />

            <QuestionCard
              title="205. What is a semaphore?"
              learn="Synchronization primitives."
              context="Variable that controls access to shared resources."
              steps={[
                "Integer variable that can be accessed by multiple processes",
                "P operation (wait): decrement and block if zero",
                "V operation (signal): increment and wake waiting process",
                "Binary semaphore (0-1) acts like mutex",
              ]}
              pythonCode={`import threading
import time

# Binary semaphore (mutex)
semaphore = threading.Semaphore(1)  # Only 1 process at a time

def critical_section(name):
    semaphore.acquire()
    try:
        print(f"{name} in critical section")
        time.sleep(1)
        print(f"{name} leaving critical section")
    finally:
        semaphore.release()

# Usage
t1 = threading.Thread(target=critical_section, args=("Thread 1",))
t2 = threading.Thread(target=critical_section, args=("Thread 2",))
t1.start()
t2.start()
t1.join()
t2.join()`}
              cppCode={`#include <iostream>
#include <thread>
#include <semaphore>
#include <chrono>
using namespace std;

counting_semaphore<1> semaphore{1};  // Binary semaphore

void criticalSection(const string& name) {
    semaphore.acquire();
    try {
        cout << name << " in critical section" << endl;
        this_thread::sleep_for(chrono::seconds(1));
        cout << name << " leaving critical section" << endl;
    } catch (...) {
        semaphore.release();
        throw;
    }
    semaphore.release();
}

int main() {
    thread t1(criticalSection, "Thread 1");
    thread t2(criticalSection, "Thread 2");
    t1.join();
    t2.join();
    return 0;
}`}
              walkthrough="Semaphores prevent race conditions by controlling concurrent access. Binary semaphores (0-1) work like mutexes, counting semaphores allow multiple concurrent accesses."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "Synchronization primitive.",
              }}
              mistakes={[
                {
                  mistake: "Using semaphore when mutex would suffice",
                  fix: "Use mutex for mutual exclusion, semaphore for resource counting",
                },
              ]}
              tryIt="Implement producer-consumer problem using semaphores."
            />

            <QuestionCard
              title="206. What is paging?"
              learn="Memory management technique."
              context="Dividing memory into fixed-size pages for efficient allocation."
              steps={[
                "Memory divided into fixed-size pages (usually 4KB)",
                "Logical address = page number + offset",
                "Page table maps logical pages to physical frames",
                "Allows non-contiguous physical memory allocation",
              ]}
              pythonCode={`# Simple paging simulation
class PageTable:
    def __init__(self, page_size=4096):
        self.page_size = page_size
        self.table = {}  # page_number -> frame_number
        
    def translate_address(self, logical_addr):
        page_number = logical_addr // self.page_size
        offset = logical_addr % self.page_size
        
        if page_number in self.table:
            frame_number = self.table[page_number]
            physical_addr = frame_number * self.page_size + offset
            return f"Physical address: {physical_addr}"
        else:
            return "Page fault!"
    
    def map_page(self, page_num, frame_num):
        self.table[page_num] = frame_num

pt = PageTable()
pt.map_page(0, 5)  # Page 0 -> Frame 5
print(pt.translate_address(0))      # Physical: 0
print(pt.translate_address(4096))   # Physical: 20480 (5*4096)
print(pt.translate_address(8192))   # Page fault`}
              cppCode={`#include <iostream>
#include <unordered_map>
using namespace std;

class PageTable {
private:
    int pageSize;
    unordered_map<int, int> table;  // page -> frame
    
public:
    PageTable(int size = 4096) : pageSize(size) {}
    
    string translateAddress(int logicalAddr) {
        int pageNumber = logicalAddr / pageSize;
        int offset = logicalAddr % pageSize;
        
        if (table.count(pageNumber)) {
            int frameNumber = table[pageNumber];
            int physicalAddr = frameNumber * pageSize + offset;
            return "Physical address: " + to_string(physicalAddr);
        } else {
            return "Page fault!";
        }
    }
    
    void mapPage(int pageNum, int frameNum) {
        table[pageNum] = frameNum;
    }
};

int main() {
    PageTable pt;
    pt.mapPage(0, 5);
    cout << pt.translateAddress(0) << endl;      // Physical: 0
    cout << pt.translateAddress(4096) << endl;   // Physical: 20480
    cout << pt.translateAddress(8192) << endl;   // Page fault
    return 0;
}`}
              walkthrough="Paging eliminates external fragmentation by using fixed-size pages. The page table translation happens in hardware (MMU) for performance."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "Memory management technique.",
              }}
              mistakes={[
                {
                  mistake: "Confusing paging with segmentation",
                  fix: "Paging uses fixed-size pages, segmentation uses variable-size segments",
                },
              ]}
              tryIt="Explain how TLB (Translation Lookaside Buffer) improves paging performance."
            />

            <QuestionCard
              title="207. What is a race condition?"
              learn="Concurrency bugs."
              context="When multiple threads access shared data simultaneously, leading to inconsistent results."
              steps={[
                "Multiple threads access shared variable",
                "At least one thread modifies the variable",
                "Operations are not atomic",
                "Final result depends on execution order",
              ]}
              pythonCode={`import threading

counter = 0

def increment():
    global counter
    for _ in range(100000):
        # Race condition: read-modify-write is not atomic
        temp = counter
        temp += 1
        counter = temp

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)

t1.start()
t2.start()
t1.join()
t2.join()

print(f"Expected: 200000, Actual: {counter}")  # Usually less due to race condition`}
              cppCode={`#include <iostream>
#include <thread>
using namespace std;

int counter = 0;

void increment() {
    for (int i = 0; i < 100000; i++) {
        // Race condition: not atomic
        int temp = counter;
        temp++;
        counter = temp;
    }
}

int main() {
    thread t1(increment);
    thread t2(increment);
    
    t1.join();
    t2.join();
    
    cout << "Expected: 200000, Actual: " << counter << endl;
    // Usually less due to race condition
    return 0;
}`}
              walkthrough="Race conditions occur when operations that should be atomic are split into multiple steps. Use locks or atomic operations to prevent them."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "Concurrency issue.",
              }}
              mistakes={[
                {
                  mistake: "Thinking race conditions are always obvious",
                  fix: "They often only appear under specific timing conditions",
                },
              ]}
              tryIt="Fix this race condition using a mutex."
            />

            <QuestionCard
              title="208. What is context switching?"
              learn="Process scheduling."
              context="Saving current process state and loading another process's state."
              steps={[
                "Save current process's registers and program counter",
                "Save current process's memory mappings",
                "Load new process's state from PCB",
                "Resume execution of new process",
              ]}
              pythonCode={`# Conceptual context switch
class Process:
    def __init__(self, pid, state="ready"):
        self.pid = pid
        self.state = state
        self.registers = {"PC": 0, "SP": 0}  # Program counter, stack pointer
        
    def save_context(self):
        print(f"Saving context for process {self.pid}")
        # In reality, this saves to PCB (Process Control Block)
        
    def load_context(self):
        print(f"Loading context for process {self.pid}")
        # In reality, this loads from PCB

def context_switch(from_process, to_process):
    print(f"Context switch: {from_process.pid} -> {to_process.pid}")
    from_process.save_context()
    to_process.load_context()

p1 = Process(1, "running")
p2 = Process(2, "ready")
context_switch(p1, p2)`}
              cppCode={`#include <iostream>
using namespace std;

struct Process {
    int pid;
    string state;
    int programCounter;
    int stackPointer;
    
    Process(int id) : pid(id), state("ready"), 
                     programCounter(0), stackPointer(0) {}
    
    void saveContext() {
        cout << "Saving context for process " << pid << endl;
        // PCB would store: registers, program counter, stack pointer, etc.
    }
    
    void loadContext() {
        cout << "Loading context for process " << pid << endl;
        // Restore from PCB
    }
};

void contextSwitch(Process& from, Process& to) {
    cout << "Context switch: " << from.pid << " -> " << to.pid << endl;
    from.saveContext();
    to.loadContext();
}

int main() {
    Process p1(1);
    Process p2(2);
    p1.state = "running";
    
    contextSwitch(p1, p2);
    return 0;
}`}
              walkthrough="Context switching is expensive because it involves saving/restoring CPU registers, memory mappings, and cache flushing. This is why threads (which share address space) have faster context switches than processes."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Fixed-size register save/restore.",
              }}
              mistakes={[
                {
                  mistake: "Thinking context switching is instant",
                  fix: "It takes microseconds but adds up with frequent switching",
                },
              ]}
              tryIt="Explain why thread context switches are faster than process context switches."
            />

            <QuestionCard
              title="209. What is starvation?"
              learn="Scheduling fairness."
              context="When a process never gets CPU time due to scheduling policy."
              steps={[
                "Process is ready to run but never gets scheduled",
                "Usually due to priority-based scheduling",
                "Low-priority processes can starve behind high-priority ones",
                "Different from deadlock (processes are not blocked)",
              ]}
              pythonCode={`# Starvation example with priority scheduling
import threading
import time

high_priority_event = threading.Event()
low_priority_counter = 0

def high_priority_task():
    while True:
        high_priority_event.set()  # Signal completion
        time.sleep(0.01)  # Short burst

def low_priority_task():
    global low_priority_counter
    while low_priority_counter < 10:
        if high_priority_event.wait(timeout=0.1):  # Wait for signal
            low_priority_counter += 1
            print(f"Low priority task: {low_priority_counter}")
            high_priority_event.clear()

# High priority thread runs continuously
# Low priority thread may never get CPU time
t_high = threading.Thread(target=high_priority_task, daemon=True)
t_low = threading.Thread(target=low_priority_task)

t_high.start()
t_low.start()
t_low.join(timeout=5)  # May timeout due to starvation`}
              cppCode={`#include <iostream>
#include <thread>
#include <atomic>
#include <chrono>
using namespace std;

atomic<int> lowPriorityCounter{0};

void highPriorityTask() {
    while (true) {
        this_thread::sleep_for(chrono::milliseconds(10));
        // High priority work - runs continuously
    }
}

void lowPriorityTask() {
    while (lowPriorityCounter < 10) {
        cout << "Low priority task: " << ++lowPriorityCounter << endl;
        this_thread::sleep_for(chrono::milliseconds(100));
    }
}

int main() {
    thread high(highPriorityTask);
    thread low(lowPriorityTask);
    
    // In priority scheduling, low priority might starve
    low.join();
    high.detach();  // Daemon-like behavior
    
    return 0;
}`}
              walkthrough="Starvation is solved with aging (gradually increasing priority of waiting processes) or round-robin scheduling. It's different from deadlock because starved processes are ready but never selected."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "Scheduling policy issue.",
              }}
              mistakes={[
                {
                  mistake: "Confusing starvation with deadlock",
                  fix: "Deadlock is blocking, starvation is unfair scheduling",
                },
              ]}
              tryIt="How does aging prevent starvation in priority scheduling?"
            />

            <QuestionCard
              title="210. What is thrashing?"
              learn="Memory performance issue."
              context="When system spends more time paging than executing."
              steps={[
                "Too many processes competing for limited memory",
                "High page fault rate",
                "CPU spends time waiting for pages instead of executing",
                "System appears frozen despite having work to do",
              ]}
              pythonCode={`# Thrashing simulation (conceptual)
class MemoryManager:
    def __init__(self, total_frames=10):
        self.total_frames = total_frames
        self.page_faults = 0
        
    def access_page(self, page, process_frames):
        if page not in process_frames:
            self.page_faults += 1
            if len(process_frames) >= self.total_frames // 2:  # Thrashing condition
                print(f"THRASHING: High page fault rate! Faults: {self.page_faults}")
                # System would start swapping processes
        return page in process_frames

# Simulate multiple processes with insufficient memory
mm = MemoryManager()
processes = [{"frames": [1, 2]} for _ in range(8)]  # 8 processes, 10 frames total

for i in range(100):
    for p in processes:
        mm.access_page(3, p["frames"])  # Page 3 not in memory - page fault`}
              cppCode={`#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

class MemoryManager {
private:
    int totalFrames;
    int pageFaults;
    
public:
    MemoryManager(int frames) : totalFrames(frames), pageFaults(0) {}
    
    bool accessPage(int page, unordered_set<int>& processFrames) {
        if (processFrames.find(page) == processFrames.end()) {
            pageFaults++;
            if (processFrames.size() >= totalFrames / 2) {
                cout << "THRASHING: High page fault rate! Faults: " 
                     << pageFaults << endl;
            }
            return false;  // Page fault
        }
        return true;  // Page hit
    }
};

int main() {
    MemoryManager mm(10);
    vector<unordered_set<int>> processes(8, {1, 2});  // 8 processes
    
    for (int i = 0; i < 100; i++) {
        for (auto& frames : processes) {
            mm.accessPage(3, frames);  // Page faults
        }
    }
    return 0;
}`}
              walkthrough="Thrashing occurs when the working set of all processes exceeds physical memory. Solutions include reducing multiprogramming level or increasing RAM."
              complexity={{
                time: "N/A",
                space: "N/A",
                why: "System performance issue.",
              }}
              mistakes={[
                {
                  mistake: "Thinking thrashing is the same as paging",
                  fix: "Paging is normal, thrashing is excessive paging that hurts performance",
                },
              ]}
              tryIt="How does the working set model help prevent thrashing?"
            />
          </div>
        </section>

        {/* Additional OOP Questions */}
        <section id="additional-oop" className="mt-24">
          <div className="mb-12 p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Additional OOP Questions (16-20, 26-35)
            </h2>
            <p className="text-gray-400">
              Advanced OOP concepts and practical implementations.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="16. What is the final keyword used for in Java?"
              learn="Immutability and inheritance control."
              context="The final keyword prevents modification or extension."
              steps={[
                "final class: Cannot be extended",
                "final method: Cannot be overridden",
                "final variable: Cannot be reassigned",
                "final parameters: Cannot be modified in method",
              ]}
              pythonCode={`# Python equivalent using naming conventions and properties
class FinalClass:
    def __init__(self):
        self._value = 42
    
    @property
    def value(self):
        return self._value
    
    # No setter = final-like behavior

# Usage
obj = FinalClass()
print(obj.value)  # 42
# obj.value = 50  # AttributeError`}
              cppCode={`class FinalClass final {  // Cannot be inherited
private:
    const int value = 42;  // const = final-like
public:
    int getValue() const {
        return value;
    }
};

class Base {
public:
    virtual void method() final {  // Cannot be overridden
        std::cout << "Final method" << std::endl;
    }
};

int main() {
    const int x = 5;  // final variable
    // x = 10;  // Error: assignment to const
    
    FinalClass obj;
    std::cout << obj.getValue() << std::endl;
    return 0;
}`}
              walkthrough="Final prevents inheritance (classes), overriding (methods), and reassignment (variables). It's used for security, performance, and design clarity."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Compile-time restriction.",
              }}
              mistakes={[
                {
                  mistake: "Thinking final means immutable objects",
                  fix: "Final only prevents reassignment of reference, object can still be modified",
                },
              ]}
              tryIt="Create a class with final methods and show inheritance attempt."
            />

            <QuestionCard
              title="17. What are static methods and when to use them?"
              learn="Class-level methods vs instance methods."
              context="Static methods belong to the class, not instances."
              steps={[
                "Declared with static keyword",
                "Called on class, not object",
                "Cannot access instance variables/methods",
                "Cannot use 'this' keyword",
              ]}
              pythonCode={`class MathUtils:
    @staticmethod
    def add(x, y):
        return x + y
    
    @staticmethod
    def factorial(n):
        if n <= 1:
            return 1
        return n * MathUtils.factorial(n - 1)

# Usage
print(MathUtils.add(5, 3))  # 8
print(MathUtils.factorial(5))  # 120`}
              cppCode={`class MathUtils {
public:
    static int add(int x, int y) {
        return x + y;
    }
    
    static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
};

int main() {
    std::cout << MathUtils::add(5, 3) << std::endl;  // 8
    std::cout << MathUtils::factorial(5) << std::endl;  // 120
    return 0;
}`}
              walkthrough="Static methods are utility functions that don't need object state. They're called on the class itself and are shared across all instances."
              complexity={{
                time: "O(1) for add, O(n) for factorial",
                space: "O(1)",
                why: "No object creation needed.",
              }}
              mistakes={[
                {
                  mistake:
                    "Trying to access instance variables in static method",
                  fix: "Static methods can only access static variables",
                },
              ]}
              tryIt="Create a static counter that tracks total objects created."
            />

            <QuestionCard
              title="18. What is a friend function in C++?"
              learn="Accessing private members from outside the class."
              context="Friend functions can access private/protected members."
              steps={[
                "Declare friend function in class",
                "Function definition outside class",
                "Has access to private members",
                "Not a member function itself",
              ]}
              pythonCode={`# Python doesn't have friends, but similar with underscore convention
class MyClass:
    def __init__(self):
        self.__private = 42
    
    def get_private(self):
        return self.__private

def friend_function(obj):
    # In Python, we respect privacy but can access via name mangling
    return obj._MyClass__private

obj = MyClass()
print(friend_function(obj))  # 42`}
              cppCode={`class MyClass {
private:
    int privateVar = 42;
    
    friend void friendFunction(MyClass& obj);  // Declare friend
};

void friendFunction(MyClass& obj) {
    std::cout << "Accessing private: " << obj.privateVar << std::endl;
}

int main() {
    MyClass obj;
    friendFunction(obj);  // Accessing private member
    return 0;
}`}
              walkthrough="Friend functions break encapsulation for specific functions that need access. Use sparingly as it violates OOP principles."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Direct access to members.",
              }}
              mistakes={[
                {
                  mistake: "Overusing friend functions",
                  fix: "Use only when necessary, prefer public methods",
                },
              ]}
              tryIt="Create two classes where one is friend of another."
            />

            <QuestionCard
              title="26. How does HashMap work internally?"
              learn="Hash table implementation and collision handling."
              context="HashMap uses hashing for O(1) average case operations."
              steps={[
                "Key passed to hash function",
                "Hash code determines bucket index",
                "Handle collisions (separate chaining/open addressing)",
                "Store key-value pairs in buckets",
              ]}
              pythonCode={`# Python dict implementation concept
class SimpleHashMap:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        # Check if key exists
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        bucket.append((key, value))
    
    def get(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for k, v in bucket:
            if k == key:
                return v
        return None

# Usage
hm = SimpleHashMap()
hm.put("name", "John")
print(hm.get("name"))  # John`}
              cppCode={`#include <iostream>
#include <vector>
#include <list>
#include <string>
using namespace std;

class SimpleHashMap {
private:
    vector<list<pair<string, string>>> buckets;
    int size;
    
    int hashFunction(const string& key) {
        return hash<string>{}(key) % size;
    }
    
public:
    SimpleHashMap(int s = 10) : size(s) {
        buckets.resize(size);
    }
    
    void put(const string& key, const string& value) {
        int index = hashFunction(key);
        auto& bucket = buckets[index];
        
        // Check if key exists
        for (auto& pair : bucket) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }
        
        bucket.push_back({key, value});
    }
    
    string get(const string& key) {
        int index = hashFunction(key);
        auto& bucket = buckets[index];
        
        for (const auto& pair : bucket) {
            if (pair.first == key) {
                return pair.second;
            }
        }
        
        return "";
    }
};

int main() {
    SimpleHashMap hm;
    hm.put("name", "John");
    cout << hm.get("name") << endl;  // John
    return 0;
}`}
              walkthrough="HashMap uses hash function to map keys to indices. Collisions are handled by storing multiple entries in same bucket (separate chaining)."
              complexity={{
                time: "O(1) average, O(n) worst case",
                space: "O(n)",
                why: "Hash function distributes keys evenly.",
              }}
              mistakes={[
                {
                  mistake: "Assuming O(1) worst case",
                  fix: "Worst case is O(n) due to collisions",
                },
              ]}
              tryIt="Implement collision resolution using linear probing."
            />

            <QuestionCard
              title="27. How does exception handling work?"
              learn="Error handling and recovery mechanisms."
              context="Exceptions handle runtime errors gracefully."
              steps={[
                "Throw exception when error occurs",
                "Exception propagates up call stack",
                "Catch block handles specific exception types",
                "Finally block executes regardless",
              ]}
              pythonCode={`def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError as e:
        print(f"Error: {e}")
        return None
    except TypeError as e:
        print(f"Type error: {e}")
        return None
    finally:
        print("Division operation completed")

# Usage
print(divide(10, 2))   # 5.0
print(divide(10, 0))   # Error: division by zero
print(divide(10, "a")) # Type error`}
              cppCode={`#include <iostream>
#include <stdexcept>
using namespace std;

double divide(int a, int b) {
    try {
        if (b == 0) {
            throw runtime_error("Division by zero");
        }
        return static_cast<double>(a) / b;
    } catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
        return 0.0;
    }
}

int main() {
    cout << divide(10, 2) << endl;   // 5
    cout << divide(10, 0) << endl;   // Error: Division by zero
    return 0;
}`}
              walkthrough="Exceptions allow clean error handling without checking return codes everywhere. They separate error-handling from normal logic."
              complexity={{
                time: "O(1) for throwing, O(depth) for stack unwinding",
                space: "O(depth) for stack trace",
                why: "Exception objects and stack unwinding overhead.",
              }}
              mistakes={[
                {
                  mistake: "Using exceptions for normal flow control",
                  fix: "Use exceptions only for exceptional situations",
                },
              ]}
              tryIt="Create custom exception class and handle it."
            />

            <QuestionCard
              title="28. What is the difference between Comparable and Comparator?"
              learn="Object comparison interfaces."
              context="Two ways to define object ordering in Java."
              steps={[
                "Comparable: Natural ordering, implements compareTo()",
                "Comparator: Custom ordering, separate comparator class",
                "Comparable affects class itself",
                "Comparator is external comparison logic",
              ]}
              pythonCode={`# Python equivalent using key functions and functools
from functools import total_ordering

@total_ordering
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __eq__(self, other):
        return self.age == other.age
    
    def __lt__(self, other):
        return self.age < other.age  # Natural ordering by age

# Custom comparator (key function)
def by_name(person):
    return person.name

people = [Person("Bob", 25), Person("Alice", 30), Person("Charlie", 20)]

# Natural ordering (by age)
print("By age:", [p.name for p in sorted(people)])

# Custom ordering (by name)
print("By name:", [p.name for p in sorted(people, key=by_name)])`}
              cppCode={`#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

class Person {
public:
    string name;
    int age;
    
    Person(string n, int a) : name(n), age(a) {}
    
    // Natural ordering (Comparable equivalent)
    bool operator<(const Person& other) const {
        return age < other.age;
    }
};

// Custom comparator (Comparator equivalent)
struct ByName {
    bool operator()(const Person& a, const Person& b) const {
        return a.name < b.name;
    }
};

int main() {
    vector<Person> people = {
        Person("Bob", 25),
        Person("Alice", 30),
        Person("Charlie", 20)
    };
    
    // Natural ordering
    sort(people.begin(), people.end());
    cout << "By age: ";
    for (auto& p : people) cout << p.name << " ";
    cout << endl;
    
    // Custom ordering
    sort(people.begin(), people.end(), ByName());
    cout << "By name: ";
    for (auto& p : people) cout << p.name << " ";
    cout << endl;
    
    return 0;
}`}
              walkthrough="Comparable defines natural ordering within the class. Comparator allows multiple comparison strategies without modifying the class."
              complexity={{
                time: "O(n log n) for sorting",
                space: "O(1) extra",
                why: "Comparison operations during sorting.",
              }}
              mistakes={[
                {
                  mistake:
                    "Implementing Comparable when Comparator would be better",
                  fix: "Use Comparator for multiple sort orders",
                },
              ]}
              tryIt="Sort objects by multiple criteria using Comparator chain."
            />

            <QuestionCard
              title="29. What is serialization and deserialization?"
              learn="Object persistence and network transfer."
              context="Converting objects to byte streams and back."
              steps={[
                "Serialization: Object → byte stream",
                "Deserialization: byte stream → Object",
                "Used for persistence, network transfer",
                "Requires Serializable interface in Java",
              ]}
              pythonCode={`import pickle

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"{self.name}, {self.age}"

# Serialization
person = Person("Alice", 30)
with open('person.pkl', 'wb') as f:
    pickle.dump(person, f)

# Deserialization
with open('person.pkl', 'rb') as f:
    loaded_person = pickle.load(f)

print(loaded_person)  # Alice, 30`}
              cppCode={`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

class Person {
public:
    string name;
    int age;
    
    Person() {}
    Person(string n, int a) : name(n), age(a) {}
    
    // Simple serialization to text file
    void serialize(const string& filename) {
        ofstream file(filename);
        file << name << endl << age << endl;
        file.close();
    }
    
    // Simple deserialization from text file
    void deserialize(const string& filename) {
        ifstream file(filename);
        getline(file, name);
        file >> age;
        file.close();
    }
    
    void print() {
        cout << name << ", " << age << endl;
    }
};

int main() {
    Person person("Alice", 30);
    
    // Serialize
    person.serialize("person.txt");
    
    // Deserialize
    Person loaded_person;
    loaded_person.deserialize("person.txt");
    loaded_person.print();  // Alice, 30
    
    return 0;
}`}
              walkthrough="Serialization converts object state to a format that can be stored or transmitted. Deserialization recreates the object from that format."
              complexity={{
                time: "O(n) where n is object size",
                space: "O(n)",
                why: "Traversing all object fields and references.",
              }}
              mistakes={[
                {
                  mistake: "Serializing sensitive data",
                  fix: "Use transient keyword to exclude sensitive fields",
                },
              ]}
              tryIt="Serialize a complex object graph with references."
            />

            <QuestionCard
              title="30. What are threads and how do they work?"
              learn="Concurrent execution within a process."
              context="Threads allow multiple execution paths in same process."
              steps={[
                "Thread: Lightweight process within a process",
                "Share memory space with parent process",
                "Have their own stack and registers",
                "Concurrent execution on multiple cores",
              ]}
              pythonCode={`import threading
import time

def worker(name, delay):
    print(f"Worker {name} starting")
    time.sleep(delay)
    print(f"Worker {name} finished")

# Create threads
thread1 = threading.Thread(target=worker, args=("A", 2))
thread2 = threading.Thread(target=worker, args=("B", 1))

# Start threads
thread1.start()
thread2.start()

# Wait for completion
thread1.join()
thread2.join()

print("All workers done")`}
              cppCode={`#include <iostream>
#include <thread>
#include <chrono>
using namespace std;

void worker(const string& name, int delay) {
    cout << "Worker " << name << " starting" << endl;
    this_thread::sleep_for(chrono::seconds(delay));
    cout << "Worker " << name << " finished" << endl;
}

int main() {
    // Create threads
    thread thread1(worker, "A", 2);
    thread thread2(worker, "B", 1);
    
    // Start threads (already started)
    
    // Wait for completion
    thread1.join();
    thread2.join();
    
    cout << "All workers done" << endl;
    return 0;
}`}
              walkthrough="Threads run concurrently and share the same memory space. They're lighter than processes but require synchronization to avoid race conditions."
              complexity={{
                time: "Depends on work",
                space: "Shared heap, separate stacks",
                why: "Concurrent execution with shared resources.",
              }}
              mistakes={[
                {
                  mistake: "Not synchronizing shared data access",
                  fix: "Use locks, semaphores, or atomic operations",
                },
              ]}
              tryIt="Create producer-consumer problem with threads."
            />
          </div>
        </section>

        {/* Additional SQL Questions */}
        <section id="additional-sql" className="mt-24">
          <div className="mb-12 p-6 bg-green-500/5 border border-green-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Additional SQL Questions (53-56, 61-71, 78-100)
            </h2>
            <p className="text-gray-400">
              Advanced SQL queries and database concepts.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="53. Write a SQL query to select all records from a table."
              learn="Basic SELECT statement syntax."
              context="Retrieving all data from a database table."
              steps={[
                "Use SELECT * to get all columns",
                "Specify table name after FROM",
                "Optional: Add WHERE for filtering",
                "Optional: Add ORDER BY for sorting",
              ]}
              pythonCode={`import sqlite3

# Create and populate table
conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE employees (
        id INTEGER PRIMARY KEY,
        name TEXT,
        salary REAL,
        department TEXT
    )
''')

# Insert sample data
cursor.executemany('''
    INSERT INTO employees (name, salary, department) 
    VALUES (?, ?, ?)
''', [
    ('Alice', 75000, 'Engineering'),
    ('Bob', 65000, 'Sales'),
    ('Charlie', 80000, 'Engineering')
])

# Select all records
cursor.execute('SELECT * FROM employees')
rows = cursor.fetchall()

print("All employees:")
for row in rows:
    print(row)

conn.close()`}
              cppCode={`#include <iostream>
#include <sqlite3.h>
#include <vector>
#include <string>
using namespace std;

static int callback(void* data, int argc, char** argv, char** azColName) {
    vector<vector<string>>* rows = static_cast<vector<vector<string>>*>(data);
    vector<string> row;
    for(int i = 0; i < argc; i++) {
        row.push_back(argv[i] ? argv[i] : "NULL");
    }
    rows->push_back(row);
    return 0;
}

int main() {
    sqlite3* db;
    sqlite3_open(":memory:", &db);
    
    // Create table
    const char* createSQL = 
        "CREATE TABLE employees ("
        "id INTEGER PRIMARY KEY,"
        "name TEXT,"
        "salary REAL,"
        "department TEXT);";
    sqlite3_exec(db, createSQL, NULL, NULL, NULL);
    
    // Insert data
    const char* insertSQL = 
        "INSERT INTO employees (name, salary, department) VALUES "
        "('Alice', 75000, 'Engineering'),"
        "('Bob', 65000, 'Sales'),"
        "('Charlie', 80000, 'Engineering');";
    sqlite3_exec(db, insertSQL, NULL, NULL, NULL);
    
    // Select all
    vector<vector<string>> rows;
    const char* selectSQL = "SELECT * FROM employees;";
    sqlite3_exec(db, selectSQL, callback, &rows, NULL);
    
    cout << "All employees:" << endl;
    for(const auto& row : rows) {
        for(size_t i = 0; i < row.size(); i++) {
            cout << row[i];
            if(i < row.size() - 1) cout << " | ";
        }
        cout << endl;
    }
    
    sqlite3_close(db);
    return 0;
}`}
              walkthrough="SELECT * FROM table_name retrieves all columns and rows. Use specific column names instead of * in production for better performance."
              complexity={{
                time: "O(n) where n is number of rows",
                space: "O(n)",
                why: "Reading all table data.",
              }}
              mistakes={[
                {
                  mistake: "Using SELECT * in production",
                  fix: "Specify only needed columns",
                },
              ]}
              tryIt="Select specific columns with aliases."
            />

            <QuestionCard
              title="54. Write a SQL query with WHERE clause."
              learn="Filtering records based on conditions."
              context="Retrieving specific records that match criteria."
              steps={[
                "Start with SELECT columns",
                "Add FROM table_name",
                "Add WHERE condition",
                "Use comparison operators (=, >, <, etc.)",
              ]}
              pythonCode={`import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

# Create and populate table
cursor.execute('CREATE TABLE products (id INTEGER, name TEXT, price REAL, category TEXT)')
cursor.executemany('INSERT INTO products VALUES (?, ?, ?, ?)', [
    (1, 'Laptop', 1200, 'Electronics'),
    (2, 'Book', 25, 'Education'),
    (3, 'Phone', 800, 'Electronics'),
    (4, 'Chair', 150, 'Furniture')
])

# WHERE examples
print("Electronics products:")
cursor.execute('SELECT * FROM products WHERE category = ?', ('Electronics',))
for row in cursor.fetchall():
    print(row)

print("\\nExpensive products (> $500):")
cursor.execute('SELECT name, price FROM products WHERE price > 500')
for row in cursor.fetchall():
    print(row)

conn.close()`}
              cppCode={`#include <iostream>
#include <sqlite3.h>
using namespace std;

static int callback(void* data, int argc, char** argv, char** azColName) {
    for(int i = 0; i < argc; i++) {
        cout << (argv[i] ? argv[i] : "NULL");
        if(i < argc - 1) cout << " | ";
    }
    cout << endl;
    return 0;
}

int main() {
    sqlite3* db;
    sqlite3_open(":memory:", &db);
    
    sqlite3_exec(db, 
        "CREATE TABLE products (id INTEGER, name TEXT, price REAL, category TEXT);",
        NULL, NULL, NULL);
    
    sqlite3_exec(db,
        "INSERT INTO products VALUES "
        "(1, 'Laptop', 1200, 'Electronics'),"
        "(2, 'Book', 25, 'Education'),"
        "(3, 'Phone', 800, 'Electronics'),"
        "(4, 'Chair', 150, 'Furniture');",
        NULL, NULL, NULL);
    
    cout << "Electronics products:" << endl;
    sqlite3_exec(db, "SELECT * FROM products WHERE category = 'Electronics';", 
                callback, NULL, NULL);
    
    cout << "\\nExpensive products (> $500):" << endl;
    sqlite3_exec(db, "SELECT name, price FROM products WHERE price > 500;", 
                callback, NULL, NULL);
    
    sqlite3_close(db);
    return 0;
}`}
              walkthrough="WHERE clause filters rows based on conditions. Multiple conditions can be combined with AND/OR. Always use parameterized queries to prevent SQL injection."
              complexity={{
                time: "O(log n) with index, O(n) without",
                space: "O(k) where k is result size",
                why: "Index lookup or table scan.",
              }}
              mistakes={[
                {
                  mistake: "String concatenation in WHERE",
                  fix: "Use parameterized queries",
                },
              ]}
              tryIt="Use WHERE with multiple conditions using AND/OR."
            />

            <QuestionCard
              title="55. Write a SQL query with ORDER BY clause."
              learn="Sorting query results."
              context="Ordering results by one or more columns."
              steps={[
                "Write basic SELECT query",
                "Add ORDER BY column_name",
                "Specify ASC (ascending) or DESC (descending)",
                "Can order by multiple columns",
              ]}
              pythonCode={`import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute('CREATE TABLE students (id INTEGER, name TEXT, grade REAL, subject TEXT)')
cursor.executemany('INSERT INTO students VALUES (?, ?, ?, ?)', [
    (1, 'Alice', 95, 'Math'),
    (2, 'Bob', 87, 'Math'),
    (3, 'Charlie', 92, 'Science'),
    (4, 'Diana', 88, 'Math')
])

print("Students ordered by grade (descending):")
cursor.execute('SELECT name, grade, subject FROM students ORDER BY grade DESC')
for row in cursor.fetchall():
    print(row)

print("\\nStudents ordered by subject, then grade:")
cursor.execute('SELECT name, grade, subject FROM students ORDER BY subject ASC, grade DESC')
for row in cursor.fetchall():
    print(row)

conn.close()`}
              cppCode={`#include <iostream>
#include <sqlite3.h>
using namespace std;

static int callback(void* data, int argc, char** argv, char** azColName) {
    for(int i = 0; i < argc; i++) {
        cout << (argv[i] ? argv[i] : "NULL");
        if(i < argc - 1) cout << " | ";
    }
    cout << endl;
    return 0;
}

int main() {
    sqlite3* db;
    sqlite3_open(":memory:", &db);
    
    sqlite3_exec(db,
        "CREATE TABLE students (id INTEGER, name TEXT, grade REAL, subject TEXT);",
        NULL, NULL, NULL);
    
    sqlite3_exec(db,
        "INSERT INTO students VALUES "
        "(1, 'Alice', 95, 'Math'),"
        "(2, 'Bob', 87, 'Math'),"
        "(3, 'Charlie', 92, 'Science'),"
        "(4, 'Diana', 88, 'Math');",
        NULL, NULL, NULL);
    
    cout << "Students ordered by grade (descending):" << endl;
    sqlite3_exec(db, 
        "SELECT name, grade, subject FROM students ORDER BY grade DESC;", 
        callback, NULL, NULL);
    
    cout << "\\nStudents ordered by subject, then grade:" << endl;
    sqlite3_exec(db, 
        "SELECT name, grade, subject FROM students ORDER BY subject ASC, grade DESC;", 
        callback, NULL, NULL);
    
    sqlite3_close(db);
    return 0;
}`}
              walkthrough="ORDER BY sorts results after filtering. Multiple columns create hierarchical sorting. Default is ASC, use DESC for descending."
              complexity={{
                time: "O(n log n) worst case",
                space: "O(n)",
                why: "Sorting algorithm requirements.",
              }}
              mistakes={[
                {
                  mistake: "Assuming ORDER BY sorts NULLs predictably",
                  fix: "Use NULLS FIRST/LAST if needed",
                },
              ]}
              tryIt="Order by calculated expression (e.g., price * quantity)."
            />

            <QuestionCard
              title="61. Explain GROUP BY with examples."
              learn="Grouping rows for aggregate functions."
              context="Grouping records by column values for summary operations."
              steps={[
                "Use GROUP BY column_name",
                "Apply aggregate functions (COUNT, SUM, AVG, etc.)",
                "SELECT clause can only contain grouped columns or aggregates",
                "Use HAVING to filter groups",
              ]}
              pythonCode={`import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

cursor.execute('CREATE TABLE sales (id INTEGER, product TEXT, amount REAL, region TEXT)')
cursor.executemany('INSERT INTO sales VALUES (?, ?, ?, ?)', [
    (1, 'Laptop', 1200, 'North'),
    (2, 'Phone', 800, 'South'),
    (3, 'Laptop', 1100, 'North'),
    (4, 'Tablet', 500, 'South'),
    (5, 'Phone', 900, 'North')
])

print("Total sales by product:")
cursor.execute('''
    SELECT product, COUNT(*) as count, SUM(amount) as total
    FROM sales 
    GROUP BY product
''')
for row in cursor.fetchall():
    print(row)

print("\\nAverage sales by region:")
cursor.execute('''
    SELECT region, AVG(amount) as average, COUNT(*) as transactions
    FROM sales 
    GROUP BY region
''')
for row in cursor.fetchall():
    print(row)

conn.close()`}
              cppCode={`#include <iostream>
#include <sqlite3.h>
using namespace std;

static int callback(void* data, int argc, char** argv, char** azColName) {
    for(int i = 0; i < argc; i++) {
        cout << (argv[i] ? argv[i] : "NULL");
        if(i < argc - 1) cout << " | ";
    }
    cout << endl;
    return 0;
}

int main() {
    sqlite3* db;
    sqlite3_open(":memory:", &db);
    
    sqlite3_exec(db,
        "CREATE TABLE sales (id INTEGER, product TEXT, amount REAL, region TEXT);",
        NULL, NULL, NULL);
    
    sqlite3_exec(db,
        "INSERT INTO sales VALUES "
        "(1, 'Laptop', 1200, 'North'),"
        "(2, 'Phone', 800, 'South'),"
        "(3, 'Laptop', 1100, 'North'),"
        "(4, 'Tablet', 500, 'South'),"
        "(5, 'Phone', 900, 'North');",
        NULL, NULL, NULL);
    
    cout << "Total sales by product:" << endl;
    sqlite3_exec(db, 
        "SELECT product, COUNT(*) as count, SUM(amount) as total "
        "FROM sales GROUP BY product;", 
        callback, NULL, NULL);
    
    cout << "\\nAverage sales by region:" << endl;
    sqlite3_exec(db, 
        "SELECT region, AVG(amount) as average, COUNT(*) as transactions "
        "FROM sales GROUP BY region;", 
        callback, NULL, NULL);
    
    sqlite3_close(db);
    return 0;
}`}
              walkthrough="GROUP BY creates groups of rows with same values. Aggregate functions operate on each group. Non-grouped columns in SELECT must use aggregates."
              complexity={{
                time: "O(n log n) due to sorting for grouping",
                space: "O(g) where g is number of groups",
                why: "Grouping requires sorting or hashing.",
              }}
              mistakes={[
                {
                  mistake: "Selecting non-grouped, non-aggregate columns",
                  fix: "Only select grouped columns or use aggregates",
                },
              ]}
              tryIt="Group by multiple columns and use HAVING clause."
            />

            <QuestionCard
              title="78. Explain window functions with examples."
              learn="Advanced aggregation over result sets."
              context="Performing calculations across related rows without grouping."
              steps={[
                "Use OVER() clause with aggregate functions",
                "PARTITION BY divides result into partitions",
                "ORDER BY defines window frame",
                "ROW_NUMBER(), RANK(), DENSE_RANK() for ranking",
              ]}
              pythonCode={`import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()

# SQLite doesn't have window functions, so we'll simulate with Python
cursor.execute('CREATE TABLE employees (name TEXT, department TEXT, salary REAL)')
cursor.executemany('INSERT INTO employees VALUES (?, ?, ?)', [
    ('Alice', 'Engineering', 90000),
    ('Bob', 'Engineering', 80000),
    ('Charlie', 'Sales', 70000),
    ('Diana', 'Sales', 75000),
    ('Eve', 'Engineering', 85000)
])

# Simulate window functions with Python
cursor.execute('SELECT * FROM employees ORDER BY department, salary DESC')
rows = cursor.fetchall()

print("Employees with department running totals:")
current_dept = None
dept_total = 0
for row in rows:
    name, dept, salary = row
    if dept != current_dept:
        current_dept = dept
        dept_total = 0
    dept_total += salary
    print(f"{name} ({dept}): \${salary} | Dept Total: \${dept_total}")

conn.close()`}
              cppCode={`#include <iostream>
#include <sqlite3.h>
#include <map>
#include <vector>
#include <string>
using namespace std;

struct Employee {
    string name;
    string department;
    double salary;
};

static int callback(void* data, int argc, char** argv, char** azColName) {
    vector<Employee>* employees = static_cast<vector<Employee>*>(data);
    employees->push_back({argv[1], argv[2], stod(argv[3])});
    return 0;
}

int main() {
    sqlite3* db;
    sqlite3_open(":memory:", &db);
    
    sqlite3_exec(db,
        "CREATE TABLE employees (id INTEGER, name TEXT, department TEXT, salary REAL);",
        NULL, NULL, NULL);
    
    sqlite3_exec(db,
        "INSERT INTO employees VALUES "
        "(1, 'Alice', 'Engineering', 90000),"
        "(2, 'Bob', 'Engineering', 80000),"
        "(3, 'Charlie', 'Sales', 70000),"
        "(4, 'Diana', 'Sales', 75000),"
        "(5, 'Eve', 'Engineering', 85000);",
        NULL, NULL, NULL);
    
    vector<Employee> employees;
    sqlite3_exec(db, "SELECT * FROM employees;", callback, &employees, NULL);
    
    // Simulate window functions
    cout << "Employees with department rankings:" << endl;
    
    // Group by department
    map<string, vector<Employee>> dept_groups;
    for(const auto& emp : employees) {
        dept_groups[emp.department].push_back(emp);
    }
    
    for(auto& pair : dept_groups) {
        const string& dept = pair.first;
        vector<Employee>& emps = pair.second;
        
        // Sort by salary desc
        sort(emps.begin(), emps.end(), 
             [](const Employee& a, const Employee& b) {
                 return a.salary > b.salary;
             });
        
        cout << dept << " department:" << endl;
        for(size_t i = 0; i < emps.size(); i++) {
            cout << "  " << emps[i].name << ": $" << emps[i].salary 
                 << " (Rank: " << (i+1) << ")" << endl;
        }
    }
    
    sqlite3_close(db);
    return 0;
}`}
              walkthrough="Window functions perform calculations across a set of rows related to the current row. They're powerful for running totals, rankings, and moving averages."
              complexity={{
                time: "O(n log n) for sorting partitions",
                space: "O(n)",
                why: "Sorting within partitions required.",
              }}
              mistakes={[
                {
                  mistake: "Confusing window functions with GROUP BY",
                  fix: "Window functions don't collapse rows",
                },
              ]}
              tryIt="Calculate running totals and moving averages."
            />
          </div>
        </section>

        {/* Additional System Concepts */}
        <section id="additional-system" className="mt-24">
          <div className="mb-12 p-6 bg-purple-500/5 border border-purple-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">
              Additional System Concepts (103-115)
            </h2>
            <p className="text-gray-400">
              Web technologies and system design fundamentals.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="103. What is REST API?"
              learn="Representational State Transfer architecture."
              context="Standard for web service communication."
              steps={[
                "RESTful web services use HTTP methods",
                "Resources identified by URIs",
                "Stateless communication",
                "JSON/XML data formats",
              ]}
              pythonCode={`# Flask REST API example
from flask import Flask, jsonify, request

app = Flask(__name__)

users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@app.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    new_user['id'] = len(users) + 1
    users.append(new_user)
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True)`}
              cppCode={`#include <iostream>
#include <string>
#include <vector>
#include <nlohmann/json.hpp>  // Requires nlohmann/json library
using namespace std;
using json = nlohmann::json;

// Simple REST API simulation
class User {
public:
    int id;
    string name;
    string email;
    
    json toJson() const {
        return {
            {"id", id},
            {"name", name},
            {"email", email}
        };
    }
};

class RestAPI {
private:
    vector<User> users;
    
public:
    RestAPI() {
        users = {
            {1, "Alice", "alice@example.com"},
            {2, "Bob", "bob@example.com"}
        };
    }
    
    // GET /users
    json getUsers() {
        json result = json::array();
        for(const auto& user : users) {
            result.push_back(user.toJson());
        }
        return result;
    }
    
    // GET /users/{id}
    json getUser(int id) {
        for(const auto& user : users) {
            if(user.id == id) {
                return user.toJson();
            }
        }
        return {{"error", "User not found"}};
    }
    
    // POST /users
    json createUser(const json& userData) {
        User newUser;
        newUser.id = users.size() + 1;
        newUser.name = userData["name"];
        newUser.email = userData["email"];
        users.push_back(newUser);
        return newUser.toJson();
    }
};

int main() {
    RestAPI api;
    
    cout << "GET /users:" << endl;
    cout << api.getUsers().dump(2) << endl;
    
    cout << "\\nGET /users/1:" << endl;
    cout << api.getUser(1).dump(2) << endl;
    
    cout << "\\nPOST /users:" << endl;
    json newUser = {{"name", "Charlie"}, {"email", "charlie@example.com"}};
    cout << api.createUser(newUser).dump(2) << endl;
    
    return 0;
}`}
              walkthrough="REST APIs use HTTP methods (GET, POST, PUT, DELETE) to manipulate resources. Each resource has a unique URI and operations are stateless."
              complexity={{
                time: "O(1) to O(n) depending on operation",
                space: "O(n) for data storage",
                why: "Basic CRUD operations on collections.",
              }}
              mistakes={[
                {
                  mistake: "Making APIs stateful",
                  fix: "Keep APIs stateless - all state in requests",
                },
              ]}
              tryIt="Implement PUT and DELETE methods for the API."
            />

            <QuestionCard
              title="104. What is JSON?"
              learn="JavaScript Object Notation format."
              context="Lightweight data interchange format."
              steps={[
                "Human-readable text format",
                "Key-value pairs and arrays",
                "Language-independent",
                "Commonly used in web APIs",
              ]}
              pythonCode={`import json

# Python dict to JSON
person = {
    "name": "Alice",
    "age": 30,
    "skills": ["Python", "JavaScript", "SQL"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "country": "USA"
    }
}

# Serialize to JSON string
json_string = json.dumps(person, indent=2)
print("JSON string:")
print(json_string)

# Deserialize from JSON string
parsed_person = json.loads(json_string)
print("\\nParsed back:")
print(f"Name: {parsed_person['name']}")
print(f"Skills: {', '.join(parsed_person['skills'])}")

# Working with files
with open('person.json', 'w') as f:
    json.dump(person, f, indent=2)

with open('person.json', 'r') as f:
    loaded_person = json.load(f)

print(f"\\nLoaded from file: {loaded_person['name']}")`}
              cppCode={`#include <iostream>
#include <fstream>
#include <nlohmann/json.hpp>  // Requires nlohmann/json library
using namespace std;
using json = nlohmann::json;

int main() {
    // Create JSON object
    json person = {
        {"name", "Alice"},
        {"age", 30},
        {"skills", {"Python", "JavaScript", "SQL"}},
        {"address", {
            {"street", "123 Main St"},
            {"city", "Anytown"},
            {"country", "USA"}
        }}
    };
    
    // Serialize to string
    string json_string = person.dump(2);
    cout << "JSON string:" << endl;
    cout << json_string << endl;
    
    // Parse from string
    json parsed = json::parse(json_string);
    cout << "\\nParsed back:" << endl;
    cout << "Name: " << parsed["name"] << endl;
    cout << "Age: " << parsed["age"] << endl;
    
    // Access array
    cout << "Skills: ";
    for(const auto& skill : parsed["skills"]) {
        cout << skill << " ";
    }
    cout << endl;
    
    // Access nested object
    cout << "City: " << parsed["address"]["city"] << endl;
    
    // Save to file
    ofstream file("person.json");
    file << person.dump(2);
    file.close();
    
    // Load from file
    ifstream infile("person.json");
    json loaded;
    infile >> loaded;
    cout << "\\nLoaded from file: " << loaded["name"] << endl;
    
    return 0;
}`}
              walkthrough="JSON is a text format for storing and transporting data. It's self-describing and easy to understand, making it ideal for APIs and configuration files."
              complexity={{
                time: "O(n) for serialization/deserialization",
                space: "O(n)",
                why: "Processing all data elements.",
              }}
              mistakes={[
                {
                  mistake: "Using single quotes instead of double quotes",
                  fix: "JSON requires double quotes for strings",
                },
              ]}
              tryIt="Parse a complex nested JSON structure and extract specific values."
            />

            <QuestionCard
              title="105. What are sessions and cookies?"
              learn="State management in web applications."
              context="Maintaining user state across HTTP requests."
              steps={[
                "HTTP is stateless - no memory of previous requests",
                "Cookies: Small data stored on client browser",
                "Sessions: Server-side storage referenced by session ID",
                "Session ID stored in cookie for identification",
              ]}
              pythonCode={`# Flask session and cookie example
from flask import Flask, session, request, make_response

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for sessions

@app.route('/login')
def login():
    # Set session data
    session['user_id'] = 123
    session['username'] = 'alice'
    
    # Create response with cookie
    resp = make_response("Logged in successfully")
    resp.set_cookie('last_login', '2024-01-15')
    
    return resp

@app.route('/profile')
def profile():
    # Access session data
    if 'user_id' in session:
        user_id = session['user_id']
        username = session['username']
        return f"Welcome {username} (ID: {user_id})"
    else:
        return "Please login first"

@app.route('/logout')
def logout():
    # Clear session
    session.clear()
    
    # Clear cookie
    resp = make_response("Logged out")
    resp.set_cookie('last_login', '', expires=0)
    
    return resp

@app.route('/check-cookie')
def check_cookie():
    # Read cookie
    last_login = request.cookies.get('last_login')
    if last_login:
        return f"Last login: {last_login}"
    else:
        return "No last login cookie found"

if __name__ == '__main__':
    app.run(debug=True)`}
              cppCode={`#include <iostream>
#include <string>
#include <unordered_map>
#include <ctime>
using namespace std;

// Simple session and cookie simulation
class SessionManager {
private:
    unordered_map<string, unordered_map<string, string>> sessions;
    
    string generateSessionId() {
        // Simple session ID generation (not secure for production)
        return "session_" + to_string(rand() % 10000);
    }
    
public:
    string createSession() {
        string sessionId = generateSessionId();
        sessions[sessionId] = unordered_map<string, string>();
        return sessionId;
    }
    
    void setSessionData(const string& sessionId, const string& key, const string& value) {
        if(sessions.find(sessionId) != sessions.end()) {
            sessions[sessionId][key] = value;
        }
    }
    
    string getSessionData(const string& sessionId, const string& key) {
        if(sessions.find(sessionId) != sessions.end()) {
            auto& sessionData = sessions[sessionId];
            if(sessionData.find(key) != sessionData.end()) {
                return sessionData[key];
            }
        }
        return "";
    }
    
    void destroySession(const string& sessionId) {
        sessions.erase(sessionId);
    }
};

class Cookie {
public:
    string name;
    string value;
    time_t expires;
    
    Cookie(const string& n, const string& v, time_t exp = 0) 
        : name(n), value(v), expires(exp) {}
    
    string toString() const {
        return name + "=" + value;
    }
};

int main() {
    SessionManager sessionMgr;
    
    // Simulate login
    string sessionId = sessionMgr.createSession();
    sessionMgr.setSessionData(sessionId, "user_id", "123");
    sessionMgr.setSessionData(sessionId, "username", "alice");
    
    cout << "Session created with ID: " << sessionId << endl;
    cout << "Username: " << sessionMgr.getSessionData(sessionId, "username") << endl;
    
    // Simulate cookie
    Cookie loginCookie("last_login", "2024-01-15");
    cout << "Cookie: " << loginCookie.toString() << endl;
    
    // Simulate logout
    sessionMgr.destroySession(sessionId);
    cout << "Session destroyed" << endl;
    
    return 0;
}`}
              walkthrough="Sessions store data on the server, cookies on the client. Session IDs in cookies link the two. Sessions are more secure for sensitive data."
              complexity={{
                time: "O(1) for session operations",
                space: "O(n) for stored sessions",
                why: "Hash map lookups for session data.",
              }}
              mistakes={[
                {
                  mistake: "Storing sensitive data in cookies",
                  fix: "Use sessions for sensitive data, cookies for preferences",
                },
              ]}
              tryIt="Implement session timeout and automatic cleanup."
            />

            <QuestionCard
              title="106. What are HTTP status codes?"
              learn="Standard response codes for web requests."
              context="Indicating success, errors, and redirects."
              steps={[
                "1xx: Informational responses",
                "2xx: Successful responses (200 OK, 201 Created)",
                "3xx: Redirection messages (301 Moved, 302 Found)",
                "4xx: Client error responses (400 Bad Request, 404 Not Found)",
                "5xx: Server error responses (500 Internal Server Error)",
              ]}
              pythonCode={`# Flask HTTP status codes example
from flask import Flask, jsonify, request, abort

app = Flask(__name__)

users = {"alice": "password123", "bob": "password456"}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({"error": "Missing username or password"}), 400
    
    username = data['username']
    password = data['password']
    
    if username not in users:
        return jsonify({"error": "User not found"}), 404
    
    if users[username] != password:
        return jsonify({"error": "Invalid password"}), 401
    
    return jsonify({"message": "Login successful", "user": username}), 200

@app.route('/users/<username>')
def get_user(username):
    if username not in users:
        abort(404, description="User not found")
    
    return jsonify({"username": username}), 200

@app.route('/admin')
def admin():
    # Simulate unauthorized access
    return jsonify({"error": "Admin access required"}), 403

@app.route('/redirect')
def redirect_example():
    return jsonify({"message": "This endpoint moved"}), 301

@app.route('/server-error')
def server_error():
    # Simulate server error
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(debug=True)`}
              cppCode={`#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

// HTTP Status Code definitions
enum HttpStatus {
    OK = 200,
    CREATED = 201,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
};

string getStatusText(HttpStatus status) {
    unordered_map<HttpStatus, string> statusTexts = {
        {OK, "OK"},
        {CREATED, "Created"},
        {MOVED_PERMANENTLY, "Moved Permanently"},
        {FOUND, "Found"},
        {BAD_REQUEST, "Bad Request"},
        {UNAUTHORIZED, "Unauthorized"},
        {FORBIDDEN, "Forbidden"},
        {NOT_FOUND, "Not Found"},
        {INTERNAL_SERVER_ERROR, "Internal Server Error"}
    };
    
    return statusTexts[status];
}

class HttpResponse {
public:
    HttpStatus status;
    string body;
    
    HttpResponse(HttpStatus s, const string& b) : status(s), body(b) {}
    
    void send() {
        cout << "HTTP/1.1 " << static_cast<int>(status) 
             << " " << getStatusText(status) << endl;
        cout << "Content-Type: application/json" << endl;
        cout << "Content-Length: " << body.length() << endl;
        cout << endl;
        cout << body << endl;
    }
};

class UserService {
private:
    unordered_map<string, string> users = {
        {"alice", "password123"},
        {"bob", "password456"}
    };
    
public:
    HttpResponse login(const string& username, const string& password) {
        if(username.empty() || password.empty()) {
            return HttpResponse(BAD_REQUEST, 
                R"({"error": "Missing username or password"})");
        }
        
        if(users.find(username) == users.end()) {
            return HttpResponse(NOT_FOUND, 
                R"({"error": "User not found"})");
        }
        
        if(users[username] != password) {
            return HttpResponse(UNAUTHORIZED, 
                R"({"error": "Invalid password"})");
        }
        
        return HttpResponse(OK, 
            R"({"message": "Login successful", "user": ")" + username + "\"}");
    }
};

int main() {
    UserService service;
    
    cout << "=== Login Examples ===" << endl;
    
    // Successful login
    cout << "Successful login:" << endl;
    service.login("alice", "password123").send();
    
    cout << "\\nInvalid password:" << endl;
    service.login("alice", "wrong").send();
    
    cout << "\\nUser not found:" << endl;
    service.login("charlie", "password").send();
    
    cout << "\\nMissing credentials:" << endl;
    service.login("", "").send();
    
    return 0;
}`}
              walkthrough="HTTP status codes provide standardized way to indicate request outcomes. 2xx for success, 4xx for client errors, 5xx for server errors."
              complexity={{
                time: "O(1)",
                space: "O(1)",
                why: "Simple status code lookups.",
              }}
              mistakes={[
                {
                  mistake: "Using wrong status codes",
                  fix: "Learn standard codes: 200 OK, 404 Not Found, 500 Server Error",
                },
              ]}
              tryIt="Implement a function that returns appropriate status codes for different scenarios."
            />
          </div>
        </section>

        {/* Data Structures Basics */}
        <section id="data-structures" className="mt-24">
          <div className="mb-12 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Data Structures Basics (251-270)
            </h2>
            <p className="text-gray-400">
              Fundamental data structures and their use cases.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="251. Arrays vs Linked Lists - when to use which?"
              learn="Linear data structure trade-offs."
              context="Choosing between contiguous and linked storage."
              steps={[
                "Arrays: Fixed size, contiguous memory, O(1) access",
                "Linked Lists: Dynamic size, scattered memory, O(n) access",
                "Arrays for random access, linked lists for frequent insertions/deletions",
                "Consider memory usage and operation patterns",
              ]}
              pythonCode={`# Array (list) vs Linked List simulation
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        if not self.head:
            self.head = Node(data)
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = Node(data)
    
    def get(self, index):
        current = self.head
        for i in range(index):
            if current is None:
                return None
            current = current.next
        return current.data if current else None

# Array usage - fast random access
arr = [1, 2, 3, 4, 5]
print("Array access arr[2]:", arr[2])  # O(1)

# Linked List usage - fast insertions
ll = LinkedList()
for i in range(1, 6):
    ll.append(i)
print("Linked list access ll.get(2):", ll.get(2))  # O(n)

# Array insertion (expensive)
arr.insert(0, 0)  # O(n) - shifts all elements
print("Array after insert:", arr)

# Linked List insertion (cheap at head)
ll.head = Node(0)  # O(1) - just update head pointer
print("Linked list after insert at head: done")`}
              cppCode={`#include <iostream>
#include <vector>
#include <list>
using namespace std;

int main() {
    // Array (vector) - contiguous memory, fast random access
    vector<int> arr = {1, 2, 3, 4, 5};
    cout << "Array access arr[2]: " << arr[2] << " (O(1))" << endl;
    
    // Linked List - dynamic, fast insertions/deletions
    list<int> linkedList = {1, 2, 3, 4, 5};
    auto it = linkedList.begin();
    advance(it, 2);
    cout << "Linked list access position 2: " << *it << " (O(n))" << endl;
    
    // Array insertion - expensive
    cout << "Array before insert: ";
    for(int num : arr) cout << num << " ";
    cout << endl;
    
    arr.insert(arr.begin(), 0);  // O(n)
    cout << "Array after insert at beginning: ";
    for(int num : arr) cout << num << " ";
    cout << endl;
    
    // Linked List insertion - cheap
    linkedList.push_front(0);  // O(1)
    cout << "Linked list after insert at beginning: ";
    for(int num : linkedList) cout << num << " ";
    cout << endl;
    
    return 0;
}`}
              walkthrough="Arrays excel at random access but struggle with insertions. Linked lists handle dynamic sizing and frequent modifications well but have slow access."
              complexity={{
                time: "Array: O(1) access, O(n) insert/delete | Linked List: O(n) access, O(1) insert/delete",
                space:
                  "Array: contiguous | Linked List: scattered with pointers",
                why: "Memory layout determines access patterns.",
              }}
              mistakes={[
                {
                  mistake: "Using arrays for frequent insertions/deletions",
                  fix: "Use linked lists when modifications are common",
                },
                {
                  mistake: "Using linked lists when random access is needed",
                  fix: "Use arrays when access patterns are random",
                },
              ]}
              tryIt="Implement a hybrid structure that combines benefits of both."
            />

            <QuestionCard
              title="252. Stack implementation and use cases."
              learn="LIFO data structure."
              context="Last In, First Out operations."
              steps={[
                "Push: Add element to top",
                "Pop: Remove element from top",
                "Peek: View top element without removing",
                "isEmpty: Check if stack is empty",
              ]}
              pythonCode={`class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage examples
stack = Stack()

# Browser back button simulation
stack.push("page1.html")
stack.push("page2.html")
stack.push("page3.html")

print("Current page:", stack.peek())
print("Going back...")
stack.pop()
print("Current page:", stack.peek())

# Expression evaluation (balanced parentheses)
def is_balanced(expression):
    stack = Stack()
    brackets = {')': '(', '}': '{', ']': '['}
    
    for char in expression:
        if char in '({[':
            stack.push(char)
        elif char in ')}]':
            if stack.is_empty() or stack.pop() != brackets[char]:
                return False
    return stack.is_empty()

print("Balanced: (a+b)", is_balanced("(a+b)"))
print("Unbalanced: (a+b", is_balanced("(a+b"))`}
              cppCode={`#include <iostream>
#include <stack>
#include <string>
using namespace std;

class Stack {
private:
    stack<int> s;
    
public:
    void push(int item) {
        s.push(item);
    }
    
    int pop() {
        if (!isEmpty()) {
            int top = s.top();
            s.pop();
            return top;
        }
        return -1;  // Error value
    }
    
    int peek() {
        if (!isEmpty()) {
            return s.top();
        }
        return -1;
    }
    
    bool isEmpty() {
        return s.empty();
    }
    
    size_t size() {
        return s.size();
    }
};

bool isBalanced(const string& expression) {
    stack<char> st;
    for (char c : expression) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    return st.empty();
}

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    
    cout << "Top element: " << s.peek() << endl;
    cout << "Pop: " << s.pop() << endl;
    cout << "Top element: " << s.peek() << endl;
    
    // Balanced parentheses
    cout << "Balanced (a+b): " << boolalpha << isBalanced("(a+b)") << endl;
    cout << "Balanced (a+b: " << boolalpha << isBalanced("(a+b") << endl;
    
    return 0;
}`}
              walkthrough="Stack follows LIFO principle. Perfect for undo operations, function calls, expression evaluation, and backtracking algorithms."
              complexity={{
                time: "O(1) for all operations",
                space: "O(n)",
                why: "Simple array/list backing with constant-time operations.",
              }}
              mistakes={[
                {
                  mistake: "Using stack when queue semantics are needed",
                  fix: "Use queue for FIFO requirements",
                },
              ]}
              tryIt="Implement stack using two queues."
            />

            <QuestionCard
              title="253. Queue implementation and use cases."
              learn="FIFO data structure."
              context="First In, First Out operations."
              steps={[
                "Enqueue: Add element to rear",
                "Dequeue: Remove element from front",
                "Front: View front element without removing",
                "isEmpty: Check if queue is empty",
              ]}
              pythonCode={`from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
        return None
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage examples
queue = Queue()

# Print job simulation
queue.enqueue("Document1.pdf")
queue.enqueue("Document2.pdf")
queue.enqueue("Document3.pdf")

print("Next job to print:", queue.front())
print("Processing:", queue.dequeue())
print("Next job:", queue.front())

# BFS (Breadth First Search) simulation
def bfs_simulation():
    queue = Queue()
    visited = set()
    
    # Start from node 1
    queue.enqueue(1)
    visited.add(1)
    
    while not queue.is_empty():
        current = queue.dequeue()
        print(f"Processing node: {current}")
        
        # Simulate neighbors (in real BFS, get actual neighbors)
        neighbors = [current * 2, current * 2 + 1]  # Example
        for neighbor in neighbors:
            if neighbor < 10 and neighbor not in visited:  # Limit for demo
                queue.enqueue(neighbor)
                visited.add(neighbor)

bfs_simulation()`}
              cppCode={`#include <iostream>
#include <queue>
#include <deque>
using namespace std;

class Queue {
private:
    deque<int> q;
    
public:
    void enqueue(int item) {
        q.push_back(item);
    }
    
    int dequeue() {
        if (!isEmpty()) {
            int front = q.front();
            q.pop_front();
            return front;
        }
        return -1;
    }
    
    int front() {
        if (!isEmpty()) {
            return q.front();
        }
        return -1;
    }
    
    bool isEmpty() {
        return q.empty();
    }
    
    size_t size() {
        return q.size();
    }
};

int main() {
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    
    cout << "Front element: " << q.front() << endl;
    cout << "Dequeue: " << q.dequeue() << endl;
    cout << "Front element: " << q.front() << endl;
    
    // Task scheduling simulation
    queue<string> tasks;
    tasks.push("Task A");
    tasks.push("Task B");
    tasks.push("Task C");
    
    cout << "\\nProcessing tasks:" << endl;
    while (!tasks.empty()) {
        cout << "Processing: " << tasks.front() << endl;
        tasks.pop();
    }
    
    return 0;
}`}
              walkthrough="Queue follows FIFO principle. Essential for task scheduling, breadth-first search, and any scenario requiring ordered processing."
              complexity={{
                time: "O(1) for all operations",
                space: "O(n)",
                why: "Deque backing provides efficient front/back operations.",
              }}
              mistakes={[
                {
                  mistake: "Using queue when LIFO semantics are needed",
                  fix: "Use stack for LIFO requirements",
                },
              ]}
              tryIt="Implement queue using two stacks."
            />

            <QuestionCard
              title="254. HashMap internal working."
              learn="Hash table implementation."
              context="Key-value storage with fast lookups."
              steps={[
                "Hash function converts key to index",
                "Handle collisions (separate chaining/open addressing)",
                "Store key-value pairs in buckets",
                "Resize when load factor exceeds threshold",
              ]}
              pythonCode={`# Simple HashMap implementation
class SimpleHashMap:
    def __init__(self, size=10):
        self.size = size
        self.buckets = [[] for _ in range(size)]
        self.count = 0
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        # Check if key exists
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        bucket.append((key, value))
        self.count += 1
        
        # Resize if load factor > 0.75
        if self.count / self.size > 0.75:
            self._resize()
    
    def get(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        
        for k, v in bucket:
            if k == key:
                return v
        return None
    
    def _resize(self):
        old_buckets = self.buckets
        self.size *= 2
        self.buckets = [[] for _ in range(self.size)]
        self.count = 0
        
        for bucket in old_buckets:
            for key, value in bucket:
                self.put(key, value)

# Usage
hm = SimpleHashMap()
hm.put("name", "Alice")
hm.put("age", 30)
hm.put("city", "NYC")

print("Name:", hm.get("name"))
print("Age:", hm.get("age"))
print("City:", hm.get("city"))`}
              cppCode={`#include <iostream>
#include <vector>
#include <list>
#include <string>
using namespace std;

class SimpleHashMap {
private:
    vector<list<pair<string, string>>> buckets;
    int size;
    int count;
    
    int hashFunction(const string& key) {
        return hash<string>{}(key) % size;
    }
    
    void resize() {
        vector<list<pair<string, string>>> oldBuckets = buckets;
        size *= 2;
        buckets = vector<list<pair<string, string>>>(size);
        count = 0;
        
        for (const auto& bucket : oldBuckets) {
            for (const auto& pair : bucket) {
                put(pair.first, pair.second);
            }
        }
    }
    
public:
    SimpleHashMap(int s = 10) : size(s), count(0) {
        buckets.resize(size);
    }
    
    void put(const string& key, const string& value) {
        int index = hashFunction(key);
        auto& bucket = buckets[index];
        
        // Check if key exists
        for (auto& pair : bucket) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }
        
        bucket.push_back({key, value});
        count++;
        
        // Resize if load factor > 0.75
        if (static_cast<double>(count) / size > 0.75) {
            resize();
        }
    }
    
    string get(const string& key) {
        int index = hashFunction(key);
        auto& bucket = buckets[index];
        
        for (const auto& pair : bucket) {
            if (pair.first == key) {
                return pair.second;
            }
        }
        
        return "";
    }
    
    bool contains(const string& key) {
        return get(key) != "";
    }
};

int main() {
    SimpleHashMap hm;
    hm.put("name", "Alice");
    hm.put("age", "30");
    hm.put("city", "NYC");
    
    cout << "Name: " << hm.get("name") << endl;
    cout << "Age: " << hm.get("age") << endl;
    cout << "City: " << hm.get("city") << endl;
    cout << "Contains 'name': " << boolalpha << hm.contains("name") << endl;
    cout << "Contains 'country': " << boolalpha << hm.contains("country") << endl;
    
    return 0;
}`}
              walkthrough="HashMap uses hash function for O(1) average case operations. Collisions are resolved through chaining. Load factor triggers resizing."
              complexity={{
                time: "O(1) average, O(n) worst case",
                space: "O(n)",
                why: "Hash function distributes keys, but collisions can degrade performance.",
              }}
              mistakes={[
                {
                  mistake: "Using mutable objects as keys",
                  fix: "Use immutable keys to prevent hash changes",
                },
              ]}
              tryIt="Implement different collision resolution strategies."
            />

            <QuestionCard
              title="255. HashSet vs TreeSet performance."
              learn="Set implementation trade-offs."
              context="Choosing between hash-based and tree-based sets."
              steps={[
                "HashSet: O(1) operations, unordered",
                "TreeSet: O(log n) operations, ordered",
                "HashSet for fast lookups, TreeSet for sorted iteration",
                "Memory usage and null handling differences",
              ]}
              pythonCode={`# Python set (hash-based) vs sorted containers
from sortedcontainers import SortedSet  # Would need external library

# HashSet equivalent (unordered)
hash_set = set()
hash_set.add(30)
hash_set.add(10)
hash_set.add(20)
hash_set.add(10)  # Duplicate, ignored

print("HashSet (unordered):", hash_set)
print("Contains 20:", 20 in hash_set)  # O(1)

# TreeSet equivalent (ordered) - simulate with sorted list
tree_set = []
def add_to_tree_set(value):
    if value not in tree_set:
        tree_set.append(value)
        tree_set.sort()

add_to_tree_set(30)
add_to_tree_set(10)
add_to_tree_set(20)
add_to_tree_set(10)

print("TreeSet (ordered):", tree_set)
print("Contains 20:", 20 in tree_set)  # O(n) for search

# Performance comparison
import time

# Large dataset
data = list(range(10000))

# HashSet performance
start = time.time()
hash_set = set(data)
for i in range(10000):
    i in hash_set
hash_time = time.time() - start

# TreeSet simulation
start = time.time()
tree_set = sorted(data)
for i in range(10000):
    i in tree_set  # Linear search
tree_time = time.time() - start

print(f"\\nHashSet time: {hash_time:.4f}s")
print(f"TreeSet time: {tree_time:.4f}s")
print(f"HashSet is {tree_time/hash_time:.1f}x faster")`}
              cppCode={`#include <iostream>
#include <unordered_set>
#include <set>
#include <chrono>
using namespace std;

int main() {
    // HashSet (unordered_set) - fast operations
    unordered_set<int> hashSet;
    hashSet.insert(30);
    hashSet.insert(10);
    hashSet.insert(20);
    hashSet.insert(10);  // Duplicate, ignored
    
    cout << "HashSet (unordered): ";
    for (int num : hashSet) cout << num << " ";
    cout << endl;
    cout << "Contains 20: " << (hashSet.count(20) > 0) << endl;
    
    // TreeSet (set) - ordered, logarithmic operations
    set<int> treeSet;
    treeSet.insert(30);
    treeSet.insert(10);
    treeSet.insert(20);
    treeSet.insert(10);
    
    cout << "TreeSet (ordered): ";
    for (int num : treeSet) cout << num << " ";
    cout << endl;
    cout << "Contains 20: " << (treeSet.count(20) > 0) << endl;
    
    // Performance comparison
    const int SIZE = 10000;
    vector<int> data;
    for (int i = 0; i < SIZE; i++) data.push_back(i);
    
    // HashSet performance
    auto start = chrono::high_resolution_clock::now();
    unordered_set<int> largeHashSet(data.begin(), data.end());
    for (int i = 0; i < SIZE; i++) {
        largeHashSet.count(i);
    }
    auto hashTime = chrono::high_resolution_clock::now() - start;
    
    // TreeSet performance
    start = chrono::high_resolution_clock::now();
    set<int> largeTreeSet(data.begin(), data.end());
    for (int i = 0; i < SIZE; i++) {
        largeTreeSet.count(i);
    }
    auto treeTime = chrono::high_resolution_clock::now() - start;
    
    auto hashMs = chrono::duration_cast<chrono::milliseconds>(hashTime).count();
    auto treeMs = chrono::duration_cast<chrono::milliseconds>(treeTime).count();
    
    cout << "\\nHashSet time: " << hashMs << "ms" << endl;
    cout << "TreeSet time: " << treeMs << "ms" << endl;
    cout << "HashSet is " << (double)treeMs / hashMs << "x faster" << endl;
    
    return 0;
}`}
              walkthrough="HashSet provides O(1) operations but no ordering. TreeSet maintains sorted order with O(log n) operations. Choose based on access patterns."
              complexity={{
                time: "HashSet: O(1) | TreeSet: O(log n)",
                space: "HashSet: O(n) | TreeSet: O(n)",
                why: "HashSet uses hashing, TreeSet uses balanced BST.",
              }}
              mistakes={[
                {
                  mistake: "Using TreeSet when order doesn't matter",
                  fix: "Use HashSet for better performance when ordering is not needed",
                },
              ]}
              tryIt="Implement a custom set that combines both approaches."
            />
          </div>
        </section>

        {/* Design Patterns */}
        <section id="design-patterns" className="mt-24">
          <div className="mb-12 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">
              Design Patterns (271-280)
            </h2>
            <p className="text-gray-400">
              Common solutions to recurring design problems.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="271. Singleton pattern."
              learn="Ensuring single instance of a class."
              context="Global access to unique object instance."
              steps={[
                "Private constructor to prevent instantiation",
                "Static method to get instance",
                "Lazy initialization or eager initialization",
                "Thread safety considerations",
              ]}
              pythonCode={`class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not hasattr(self, '_initialized'):
            self._initialized = True
            self.data = "Singleton data"

# Usage
s1 = Singleton()
s1.data = "Modified by s1"

s2 = Singleton()
print("s2.data:", s2.data)  # Same instance
print("Same instance?", s1 is s2)  # True

# Real-world example: Database connection
class DatabaseConnection:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not hasattr(self, '_initialized'):
            self._initialized = True
            self.connection_string = "Connected to database"
            print("Database connection established")
    
    def query(self, sql):
        return f"Executing: {sql}"

# Only one connection created
db1 = DatabaseConnection()
db2 = DatabaseConnection()
print("Same connection?", db1 is db2)
print(db1.query("SELECT * FROM users"))`}
              cppCode={`#include <iostream>
#include <string>
using namespace std;

class Singleton {
private:
    static Singleton* instance;
    string data;
    
    // Private constructor
    Singleton() {
        data = "Singleton data";
    }
    
    // Delete copy constructor and assignment
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
    
public:
    static Singleton* getInstance() {
        if (instance == nullptr) {
            instance = new Singleton();
        }
        return instance;
    }
    
    void setData(const string& d) {
        data = d;
    }
    
    string getData() {
        return data;
    }
};

// Initialize static member
Singleton* Singleton::instance = nullptr;

class DatabaseConnection {
private:
    static DatabaseConnection* instance;
    string connectionString;
    
    DatabaseConnection() {
        connectionString = "Connected to database";
        cout << "Database connection established" << endl;
    }
    
    DatabaseConnection(const DatabaseConnection&) = delete;
    DatabaseConnection& operator=(const DatabaseConnection&) = delete;
    
public:
    static DatabaseConnection* getInstance() {
        if (instance == nullptr) {
            instance = new Singleton();  // Oops, should be DatabaseConnection
        }
        return instance;
    }
    
    string query(const string& sql) {
        return "Executing: " + sql;
    }
};

DatabaseConnection* DatabaseConnection::instance = nullptr;

int main() {
    Singleton* s1 = Singleton::getInstance();
    s1->setData("Modified by s1");
    
    Singleton* s2 = Singleton::getInstance();
    cout << "s2 data: " << s2->getData() << endl;
    cout << "Same instance? " << (s1 == s2) << endl;
    
    // Database connection
    DatabaseConnection* db1 = DatabaseConnection::getInstance();
    DatabaseConnection* db2 = DatabaseConnection::getInstance();
    cout << "Same connection? " << (db1 == db2) << endl;
    cout << db1->query("SELECT * FROM users") << endl;
    
    return 0;
}`}
              walkthrough="Singleton ensures only one instance exists. Useful for database connections, configuration managers, and logging systems."
              complexity={{
                time: "O(1) for getInstance()",
                space: "O(1) extra",
                why: "Single instance with static access.",
              }}
              mistakes={[
                {
                  mistake: "Not handling thread safety",
                  fix: "Use double-checked locking or static initialization",
                },
              ]}
              tryIt="Implement thread-safe singleton with different initialization strategies."
            />

            <QuestionCard
              title="272. Factory pattern."
              learn="Object creation through factory methods."
              context="Delegating object creation to factory classes."
              steps={[
                "Define factory interface/abstract class",
                "Concrete factories implement creation logic",
                "Client uses factory without knowing concrete classes",
                "Promotes loose coupling and extensibility",
              ]}
              pythonCode={`from abc import ABC, abstractmethod

# Product interface
class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

# Concrete products
class Circle(Shape):
    def draw(self):
        return "Drawing a circle"

class Square(Shape):
    def draw(self):
        return "Drawing a square"

class Triangle(Shape):
    def draw(self):
        return "Drawing a triangle"

# Factory
class ShapeFactory:
    @staticmethod
    def create_shape(shape_type):
        if shape_type == "circle":
            return Circle()
        elif shape_type == "square":
            return Square()
        elif shape_type == "triangle":
            return Triangle()
        else:
            raise ValueError(f"Unknown shape type: {shape_type}")

# Usage
shapes = ["circle", "square", "triangle", "circle"]

for shape_type in shapes:
    shape = ShapeFactory.create_shape(shape_type)
    print(shape.draw())

# Real-world example: Database connection factory
class DatabaseConnection(ABC):
    @abstractmethod
    def connect(self):
        pass

class MySQLConnection(DatabaseConnection):
    def connect(self):
        return "Connected to MySQL database"

class PostgreSQLConnection(DatabaseConnection):
    def connect(self):
        return "Connected to PostgreSQL database"

class DatabaseFactory:
    @staticmethod
    def create_connection(db_type):
        if db_type == "mysql":
            return MySQLConnection()
        elif db_type == "postgresql":
            return PostgreSQLConnection()
        else:
            raise ValueError(f"Unsupported database: {db_type}")

# Usage
db = DatabaseFactory.create_connection("mysql")
print(db.connect())`}
              cppCode={`#include <iostream>
#include <string>
#include <memory>
using namespace std;

// Product interface
class Shape {
public:
    virtual string draw() = 0;
    virtual ~Shape() = default;
};

// Concrete products
class Circle : public Shape {
public:
    string draw() override {
        return "Drawing a circle";
    }
};

class Square : public Shape {
public:
    string draw() override {
        return "Drawing a square";
    }
};

class Triangle : public Shape {
public:
    string draw() override {
        return "Drawing a triangle";
    }
};

// Factory
class ShapeFactory {
public:
    static unique_ptr<Shape> createShape(const string& shapeType) {
        if (shapeType == "circle") {
            return make_unique<Circle>();
        } else if (shapeType == "square") {
            return make_unique<Square>();
        } else if (shapeType == "triangle") {
            return make_unique<Triangle>();
        } else {
            throw invalid_argument("Unknown shape type: " + shapeType);
        }
    }
};

// Database connection example
class DatabaseConnection {
public:
    virtual string connect() = 0;
    virtual ~DatabaseConnection() = default;
};

class MySQLConnection : public DatabaseConnection {
public:
    string connect() override {
        return "Connected to MySQL database";
    }
};

class PostgreSQLConnection : public DatabaseConnection {
public:
    string connect() override {
        return "Connected to PostgreSQL database";
    }
};

class DatabaseFactory {
public:
    static unique_ptr<DatabaseConnection> createConnection(const string& dbType) {
        if (dbType == "mysql") {
            return make_unique<MySQLConnection>();
        } else if (dbType == "postgresql") {
            return make_unique<PostgreSQLConnection>();
        } else {
            throw invalid_argument("Unsupported database: " + dbType);
        }
    }
};

int main() {
    vector<string> shapes = {"circle", "square", "triangle", "circle"};
    
    for (const string& shapeType : shapes) {
        unique_ptr<Shape> shape = ShapeFactory::createShape(shapeType);
        cout << shape->draw() << endl;
    }
    
    // Database example
    unique_ptr<DatabaseConnection> db = DatabaseFactory::createConnection("mysql");
    cout << db->connect() << endl;
    
    return 0;
}`}
              walkthrough="Factory pattern encapsulates object creation logic. Client code depends on abstractions, making it easy to add new product types."
              complexity={{
                time: "O(1) for creation",
                space: "O(1) per object",
                why: "Simple instantiation logic.",
              }}
              mistakes={[
                {
                  mistake: "Tightly coupling client to concrete classes",
                  fix: "Use factory to abstract object creation",
                },
              ]}
              tryIt="Implement Abstract Factory pattern for creating families of related objects."
            />

            <QuestionCard
              title="273. Observer pattern."
              learn="One-to-many dependency between objects."
              context="Notifying multiple objects when state changes."
              steps={[
                "Subject maintains list of observers",
                "Observer interface defines update method",
                "Concrete observers implement update logic",
                "Subject notifies all observers on state change",
              ]}
              pythonCode={`from abc import ABC, abstractmethod

# Observer interface
class Observer(ABC):
    @abstractmethod
    def update(self, message):
        pass

# Subject
class NewsPublisher:
    def __init__(self):
        self._observers = []
        self._latest_news = None
    
    def subscribe(self, observer):
        self._observers.append(observer)
    
    def unsubscribe(self, observer):
        self._observers.remove(observer)
    
    def notify_observers(self):
        for observer in self._observers:
            observer.update(self._latest_news)
    
    def publish_news(self, news):
        self._latest_news = news
        print(f"Publishing news: {news}")
        self.notify_observers()

# Concrete observers
class EmailSubscriber(Observer):
    def __init__(self, email):
        self.email = email
    
    def update(self, message):
        print(f"Email to {self.email}: {message}")

class SMSSubscriber(Observer):
    def __init__(self, phone):
        self.phone = phone
    
    def update(self, message):
        print(f"SMS to {self.phone}: {message}")

# Usage
publisher = NewsPublisher()

email_sub = EmailSubscriber("user@example.com")
sms_sub = SMSSubscriber("+1234567890")

publisher.subscribe(email_sub)
publisher.subscribe(sms_sub)

publisher.publish_news("Breaking: New product launched!")

publisher.unsubscribe(email_sub)
publisher.publish_news("Update: Product selling fast!")`}
              cppCode={`#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

// Observer interface
class Observer {
public:
    virtual void update(const string& message) = 0;
    virtual ~Observer() = default;
};

// Subject
class NewsPublisher {
private:
    vector<Observer*> observers;
    string latestNews;
    
public:
    void subscribe(Observer* observer) {
        observers.push_back(observer);
    }
    
    void unsubscribe(Observer* observer) {
        observers.erase(
            remove(observers.begin(), observers.end(), observer),
            observers.end()
        );
    }
    
    void notifyObservers() {
        for (Observer* observer : observers) {
            observer->update(latestNews);
        }
    }
    
    void publishNews(const string& news) {
        latestNews = news;
        cout << "Publishing news: " << news << endl;
        notifyObservers();
    }
};

// Concrete observers
class EmailSubscriber : public Observer {
private:
    string email;
    
public:
    EmailSubscriber(const string& e) : email(e) {}
    
    void update(const string& message) override {
        cout << "Email to " << email << ": " << message << endl;
    }
};

class SMSSubscriber : public Observer {
private:
    string phone;
    
public:
    SMSSubscriber(const string& p) : phone(p) {}
    
    void update(const string& message) override {
        cout << "SMS to " << phone << ": " << message << endl;
    }
};

int main() {
    NewsPublisher publisher;
    
    EmailSubscriber* emailSub = new EmailSubscriber("user@example.com");
    SMSSubscriber* smsSub = new SMSSubscriber("+1234567890");
    
    publisher.subscribe(emailSub);
    publisher.subscribe(smsSub);
    
    publisher.publishNews("Breaking: New product launched!");
    
    publisher.unsubscribe(emailSub);
    publisher.publishNews("Update: Product selling fast!");
    
    delete emailSub;
    delete smsSub;
    
    return 0;
}`}
              walkthrough="Observer pattern enables loose coupling between subject and observers. Subject doesn't need to know concrete observer types."
              complexity={{
                time: "O(n) for notification",
                space: "O(n) for observer list",
                why: "Iterating through all observers.",
              }}
              mistakes={[
                {
                  mistake: "Memory leaks from observer references",
                  fix: "Use weak references or proper cleanup",
                },
              ]}
              tryIt="Implement observer with different notification strategies (push vs pull)."
            />
          </div>
        </section>

        {/* Git & Version Control */}
        <section id="git-version-control" className="mt-24">
          <div className="mb-12 p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
            <h2 className="text-2xl font-bold text-red-400 mb-2">
              Git & Version Control (281-295)
            </h2>
            <p className="text-gray-400">
              Essential version control concepts and commands.
            </p>
          </div>

          <div className="space-y-8">
            <QuestionCard
              title="281. git init, clone, add, commit."
              learn="Basic Git workflow commands."
              context="Initializing repository and saving changes."
              steps={[
                "git init: Create new repository",
                "git clone: Copy existing repository",
                "git add: Stage files for commit",
                "git commit: Save staged changes",
              ]}
              pythonCode={`# Simulating Git workflow with file operations
import os
import shutil
import json
from datetime import datetime

class SimpleGit:
    def __init__(self, repo_path):
        self.repo_path = repo_path
        self.git_dir = os.path.join(repo_path, '.git')
        self.index = {}  # Staging area
        self.commits = []
    
    def init(self):
        os.makedirs(self.git_dir, exist_ok=True)
        os.makedirs(os.path.join(self.git_dir, 'objects'), exist_ok=True)
        with open(os.path.join(self.git_dir, 'HEAD'), 'w') as f:
            f.write('ref: refs/heads/master\\n')
        print("Initialized empty Git repository")
    
    def add(self, file_path):
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                content = f.read()
            self.index[file_path] = content
            print(f"Added {file_path} to staging area")
        else:
            print(f"File {file_path} does not exist")
    
    def commit(self, message):
        if not self.index:
            print("Nothing to commit")
            return
        
        commit = {
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'files': self.index.copy()
        }
        
        self.commits.append(commit)
        self.index.clear()
        
        print(f"Committed: {message}")
        print(f"Files changed: {len(commit['files'])}")
    
    def status(self):
        print("Staged files:")
        for file in self.index:
            print(f"  {file}")
        
        if not self.index:
            print("  (nothing staged)")

# Usage demonstration
repo = SimpleGit("my_project")
repo.init()

# Create some files
with open("README.md", "w") as f:
    f.write("# My Project\\n\\nThis is a sample project.")

with open("app.py", "w") as f:
    f.write("print('Hello, World!')")

# Git workflow
repo.add("README.md")
repo.add("app.py")
repo.status()
repo.commit("Initial commit")

# Modify and commit again
with open("app.py", "w") as f:
    f.write("print('Hello, Git!')")

repo.add("app.py")
repo.commit("Update greeting message")`}
              cppCode={`#include <iostream>
#include <fstream>
#include <string>
#include <unordered_map>
#include <vector>
#include <filesystem>
#include <chrono>
#include <ctime>
using namespace std;
using namespace std::filesystem;

class SimpleGit {
private:
    path repoPath;
    path gitDir;
    unordered_map<string, string> index;  // Staging area
    vector<unordered_map<string, string>> commits;
    
public:
    SimpleGit(const string& repoPathStr) : repoPath(repoPathStr) {
        gitDir = repoPath / ".git";
    }
    
    void init() {
        create_directories(gitDir);
        create_directories(gitDir / "objects");
        
        ofstream headFile(gitDir / "HEAD");
        headFile << "ref: refs/heads/master" << endl;
        headFile.close();
        
        cout << "Initialized empty Git repository" << endl;
    }
    
    void add(const string& filePath) {
        path fullPath = repoPath / filePath;
        if (exists(fullPath)) {
            ifstream file(fullPath);
            string content((istreambuf_iterator<char>(file)),
                          istreambuf_iterator<char>());
            index[filePath] = content;
            cout << "Added " << filePath << " to staging area" << endl;
        } else {
            cout << "File " << filePath << " does not exist" << endl;
        }
    }
    
    void commit(const string& message) {
        if (index.empty()) {
            cout << "Nothing to commit" << endl;
            return;
        }
        
        unordered_map<string, string> commit;
        commit["message"] = message;
        
        // Add timestamp
        auto now = chrono::system_clock::now();
        time_t time = chrono::system_clock::to_time_t(now);
        commit["timestamp"] = ctime(&time);
        
        // Copy staged files
        for (const auto& pair : index) {
            commit["file_" + pair.first] = pair.second;
        }
        
        commits.push_back(commit);
        index.clear();
        
        cout << "Committed: " << message << endl;
        cout << "Files changed: " << commit.size() - 2 << endl;  // -2 for message and timestamp
    }
    
    void status() {
        cout << "Staged files:" << endl;
        if (index.empty()) {
            cout << "  (nothing staged)" << endl;
        } else {
            for (const auto& pair : index) {
                cout << "  " << pair.first << endl;
            }
        }
    }
};

int main() {
    SimpleGit repo("my_project");
    repo.init();
    
    // Create files
    ofstream readme("my_project/README.md");
    readme << "# My Project" << endl << endl << "This is a sample project." << endl;
    readme.close();
    
    ofstream app("my_project/app.cpp");
    app << "#include <iostream>" << endl << "int main() {" << endl;
    app << "    std::cout << \"Hello, World!\" << std::endl;" << endl;
    app << "    return 0;" << endl << "}" << endl;
    app.close();
    
    // Git workflow
    repo.add("README.md");
    repo.add("app.cpp");
    repo.status();
    repo.commit("Initial commit");
    
    // Modify and commit again
    ofstream app2("my_project/app.cpp");
    app2 << "#include <iostream>" << endl << "int main() {" << endl;
    app2 << "    std::cout << \"Hello, Git!\" << std::endl;" << endl;
    app2 << "    return 0;" << endl << "}" << endl;
    app2.close();
    
    repo.add("app.cpp");
    repo.commit("Update greeting message");
    
    return 0;
}`}
              walkthrough="Git workflow: init/clone to start, add to stage changes, commit to save. This creates a history of your project's changes."
              complexity={{
                time: "O(1) for add, O(n) for commit",
                space: "O(n) for repository",
                why: "File operations and content storage.",
              }}
              mistakes={[
                {
                  mistake: "Committing without adding files",
                  fix: "Use git add to stage changes before commit",
                },
              ]}
              tryIt="Implement git log to show commit history."
            />

            <QuestionCard
              title="282. git push, pull, fetch difference."
              learn="Synchronizing with remote repositories."
              context="Working with remote Git repositories."
              steps={[
                "git push: Upload local commits to remote",
                "git pull: Fetch and merge from remote",
                "git fetch: Download remote changes without merging",
                "Understanding remote tracking branches",
              ]}
              pythonCode={`# Simulating remote operations
import json
import os
from datetime import datetime

class RemoteRepository:
    def __init__(self, name):
        self.name = name
        self.branches = {"main": []}
    
    def push(self, branch, commits):
        if branch not in self.branches:
            self.branches[branch] = []
        
        # Add new commits
        existing_count = len(self.branches[branch])
        self.branches[branch].extend(commits)
        
        print(f"Pushed {len(commits)} commits to {self.name}/{branch}")
        return existing_count
    
    def fetch(self, branch):
        if branch in self.branches:
            return self.branches[branch].copy()
        return []

class LocalRepository:
    def __init__(self, name):
        self.name = name
        self.local_commits = []
        self.remote_commits = []
        self.remote = None
    
    def set_remote(self, remote):
        self.remote = remote
    
    def commit(self, message):
        commit = {
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "id": f"commit_{len(self.local_commits) + 1}"
        }
        self.local_commits.append(commit)
        print(f"Committed locally: {message}")
    
    def push(self, branch="main"):
        if not self.remote:
            print("No remote repository configured")
            return
        
        pushed_count = self.remote.push(branch, self.local_commits[len(self.remote_commits):])
        if pushed_count < len(self.local_commits):
            print(f"Successfully pushed to {self.remote.name}")
        else:
            print("Already up to date")
    
    def fetch(self, branch="main"):
        if not self.remote:
            print("No remote repository configured")
            return
        
        remote_commits = self.remote.fetch(branch)
        new_commits = len(remote_commits) - len(self.remote_commits)
        
        if new_commits > 0:
            self.remote_commits = remote_commits
            print(f"Fetched {new_commits} new commits from {self.remote.name}")
        else:
            print("Already up to date")
    
    def pull(self, branch="main"):
        self.fetch(branch)
        # Simple merge simulation - just update local with remote
        if len(self.remote_commits) > len(self.local_commits):
            self.local_commits = self.remote_commits.copy()
            print(f"Merged remote changes into local branch")
    
    def status(self):
        print(f"Local repository: {self.name}")
        print(f"Local commits: {len(self.local_commits)}")
        print(f"Remote commits: {len(self.remote_commits)}")
        if self.remote:
            print(f"Remote: {self.remote.name}")

# Demonstration
remote = RemoteRepository("origin")
local = LocalRepository("my_repo")
local.set_remote(remote)

# Make some commits
local.commit("Initial commit")
local.commit("Add feature A")
local.commit("Fix bug B")

print("\\nBefore push:")
local.status()

# Push to remote
local.push()

print("\\nAfter push:")
local.status()

# Simulate another developer pushing
remote.push("main", [{"message": "Remote commit", "timestamp": datetime.now().isoformat(), "id": "remote_1"}])

print("\\nAfter remote push:")
local.fetch()
local.status()

print("\\nPull to merge:")
local.pull()
local.status()`}
              cppCode={`#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <chrono>
#include <ctime>
using namespace std;

struct Commit {
    string message;
    string timestamp;
    string id;
};

class RemoteRepository {
private:
    string name;
    unordered_map<string, vector<Commit>> branches;
    
public:
    RemoteRepository(const string& n) : name(n) {
        branches["main"] = vector<Commit>();
    }
    
    int push(const string& branch, const vector<Commit>& commits) {
        if (branches.find(branch) == branches.end()) {
            branches[branch] = vector<Commit>();
        }
        
        size_t existingCount = branches[branch].size();
        branches[branch].insert(branches[branch].end(), commits.begin(), commits.end());
        
        cout << "Pushed " << commits.size() << " commits to " << name << "/" << branch << endl;
        return existingCount;
    }
    
    vector<Commit> fetch(const string& branch) {
        if (branches.find(branch) != branches.end()) {
            return branches[branch];
        }
        return vector<Commit>();
    }
};

class LocalRepository {
private:
    string name;
    vector<Commit> localCommits;
    vector<Commit> remoteCommits;
    RemoteRepository* remote;
    
public:
    LocalRepository(const string& n) : name(n), remote(nullptr) {}
    
    void setRemote(RemoteRepository* r) {
        remote = r;
    }
    
    void commit(const string& message) {
        auto now = chrono::system_clock::now();
        time_t time = chrono::system_clock::to_time_t(now);
        
        Commit commit;
        commit.message = message;
        commit.timestamp = ctime(&time);
        commit.id = "commit_" + to_string(localCommits.size() + 1);
        
        localCommits.push_back(commit);
        cout << "Committed locally: " << message << endl;
    }
    
    void push(const string& branch = "main") {
        if (!remote) {
            cout << "No remote repository configured" << endl;
            return;
        }
        
        size_t existingCount = remote->push(branch, localCommits);
        if (existingCount < localCommits.size()) {
            cout << "Successfully pushed to " << remote->name << endl;
        } else {
            cout << "Already up to date" << endl;
        }
    }
    
    void fetch(const string& branch = "main") {
        if (!remote) {
            cout << "No remote repository configured" << endl;
            return;
        }
        
        vector<Commit> remoteCommits = remote->fetch(branch);
        size_t newCommits = remoteCommits.size() - this->remoteCommits.size();
        
        if (newCommits > 0) {
            this->remoteCommits = remoteCommits;
            cout << "Fetched " << newCommits << " new commits" << endl;
        } else {
            cout << "Already up to date" << endl;
        }
    }
    
    void pull(const string& branch = "main") {
        fetch(branch);
        // Simple merge - update local with remote
        if (remoteCommits.size() > localCommits.size()) {
            localCommits = remoteCommits;
            cout << "Merged remote changes into local branch" << endl;
        }
    }
    
    void status() {
        cout << "Local repository: " << name << endl;
        cout << "Local commits: " << localCommits.size() << endl;
        cout << "Remote commits: " << remoteCommits.size() << endl;
    }
};

int main() {
    RemoteRepository remote("origin");
    LocalRepository local("my_repo");
    local.setRemote(&remote);
    
    // Make commits
    local.commit("Initial commit");
    local.commit("Add feature A");
    local.commit("Fix bug B");
    
    cout << "\\nBefore push:" << endl;
    local.status();
    
    // Push
    local.push();
    
    cout << "\\nAfter push:" << endl;
    local.status();
    
    // Simulate remote push
    vector<Commit> remoteCommit;
    auto now = chrono::system_clock::now();
    time_t time = chrono::system_clock::to_time_t(now);
    remoteCommit.push_back({"Remote commit", ctime(&time), "remote_1"});
    remote.push("main", remoteCommit);
    
    cout << "\\nAfter remote push:" << endl;
    local.fetch();
    local.status();
    
    cout << "\\nPull to merge:" << endl;
    local.pull();
    local.status();
    
    return 0;
}`}
              walkthrough="Push uploads your commits, pull downloads and merges, fetch only downloads without merging. Use fetch to see changes before merging."
              complexity={{
                time: "O(n) for transfer operations",
                space: "O(n) for commit storage",
                why: "Network transfer and merge operations.",
              }}
              mistakes={[
                {
                  mistake: "Using pull when you want to review changes first",
                  fix: "Use fetch to download, then merge manually if needed",
                },
              ]}
              tryIt="Implement merge conflict detection and resolution."
            />

            <QuestionCard
              title="283. Branching strategy."
              learn="Organizing development with branches."
              context="Managing multiple lines of development."
              steps={[
                "main/master: Production-ready code",
                "develop: Integration branch",
                "feature branches: New features",
                "release branches: Preparing releases",
                "hotfix branches: Emergency fixes",
              ]}
              pythonCode={`# Simulating Git Flow branching strategy
import json
from datetime import datetime

class GitBranch:
    def __init__(self, name):
        self.name = name
        self.commits = []
    
    def commit(self, message):
        commit = {
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "branch": self.name
        }
        self.commits.append(commit)
        print(f"[{self.name}] Committed: {message}")

class GitRepository:
    def __init__(self):
        self.branches = {"main": GitBranch("main")}
        self.current_branch = "main"
    
    def create_branch(self, name, from_branch="main"):
        if name in self.branches:
            print(f"Branch {name} already exists")
            return
        
        # Copy commits from source branch
        self.branches[name] = GitBranch(name)
        self.branches[name].commits = self.branches[from_branch].commits.copy()
        print(f"Created branch '{name}' from '{from_branch}'")
    
    def checkout(self, branch_name):
        if branch_name not in self.branches:
            print(f"Branch {branch_name} does not exist")
            return
        self.current_branch = branch_name
        print(f"Switched to branch '{branch_name}'")
    
    def commit(self, message):
        self.branches[self.current_branch].commit(message)
    
    def merge(self, source_branch, target_branch="main"):
        if source_branch not in self.branches or target_branch not in self.branches:
            print("Branch does not exist")
            return
        
        source_commits = self.branches[source_branch].commits
        target_commits = self.branches[target_branch].commits
        
        # Simple merge - add new commits
        new_commits = []
        for commit in source_commits:
            if commit not in target_commits:
                new_commits.append(commit)
        
        self.branches[target_branch].commits.extend(new_commits)
        print(f"Merged {len(new_commits)} commits from '{source_branch}' to '{target_branch}'")

# Git Flow demonstration
repo = GitRepository()

# Start with main branch
repo.commit("Initial release")

# Create develop branch
repo.create_branch("develop")
repo.checkout("develop")
repo.commit("Start development")

# Create feature branch
repo.create_branch("feature/user-auth", "develop")
repo.checkout("feature/user-auth")
repo.commit("Add user authentication")
repo.commit("Add password hashing")
repo.commit("Add login/logout")

# Merge feature back to develop
repo.checkout("develop")
repo.merge("feature/user-auth", "develop")

# Create release branch
repo.create_branch("release/v1.1", "develop")
repo.checkout("release/v1.1")
repo.commit("Bump version to 1.1")
repo.commit("Update documentation")

# Merge release to main and develop
repo.checkout("main")
repo.merge("release/v1.1", "main")

repo.checkout("develop")
repo.merge("release/v1.1", "develop")

# Hotfix example
repo.create_branch("hotfix/security-patch", "main")
repo.checkout("hotfix/security-patch")
repo.commit("Fix security vulnerability")

# Merge hotfix to both main and develop
repo.checkout("main")
repo.merge("hotfix/security-patch", "main")

repo.checkout("develop")
repo.merge("hotfix/security-patch", "develop")

print("\\nFinal state:")
for branch_name, branch in repo.branches.items():
    print(f"{branch_name}: {len(branch.commits)} commits")`}
              cppCode={`#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct Commit {
    string message;
    string timestamp;
    string branch;
};

class GitBranch {
public:
    string name;
    vector<Commit> commits;
    
    GitBranch(const string& n) : name(n) {}
    
    void commit(const string& message) {
        Commit c;
        c.message = message;
        // Simple timestamp
        c.timestamp = "2024-01-01";
        c.branch = name;
        commits.push_back(c);
        cout << "[" << name << "] Committed: " << message << endl;
    }
};

class GitRepository {
private:
    unordered_map<string, GitBranch> branches;
    string currentBranch;
    
public:
    GitRepository() : currentBranch("main") {
        branches["main"] = GitBranch("main");
    }
    
    void createBranch(const string& name, const string& fromBranch = "main") {
        if (branches.find(name) != branches.end()) {
            cout << "Branch " << name << " already exists" << endl;
            return;
        }
        
        branches[name] = GitBranch(name);
        // Copy commits from source branch
        branches[name].commits = branches[fromBranch].commits;
        cout << "Created branch '" << name << "' from '" << fromBranch << "'" << endl;
    }
    
    void checkout(const string& branchName) {
        if (branches.find(branchName) == branches.end()) {
            cout << "Branch " << branchName << " does not exist" << endl;
            return;
        }
        currentBranch = branchName;
        cout << "Switched to branch '" << branchName << "'" << endl;
    }
    
    void commit(const string& message) {
        branches[currentBranch].commit(message);
    }
    
    void merge(const string& sourceBranch, const string& targetBranch = "main") {
        if (branches.find(sourceBranch) == branches.end() || 
            branches.find(targetBranch) == branches.end()) {
            cout << "Branch does not exist" << endl;
            return;
        }
        
        auto& sourceCommits = branches[sourceBranch].commits;
        auto& targetCommits = branches[targetBranch].commits;
        
        // Simple merge - add commits that don't exist in target
        int newCommits = 0;
        for (const auto& commit : sourceCommits) {
            bool exists = false;
            for (const auto& targetCommit : targetCommits) {
                if (commit.message == targetCommit.message && 
                    commit.timestamp == targetCommit.timestamp) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                targetCommits.push_back(commit);
                newCommits++;
            }
        }
        
        cout << "Merged " << newCommits << " commits from '" 
             << sourceBranch << "' to '" << targetBranch << "'" << endl;
    }
    
    void printStatus() {
        cout << "\\nRepository status:" << endl;
        for (const auto& pair : branches) {
            cout << pair.first << ": " << pair.second.commits.size() << " commits" << endl;
        }
        cout << "Current branch: " << currentBranch << endl;
    }
};

int main() {
    GitRepository repo;
    
    // Start with main
    repo.commit("Initial release");
    
    // Git Flow
    repo.createBranch("develop");
    repo.checkout("develop");
    repo.commit("Start development");
    
    repo.createBranch("feature/user-auth", "develop");
    repo.checkout("feature/user-auth");
    repo.commit("Add user authentication");
    repo.commit("Add password hashing");
    
    repo.checkout("develop");
    repo.merge("feature/user-auth", "develop");
    
    repo.createBranch("release/v1.1", "develop");
    repo.checkout("release/v1.1");
    repo.commit("Bump version to 1.1");
    
    repo.checkout("main");
    repo.merge("release/v1.1", "main");
    
    repo.checkout("develop");
    repo.merge("release/v1.1", "develop");
    
    // Hotfix
    repo.createBranch("hotfix/security-patch", "main");
    repo.checkout("hotfix/security-patch");
    repo.commit("Fix security vulnerability");
    
    repo.checkout("main");
    repo.merge("hotfix/security-patch", "main");
    
    repo.checkout("develop");
    repo.merge("hotfix/security-patch", "develop");
    
    repo.printStatus();
    
    return 0;
}`}
              walkthrough="Git Flow uses multiple branches for different purposes: main for production, develop for integration, feature branches for development, etc."
              complexity={{
                time: "O(1) for branch operations, O(n) for merge",
                space: "O(n) for commit storage",
                why: "Branch management and commit operations.",
              }}
              mistakes={[
                {
                  mistake: "Committing directly to main branch",
                  fix: "Use feature branches and pull requests",
                },
              ]}
              tryIt="Implement pull request workflow with code review simulation."
            />
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-foreground/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Mastered These Concepts?</h2>
          <p className="text-gray-400 mb-8">
            You're ready for entry-level interviews. Practice more coding
            problems and build projects to strengthen your skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-all transform hover:scale-105"
            >
              Explore More Blogs →
            </Link>
            <Link
              href="/practice"
              className="px-8 py-3 border border-green-500 text-green-500 font-bold rounded-full hover:bg-green-500 hover:text-black transition-all"
            >
              Start Practicing
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
