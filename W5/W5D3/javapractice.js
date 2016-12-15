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
