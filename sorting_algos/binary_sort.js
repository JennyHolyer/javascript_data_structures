//best case: O(lg2^n)
function binarySearch(arr,num){
    var front = 0;
    var end = arr.length - 1;
    var middle = Math.floor(arr.length / 2);

    while(front <= end){

      if(arr[middle] == num){
        return true;
      }else if(arr[middle] < num){
        front = middle + 1;
        middle = Math.floor((end + front) / 2);
      }else{
        end = middle - 1;
        middle = Math.floor((end + front) / 2);
      }

    }

    return false;
}


console.log(binarySearch([2,4,5,7,8,99],7))
