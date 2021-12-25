// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let nums = numbers.split(' ');
    let sortedNums = nums.sort(function(a, b){
        return Number(a) - Number(b)
    });
    console.log(sortedNums)
    return sortedNums[sortedNums.length-1] + " " + sortedNums[0];
}

console.log(highAndLow('1 2 3 33 7 5'));