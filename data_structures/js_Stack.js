function Node(val){
 this.next;
 this.value = val;
}

function Stack(){
 this.head;
 this.tail;

 // adds a new node to the back of the list
 this.push = function(val){
  var node = new Node(val);
  if(this.head == undefined){
   this.head = node;
   this.tail = node;
   return this;
  }else{
   var current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   current.next = node;
   this.tail = current.next;
   return this;
  }
 }

 // return the value of node at the top of the stack (the last node added to the stack)
 this.top = function(){
  if(this.head == undefined){
   return false;
  }else{
   var current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   return current.value;
  }
 }

 // removes and returns the last node added to the stack which should always be the first one out
 this.pop = function(){
  if(this.head == undefined){
   return false;
  }else{
    var current = this.head;
    if(current.next == undefined){
     var value = current.value;
     this.head = undefined;
     this.tail = undefined;
     return value;
    }else{
     while(current.next.next != undefined){
      current = current.next;
     }
     var value = current.next.value;
     this.tail = current;
     current.next = undefined;
     return value;
     }
    }
 }

 // return true if the stack in empty and false if not
 this.isEmpty = function(){
  if(this.head == undefined){
   return true;
  }else{
   return false;
  }
 }

 // returns ture if the stack has a node who's value matches the value passed to the function
 this.contains = function(val){
  var current = this.head;
  while(current != undefined){
   if(current.value == val){
    return true;
   }else{
    current = current.next;
   }
  }
  return false;
 }

 // return the size of the stack (how many nodes are inside of the node)
 this.size = function(){
  var count = 0;
  var current = this.head;
  while(current != undefined){
   count += 1;
   current = current.next;
  }
  return count;
 }

 // gathers all of the nodes and places them inside of an array which will make it easier to view the entire list
 this.showStack = function(){
  var array = [];
  var current = this.head;
  while(current != undefined){
   array.push(current.value);
   current = current.next;
  }
  return array
 }

}
