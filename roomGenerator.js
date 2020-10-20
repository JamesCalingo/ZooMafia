const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

generateRoomcode = () => {
  let roomcode = ""
getRandomLetter = arr => {
  let randIndex = Math.floor(Math.random()*arr.length)
  let randLetter = arr[randIndex]
  return randLetter
}
for(let i = 0; i < 5; i++){
  roomcode += getRandomLetter(letterArray)
}
return roomcode
}
console.log(generateRoomcode())