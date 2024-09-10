
# merge-linked-lists

This package merges multiple sorted linked lists into a single sorted linked list using a divide and conquer algorithm. It simplifies the process of managing multiple linked lists and merging them efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `merge-linked-lists` package provides a utility to merge multiple sorted linked lists into a single sorted linked list. It uses a divide and conquer approach, making it efficient for managing large sets of lists. The package can be integrated into Node.js projects that require handling of linked lists in a sorted manner.

## Installation

You can install the package via npm:

```bash
npm install merge-linked-lists
```

## Usage

To use the `merge-linked-lists` package in your project, follow the example below:

```javascript
import { mergeLinkedLists, ListNode } from 'merge-linked-lists';

// Create linked lists manually
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

// Merge the lists
const mergedList = mergeLinkedLists([list1, list2, list3]);

// Output the merged linked list
console.log(mergedList);
```

## Development

You can contribute to the development of the `merge-linked-lists` package by cloning the repository and working on new features or bug fixes.

### Scripts

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Run the project in development mode:**
  ```bash
  npm run dev
  ```

## Testing

To run the test cases, use:

```bash
npm test
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
