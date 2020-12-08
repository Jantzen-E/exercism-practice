//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, earthSeconds) => {
  const earthYears = earthSeconds / 31557600;
  let result = 0;
  
  if(planet === 'earth') {
    result = earthYears;
  }
  else if (planet === 'earth') {
    result = 31.69;
  }
  else if (planet === 'mercury') {
    result = earthYears / .2408467;
  }
  else if (planet === 'venus') {
    result = earthYears / .61519726;
  }
  else if (planet === 'mars') {
    result = earthYears / 1.8808158;
  }
  else if (planet === 'jupiter') {
    result = earthYears / 11.862615;
  }
  else if (planet === 'saturn') {
    result = earthYears / 29.447498;
  }
  else if (planet === 'uranus') {
    result = earthYears / 84.016846;
  }
  else if (planet === 'neptune') {
    result = earthYears / 164.79132;
  }
  
  return Number(result.toFixed(2));
};
