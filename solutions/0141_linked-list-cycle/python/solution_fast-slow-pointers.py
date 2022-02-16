class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
      　# empty linked-list or linked-list with only one node
        if not head or not head.next:
            return False

        # initialize slow and fast pointers
        slow = head
        fast = head

        # move fast pointer two nodes at a time
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            # if fast pointer ever meets the slow pointer, there is a cycle
            if slow == fast:
                return True

        return False