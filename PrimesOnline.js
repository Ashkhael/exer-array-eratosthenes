let findPrimes = (target) => {
  
        let record = []
      let primes = []
      let max = Math.sqrt(target)

      // save a truthy value to record for each number between 2 & target
      for(let number = 0; number < target; number++){
          record.push(1)
      }

      // sieve time!
      for (let prime = 2; prime <= max; prime ++){
          if(record[prime]){
            console.log(`for prime: ${prime}`)
              for(let multiple = prime  prime; multiple < target; multiple += prime){
                console.log(`currently marking the multiple ${multiple} to false`)
                  record[multiple] = 0
              }
          }
      }
  
      // save sieved primes to primes array
      
      // return the array of primes
  }

  // if there can be no primes less than target, return error & prompt for correct input
  return "Please enter an integer greater than two"

