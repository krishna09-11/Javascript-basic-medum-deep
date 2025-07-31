const newArr = [9,8,7,6,5];
  function print(element, index){
    return `ELement at index ${index} is ${element} `

  }

  const result2 = newArr.map(print);
  
  console.log(result2);

  function customMapper(arr, func){
    let result = [];
    for(i= 0; i<=arr.length;  i ++){
        result.push(func(arr[i], i))
    }
    return result
  }

  const value = customMapper(newArr, print)
  console.log(value);