function anagrams(word, permutations = null) {
  let newPermutations = [];
  // console.log(permutations);

  if (permutations === null) {
    for (let i = 0; i < word.length; i++) {
      let remainingLetters = word.slice(0, i) + word.slice(i + 1, word.length);
      newPermutations.push([word[i], remainingLetters])
    }
  } else {
    // if there are no remaining letters, return the result
    if (permutations[0][1] === '') {
      let completePermutations = [];
      permutations.forEach(permutation => {
        completePermutations.push(permutation[0])
      });
      console.log(completePermutations.length);
      return completePermutations;
    } else { // create a new set of permutations otherwise
      permutations.forEach(permutation => {
        let remainingLetters = permutation[1];
        for (let i = 0; i < remainingLetters.length; i++) {
          let newRemainingLetters = remainingLetters.slice(0, i) + remainingLetters.slice(i + 1, remainingLetters.length);
          newPermutations.push([permutation[0] + remainingLetters[i], newRemainingLetters])
        }
      });
    }
  }

  return anagrams(word, newPermutations);
}

anagrams('east');

permutations = ['e', 'ast'],['a', 'est'],['s','eat'],['t','eas']

permutations = ['east', '']

permutations, remaining letters

east

e, ast

a, est

s, eat

t, eas

east

e
- a
  - s
    - t
  - t
    - s
- s
  - a
    - t
  - t
    - a
- t
  - a
    - s
  - s
    - a
