// Need a Constructor to create the clozeCards
var ClozeCard = function(cloze, partial, fullText){
  this.cloze = cloze;               //The part that we want to hide
  this.partial = partial;           // The part that we want to show to the user
  this.fullText = fullText;         // Whole text
}

module.exports = ClozeCard;
