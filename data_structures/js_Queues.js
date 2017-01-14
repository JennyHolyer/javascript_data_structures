function Node(val){
 this.value = val;
 this.next;
}

function Queue(){
 this.head;

 // adds a new node to the end of the list
 this.enqueue = function(val){
  var node = new Node(val);
  if(this.head == undefined){
   this.head = node;
  }else{
   var current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   current.next = node;

   return this;
  }
 }

 // removes the front node from the list
 this.dequeue = function(){
  if(this.head == undefined){
   return false;
  }else{
   var value = this.head.value;
   this.head = this.head.next;
   return value;
  }
 }

 // return the value of the first node in the list
 this.peek = function(){
  if(this.head == undefined){
   return false;
  }else{
   return this.head.value;
  }
 }

 // return true if the list is empty
 this.isEmpty = function(){
  if(this.head == undefined){
   return true;
  }else{
   return false;
  }
 }

 // return true if the list conatains node with a value that matches the value passed to the function
 this.contains = function(val){
  var current = this.head;
  while(current != undefined){
   if(current.value == val){
    return true;
   }
   current = current.next;
  }
  return false;
 }

 // return the size of the list
 this.count = function(){
  if(this.head == undefined){
   return 0
  }else{
   var count = 0;
   var current = this.head;
   while(current != undefined){
    count += 1;
    current = current.next;
   }
   return count;
  }

 }

 // gathers all of the nodes and places them inside of an array which will make it easier to view the entire list
 this.displayQueue = function(){
  var array = [];
  var current = this.head;
  while(current != undefined){
   array.push(current.value);
   current = current.next;
  }
  return array
 }

}
