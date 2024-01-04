/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// accessing properties of object through dot

console.log("This is backpack opbject", backpack);
console.log("pocket number:", backpack.pocketNum);
console.log("strap length:", backpack.strapLength.right);

// accessing properties of object through bracked

var query = "pocketNum";
console.log("pocket number", backpack[query]);
