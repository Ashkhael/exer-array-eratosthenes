function countPrimeNumbers(from, to) {
  // Eratosthenes algorithm to find all primes between from and to
  var allNumbers = [];
  var upperLimit = Math.sqrt(to);
  var primeNumbers = [];

  for (let i = 0; i <= to; i++) {
    allNumbers.push(true);
  }

  for (let n = 2; n <= upperLimit; n++) {
    if (allNumbers[n]) {
      for (let j = n * n; j < to; j += n) {
        console.log(`currently marking the multiple ${j} to false`);
        allNumbers[j] = false;
      }
    }
  }

  for (let i = from; i < to; i++) {
    if (allNumbers[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

console.log(countPrimeNumbers(20, 100));
