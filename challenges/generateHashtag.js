function generateHashtag (str) {
  const collection = str.split(' ').filter(Boolean);
  const capitalized = collection.map(capitalize);
  
  const finalWord = `#${capitalized.join('')}`;
  
  if(finalWord.length > 140 || collection.length === 0) {
    return false;
  }
  
  return finalWord
}
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
