function Node(val){
 this.value = val;
 this.next;
}

function SLL(){
 this.head;

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

 this.isEmpty = function(){
  if(this.head == undefined){
   return true;
  }else{
   return false;
  }
 }

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
