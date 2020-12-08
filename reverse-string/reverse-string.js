//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  const splitString = str.split('');
  const reverseArray = splitString.reverse('');
  const joinArray = reverseArray.join('');

  return joinArray;
};
