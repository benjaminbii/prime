function isPrime(num){
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    const limit = Math.floor(Math.sqrt(num));
    for (let i = 5; i <= limit; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

console.log(isPrime(2));  // true
console.log(isPrime(8));  // false
console.log(isPrime(18));  // false
console.log(isPrime(17));  // true
console.log(isPrime(25));  // false

module.exports = { isPrime };