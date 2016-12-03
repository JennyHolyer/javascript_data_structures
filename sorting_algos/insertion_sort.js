//best case: O(n), worst case: O(n^2)

function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){

    var j = i;

    while(j >= 0 && arr[j] < arr[j - 1]){
      var temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }

  }
  return arr;
}

console.log(insertionSort([4,3,2,1]))
