//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const toRna = (dna) => {
  var map = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };
  var rna = '';

  for (var i = 0, len = dna.length; i < len; i++) {
    rna += map[dna[i]];
  }

  return rna;
};
