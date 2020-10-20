let mongoose = require(mongoose)
let schema = mongoose.schema

let Game = new Schema ({
 roomcode: {
   type: String
 },

playerCount: {
  type: Number,
  default: 0
},

mafiaCount: {
  type: Number,
  default: 1
},

detective: {
  type: Boolean,
  default: false
},

doctor: {
  type: Boolean,
  default: false
},

tanner: {
  type: Boolean,
  default: false
}
})