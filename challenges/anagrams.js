/**

  Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. 

  Example:

    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
    anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

 */

function anagrams(word, words){
  const referenceWord = [...word].sort().join('')
  let result = []

  words.forEach(element => {
    const compareWord = [...element].sort().join('')
    if (referenceWord === compareWord) {
      result.push(element)
    }    
  });

  return result
}