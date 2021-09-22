/**
 * Complete the method/function so that it removes the duplication letter
 */

/**
 * Examples
  "hello"  gets converted to "helo"
  "absadsasdasdad"  gets converted to "absd"
  "good morning"  gets converted to "god mrni"
 */

function removeDuplication(str) {
  // return to do ...
  let newSet = new Set()
  for (let i in str) newSet.add(str[i])
  str = ''
  newSet.forEach((value) => (str += value))

  return str
}

describe('Tests', () => {
  it('test removeDuplication', () => {
    expect(removeDuplication('hello')).toStrictEqual('helo')
    expect(removeDuplication('absadsasdasdad')).toStrictEqual('absd')
    expect(removeDuplication('good morning')).toStrictEqual('god mrni')
  })
})
