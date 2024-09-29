export const Questions = [
    // Arrays
    { 
      content: 'What is an Array?', 
      level: 'easy', 
      answer: 'An array is a data structure that stores a collection of elements, typically of the same type, in a contiguous block of memory.', 
      image: 'https://miro.medium.com/v2/resize:fit:1200/format:webp/1*P3LgLR8VQiTi9ZOR9M0n7A.png' 
    },
    { 
      content: 'What is a Multi-dimensional Array?', 
      level: 'medium', 
      answer: 'A multi-dimensional array is an array of arrays, allowing for the representation of more complex data structures like matrices.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/multi-d-array.jpg' 
    },
    { 
      content: 'Explain the time complexity of accessing an element in an array.', 
      level: 'hard', 
      answer: 'Accessing an element in an array by index has a time complexity of O(1), as it directly calculates the memory address.', 
      image: 'https://miro.medium.com/v2/resize:fit:1200/format:webp/1*-9SnSDW3dSnE7SY75Pi1dQ.png' 
    },
  
    // Strings
    { 
      content: 'What is a String?', 
      level: 'easy', 
      answer: 'A string is a sequence of characters used to represent text data.', 
      image: 'https://www.javatpoint.com/images/string-in-java.png' 
    },
    { 
      content: 'What is the difference between mutable and immutable strings?', 
      level: 'medium', 
      answer: 'Mutable strings can be changed after creation, while immutable strings cannot be modified and create a new instance instead.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/immutable-1.png' 
    },
    { 
      content: 'How do you concatenate two strings in JavaScript?', 
      level: 'hard', 
      answer: 'You can concatenate two strings in JavaScript using the + operator or the concat() method.', 
      image: 'https://miro.medium.com/v2/resize:fit:1000/format:webp/1*5Tyh_sCWAGW_x08HQFlqGA.png' 
    },
  
    // Linked Lists
    { 
      content: 'What is a Linked List?', 
      level: 'easy', 
      answer: 'A linked list is a linear data structure where each element (node) contains data and a reference to the next node in the sequence.', 
      image: 'https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list.jpg' 
    },
    { 
      content: 'What is the difference between a Singly and Doubly Linked List?', 
      level: 'medium', 
      answer: 'A singly linked list has nodes containing a single reference to the next node, while a doubly linked list has nodes with references to both the next and previous nodes.', 
      image: 'https://www.tutorialspoint.com/data_structures_algorithms/images/doubly_linked_list.jpg' 
    },
    { 
      content: 'How do you reverse a Linked List?', 
      level: 'hard', 
      answer: 'To reverse a linked list, iterate through the list and reverse the direction of the pointers, setting the previous node as the next node for each current node.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/reverse.png' 
    },
  
    // Stacks
    { 
      content: 'What is a Stack?', 
      level: 'easy', 
      answer: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle, where the last element added is the first one to be removed.', 
      image: 'https://www.javatpoint.com/images/stack.png' 
    },
    { 
      content: 'How do you implement a Stack using an Array?', 
      level: 'medium', 
      answer: 'A stack can be implemented using an array by keeping track of the top index and using array methods to push and pop elements.', 
      image: 'https://www.tutorialspoint.com/data_structures_algorithms/images/stack_array.jpg' 
    },
    { 
      content: 'What are some applications of Stacks?', 
      level: 'hard', 
      answer: 'Stacks are used in expression evaluation, backtracking algorithms, and to maintain the history of function calls.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/stackapplications.png' 
    },
  
    // Queues
    { 
      content: 'What is a Queue?', 
      level: 'easy', 
      answer: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle, where the first element added is the first one to be removed.', 
      image: 'https://www.javatpoint.com/images/queue.png' 
    },
    { 
      content: 'What is a Circular Queue?', 
      level: 'medium', 
      answer: 'A circular queue is a linear data structure that connects the last position back to the first position, making efficient use of space.', 
      image: 'https://www.tutorialspoint.com/data_structures_algorithms/images/circular_queue.jpg' 
    },
    { 
      content: 'What is a Priority Queue?', 
      level: 'hard', 
      answer: 'A priority queue is an abstract data type that supports retrieval of the highest (or lowest) priority element first, rather than FIFO order.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/priority-queue.png' 
    },
  
    // Hash Tables
    { 
      content: 'What is a Hash Table?', 
      level: 'easy', 
      answer: 'A hash table is a data structure that implements an associative array abstract data type, storing key-value pairs for efficient data retrieval.', 
      image: 'https://www.javatpoint.com/images/hash-table.png' 
    },
    { 
      content: 'What are hash functions?', 
      level: 'medium', 
      answer: 'A hash function is a function that converts input (or keys) into a fixed-size string of bytes, typically used in hash tables to access data.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/hf.png' 
    },
    { 
      content: 'Explain collision resolution techniques in hash tables.', 
      level: 'hard', 
      answer: 'Collision resolution techniques include chaining (linking elements in a list) and open addressing (finding next available slot in the array).', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/hash_collapse.png' 
    },
  
    // Trees
    { 
      content: 'What is a Binary Tree?', 
      level: 'easy', 
      answer: 'A binary tree is a tree data structure where each node has at most two children referred to as the left child and the right child.', 
      image: 'https://www.javatpoint.com/images/binary-tree.png' 
    },
    { 
      content: 'What is a Binary Search Tree (BST)?', 
      level: 'medium', 
      answer: 'A binary search tree is a binary tree where each node has a value greater than all nodes in its left subtree and less than all nodes in its right subtree.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/bst.png' 
    },
    { 
      content: 'What are AVL trees?', 
      level: 'hard', 
      answer: 'AVL trees are self-balancing binary search trees where the difference in heights between the left and right subtrees is at most one.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/avl_tree.png' 
    },
  
    // Graphs
    { 
      content: 'What is a Graph?', 
      level: 'easy', 
      answer: 'A graph is a collection of nodes (vertices) and edges connecting pairs of nodes, representing relationships between entities.', 
      image: 'https://www.javatpoint.com/images/graph.png' 
    },
    { 
      content: 'Explain the difference between directed and undirected graphs.', 
      level: 'medium', 
      answer: 'In a directed graph, edges have a direction, indicating a one-way relationship, while in an undirected graph, edges represent two-way relationships.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/undirected_directed_graph.png' 
    },
    { 
      content: 'What are weighted graphs?', 
      level: 'hard', 
      answer: 'Weighted graphs are graphs where each edge has an associated weight or cost, often used to represent distances in shortest path algorithms.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/weighted_graph.png' 
    },
  
    // Searching Algorithms
    { 
      content: 'What is Linear Search?', 
      level: 'easy', 
      answer: 'Linear search is a searching algorithm that checks each element in a list sequentially until the desired element is found.', 
      image: 'https://www.javatpoint.com/images/linear-search.png' 
    },
    { 
      content: 'What is Binary Search?', 
      level: 'medium', 
      answer: 'Binary search is a searching algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/binary-search.png' 
    },
    { 
      content: 'What is the time complexity of Binary Search?', 
      level: 'hard', 
      answer: 'The time complexity of binary search is O(log n), as it divides the array into halves with each iteration.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/binary-search-time-complexity.png' 
    },
  
    // Sorting Algorithms
    { 
      content: 'What is Bubble Sort?', 
      level: 'easy', 
      answer: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.', 
      image: 'https://www.javatpoint.com/images/bubble-sort.png' 
    },
    { 
      content: 'What is Merge Sort?', 
      level: 'medium', 
      answer: 'Merge sort is a divide-and-conquer algorithm that splits the array into halves, sorts them recursively, and merges the sorted halves back together.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/merge-sort.png' 
    },
    { 
      content: 'What is Quick Sort?', 
      level: 'hard', 
      answer: 'Quick sort is a sorting algorithm that uses a divide-and-conquer strategy to select a pivot element, partition the array, and sort recursively.', 
      image: 'https://www.geeksforgeeks.org/wp-content/uploads/quick-sort.png' 
    }
  ];
  