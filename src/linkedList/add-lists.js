/* 
add lists
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. 
The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.

@example:
Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9

*/
