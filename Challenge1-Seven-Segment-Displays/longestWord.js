const fs = require("fs");
var wordList= fs.readFileSync("words.txt").toString();
wordList=wordList.split("\n");

console.log("Word count in file= "+wordList.length);

var unaccepted= /[gkmqvwxyz]/;
var longestAcceptableWord= "";
for(var check of wordList)
{
  if( check.length <= longestAcceptableWord.length){
    continue;
  }
  if(check.match(unaccepted)){
    continue;
  }
  longestAcceptableWord = check;

}

console.log("Word is = " + longestAcceptableWord);
