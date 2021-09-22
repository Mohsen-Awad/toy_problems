/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution?
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */

/**
 * example usage:
 * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
 * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
 */
const arrOfNum = [1, 2, 2, 4, 5, 6, 6]

const getUniqueValues = (arrOfNum) => {
  // TO DO

  const newSet = new Set()
  for (i in arrOfNum) newSet.add(arrOfNum[i])

  return [...newSet]

  // const newObj = {}
  // for (i in arrOfNum) newObj[arrOfNum[i]] = arrOfNum[i]

  // return Object.values(newObj)
}
console.log(getUniqueValues(arrOfNum)) // [1, 2, 4, 5, 6]

describe('Tests', () => {
  it('test getUniqueValues', () => {
    expect(getUniqueValues(arrOfNum)).toEqual([1, 2, 4, 5, 6])
    expect(getUniqueValues([2, 2, 2, 2, 2, 2])).toEqual([2])
    expect(getUniqueValues([1, 2, 3, 4, 1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })
})
