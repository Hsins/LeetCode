const hasCycle = (head) => {
  // empty linked-list or linked-list with only one node
  if (!head || !head.next) {
    return false;
  }

  // initialize slow and fast pointers
  let slow = head;
  let fast = head;

  // move fast pointer two nodes at a time
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    // if fast pointer ever meets the slow pointer, there is a cycle
    if (slow === fast) {
      return true;
    }
  }

  return false;
};
