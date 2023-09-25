var reverse = function reverseNumber(num) {
    // Base case: If num is less than or equal to 0, stop recursion.
    if (num <= 0) {
        return;
    }
    console.log("->", num);
    // Recursive call with a smaller number.
    reverseNumber(num - 1);
};
// Call the function with an initial value.
reverse(5);
