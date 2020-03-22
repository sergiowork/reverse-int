module.exports = function reverse (n) {
    let str = String(n);
    let arr = str.split('');
    let reversArray = [];

    for(let i = str.length-1; i >= 0; i--) {
        let aaa = arr[i];
        reversArray.push(arr[i]);
    }

    return parseInt(reversArray.join(''));
}
