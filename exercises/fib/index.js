// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    //Why create a for loop if you don't have to?
    if(n < 2){
        return n;
    }
    const fibArrayBuilder = [0, 1];
    for (let index = 2; index <= n; index++){
        fibArrayBuilder.push(fibArrayBuilder[index - 1] + fibArrayBuilder[index - 2]);
    }
    return fibArrayBuilder[n];
}

module.exports = fib;
