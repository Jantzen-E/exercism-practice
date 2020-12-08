//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (inputYear) => {
  return (inputYear % 4 === 0) && ((inputYear % 100 !== 0) || (inputYear % 400 === 0))
};
