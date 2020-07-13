function anagrams(word, permutations = null) {
  let newPermutations = [];
  console.log('perms', permutations);

  if (permutations === null) {
    for (let i = 0; i < word.length; i++) {
      let remainingLetters = word.slice(0, i) + word.slice(i + 1, word.length);
      console.log('remaining letters', remainingLetters)
      newPermutations.push([word[i], remainingLetters])
      console.log('newP', newPermutations)
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
        console.log('permutation on line 23', permutation)
        let remainingLetters = permutation[1];
        console.log('other remaining letters', remainingLetters)
        for (let i = 0; i < remainingLetters.length; i++) {
          let newRemainingLetters = remainingLetters.slice(0, i) + remainingLetters.slice(i + 1, remainingLetters.length);
          console.log('new Remaining letters', newRemainingLetters)
          newPermutations.push([permutation[0] + remainingLetters[i], newRemainingLetters])
          console.log('new perms', newPermutations)
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
