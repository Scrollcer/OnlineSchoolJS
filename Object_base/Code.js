//Task - create object COMPASS, which contains keys for each direction (North, South, West, East)
//When key called, it returns object of the pointed direction, which has keys for every direction (left, right)
//Where direction counts in direction from center of compass, examples:
//compass[compass.west.right] // -> {left: 'west', right: 'east'}
//compass[compass.north.left] // -> {left: 'south', right: 'north'}

const compass = {
    north: {left: "west", right: "east"},
    east: {left: "north", right: "south"},
    south: {left: "east", right: "west"},
    west: {left: "south", right: "north"},
};

console.log(compass[compass.west.right])
console.log(compass[compass.north.left])
