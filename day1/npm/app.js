// var giveMeAJoke = require('give-me-a-joke');

// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke(function (joke) {
//     console.log(joke);
// });


var figlet = require("figlet");

figlet("Vishal Kanani", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});