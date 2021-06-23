// For Testing Purpose
// const { Item } = require('./item');
// const { Room } = require('./room');

// Bandaid Solution for eatItem method
const { Food } = require('./food');

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    if (this.currentRoom.items.length === 0) {
      return "There are no items in this room";
    } else {
      for (let i = 0; i < this.currentRoom.items.length; i++) {
        let current = this.currentRoom.items[i];
        if (current.name === itemName) {
          this.currentRoom.items.splice(current, 1);
          this.items.push(current);
        } else {
          return "You don't have this item.";
        }
      }
    }
  }

  dropItem(itemName) {
    for (let i = 0; i < this.items.length; i++) {
      let current = this.items[i];
      if (current.name === itemName) {
        this.items.splice(current, 1);
        this.currentRoom.items.push(current);
        return `You have dropped ${current.name}.`;
      } else {
        return "You don't have this item.";
      }
    }
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

  getItemByName(name) {
    for (let i = 0; i < this.items.length; i++) {
      let current = this.items[i];
      if (current.name === name) {
        return current; // May need to revisit and work in splicing the item out of inventory
      } else {
        return "You don't have this item.";
      }
    }
  }
}

// // Test Case:
// let item = new Item("rock", "just a simple rock");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);

// player.items.push(item);
// console.log(player.dropItem("sunglasses"));
// // console.log(player.items[0].name);
// console.log(item) // Item : {}

// console.log(player.getItemByName("toast"));

module.exports = {
  Player,
};
