const fs = require("fs");
var wordList= fs.readFileSync("words.txt").toString();
wordList=wordList.split("\n");

console.log("Word count in file= "+wordList.length);

//This returns a sorted list;
var sortedList = wordList.sort(function(a,b){return b.length - a.length;});
var unaccepted= /[gkmqvwxyz]/;
//This finds the biggest word with shortest length
for(var check of sortedList ){
  if(check.match(unaccepted))
    continue;
  break;
}
console.log("Word is= "+check);
