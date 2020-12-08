const ANSWERS = {
  SURE: 'Sure.',
  WHOA: 'Whoa, chill out!',
  CALM: 'Calm down, I know what I\'m doing!',
  FINE: 'Fine. Be that way!',
  WHATEVER: 'Whatever.',
}

const caps = str => str.split('').every(word => word === word.toUpperCase());

const undoSpecialCharacters = str => !!str.trim().match(/[a-zA-Z]+/);

const empty = str => str.trim().length === 0;

const question = str => str.trim().charAt(str.trim().length - 1) === '?';

export const hey = (str = '') => {
  if (caps(str)  && undoSpecialCharacters(str) && question(str)) {
    return ANSWERS.CALM;
  } else if (undoSpecialCharacters(str) && caps(str)) {
    return ANSWERS.WHOA;
  } else if (question(str)) {
    return ANSWERS.SURE;
  } else if (empty(str)) {
    return ANSWERS.FINE;
  }
  return ANSWERS.WHATEVER;
};