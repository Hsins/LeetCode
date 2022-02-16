class Solution {
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(-1);
    ListNode tail = dummy;

    // both linked-list are not empty, compare and append the smaller value
    while (list1 != null && list2 != null) {
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
    tail.next = list1 == null ? list2 : list1;

    return dummy.next;
  }
};
