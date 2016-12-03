//worst && best && average case: O(n^2)

function selectSort(arr){
  for(var i = 0; i < arr.length - 1; i++){

    var min_index = i;

    for(var j = i + 1; j < arr.length; j++){
      if(arr[min_index] > arr[j]){
        min_index = j;
      }
    }

    if(min_index != i){
      console.log("here")
      var temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }

  }
  return arr;
}


console.log(selectSort([4,1,2,3]))
