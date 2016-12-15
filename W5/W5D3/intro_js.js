function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

console.log(madLib('make', 'best', 'guac'));


function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

console.log(isSubstring("helloworld", "worl"));


function fizzBuzz(array) {
  let newArr = [];

  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      newArr.push(el);
    }
  });

  return newArr;
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,15,20,30,33]));


function isPrime(n) {
  if (n < 2) { return false; }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(13));


function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;

  for (var i = 2; count < n; i++) {
    if (isPrime(i)) {
      sum += i;
      count ++;
    }
  }

  return sum;
}

console.log(sumOfNPrimes(2));
console.log(sumOfNPrimes(100));

function allOrNothing(mod, ...num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] % mod !== 0) {
      return false;
    }
  }

  return true;
}

console.log(allOrNothing(2, 1, 3, 6));
console.log(allOrNothing(3, 6, 9, 12));


function titleize(names, callback) {
  let title = names.map(name => `Mx. ${name} Jingleheim Schmidt`);
  callback(title);
}

titleize(['Ray', 'David', 'Chris'], (names) => {
  names.forEach(name => console.log(name));
});


function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let trickIdx = Math.floor(Math.random()*this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIdx]}`);
};

const e = new Elephant('elephant', 12, ['this', 'that', 'something']);
console.log(e.play());

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];


function paradeHelper(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

console.log(herd.forEach(paradeHelper));
