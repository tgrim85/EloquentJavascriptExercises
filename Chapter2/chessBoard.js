chessString = "";
stringEven = "";
stringOdd ="";
size = 20;

for(var i = 0; i < size; i++){

  if(i%2 == 0){
    stringEven += " ";
    stringOdd += "#";
  }
  else{
    stringEven += "#";
    stringOdd += " ";
  }
}

for(var z = 0; z < size; z++){
  if(z%2 == 0){
    chessString += stringEven + "\n";
  }
  else{
    chessString += stringOdd + "\n";
  }
}

console.log(chessString)
