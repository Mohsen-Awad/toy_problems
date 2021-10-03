/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  // TODO
  let z = {}
  for (i in str1) {
    if (str2.includes(str1[i])) z[str1[i]] = str1[i]
  }
  return Object.keys(z).join('')
}

describe('Tests', () => {
  it('test commonCharacters', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toEqual('aeiou')
    expect(commonCharacters('abc', 'xyz')).toEqual('')
    expect(commonCharacters('abc', 'abcabc')).toEqual('abc')
    expect(commonCharacters('cba', 'abc')).toEqual('cba')
  })
})
