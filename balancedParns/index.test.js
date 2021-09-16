/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */

function balancedParens(input) {
  //  TO DO
  const newArr = input.split('')
  const symbols = ['(', ')', '[', ']', '{', '}']
  const result = newArr.filter((i) => symbols.includes(i))

  let stack = []
  let top = ''
  
  for (i in result) {
    if (stack.length == 0) stack.push(result[i])
    else {
      top = stack.pop()
      if (
        (top === '(' && result[i] === ')') ||
        (top === '[' && result[i] === ']') ||
        (top === '{' && result[i] === '}')
      )
        continue
      else {
        stack.push(top)
        stack.push(result[i])
      }
    }
  }
  return stack.length === 0
}

describe('Tests', () => {
  it('test balancedParens', () => {
    expect(balancedParens('(')).toEqual(false)
    expect(balancedParens('()')).toEqual(true)
    expect(balancedParens(')(')).toEqual(false)
    expect(balancedParens('(())')).toEqual(true)
    expect(balancedParens('[](){}')).toEqual(true)
    expect(balancedParens('[({})]')).toEqual(true)
    expect(balancedParens('[(]{)}')).toEqual(false)
    expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).toEqual(true)
    expect(
      balancedParens(' var hubble = function(() { telescopes.awesome();'),
    ).toEqual(false)
  })
})
