// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let y = x.split(' ');
    return y.join('');

}

console.log(noSpace('I love chicken pot pie'));;