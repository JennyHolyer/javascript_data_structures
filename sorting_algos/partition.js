function partition(arr){
  var pivot = 0;
  var numberStopPoint = 0
  for(var i = 1; i < arr.length;i++){
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
  return arr;
}

console.log(partition([5,1,8,2,9,-3]))
