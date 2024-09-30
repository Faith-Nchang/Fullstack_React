const Questions = [
    // Arrays
    { 
      content: 'What is an Array?', 
      level: 'easy', 
      answer: 'An array is a data structure that stores a collection of elements, typically of the same type, in a contiguous block of memory.', 
      image: 'https://th.bing.com/th/id/OIP.ZvfHu993oWvhySL1C4giAwHaEK?rs=1&pid=ImgDetMain' 
    },
    { 
      content: 'What is a Multi-dimensional Array?', 
      level: 'medium', 
      answer: 'A multi-dimensional array is an array of arrays, allowing for the representation of more complex data structures like matrices.', 
      image: 'https://th.bing.com/th/id/OIP.crgLFHXpyvjkEIImvQSr5wHaEK?rs=1&pid=ImgDetMain' 
    },
    { 
      content: 'Explain the time complexity of accessing an element in an array.', 
      level: 'hard', 
      answer: 'Accessing an element in an array by index has a time complexity of O(1), as it directly calculates the memory address.', 
      image: 'https://th.bing.com/th/id/OIP.7cWIGpHTAKKtY9u_IaRGHQHaEK?rs=1&pid=ImgDetMain' 
    },
  
    // Strings
    { 
      content: 'What is a String?', 
      level: 'easy', 
      answer: 'A string is a sequence of characters used to represent text data.', 
      image: 'https://www.scientecheasy.com/wp-content/uploads/2023/01/python-strings.png' 
    },
    { 
      content: 'What is the difference between mutable and immutable strings?', 
      level: 'medium', 
      answer: 'Mutable strings can be changed after creation, while immutable strings cannot be modified and create a new instance instead.', 
      image: 'https://miro.medium.com/v2/resize:fit:3340/0*yE5UmhyOrFyoGbwk.png' 
    },
    { 
      content: 'How do you concatenate two strings in JavaScript?', 
      level: 'hard', 
      answer: 'You can concatenate two strings in JavaScript using the + operator or the concat() method.', 
      image: 'https://th.bing.com/th/id/OIP.ZbQT2AQDYhF_KIVkkPHGUQHaDZ?rs=1&pid=ImgDetMain' 
    },
  
    // Linked Lists
    { 
      content: 'What is a Linked List?', 
      level: 'easy', 
      answer: 'A linked list is a linear data structure where each element (node) contains data and a reference to the next node in the sequence.', 
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Linked-List-Soni/representation-of-linked-list.png' 
    },
    { 
      content: 'What is the difference between a Singly and Doubly Linked List?', 
      level: 'medium', 
      answer: 'A singly linked list has nodes containing a single reference to the next node, while a doubly linked list has nodes with references to both the next and previous nodes.', 
      image: 'https://study.com/cimages/multimages/16/doubly_vs_singly_linked_lists.png' 
    },
    { 
      content: 'How do you reverse a Linked List?', 
      level: 'hard', 
      answer: 'To reverse a linked list, iterate through the list and reverse the direction of the pointers, setting the previous node as the next node for each current node.', 
      image: 'https://storage.googleapis.com/algodailyrandomassets/tutorials-optimized/reverse-a-linked-list-image-cover.png' 
    },
  
    // Stacks
    { 
      content: 'What is a Stack?', 
      level: 'easy', 
      answer: 'A stack is a linear data structure that follows the Last In First Out (LIFO) principle, where the last element added is the first one to be removed.', 
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png' 
    },
    { 
      content: 'How do you implement a Stack using an Array?', 
      level: 'medium', 
      answer: 'A stack can be implemented using an array by keeping track of the top index and using array methods to push and pop elements.', 
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Soni-Stack-Article/stack-implementation-using-array.png' 
    },
    { 
      content: 'What are some applications of Stacks?', 
      level: 'hard', 
      answer: 'Stacks are used in expression evaluation, backtracking algorithms, and to maintain the history of function calls.', 
      image: 'https://image1.slideserve.com/2961713/applications-of-stack-l.jpg' 
    },
  
    // Queues
    { 
      content: 'What is a Queue?', 
      level: 'easy', 
      answer: 'A queue is a linear data structure that follows the First In First Out (FIFO) principle, where the first element added is the first one to be removed.', 
      image: 'https://pyshark.com/wp-content/uploads/2022/04/Remove-elements-from-queue-in-Python-using-dequeue.png' 
    },
    { 
      content: 'What is a Circular Queue?', 
      level: 'medium', 
      answer: 'A circular queue is a linear data structure that connects the last position back to the first position, making efficient use of space.', 
      image: 'https://static.javatpoint.com/ds/images/circular-queue.png' 
    },
    { 
      content: 'What is a Priority Queue?', 
      level: 'hard', 
      answer: 'A priority queue is an abstract data type that supports retrieval of the highest (or lowest) priority element first, rather than FIFO order.', 
      image: 'https://d33wubrfki0l68.cloudfront.net/0927054f3255230e75b6ecd1b5bba9ceb3e8d3e9/fee48/static/dc8fe7b4bba83ff881497f51b25951a2/51aac/priority-queue-data-structure.jpg' 
    },
  
    // Hash Tables
    { 
      content: 'What is a Hash Table?', 
      level: 'easy', 
      answer: 'A hash table is a data structure that implements an associative array abstract data type, storing key-value pairs for efficient data retrieval.', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
    },
    { 
      content: 'What are hash functions?', 
      level: 'medium', 
      answer: 'A hash function is a function that converts input (or keys) into a fixed-size string of bytes, typically used in hash tables to access data.', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
    },
    { 
      content: 'Explain collision resolution techniques in hash tables.', 
      level: 'hard', 
      answer: 'Collision resolution techniques include chaining (linking elements in a list) and open addressing (finding next available slot in the array).', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
    },
  
    // Trees
    { 
      content: 'What is a Binary Tree?', 
      level: 'easy', 
      answer: 'A binary tree is a tree data structure where each node has at most two children referred to as the left child and the right child.', 
      image: 'chttps://miro.medium.com/v2/resize:fit:16000/1*CMGFtehu01ZEBgzHG71sMg.png' 
    },
    { 
      content: 'What is a Binary Search Tree (BST)?', 
      level: 'medium', 
      answer: 'A binary search tree is a binary tree where each node has a value greater than all nodes in its left subtree and less than all nodes in its right subtree.', 
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/BST.png' 
    },
    { 
      content: 'What are AVL trees?', 
      level: 'hard', 
      answer: 'AVL trees are self-balancing binary search trees where the difference in heights between the left and right subtrees is at most one.', 
      image: 'https://simpletechtalks.com/wp-content/uploads/2020/11/AVL_Tree_example.png' 
    },
  
    // Graphs
    { 
      content: 'What is a Graph?', 
      level: 'easy', 
      answer: 'A graph is a collection of nodes (vertices) and edges connecting pairs of nodes, representing relationships between entities.', 
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/unweighted-graph-representation-in-data-structure.png' 
    },
    { 
      content: 'Explain the difference between directed and undirected graphs.', 
      level: 'medium', 
      answer: 'In a directed graph, edges have a direction, indicating a one-way relationship, while in an undirected graph, edges represent two-way relationships.', 
      image: 'https://res.cloudinary.com/dc0mjpwf8/image/upload/v1590066649/ArticleImages/Graph/Directed_Graph_tv1xlj.png' 
    },
    { 
      content: 'What are weighted graphs?', 
      level: 'hard', 
      answer: 'Weighted graphs are graphs where each edge has an associated weight or cost, often used to represent distances in shortest path algorithms.', 
      image: 'https://www.slideteam.net/media/catalog/product/cache/960x720/g/r/graph_theory_weighted_graph_Slide01.jpg' 
    },
  
    // Searching Algorithms
    { 
      content: 'What is Linear Search?', 
      level: 'easy', 
      answer: 'Linear search is a searching algorithm that checks each element in a list sequentially until the desired element is found.', 
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png' 
    },
    { 
      content: 'What is Binary Search?', 
      level: 'medium', 
      answer: 'Binary search is a searching algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.', 
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230711134722/Binary-Search.png' 
    },
    { 
      content: 'What is the time complexity of Binary Search?', 
      level: 'hard', 
      answer: 'The time complexity of binary search is O(log n), as it divides the array into halves with each iteration.', 
      image: 'https://www.studytonight.com/data-structures/images/binary-search-tree-4.png' 
    },
  
    // Sorting Algorithms
    { 
      content: 'What is Bubble Sort?', 
      level: 'easy', 
      answer: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.', 
      image: 'https://i1.faceprep.in/Companies-1/bubble-sort-in-c-implementation.png' 
    },
    
  ];
  

  export default Questions;