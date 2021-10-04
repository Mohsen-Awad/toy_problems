/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  // TODO
  let binaryNum = ''
  let count = 0
  while (num >= 1) {
    if (num % 2 === 0) binaryNum = 0 + binaryNum
    else {
      binaryNum = 1 + binaryNum
      count++
    }

    num = Math.floor(num / 2)
  }
  return count
}

describe('Tests', () => {
  it('bitCounting', () => {
    expect(bitCounting(1234)).toEqual(5)
    expect(bitCounting(15)).toEqual(4)
    expect(bitCounting(8)).toEqual(1)
  })
})
