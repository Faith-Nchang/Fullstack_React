const Questions = [
  // Arrays
  { 
    content: 'What is an Array?', 
    level: 'easy', 
    answer: 'Data structure', 
    image: 'https://th.bing.com/th/id/OIP.ZvfHu993oWvhySL1C4giAwHaEK?rs=1&pid=ImgDetMain' 
  },
  { 
    content: 'What is a Multi-dimensional Array?', 
    level: 'medium', 
    answer: 'Array of arrays', 
    image: 'https://th.bing.com/th/id/OIP.crgLFHXpyvjkEIImvQSr5wHaEK?rs=1&pid=ImgDetMain' 
  },
  { 
    content: 'Explain the time complexity of accessing an element in an array.', 
    level: 'hard', 
    answer: 'O(1)', 
    image: 'https://th.bing.com/th/id/OIP.7cWIGpHTAKKtY9u_IaRGHQHaEK?rs=1&pid=ImgDetMain' 
  },

  // Strings
  { 
    content: 'What is a String?', 
    level: 'easy', 
    answer: 'Text sequence', 
    image: 'https://www.scientecheasy.com/wp-content/uploads/2023/01/python-strings.png' 
  },
  { 
    content: 'What is the difference between mutable and immutable strings?', 
    level: 'medium', 
    answer: 'Modifiable vs not', 
    image: 'https://miro.medium.com/v2/resize:fit:3340/0*yE5UmhyOrFyoGbwk.png' 
  },
  { 
    content: 'How do you concatenate two strings in JavaScript?', 
    level: 'hard', 
    answer: 'Using + or concat()', 
    image: 'https://th.bing.com/th/id/OIP.ZbQT2AQDYhF_KIVkkPHGUQHaDZ?rs=1&pid=ImgDetMain' 
  },

  // Linked Lists
  { 
    content: 'What is a Linked List?', 
    level: 'easy', 
    answer: 'Node sequence', 
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Linked-List-Soni/representation-of-linked-list.png' 
  },
  { 
    content: 'What is the difference between a Singly and Doubly Linked List?', 
    level: 'medium', 
    answer: 'One vs two references', 
    image: 'https://study.com/cimages/multimages/16/doubly_vs_singly_linked_lists.png' 
  },
  { 
    content: 'How do you reverse a Linked List?', 
    level: 'hard', 
    answer: 'Reverse pointers', 
    image: 'https://storage.googleapis.com/algodailyrandomassets/tutorials-optimized/reverse-a-linked-list-image-cover.png' 
  },

  // Stacks
  { 
    content: 'What is a Stack?', 
    level: 'easy', 
    answer: 'LIFO', 
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png' 
  },
  { 
    content: 'How do you implement a Stack using an Array?', 
    level: 'medium', 
    answer: 'Array push, pop', 
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Soni-Stack-Article/stack-implementation-using-array.png' 
  },
  { 
    content: 'What are some applications of Stacks?', 
    level: 'hard', 
    answer: 'Expression evaluation, backtracking', 
    image: 'https://image1.slideserve.com/2961713/applications-of-stack-l.jpg' 
  },

  // Queues
  { 
    content: 'What is a Queue?', 
    level: 'easy', 
    answer: 'FIFO', 
    image: 'https://pyshark.com/wp-content/uploads/2022/04/Remove-elements-from-queue-in-Python-using-dequeue.png' 
  },
  { 
    content: 'What is a Circular Queue?', 
    level: 'medium', 
    answer: 'Circular structure', 
    image: 'https://static.javatpoint.com/ds/images/circular-queue.png' 
  },
  { 
    content: 'What is a Priority Queue?', 
    level: 'hard', 
    answer: 'Element priority', 
    image: 'https://d33wubrfki0l68.cloudfront.net/0927054f3255230e75b6ecd1b5bba9ceb3e8d3e9/fee48/static/dc8fe7b4bba83ff881497f51b25951a2/51aac/priority-queue-data-structure.jpg' 
  },

  // Hash Tables
  { 
    content: 'What is a Hash Table?', 
    level: 'easy', 
    answer: 'Key-value store', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
  },
  { 
    content: 'What are hash functions?', 
    level: 'medium', 
    answer: 'Key-to-index mapping', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
  },
  { 
    content: 'Explain collision resolution techniques in hash tables.', 
    level: 'hard', 
    answer: 'Chaining, open addressing', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/630px-Hash_table_3_1_1_0_1_0_0_SP.svg.png' 
  },

  // Trees
  { 
    content: 'What is a Binary Tree?', 
    level: 'easy', 
    answer: 'Two child nodes', 
    image: 'chttps://miro.medium.com/v2/resize:fit:16000/1*CMGFtehu01ZEBgzHG71sMg.png' 
  },
  { 
    content: 'What is a Binary Search Tree (BST)?', 
    level: 'medium', 
    answer: 'Ordered binary tree', 
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/BST.png' 
  },
  { 
    content: 'What are AVL trees?', 
    level: 'hard', 
    answer: 'Self-balancing', 
    image: 'https://simpletechtalks.com/wp-content/uploads/2020/11/AVL_Tree_example.png' 
  },

  // Graphs
  { 
    content: 'What is a Graph?', 
    level: 'easy', 
    answer: 'Node, edges', 
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Graph%20Data%20Structure%20-%20Soni/unweighted-graph-representation-in-data-structure.png' 
  },
  { 
    content: 'Explain the difference between directed and undirected graphs.', 
    level: 'medium', 
    answer: 'Directed vs undirected', 
    image: 'https://res.cloudinary.com/dc0mjpwf8/image/upload/v1590066649/ArticleImages/Graph/Directed_Graph_tv1xlj.png' 
  },
  { 
    content: 'What are weighted graphs?', 
    level: 'hard', 
    answer: 'Edge weight', 
    image: 'https://www.slideteam.net/media/catalog/product/cache/960x720/g/r/graph_theory_weighted_graph_Slide01.jpg' 
  },

  // Searching Algorithms
  { 
    content: 'What is Linear Search?', 
    level: 'easy', 
    answer: 'Sequential search', 
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Linear-Search.png' 
  },
  { 
    content: 'What is Binary Search?', 
    level: 'medium', 
    answer: 'Divide and conquer', 
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230711134722/Binary-Search.png' 
  },
  { 
    content: 'What is the time complexity of Binary Search?', 
    level: 'hard', 
    answer: 'O(log n)', 
    image: 'https://www.studytonight.com/data-structures/images/binary-search-tree-4.png' 
  },

  // Sorting Algorithms
  { 
    content: 'What is Bubble Sort?', 
    level: 'easy', 
    answer: 'Simple sort', 
    image: 'https://i1.faceprep.in/Companies-1/bubble-sort-in-C.jpg' 
  },
  { 
    content: 'What is Quick Sort?', 
    level: 'medium', 
    answer: 'Divide and conquer', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif' 
  },
  { 
    content: 'What is the time complexity of Merge Sort?', 
    level: 'hard', 
    answer: 'O(n log n)', 
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220310164335/mergeSort-GFG.png' 
  },
];


  export default Questions;