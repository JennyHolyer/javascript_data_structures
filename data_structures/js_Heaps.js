// parent = (index - 2) / 2;

function Heap(){
  this.list = [];

  this.add = function(number){
    this.list.push(number);
    this.bubbleUp();
  }

  this.removeMin = function(){
    var list = this.list;

    if(list[0] == undefined){
      return false;
    }

    var index = 0;
    list[index] = list.pop();
    this.bubbleDown();
  }

  this.bubbleDown = function(){
    var list = this.list;
    var index = 0;

    while(hasLeft(index, list.length)){

      if(hasRight(index, list.length) && list[right(index)] < list[left(index)]){
        if(list[index] > list[right(index)]){
          var temp = list[index];
          list[index] = list[right(index)];
          list[right(index)] = temp;

          index = right(index)
        }else{
          break;
        }

      }else{
        if(list[index] > list[left(index)]){
          var temp = list[index];
          list[index] = list[left(index)];
          list[left(index)] = temp;

          index = left(index)
        }else{
          break;
        }

      }


    }

  }

  this.bubbleUp = function(){
    var list = this.list;
    var index = list.length - 1;
    while(index > 0 && list[index] < list[parent(index)]){

      //swap
      var temp = list[index];
      list[index] = list[parent(index)];
      list[parent(index)] = temp;

      //update index
      index = parent(index);
    }

  }


  //private functions

  function parent(index){
    return Math.ceil((index - 2) / 2);
  }

  function left(index){
    return (index * 2) + 1;
  }

  function right(index){
    return (index * 2) + 2;
  }

  function hasLeft(index, maxLength){
    return ((index * 2) + 1) < maxLength;
  }

  function hasRight(index, maxLength){
    return ((index * 2) + 2) < maxLength;
  }
}

var heap = new Heap();
heap.add(20);
heap.add(10);
heap.add(30);
heap.add(100);
heap.add(3);
heap.add(4);
heap.add(200);
heap.removeMin();
console.log(heap);
