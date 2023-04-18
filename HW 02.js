// Task 1
const isPrime = num => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log(isPrime(23)); 
console.log(isPrime(24)); 



// Task 2
function getFactors(num) {
    const factors = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;
  }
console.log(getFactors(24)); 
 