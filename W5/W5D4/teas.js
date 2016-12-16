const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question("Tea?", function(ans) {
    console.log(`You said ${ans}`);
    reader.question("Biscuits?", function(ans2) {
      console.log(`You said ${ans2}`);

      const teaRes = (ans === 'yes') ? "do" : "don't";
      const bisRes = (ans2 === 'yes') ? "do" : "don't";

      reader.close();

      console.log(`You ${teaRes} want tea and ${bisRes} want biscuits`);
    });
  });
}

teaAndBiscuits();
