var cat = {
  name: "Breakfast",
  age: 8,
  purr: function() {
    console.log("Meow");
  }
};

console.log(cat.name);
console.log(cat.purr());


function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}


function isPalindrome(string) {
  function reverse() {
    return string.split('').reverse().join('');
  }

  return string === reverse();
}

// function scheduleGreatMovieReminder(movie) {
//   // remind in one min
//   window.setTimeout(function () {
//     console.log(`Remember to watch: ${movie}`);
//   }, 60 * 1000);
//   console.log(`Timer set for ${movie}`);
// }
//
// scheduleGreatMovieReminder("Citizen Kane");
// scheduleGreatMovieReminder("Touch of Evil");
// scheduleGreatMovieReminder("The Third Man");

const readline = require('readline');
const reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

reader.question("name?", function(answer) {
  console.log(`Hello ${answer}!`);

  reader.close();
});
