function Node(val){
 this.value = val;
 this.next;
}

function SLL(){
 this.head;

 // adds a node to the end of list
 this.addNode = function(val){
  if(this.head == undefined){
   this.head = new Node(val);
   return this;
  }else{
   current = this.head;
   while(current.next != undefined){
    current = current.next;
   }
   current.next = new Node(val);
  }
 }

 // removes the node who's value matches the value passed in (returns false if not found)
 this.removeNode = function(val){
  if(this.head == undefined){
   return false;
  }
  if(this.head.value == val){
   this.head = this.head.next;
   return true
  }else{
   current = this.head;
   while(current.next != undefined){
    if(current.next.value == val){
     current.next = current.next.next;
     return true;
    }else{
     current = current.next;
    }
   }
   return false;
  }
 }

 // return true if the list contains a value that matches the value passed to the function (return false if not found)
 this.find = function(val){
  if(this.head == undefined){
   return false;
  }
  var current = this.head;
  while(current != undefined){
   if(current.value == val){
    return true;
   }else{
    current = current.next
   }
  }
  return false;
 }

 // adds a node directly after any node who's value matches the val_after passed in the function
 this.insert = function(val, val_after){
  if(this.head == undefined){
   return false;
  }
  var current = this.head;
  while(current != undefined){
   if(current.value == val_after){
    var newNode = new Node(val);
    newNode.next = current.next;
    current.next = newNode;
    return true
   }else{
    current = current.next;
   }
  }
  return false;
 }

 // return true if the list is empty
 this.isEmpty = function(){
  if(this.head == undefined){
   return true;
  }else{
   return false;
  }
 }

 // removes all of the duplicate nodes who's values match the value passed to the function
 this.removeDups = function(val){
  var count = 0;
  var current = this.head;
  while(current != undefined){
   if(current.value == val){
    count += 1;
   }
   current = current.next
  }

  if(count > 1){
   for(var i = 0; i < count;i++){
    this.removeNode(val);
   }
   return true;
  }else{
   return false;
  }
 }

 // gathers all of the nodes and places them inside of an array which will make it easier to view the entire list
 this.showList = function(){
  var array = [];
  var current = this.head;
  while(current != undefined){
   array.push(current.value);
   current = current.next;
  }
  return array;
 }

}
