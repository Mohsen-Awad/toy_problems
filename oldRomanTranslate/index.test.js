/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const translateRomanNumeral = (romanNumeral) => {
  // TO DO ...
  let sum = DIGIT_VALUES[romanNumeral[0]]
  for (i = 1; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]] > DIGIT_VALUES[romanNumeral[i - 1]])
      sum =
        sum -
        DIGIT_VALUES[romanNumeral[i - 1]] +
        DIGIT_VALUES[romanNumeral[i]] -
        DIGIT_VALUES[romanNumeral[i - 1]]
    else sum += DIGIT_VALUES[romanNumeral[i]]
  }

  return sum
}

describe('Tests', () => {
  it('translateRomanNumeral', () => {
    expect(translateRomanNumeral('IV')).toEqual(4)
    expect(translateRomanNumeral('XXI')).toEqual(21)
    expect(translateRomanNumeral('XX')).toEqual(20)
    expect(translateRomanNumeral('XVI')).toEqual(16)
    expect(translateRomanNumeral('XXIV')).toEqual(24)
    expect(translateRomanNumeral('XIII')).toEqual(13)
    expect(translateRomanNumeral('XIV')).toEqual(14)
    expect(translateRomanNumeral('XXVII')).toEqual(27)
  })
})
