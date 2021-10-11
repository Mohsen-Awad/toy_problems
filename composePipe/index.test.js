/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

// *** Compose ***
const greet = function (name) {
  return 'hello ' + name
}

const exclaim = function (statement) {
  return statement.toUpperCase() + '!'
}

/**
 *
 * @param  {...any} args
 * @returns {function}
 */
const compose = function (...args) {
  return (num) => {
    for (i = args.length - 1; i >= 0; i--) num = args[i](num)
    return num
  }
}
// const compose = (x, y) => (z) => x(y(z))

const welcome = compose(exclaim, greet)
const welcomeTwice = compose(exclaim, greet, greet)

// *** Pipe ***
const add2 = function (number) {
  return number + 2
}

const multiplyBy3 = function (number) {
  return number * 3
}

/**
 *
 * @param  {...any} args
 * @returns {function}
 */
const pipe = function (...args) {
  return (num) => {
    for (i = 0; i <= args.length - 1; i++) num = args[i](num)
    return num
  }
}
// const pipe = (x, y) => (z) => y(x(z))

const addAndMultiply = pipe(add2, multiplyBy3)
const addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3)

describe('test', () => {
  it('Compose function', () => {
    expect(welcome('phillip')).toEqual('HELLO PHILLIP!')
  })

  it('Compose function', () => {
    expect(welcomeTwice('Mohsen')).toEqual('HELLO HELLO MOHSEN!')
  })

  it('Pipe function', () => {
    expect(addAndMultiply(5)).toEqual(21)
  })

  it('Pipe function', () => {
    expect(addAndMultiplyTwice(5)).toEqual(63)
  })
})
