function quickSort(arr,start,end){

  if(start == undefined){
    start = 0;
    end = arr.length - 1;
  }

  if(start >= end){
    return;
  }

  var pivot = partition(arr, start, end);

  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);

  return arr;
}


function partition(arr,start,end){
  var pivot = start;
  var numberStopPoint = start;
  for(var i = start; i <= end;i++){
    if(arr[i] < arr[pivot]){

      for(var j = i; j > numberStopPoint; j--){
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }

      pivot += 1;
      numberStopPoint += 1;

    }
  }
  return pivot;
}

var array = [0,5, 1, 8, 4, 9, 2, 5, 3];
console.log(quickSort(array))
