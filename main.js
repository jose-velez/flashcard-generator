
var ClozeCard = require('./clozeCard.js');
var inquirer = require("inquirer")
var newCard =[];
// var newCard = new ClozeCard("George Washington", "...was the first President of the United States", "George Washington was the first President of the United States") 
// var newCard = new ClozeCard("1914", "World War 1 began in...", "World war 1 began in 1914");
// var newCard = new ClozeCard("July 4, 1776", "... the Declaration of Independence was issued, establishing the United States of America.", "On July 4, 1776, the Declaration of Independence was issued, establishing the United States of America.");

newCard.push(new ClozeCard("George Washington", "...was the first President of the United States", "George Washington was the first President of the United States"));
newCard.push(new ClozeCard("1914", "World War 1 began in...", "World war 1 began in 1914"));
newCard.push(new ClozeCard("July 4, 1776", "... the Declaration of Independence was issued, establishing the United States of America.", "On July 4, 1776, the Declaration of Independence was issued, establishing the United States of America."));
// console.log(firstPresidentCloze);
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial);
// console.log(firstPresidentCloze.fullText);
// console.log(firstWar.cloze);
// console.log(firstWar.partial);
// console.log(firstWar.fullText);
// console.log(independenceDay.cloze);
// console.log(independenceDay.partial);
// console.log(independenceDay.fullText);
var count = 0;
function askQuestion(){
  if(count<3)
  {
    inquirer.prompt([
      {
        type: "input",
        name: "question",
        message: newCard[count].partial

      }

   ]).then(function (answers) {
      console.log(answers.question);
    });

  }
  count++;
  askQuestion();
}

askQuestion();
