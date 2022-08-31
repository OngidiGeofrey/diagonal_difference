// JAVA SCRIPT  Code to Find absolute difference between sums of two diagonals


function diagonal_difference(array){

    // Initialize sums of diagonals
    
    var sumDiagnoalOne=0
    var sumDiagnoalTwo=0


    // finding sum of primary diagonal
    for(var i=0; i<array.length; i++){
    
        for(var j=i; j<array.length; j++){
            sumDiagnoalOne+=array[i][j]
            break
        }
    }
    var checkArray=[]
    arr.map(array=>checkArray.push(array.reverse()))


    // finding sum of secondary diagonal
    for(var i=0; i<checkArray.length; i++){
    
        for(var j=i; j<checkArray.length; j++){
            sumDiagnoalTwo+=checkArray[i][j]
            break
        }
    }

    //Absolute difference of the sums
        // across the diagonals
    return Math.abs(sumDiagnoalOne- sumDiagnoalTwo)
}


/* Driver program to test above function */
          
let arr = 
    [[1, 2, 3],
    [4 , 5, 6],
    [9, 8, 9]];

console.log(diagonal_difference(arr));