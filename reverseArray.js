var array = [2,3,4,4,6];
let array1 = []
function reverse(array,array1){
    
    for(i=1; i<=array.length; i++){
        
        a=array[array.length-i]
        array1.push(a);
    }
    console.log(array1)
}
reverse(array,array1)