const fs = require("fs");
var wordList= fs.readFileSync("words.txt").toString();
wordList=wordList.split("\n");

console.log("Word count in file= "+wordList.length);

var unaccepted= /[gkmqvwxyz]/;
var longestAcceptableWord= "";
var wordArray= new Array(longestAcceptableWord);
for(var check of wordList)
{
  if( check.length < longestAcceptableWord.length){
    continue;
  }
  if(check.match(unaccepted)){
    continue;
  }
  if(check.length == longestAcceptableWord.length){
    wordArray.push(check);
    continue;
  }
  wordArray.length=0;
  longestAcceptableWord = check;
  wordArray.push(check);
}

console.log("Words are = " + wordArray);
