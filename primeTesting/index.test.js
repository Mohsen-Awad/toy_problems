/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

/**
 *
 * @param {number} n any number
 * @returns {boolean} returns true if the number prime and false if not
 */
const primeTester = function (n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

/**
 *
 * @param {number} n any number
 * @returns {array} returns that contains all prime numbers between 0 and n
 */
const allPrimeNumbers = function (n) {
  const arr = []
  for (let i = 2; i < n; i++) {
    if (primeTester(i)) arr.push(i)
  }
  return arr
}
/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

describe('Tests', () => {
  it('primeTester', () => {
    expect(primeTester(7)).toEqual(true)
    expect(primeTester(11)).toEqual(true)
    expect(primeTester(20)).toEqual(false)
    expect(primeTester(15)).toEqual(false)
  })

  it('allPrimeNumbers', () => {
    expect(allPrimeNumbers(7)).toEqual([2, 3, 5])
    expect(allPrimeNumbers(10)).toEqual([2, 3, 5, 7])
    expect(allPrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
  })
})
