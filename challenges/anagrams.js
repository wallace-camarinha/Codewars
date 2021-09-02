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

module.exports = anagrams
