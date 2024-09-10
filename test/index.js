import { expect } from 'chai';
import { mergeLinkedLists, ListNode } from '../index.js';  // Import both ListNode and mergeLinkedLists

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};

// Helper function to convert a linked list to an array
const linkedListToArray = (list) => {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
};

describe('mergeLinkedLists', () => {
    it('should merge two sorted linked lists', () => {
        const list1 = createLinkedList([1, 4, 5]);
        const list2 = createLinkedList([1, 3, 4]);
        const mergedList = mergeLinkedLists([list1, list2]);
        expect(linkedListToArray(mergedList)).to.eql([1, 1, 3, 4, 4, 5]);
    });

    it('should handle an empty array of linked lists', () => {
        const mergedList = mergeLinkedLists([]);
        expect(mergedList).to.be.null;
    });

    it('should handle multiple sorted linked lists', () => {
        const list1 = createLinkedList([1, 4, 5]);
        const list2 = createLinkedList([1, 3, 4]);
        const list3 = createLinkedList([2, 6]);
        const mergedList = mergeLinkedLists([list1, list2, list3]);
        expect(linkedListToArray(mergedList)).to.eql([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it('should handle linked lists of different lengths', () => {
        const list1 = createLinkedList([1]);
        const list2 = createLinkedList([1, 3, 4]);
        const mergedList = mergeLinkedLists([list1, list2]);
        expect(linkedListToArray(mergedList)).to.eql([1, 1, 3, 4]);
    });

    it('should return the single list if only one linked list is provided', () => {
        const list1 = createLinkedList([1, 2, 3]);
        const mergedList = mergeLinkedLists([list1]);
        expect(linkedListToArray(mergedList)).to.eql([1, 2, 3]);
    });
});
