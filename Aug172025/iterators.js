function fetchNextElement(array){
    let idx = 0;
    function next(){
        if (idx == array.length){
            return { value : undefined , done : true}
        }
        const nextELement = array[idx];
        idx ++;
        return { value : nextELement , done : false}
    }

    return {next};
}

const automaticFetcher = fetchNextElement([19,20,3,4,5,6,7]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
