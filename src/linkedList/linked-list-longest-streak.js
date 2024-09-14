/* 
longest streak
Write a function, longestStreak, that takes in the head of a linked list as an argument. 
The function should return the length of the longest consecutive streak of the same value within the list.

@example:
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

=> 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3

*/

const longestStreak = (head) => {
  let maxStreak = 0
  let currentStreak = 0
  let currentNode = head
  let prevValue = null

  while (currentNode !== null) {
    if (currentNode.value === prevValue) {
      currentStreak += 1
    } else {
      currentStreak = 1
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak
    }

    prevValue = currentNode.value
    currentNode = currentNode.next
  }

  return maxStreak
}
