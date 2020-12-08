//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  const three = divisibleByThree(num);
  const five = divisibleByFive(num);
  const seven = divisibleBySeven(num);
  let returnValue = '';


  if (three) {
    returnValue += 'Pling';
  } 
  if (five) {
    returnValue += 'Plang';
  }
  if (seven) {
    returnValue += 'Plong';
  }
  if (returnValue === '') {
    returnValue = String(num)
  }
  return returnValue;



  // else if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
  //   return 'PlingPlangPlong';
  // }
  // else if (three && five) {
  //   return 'PlingPlang';
  // }
  // else if (five && seven) {
  //   return 'PlangPlong';
  // }
  // else {
  //   return String(`${num}`);
  // }
  // const three = divisibleByThree(num);
  // const five = divisibleByFive(num);
  // const seven = divisibleBySeven(num);

}

const divisibleByThree = (number) => isDivisibleBy(number, 3);
const divisibleByFive = (number) => isDivisibleBy(number, 5);
const divisibleBySeven = (number) => isDivisibleBy(number, 7);

const isDivisibleBy = (number, factor) => number % factor == 0;