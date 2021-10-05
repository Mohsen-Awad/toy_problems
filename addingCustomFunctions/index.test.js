/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

//  TODO

/**
 * mohsenSort function that sort the array
 *
 * @returns sorted array
 */
Array.prototype.mohsenSort = function () {
  let minValue = ''
  let indexMinValue = ''
  let temp = ''

  for (i = 0; i < this.length; i++) {
    minValue = this[i]
    indexMinValue = i
    for (j = i; j < this.length; j++) {
      if (this[j] < minValue) {
        minValue = this[j]
        indexMinValue = j
      }
    }
    temp = this[indexMinValue]
    this[indexMinValue] = this[i]
    this[i] = temp
  }
  return this
}

/**
 * getFirstElement function that returns the first element in the array
 *
 * @returns the first element in the array
 */
Array.prototype.getFirstElement = function () {
  return this[0]
}

/**
 * getLastElement function that returns the last element in the array
 *
 * @returns the last element in the array
 */
Array.prototype.getLastElement = function () {
  return this[this.length - 1]
}

/**
 * search function that take value and return if this value exists in the array or not
 *
 * @param {number} value the value that we search on it
 * @returns {boolean} return true if the value exists and false if not
 */
Array.prototype.search = function (value) {
  for (i = 0; i < this.length; i++) if (this[i] === value) return true

  return false
}

const arr = [10, 20, 30, 40]
const arr2 = [10, 20, 30, 40, 11, 7]

describe('Tests', () => {
  it('test addingCustomFunctions', () => {
    expect(arr.getFirstElement()).toEqual(10)
    expect(arr.getLastElement()).toEqual(40)
    expect(arr.search(10)).toEqual(true)
    expect(arr.search(11)).toEqual(false)
    expect(arr.mohsenSort()).toEqual([10, 20, 30, 40])
    expect(arr2.mohsenSort()).toEqual([7, 10, 11, 20, 30, 40])
  })
})
