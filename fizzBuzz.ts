// This is from hackerrank.com

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(9)
fizzBuzz(15)
