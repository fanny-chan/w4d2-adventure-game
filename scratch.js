
const {Room} = require("./class/room.js");
const {Food} = require("./class/food.js");



class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }
  eatItem(itemName) {
    if (!itemName instanceof Food) {
      return "This is not food!";
    }
    for (let i = 0; i < this.items.length; i++) {
      let current = this.items[i];
      if (current.name === itemName) {
        this.items.splice(current, 1);
        return `You have eaten ${current.name}.`;
      } else {
        return "You don't have this item.";
      }
    }
  }
}

// // Test Case:
let food = new Food("sandwich", "delicious sandiwch");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(food);

console.log(player.items[0].name);
console.log(food); // Item : {}
console.log("----------- New Test -----------")

console.log(player.eatItem("sandwich"));
