// This array has letters taken out of it so room codes don't accidentally contain swears
const limitedArray = ["a", "b", "d", "e", "f", "g", "j", "k", "l", "m", "o", "p", "q", "r", "v", "w", "x", "y", "z"]

getRandomLetter = arr => {
  let randIndex = Math.floor(Math.random()*arr.length)
  let randLetter = arr[randIndex]
  return randLetter
}

generateRoomcode = () => {
  const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let roomcode = ""
  let roomcodeLength = 5

for(let i = 0; i < roomcodeLength; i++){
  roomcode += getRandomLetter(letterArray).toUpperCase()
}
// To avoid bad language in the roomcode, the third index will be re-selected from a more limited array

return roomcode
}
console.log(generateRoomcode())
