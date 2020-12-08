//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export const colorCode = color => {
//   return COLORS.indexOf(color)
// };

// export const decodedValue = () => {
//   return ('')
// };

// const COLORS = [
//   'black',
//   'brown', 
//   'red', 
//   'orange', 
//   'yellow', 
//   'green', 
//   'blue', 
//   'violet', 
//   'grey', 
//   'white'
// ]; ************************my attempt at the solution

// decodedValue = colorCode.concat(COLORS, colorCode);

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export function decodedValue(resColors) {

  var i;
  var v = []; 

  for (i = 0; i <= 1; i++) {
    v.push(COLORS.indexOf(resColors[i]));
  }

  return parseInt(v.join(""));
};