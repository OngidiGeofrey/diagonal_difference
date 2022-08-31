function absoluteDifference(arr){
    
    var sumDiagnoalOne=0
    var sumDiagnoalTwo=0
    for(var i=0; i<arr.length; i++){
    
        for(var j=i; j<arr.length; j++){
            sumDiagnoalOne+=arr[i][j]
            break
        }
    }
    var checkArray=[]
    arr.map(array=>checkArray.push(array.reverse()))
    for(var i=0; i<checkArray.length; i++){
    
        for(var j=i; j<checkArray.length; j++){
            sumDiagnoalTwo+=checkArray[i][j]
            break
        }
    }
    document.write( Math.abs(sumDiagnoalOne- sumDiagnoalTwo))
}


/* Driver program to test above function */
     
let n = 3;       
let arr = [[11, 2, 4],
    [4 , 5, 6],
    [10, 8, -12]];

absoluteDifference(arr);