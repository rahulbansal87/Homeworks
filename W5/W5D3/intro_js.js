function madLib(verb, adj, noun) {
  return console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}!`);
}

madLib('make', 'best', 'guac');

//

function isSubstring(searchString, subString) {
  return (console.log(searchString.includes(subString)));
}

isSubstring('hello', 'ell');
isSubstring('hello', 'ele');

//

function fizzBuzz(array) {
  let newArr = [];
  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      newArr.push(el);
    }
  });

  return console.log(newArr);
}

fizzBuzz([1, 2, 3, 4, 5, 6, 10, 15, 30, 22]);

//

function isPrime(num) {
  if (num < 2) { return false; }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(6));
console.log(isPrime(13));

//

function sumOfNPrimes(n) {
  let count = 0;
  let sum = 0;

  for (var i = 2; count <= n; i++) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
  }

  return sum;
}

console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(2));
console.log(sumOfNPrimes(10));
console.log(sumOfNPrimes(100));

//

function allOrNothing(mod, ...nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % mod !== 0) {
      return false;
    }
  }

  return true;
}

console.log(allOrNothing(3, 6, 9, 12, 39));
console.log(allOrNothing(2, 6, 9, 12, 39));

//

function titleize(array, printCallback) {
  let title = array.map(name => {
    console.log(`Mx. ${name} Jingleheim Schmidt`);
  });

  printCallback(title);
}

titleize(['Ray', 'Chris', 'David'], (names) => {
  names.forEach(name => {
    return name;
  });
});

//

class Elephant {
  constructor(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
  }

  trumpet() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!'`);
  }

  grow() {
    this.height += 12;
  }

  addTrick(trick) {
    this.tricks.push(trick);
  }

  play() {
    let trickIdx = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIdx]}`);
  }
}

let elefante = new Elephant('Jumbo', 23, ['laughing', 'rolling', 'jumping']);

console.log(elefante.name);
console.log(elefante.height);
console.log(elefante.tricks);
console.log(elefante.trumpet());
console.log(elefante.grow());
console.log(elefante.height);
console.log(elefante.addTrick('screaming'));
console.log(elefante.tricks);
console.log(elefante.play());
console.log(elefante.play());
console.log(elefante.play());

//

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

console.log(herd.forEach(elephant => { paradeHelper(elephant); }));

//

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs and bacons please";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");
