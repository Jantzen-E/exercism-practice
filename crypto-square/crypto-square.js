export class Crypto {
  constructor (text) {
    this.text = text
  }

  //remove non word characters (spaces) and convert everything to lower case
  normalizePlaintext() {
    return this.text.replace(/\W/g, '').toLowerCase()
  }

  //determine the length of each line of the text when it is broken up into sections
  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length)) //round the square root of the number of characters
  }                                       //up to the next largest integer after spaces have been omitted from phrase

  //break each line up and put each section on a new line
  plaintextSegments() {
    return this.normalizePlaintext()
      .match(new RegExp(`.{1,${this.size()}}`, 'g'))  //find each space (global) and create a pattern of lines with the
  }                                                   //same amount of characters on each line

  //return the result of reading each section vertically, separate each segment with a space
  ciphertext() {
    return this.plaintextSegments()
      .map((__, i, segments) => segments.map(segment => segment[i]).join('')) //make an array of segments based on the
      .join('')                                                            //first index, then map through each index
  }                               //consecutively to form segments that are read vertically and displayed horizontally
}