// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    return array.map((num) => {
        return num >= 0 ? -Math.abs(num) : Math.abs(num);
    })
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));