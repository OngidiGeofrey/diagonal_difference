

// Javascript Code to Find difference between sums
// of two diagonals

function diagonal_difference(array) {
    var n = array.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += Array[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += array[i][j];
         }
      }
  }
  return Math.abs(d1 - d2);
}

