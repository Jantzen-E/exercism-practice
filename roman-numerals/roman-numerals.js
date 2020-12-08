//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (num) => {

  const convertNumber = function (number, acc = "") {
    if (number === 0) {
        return acc;
    }
        if (number >= 1000) {
            console.log('numbers greater than 1000')
            return convertNumber(number - 1000, acc + "M");
        }
        if (number >= 900 && number < 1000) {
            return convertNumber(number - 900, acc + "CM");
        }
        if (number >= 500) {
            console.log('numbers greater than 500')
            return convertNumber(number - 500, acc + "D");
        }
        if (number >= 400) {
            return convertNumber(number - 400, acc + "CD");
        }
        if (number >= 100) {
            return convertNumber(number - 100, acc + "C");
        }
        if (number >= 90) {
            return convertNumber(number - 90, acc + "XC")
        }
        if (number >= 50) {
            return convertNumber(number - 50, acc + "L");
        }
        if (number >= 40) {
            return convertNumber(number - 40, acc + "XL");
        }
        if (number >= 10) {
            return convertNumber(number - 10, acc + "X");
        }
        if (number === 9) {
            return convertNumber(number - 9, acc + "IX");
        }
        if (number >= 5) {
            return convertNumber(number - 5, acc + "V");
        }
        if (number === 4) {
            return convertNumber(number - 4, acc + "IV");
        }
        if (number === 3) {
            return convertNumber(number - 3, acc + "III");
        }
        if (number === 2) {
            return convertNumber(number - 2, acc + "II");
        }
        if (number === 1) {
          return convertNumber(number - 1, acc + "I");
        }
  }
  return convertNumber(num)
};
