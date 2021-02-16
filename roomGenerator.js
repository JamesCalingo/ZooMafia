// This array has letters taken out of it so room codes don't accidentally contain swears
const badwordsArray = require('badwords/array')

getRandomLetter = arr => {
  let randIndex = Math.floor(Math.random()*arr.length)
  let randLetter = arr[randIndex]
  return randLetter
}

generateRoomcode = (length) => {
  const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let roomcode = ""
  

for(let i = 0; i < length; i++){
  roomcode += getRandomLetter(letterArray).toUpperCase()
}


return roomcode
}
console.log(generateRoomcode())
