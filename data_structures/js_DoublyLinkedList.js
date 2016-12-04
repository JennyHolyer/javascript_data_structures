function Node(val){
 this.value = val;
 this.previous;
 this.next;
}

function DLL(){
 this.head;
 this.tail;

 // adds a node to the end of list
 this.addNode = function(val){
  var node = new Node(val);
  if(this.head == undefined){
   this.head = node
   this.tail = this.head
  }else{
   var current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   current.next = node;
   node.previous = current;
   this.tail = this.tail.next;
   return this;
  }
 }

 // adds a node directly before any node who's value matches the val_after passed in the function
 this.insertBefore = function(val,position){
  var node = new Node(val);
  if(this.head == undefined){
   return false;
  }else if(position == 0){
   node.next = this.head;
   this.head.previous = node;
   this.head = node;
   return this;
  }
  var count = 0;
  var current = this.head;
  while(current != undefined){
   if(position == count){
    node.next = current;
    node.previous = current.previous;
    current.previous.next = node;
    current.previous = node;
    return this;
   }else{
    current = current.next;
    count += 1;
   }
  }
  return false;
 }

 // return true if the list contains a value that matches the value passed to the function (return false if not found)
 this.findNode = function(val){
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

 // return the total amount of nodes who's value mathes the value passed into the function
 this.findNodesWithValueOf = function(val){
  var count = 0;
  var current = this.head;
  while(current != undefined){
   if(current.value == val){
    count += 1;
   }
   current = current.next;
  }
  return count;
 }

 // return true if node is at the position passed into the function (checked on a 0 index)
 this.findPosition = function(position){
  if(position < 0 || this.head == undefined){
   return false;
  }
  var counter = 0;
  var current = this.head;

  while(current != null){
   if(counter == position){
    return true;
   }else{
    current = current.next;
    counter += 1;
   }
  }
  return false;
 }

 // removes the first node found who's value matches the value passed into the function
 this.removeNode = function(val){
  if(this.head == undefined){
   return false;
  }else if(this.head.value == val && this.tail.value == val && this.head.next == undefined){
   this.head = undefined;
   this.tail = undefined;
  }else if(this.head.value == val){
   this.head = this.head.next;
   this.head.previous = undefined;
  }else{
   var current = this.head;
   while(current != undefined){
    if(current.value == val && this.tail.value == current.value){
      this.tail = current.previous;
      current.previous.next = undefined
      return this;
    }else if(current.value == val){
     current.previous.next = current.next;
     current.next.previous = current.previous;
     return this;
    }
    current = current.next;
   }
  }

 }

 // removes all nodes who's value matches the value passed into the function
 this.removeAllNodesWithValueOf = function(val){
  var num_nodes_to_delete = this.findNodesWithValueOf(val);
  for(var i = 0; i < num_nodes_to_delete; i++){
   this.removeNode(val);
  }
  return this;
 }

 // gathers all of the nodes and places them inside of an array which will make it easier to view the entire list
 this.showList = function(){
  var array = [];
  var current = this.head;
  while(current != undefined){
   var previous_value;
   var next_value;
   if(current.previous != undefined){
    previous_value = current.previous.value;
   }else{
    previous_value = undefined
   }

   if(current.next != undefined){
    next_value = current.next.value;
   }else{
    next_value = undefined
   }
   var obj = {
    "node_value" : current.value,
    "previous_value": previous_value,
    "next_value": next_value
   };
   array.push(obj);
   current = current.next
  }
  return array;
 }


}
