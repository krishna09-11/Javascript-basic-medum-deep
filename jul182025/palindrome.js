function checkPalindrome(num){
     let string = "" + num;
     let i = 0;
     let j = string.length-1;
     while (i<=j){
        if (string[i] == string[j]){
            i ++;
            j --;
        }
        else{
            return false
        }

     }
     return true;
}

console.log(checkPalindrome ("markram"))



