export const proverb = (...inputs) => {
  let proverbNouns = inputs.filter(x => typeof x == "string")
  let list = inputs.filter(x => typeof x == "object")
  //let the rhyme start as an empty array
  let proverbialRhyme = [];
  //loop through the nouns starting at index 0 and push the next noun into the rhyme
  for (let i = 0; i < proverbNouns.length-1; i++) {
    proverbialRhyme.push(`For want of a ${proverbNouns[i]} the ${proverbNouns[i+1]} was lost.\n`)
  }
  //if the nouns in the list have been used, push the 0th index noun into the string below
  if (list.length > 0) proverbialRhyme.push(`And all for the want of a ${list[0].qualifier} ${proverbNouns[0]}.`)
  else proverbialRhyme.push(`And all for the want of a ${proverbNouns[0]}.`)
  //join the new line of the rhyme into the rhyme and return that new string
  return proverbialRhyme.join("");
};