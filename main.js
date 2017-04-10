

var ClozeCard = require('./clozeCard.js');

var firstPresidentCloze = new ClozeCard("George Washington", "...was the first President of the United States", "George Washington was the first President of the United States") 

console.log(firstPresidentCloze);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);
