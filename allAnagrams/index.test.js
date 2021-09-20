/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

const allAnagrams = function (str) {
  const strLength = str.length
  let arr = {}
  while (Object.keys(arr).length < Math.pow(strLength, strLength)) {
    let result = ''
    for (let i = 0; i < strLength; i++) {
      result += str.charAt(Math.floor(Math.random() * strLength))

    }
    arr[result] = result
  }
  return arr
}

let anagrams = allAnagrams('abc')
console.log(anagrams) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
