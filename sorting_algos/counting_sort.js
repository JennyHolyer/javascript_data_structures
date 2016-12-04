//O(n) time and O(n) additional space

function countingSort(arr,max){
  var numsInArr = [];

  for(var i = 0; i <= max; i++){
    numsInArr[i] = 0;
  }

  arr.forEach(function(num){
    numsInArr[num] += 1;
  })


  var sortedArray = [];
  var indexOfSortedArray = 0;

  numsInArr.forEach(function(num){
    var count = numsInArr[indexOfSortedArray];
    for(var i = 0; i < count; i++){
      sortedArray.push(indexOfSortedArray);
    }
    indexOfSortedArray += 1;
  })

  return sortedArray;

}

console.log(countingSort([3,3,2,20,2,40],100))
