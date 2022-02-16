const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode(-1);
  let tail = dummy;

  // both linked-list are not empty, compare and append the smaller value
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // append rest link-list
  tail.next = list1 ? list1 : list2;

  return dummy.next;
};
