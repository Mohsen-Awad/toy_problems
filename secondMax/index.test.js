/*
You have to create a function
that takes an array of integer number and returns the
second max in the array:

Note : using sort native is not allowed

Exanmples:
secondMax([1,5, 2])== 2
secondMax([-1, -5, 2])== -1
*/

/**
 *
 * @param {array} array array of numbers
 * @returns {number} return the second max number in array
 */
const secondMax = function (array) {
  // TODO
  array = Array.from(new Set(array))
  max = array[0]
  max2 = Number.NEGATIVE_INFINITY

  if (array.length === 1) return 'No second max'

  for (i = 1; i < array.length; i++)
    if (array[i] > max) {
      max2 = max
      max = array[i]
    } else if (array[i] > max2) {
      max2 = array[i]
    }

  return max2
}

describe('Tests', () => {
  it('secondMax', () => {
    expect(secondMax([1, 5, 2])).toEqual(2)
    expect(secondMax([-1, -5, 2])).toEqual(-1)
    expect(secondMax([40, -30, 25, 20, 10])).toEqual(25)
    expect(secondMax([10, 9, 8, 7, 6])).toEqual(9)
    expect(secondMax([1, 2, 3, 4, 5])).toEqual(4)
    expect(secondMax([7, 7, 7, 7])).toEqual('No second max')
    expect(secondMax([1, 2, 0, 5, 5, 5])).toEqual(2)
  })
})
