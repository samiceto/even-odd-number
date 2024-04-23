function evenOdd(value) {
    if (value % 2 === 0) {
        return 'even';
    }
    else {
        return 'Odd';
    }
}
var value = 9;
var result = evenOdd(value);
console.log("".concat(value, "\"is an \"").concat(result, "\"number\""));
