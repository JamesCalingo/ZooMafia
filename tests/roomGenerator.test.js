const { expect } = require("@jest/globals");
const { string } = require("yargs");
const getRoomcode = require("../roomGenerator");
test("Generates five letter roomcode", () => {
  expect(generateRoomcode(5).length).toBe(5);
});
