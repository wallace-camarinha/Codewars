/**

  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

  Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

 */

function toCamelCase(str){
  if(!str) return

  arr = str.replaceAll('_', '-').split('-')

  for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
  }

  return arr.join('')
}

console.log(toCamelCase('oi-como_voce-esta'))