/*
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.
If n is greater than 0 it should rotate the array to the right.
If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.
Examples:
Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]
var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3] 5 4
rotate(data, 5) // => [1, 2, 3, 4, 5]
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]
The rotation shouldn't be limited by the indices available in the array.
Meaning that if we exceed the indices of the array it keeps rotating.
rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]
*/

/**
 *
 * @param {array} arr array of numbers
 * @param {number} steps number of steps
 * @returns {array} return an array after apply the rotate
 */
const rotate = function (arr, steps) {
  array = [...arr]
  steps = steps % arr.length
  if (steps < 0) {
    for (i = steps; i < 0; i++) array.push(array.shift())

    return array
  } else {
    for (i = 0; i < steps; i++) array.unshift(array.pop())

    return array
  }
}

const data = [1, 2, 3, 4, 5]

describe('test', () => {
  it('Rotate function 1', () => {
    expect(rotate(data, 1)).toEqual([5, 1, 2, 3, 4])
  })

  it('Rotate function 2', () => {
    expect(rotate(data, 2)).toEqual([4, 5, 1, 2, 3])
  })

  it('Rotate function 5', () => {
    expect(rotate(data, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('Rotate function -1', () => {
    expect(rotate(data, -1)).toEqual([2, 3, 4, 5, 1])
  })

  it('Rotate function -2', () => {
    expect(rotate(data, -2)).toEqual([3, 4, 5, 1, 2])
  })

  it('Rotate function -5', () => {
    expect(rotate(data, -5)).toEqual([1, 2, 3, 4, 5])
  })

  it('Rotate function 7', () => {
    expect(rotate(data, 7)).toEqual([4, 5, 1, 2, 3])
  })

  it('Rotate function 11', () => {
    expect(rotate(data, 11)).toEqual([5, 1, 2, 3, 4])
  })

  it('Rotate function 3', () => {
    expect(rotate(data, 3)).toEqual([3, 4, 5, 1, 2])
  })
})
// const rotate = function(array, steps) {
//   return [...array.slice(steps, array.length), ...array.slice(0, steps)];
// };
