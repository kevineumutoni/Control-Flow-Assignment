//QUESTION 1

const { number } = require("yargs");

let attempts = 1;
function loginAttempts(attempts) {
 
    while (attempts <= 3) {
      console.log(`Account login ${attempts} failed Try again.`);
      attempts++;
    }
    console.log("Account locked");
  }
  loginAttempts(attempts)

  //QUESTION 2
  const votes = ["yes", "no", "yes", "yes", "not voting"];

  function logVotes(votes) {
    let i = 0;
    do {
      console.log(`Vote ${i + 1}: ${votes[i]}`);
      i++;
    } while (i < votes.length);
  }
  logVotes(votes)

  //QUESTION 3  

  const numbers = [1,2,3,4,5,6,7]
  function daysOfTheWeek(numbers){
    for(let i = 0; i < numbers.length; i++){
        switch(numbers[i]){
            case 1:
                console.log("Monday")
                break
            
            case 2:
                console.log("Tuesday")
                break

            case 3:
                console.log("Wednesday")
                break
        
            case 4:
                console.log("Thursday")
                break

            case 5:
                console.log("Friday")
                break

            case 6:
                console.log("Saturday")
                break
            
            case 7:
                console.log("Sunday")
                break
            
            default:
                console.log("The day doesn't exist")
                break
        }
    }
  }
  daysOfTheWeek(numbers)

  //QUESTION 4

  let passwords = ["hello", "iamstrong", "1235678", "abc"];
  function checkPasswords(passwords) {
    for (let i = 0; i < passwords.length; i++) {
      if (passwords[i].length >= 8) {
        console.log(`${passwords[i]}: Strong`);
      } else {
        console.log(`${passwords[i]}: Weak`);
      }
    }
  }
checkPasswords(passwords)

// QUESTION 5
let languages = ["en", "fr", "sw", "de"];
function greetLanguages(languages) {
    for (let i = 0; i < languages.length; i++) {
      switch (languages[i]) {
        case "en":
          console.log("Hello");
          break;
        case "fr":
          console.log("Bonjour");
          break;
        case "sw":
          console.log("Habari");
          break;
        default:
          console.log("Language not supported");
      }
    }
  }
  greetLanguages(languages)

  //QUESTION 6
  let temperatures = [10, 18, 35, 25, 14];
  function weatherDashboard(temperatures) {

    for (let i = 0; i < temperatures.length; i++) {
      if (temperatures[i] > 30) {
        console.log(`${temperatures[i]} degree Celsius: High heat alert!`);
      } else if (temperatures[i] < 15) {
        console.log(`${temperatures[i]} degree Celsius: Cold alert!`);
      } else {
        console.log(`${temperatures[i]} degree Celsius: Normal conditions`);
      }
    }
  }
  weatherDashboard(temperatures)

  //QUESTION 7
  let queue = ["Alice", "Bob", "Charlie"];

  function processQueue(queue) {
   
    while (queue.length > 0) {
      let user = queue.shift();
      console.log(`Registering: ${user}`);
    }
  }
  processQueue(queue)

  //QUESTION 8
  function testRetake() {
    let score = 0;
    do {
      console.log(`Current score: ${score}`);
      score += 10;
    } while (score < 50);
    console.log(`Final score: ${score} - Test passed`);
  }
  testRetake()
  
