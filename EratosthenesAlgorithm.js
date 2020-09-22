function countPrimeNumbers(from, to) {
  // Eratosthenes algorithm to find all primes between from and to
  var allNumbers = [];
  var upperLimit = Math.sqrt(to);
  var primeNumbers = [];

  // Make an array from all numbers up to specified limit
  for (let i = 0; i <= to; i++) {
    allNumbers.push(true);
  }

  // Remove multiples of primes starting from 2
  for (let i = 2; i <= upperLimit; i++) {
    if (allNumbers[i]) {
      for (let j = i * i; j < to; j += i) {
        allNumbers[j] = false;
      }
    }
  }

  // Puts all primes into new primeNumbers array
  for (let i = from; i < to; i++) {
    if (allNumbers[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

console.log(countPrimeNumbers(10, 200));
