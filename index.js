/**
 * Represents a node in a linked list.
 * @class ListNode
 * @param {number} val - The value of the node.
 * @param {ListNode} next - The reference to the next node in the list.
 */
// Definition for singly-linked list node
export class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

/**
* Merges an array of linked lists into a single sorted linked list.
*
* @param {Array} linkedLists - The array of linked lists to merge.
* @returns {ListNode} - The merged linked list.
*/
export const mergeLinkedLists = (linkedLists) => {
  if (linkedLists.length === 0) return null;

  const mergeSortedLists = (listA, listB) =>
      !listA ? listB :
      !listB ? listA :
      listA.val < listB.val ?
          { ...listA, next: mergeSortedLists(listA.next, listB) } :
          { ...listB, next: mergeSortedLists(listA, listB.next) };

  const mergeRecursive = (linkedLists, start, end) => {
      if (start === end) return linkedLists[start] ?? null;
      const mid = Math.floor((start + end) / 2);
      const left = mergeRecursive(linkedLists, start, mid);
      const right = mergeRecursive(linkedLists, mid + 1, end);
      return mergeSortedLists(left, right);
  };

  return mergeRecursive(linkedLists, 0, linkedLists.length - 1);
};
