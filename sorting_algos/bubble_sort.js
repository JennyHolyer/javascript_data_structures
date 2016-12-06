// best case: O(n), worst case: O(n^2), average O(n^2)

function bubbleSort(arr){
  var swapped = true;
  var stopPoint = arr.length;

  while(swapped){
    swapped = false;
    for(var i = 0; i < stopPoint; i++){

      if(arr[i] > arr[i + 1]){
        swapped = true;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    if(swapped == false){
      return arr;
    }else{
      stopPoint -= 1;
    }

  }

  return arr;
}

console.log(bubbleSort([4,3,2,1]))
