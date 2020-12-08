//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if(number < 1) { throw new Error('Only positive numbers are allowed')}
  let count = 0
  while(number > 1) {
    number % 2 === 0 ? number = number / 2 : number = (number * 3) + 1
    count++
  }
  return count;
  // for (i = 0; i > 0; i++) {
  //   if (number % 2 === 0) {
  //     let newNum = number / 2;
  //   }
  //   else if (number % 2 !== 0) {
  //     newNum = (number * 3) + 1
  //   }
  //   newNum = number;
  //   return (steps)
};