function Node(val){
 this.value = val;
 this.next;
}

function Queue(){
 this.head;
 this.tail;

 this.enqueue = function(val){
  var node = new Node(val);
  if(this.head == undefined){
   this.head = node;
   this.tail = node;
  }else{
   var current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   current.next = node;
   this.tail = node;
   return this;
  }
 }

 this.dequeue = function(){
  if(this.head == undefined){
   return false;
  }else{
   var value = this.head.value;
   this.head = this.head.next;
   return value;
  }
 }

 this.front = function(){
  if(this.head == undefined){
   return false;
  }else{
   return this.head.value;
  }
 }

 this.isEmpty = function(){
  if(this.head == undefined){
   return true;
  }else{
   return false;
  }
 }

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

 this.showList = function(){
  var array = [];
  var current = this.head;
  while(current != undefined){
   array.push(current.value);
   current = current.next;
  }
  return array
 }

}

var list = new Queue();
list.enqueue(8);
list.enqueue(10);

console.log(list.count());

console.log(list.showList());
