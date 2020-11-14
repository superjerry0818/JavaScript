__________________________________________________
Chapter 10

1.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    squares = [];

numbers.forEach(n => squares.push(n * n));
squares;

2.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map(n => n * n * n);

//3.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reduce((sum, n) => sum += n);

//4.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reduce((sum, n) => sum += n);
numbers.find(numbers => numbers > 5.5);
numbers.filter(numbers => numbers > 5.5);

___________________________________________________
//Chapter 11

1. 

function greet(name) {
    alert(`Hello, ${name}`);
  }
  
greet('From Name');

2.

  
function add(n1, n2) {
    return n1 + n2;
  }
  add(1, n);
  
  return s;



  let dog = {
    name: 'Hulk',
    breed: 'pitbull',
    weight: 175,
    skills: ['sleeping', 'being lethal'],
    introduction: () => {
      return "I'm Hulk, I can kill you.";
    },
  };