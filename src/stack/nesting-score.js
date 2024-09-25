/* 
nesting score
-------------
Write a function, nestingScore, that takes in a string of brackets as an argument. 
The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.

@test-cases:
------------
nestingScore("[]"); // -> 1
nestingScore("[][][]"); // -> 3
nestingScore("[[][]][]"); // -> 5
nestingScore(""); // -> 0

*/
