function swap(arr, i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

function seperateoneAndzero(arr){
    let i = 0 ;
    let j = arr.length -1;
    while(i <= j){
        if (arr[i] == 1){
            swap(arr, i , j);
            j--;
         }
         else{
            i++;
         }
    }
    
}

let arr = [1,0,1,0,1,0,0,0,0,1,1]
seperateoneAndzero(arr);
console.log(arr);