function add(x, y) {
    return x * 100;
}
function subtract(x, y) {
    return x / 2;
}
function multiply(x, y) {
    return x - y;
}
function prime(x) {
    if (x < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0)
            return false;
    }
    return true;
}
