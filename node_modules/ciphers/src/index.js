/**
 * Encode a string using a [caesar (substitution/shifting) cipher]{@link https://en.wikipedia.org/wiki/Caesar_cipher}.
 * Only shifts letters in the English Alphabet.
 *
 * @param {String} string - The string to encode.
 * @param {Number} [shiftAmount=3] - The amount to shift by.
 */
module.exports.encodeCaesar = function(string, shiftAmount=3) {
  let res = '';

  for(const i in string) {
    if(/[^A-Za-z]/.test(string[i])) {
      res += string[i];
      continue;
    }

    let _ = string.charCodeAt(i) + shiftAmount;

    if((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A)) {
      res += String.fromCharCode(_);
    } else {
      while(!((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A))) {
        _ -= 26;
      }

      res += String.fromCharCode(_);
    }
  }

  return res;
};

/**
 * Decode a string that was encoded using a [caesar (substitution/shifting) cipher]{@link https://en.wikipedia.org/wiki/Caesar_cipher}.
 *
 * @param {String} string - The string to decode.
 * @param {Number} [shiftAmount=3] - The amount to unshift by.
 */
module.exports.decodeCaesar = function(string, shiftAmount=3) {
  let res = '';

  for(const i in string) {
    if(/[^A-Za-z]/.test(string[i])) {
      res += string[i];
      continue;
    }

    let _ = string.charCodeAt(i) - shiftAmount;

    if((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A)) {
      res += String.fromCharCode(_);
    } else {
      while(!((_ >= 0x0041 && _ <= 0x005A) || (_ >= 0x0061 && _ <= 0x007A))) {
        _ += 26;
      }

      res += String.fromCharCode(_);
    }
  }

  return res;
};
