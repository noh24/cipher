// const userInput = window.prompt("Enter a sentence: ");
const userInput = prompt("Enter a sentence: ");
alert(userInput);

//get the first letter and the last letter
function firstLast() {
  // const firstLetter = userInput.charAt(0);
  // const lastLetter = userInput.length - 1;
  // const firstAndLast = firstLetter + userInput.charAt(lastLetter);
  // const capString = firstAndLast.toUpperCase();
  // return capString;
  return userInput.charAt(0).toUpperCase() + userInput.charAt(userInput.length - 1).toUpperCase(); 
}
const capitalLetters = firstLast();
window.alert(capitalLetters);

//reverse the two letters
function reverseLetters() {
  return capitalLetters.charAt(1) + capitalLetters.charAt(0);
}
const reverse = reverseLetters();
window.alert(reverse);

//combine the input sentence and the two letters
const sentenceLetters = userInput.concat(reverse);
window.alert(sentenceLetters);

//get the middle character
function middleLetter() {
  const middleIndex = Math.round(userInput.length / 2);
  return userInput.charAt(middleIndex) + sentenceLetters;
}
const newSentence = middleLetter();
alert(newSentence);

//reverse the sentence
function switchA(sentence) {
  return sentence.split("").reverse().join("");
}
const reversed = switchA(newSentence);
alert(reversed);