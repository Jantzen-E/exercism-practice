export class Crypto {
  constructor (text) {
    this.text = text
  }

  //remove spaces and convert everything to lower case
  normalizePlaintext() {
    return this.text.replace(/\W/g, '').toLowerCase()
  }

  //determine the length of each line of the text when it is broken up
  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length))
  }

  //break each line up and put each section on a new line
  plaintextSegments() {
    return this.normalizePlaintext()
      .match(new RegExp(`.{1,${this.size()}}`, 'g'))
  }

  //return the result of reading each section vertically, wrap each section in parenthesis separated by a space
  ciphertext() {
    return this.plaintextSegments()
      .map((__, i, segments) => segments.map(segment => segment[i]).join(''))
      .join('')
  }
}