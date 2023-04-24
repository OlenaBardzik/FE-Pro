console.log(numToPower(3, 2));

function numToPower (x, n) {
    if (n === 0) {
        return 1;
    } else {
        return x * numToPower(x, n - 1);
    }
}