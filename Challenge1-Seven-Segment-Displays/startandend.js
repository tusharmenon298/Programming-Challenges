const fs = require("fs");
var wordList= fs.readFileSync("words.txt").toString();
wordList=wordList.split("\n");

console.log("Word count in file= "+wordList.length);

function findBigWord(accepted){
  let unaccepted= /[gkmqvwxyz]/;
  let longestAcceptableWord= "";
  for(let check of wordList)
  {
    if( check.length <= longestAcceptableWord.length){
      continue;
    }
    if(check.match(unaccepted) || !check.match(accepted)){
      continue;
    }
    longestAcceptableWord = check;

  }

  return longestAcceptableWord;
}




for(var alpha=97;alpha<123;alpha++)
{
  var letter = String.fromCharCode(alpha);
  var regex = new RegExp(`^${letter}.*${letter}$`);

  var ans=findBigWord(regex);
  if(ans==""){
    continue;
  }
  console.log("Biggest word starting from "+letter+" is "+ans);
}
