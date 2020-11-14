
let night = true,
inbed = true;

if (night && !inbed) {
console.log("im going to sleep");
} else {
console.log("im watching youtube");
}

if (night || inbed) {
console.log("im going to sleep");
} else {
console.log("im watching youtube");
}



let order = 'Algebra 1',
    price = 0;

switch (order) {
  case 'Geometry':
    price = 3.85;
    break;
  case 'Algebra 1':
    price = 3.99;
    break;
  case 'Geometry':
    price = 6.29;
    break;
  default:
    break;
}