
function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }
  var mid_point = Math.floor(arr.length / 2);

  var left_array = mergeSort(arr.slice(0,mid_point));
  var right_array = mergeSort(arr.slice(mid_point, arr.length));

  var sorted_array = [];

  while(left_array.length || right_array.length){
    if(left_array.length && (!right_array.length || left_array[0] < right_array[0] )){
      sorted_array.push(left_array.shift());
    }else{
      sorted_array.push(right_array.shift());
    }
  }
  return sorted_array;
}

console.log(mergeSort([5,2,1,3,-3,100,30,6000,4]))
