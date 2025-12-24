import QuestionCard from "@/components/blog/QuestionCard";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";

export default function BlogPart4() {
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
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            Part 4 of 5
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Recursion, Linked Lists & Matrices
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            These topics test your understanding of memory, pointers, and
            multi-dimensional thinking. Mastering these is what separates good
            developers from great ones.
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
                  "Reverse Linked List",
                  "Middle of LL",
                  "Detect Cycle",
                  "Merge Sorted LL",
                  "Delete Node",
                  "Nth Node from End",
                  "Transpose Matrix",
                  "Spiral Matrix",
                  "Matrix Addition",
                  "Matrix Multiplication",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-12 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-orange-400 mb-2">
                Linked Lists
              </h2>
              <p className="text-sm text-gray-400">
                Understanding pointers and node-based structures.
              </p>
            </div>

            <QuestionCard
              title="Reverse Linked List"
              learn="Pointer manipulation and re-linking nodes."
              context="Like reversing a train by changing the couplings between cars so the last car becomes the engine."
              steps={[
                "Initialize three pointers: prev = null, curr = head, next = null",
                "Iterate through the list",
                "Store next node, point current node to prev",
                "Move prev and curr one step forward",
                "Return prev as the new head",
              ]}
              pythonCode={`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`}
              cppCode={`struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode *prev = NULL, *curr = head, *next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`}
              walkthrough="We flip the 'next' pointer of each node to point to the previous node. We need a temporary 'next' pointer to not lose the rest of the list during the flip."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We visit each node once and use a few pointers.",
              }}
              mistakes={[
                {
                  mistake: "Losing the reference to the next node",
                  fix: "Always store curr->next in a temporary variable before changing curr->next.",
                },
              ]}
              tryIt="Can you implement this using recursion?"
            />

            <QuestionCard
              title="Middle of LL"
              learn="The 'Slow and Fast Pointer' technique (Tortoise and Hare)."
              context="Finding the middle of a race track by having one person run twice as fast as the other. When the fast person finishes, the slow one is at the middle!"
              steps={[
                "Initialize two pointers: slow and fast at head",
                "Move slow by 1 step and fast by 2 steps",
                "When fast reaches the end, slow is at the middle",
              ]}
              pythonCode={`def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`}
              cppCode={`ListNode* findMiddle(ListNode* head) {
    ListNode *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}`}
              walkthrough="This is a classic trick to find the middle in a single pass without knowing the length of the list beforehand."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We traverse the list once.",
              }}
              mistakes={[
                {
                  mistake: "Not checking fast->next in the while condition",
                  fix: "This will cause a null pointer exception when fast is at the last node.",
                },
              ]}
              tryIt="How would you find the 1/3rd point of a linked list?"
            />

            <QuestionCard
              title="Detect Cycle"
              learn="Floyd's Cycle-Finding Algorithm."
              context="Checking if a track is a loop or a straight line. If two people run at different speeds on a loop, they will eventually meet!"
              steps={[
                "Use slow and fast pointers",
                "If they ever meet, there is a cycle",
                "If fast reaches null, there is no cycle",
              ]}
              pythonCode={`def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`}
              cppCode={`bool hasCycle(ListNode *head) {
    ListNode *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`}
              walkthrough="If there's a loop, the fast pointer will eventually 'lap' the slow pointer. If there's no loop, the fast pointer will hit the end of the list."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "In the worst case, we traverse the loop once.",
              }}
              mistakes={[
                {
                  mistake: "Starting slow and fast at different positions",
                  fix: "They should both start at the head for the logic to be consistent.",
                },
              ]}
              tryIt="If a cycle is detected, how do you find the starting node of the cycle?"
            />

            <QuestionCard
              title="Merge Sorted LL"
              learn="Merging two sorted structures using pointers."
              context="Combining two sorted lists into one single sorted list. Like merging two lines of people sorted by height."
              steps={[
                "Create a dummy node to start the new list",
                "Compare heads of both lists",
                "Attach the smaller node to the new list",
                "Move the pointer of the list that provided the node",
                "Attach any remaining nodes at the end",
              ]}
              pythonCode={`def merge_lists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`}
              cppCode={`ListNode* mergeLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val < l2->val) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}`}
              walkthrough="We use a dummy node to simplify the logic of starting the new list. We then just pick the smaller element at each step."
              complexity={{
                time: "O(N + M)",
                space: "O(1)",
                why: "We only use a few pointers and don't create new nodes.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting to attach the remaining nodes",
                  fix: "When one list ends, the other might still have nodes. Always attach the remainder.",
                },
              ]}
              tryIt="Can you merge two sorted linked lists using recursion?"
            />

            <QuestionCard
              title="Nth Node from End"
              learn="The 'Gap' technique with two pointers."
              context="Finding a node relative to the end without knowing the total length."
              steps={[
                "Move a 'fast' pointer N steps ahead",
                "Start a 'slow' pointer at the head",
                "Move both until 'fast' reaches the end",
                "The 'slow' pointer is now at the Nth node from the end",
              ]}
              pythonCode={`def nth_from_end(head, n):
    fast = slow = head
    for _ in range(n):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    return slow`}
              cppCode={`ListNode* nthFromEnd(ListNode* head, int n) {
    ListNode *fast = head, *slow = head;
    for (int i = 0; i < n; i++) fast = fast->next;
    while (fast != NULL) {
        fast = fast->next;
        slow = slow->next;
    }
    return slow;
}`}
              walkthrough="By creating a gap of N between the two pointers, when the first one hits the end, the second one is exactly N steps behind it."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "We traverse the list once.",
              }}
              mistakes={[
                {
                  mistake:
                    "Not handling cases where N is larger than the list length",
                  fix: "Add a check to see if 'fast' becomes null during the initial N steps.",
                },
              ]}
              tryIt="How would you delete the Nth node from the end instead of just finding it?"
            />

            <div className="my-16 p-6 bg-orange-500/5 border border-orange-500/10 rounded-xl">
              <h2 className="text-lg font-bold text-orange-400 mb-2">
                Matrix Operations
              </h2>
              <p className="text-sm text-gray-400">
                Working with 2D arrays and nested loops.
              </p>
            </div>

            <QuestionCard
              title="Transpose Matrix"
              learn="Swapping elements across the diagonal."
              context="Flipping a grid over its diagonal. Rows become columns and columns become rows."
              steps={[
                "Iterate through the upper triangle of the matrix (i < j)",
                "Swap matrix[i][j] with matrix[j][i]",
              ]}
              pythonCode={`def transpose(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    return matrix`}
              cppCode={`void transpose(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
}`}
              walkthrough="We only iterate through the upper triangle (j > i) to avoid swapping elements back to their original positions."
              complexity={{
                time: "O(N²)",
                space: "O(1)",
                why: "We visit half of the elements in a 2D grid.",
              }}
              mistakes={[
                {
                  mistake: "Iterating through the whole matrix",
                  fix: "If you swap everything, you'll swap them twice and end up with the original matrix!",
                },
              ]}
              tryIt="Can you transpose a non-square matrix (M x N)?"
            />

            <QuestionCard
              title="Spiral Matrix"
              learn="Boundary management in 2D arrays."
              context="Printing a matrix in a spiral order (right, down, left, up)."
              steps={[
                "Define boundaries: top, bottom, left, right",
                "While boundaries don't cross:",
                "1. Print top row, increment top",
                "2. Print right column, decrement right",
                "3. Print bottom row, decrement bottom",
                "4. Print left column, increment left",
              ]}
              pythonCode={`def spiral_order(matrix):
    res = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    while top <= bottom and left <= right:
        for i in range(left, right + 1): res.append(matrix[top][i])
        top += 1
        for i in range(top, bottom + 1): res.append(matrix[i][right])
        right -= 1
        if top <= bottom:
            for i in range(right, left - 1, -1): res.append(matrix[bottom][i])
            bottom -= 1
        if left <= right:
            for i in range(bottom, top - 1, -1): res.append(matrix[i][left])
            left += 1
    return res`}
              cppCode={`vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> res;
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; i++) res.push_back(matrix[top][i]);
        top++;
        for (int i = top; i <= bottom; i++) res.push_back(matrix[i][right]);
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; i--) res.push_back(matrix[bottom][i]);
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) res.push_back(matrix[i][left]);
            left++;
        }
    }
    return res;
}`}
              walkthrough="The key is to carefully update the boundaries after each row or column is processed to avoid re-printing elements."
              complexity={{
                time: "O(N*M)",
                space: "O(1) (excluding result array)",
                why: "We visit each element exactly once.",
              }}
              mistakes={[
                {
                  mistake: "Forgetting the inner checks (top <= bottom)",
                  fix: "After incrementing top or decrementing right, the boundaries might have crossed. Always check before the next loop.",
                },
              ]}
              tryIt="Can you generate a square matrix of size N filled with elements from 1 to N² in spiral order?"
            />

            <QuestionCard
              title="Matrix Addition"
              learn="Element-wise operations in 2D arrays."
              context="Adding two matrices of the same dimensions."
              steps={[
                "Check if dimensions are equal",
                "Iterate through rows and columns",
                "Add corresponding elements: C[i][j] = A[i][j] + B[i][j]",
              ]}
              pythonCode={`def add_matrices(A, B):
    rows, cols = len(A), len(A[0])
    res = [[0]*cols for _ in range(rows)]
    for i in range(rows):
        for j in range(cols):
            res[i][j] = A[i][j] + B[i][j]
    return res`}
              cppCode={`vector<vector<int>> addMatrices(vector<vector<int>>& A, vector<vector<int>>& B) {
    int rows = A.size(), cols = A[0].size();
    vector<vector<int>> res(rows, vector<int>(cols));
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            res[i][j] = A[i][j] + B[i][j];
        }
    }
    return res;
}`}
              walkthrough="Matrix addition is only possible if both matrices have the same number of rows and columns."
              complexity={{
                time: "O(N*M)",
                space: "O(N*M)",
                why: "We visit each element once and store the result.",
              }}
              mistakes={[
                {
                  mistake: "Trying to add matrices of different sizes",
                  fix: "Always validate dimensions before performing the operation.",
                },
              ]}
              tryIt="Can you implement Matrix Subtraction?"
            />

            <QuestionCard
              title="Delete Node"
              learn="Modifying linked list structure."
              context="Removing a node from a linked list given its value."
              steps={[
                "Handle head deletion separately",
                "Iterate to find the node before the one to be deleted",
                "Update its 'next' pointer to skip the target node",
              ]}
              pythonCode={`def delete_node(head, val):
    if not head: return None
    if head.val == val: return head.next
    curr = head
    while curr.next and curr.next.val != val:
        curr = curr.next
    if curr.next:
        curr.next = curr.next.next
    return head`}
              cppCode={`ListNode* deleteNode(ListNode* head, int val) {
    if (head == NULL) return NULL;
    if (head->val == val) return head->next;
    ListNode* curr = head;
    while (curr->next != NULL && curr->next->val != val) {
        curr = curr->next;
    }
    if (curr->next != NULL) {
        curr->next = curr->next->next;
    }
    return head;
}`}
              walkthrough="To delete a node, you need to change the 'next' pointer of the *previous* node to point to the *next* node of the one you're deleting."
              complexity={{
                time: "O(N)",
                space: "O(1)",
                why: "In the worst case, we traverse the whole list.",
              }}
              mistakes={[
                {
                  mistake: "Not handling the head node deletion",
                  fix: "The head is a special case because there's no 'previous' node to it.",
                },
              ]}
              tryIt="How would you delete a node if you only have a pointer to that node (and not the head)?"
            />

            <div className="mt-16 p-8 bg-orange-600/10 border border-orange-500/20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Advanced Mastery
              </h2>
              <p className="text-gray-400 mb-6">
                Linked lists and Matrices are the gateway to advanced DSA. The
                remaining questions like "Merge Sorted LL" and "Spiral Matrix"
                are common interview favorites.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog/part-5"
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Next: Patterns & Strategy →
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
