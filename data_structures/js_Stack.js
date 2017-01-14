function Node(val){
 this.value = val;
}

function Stack(){
 this.stack = [];


 // adds a new node to the back of the list
 this.push = function(val){
   this.stack.push(new Node(val));
 }

 // return the value of node at the top of the stack (the last node added to the stack)
 this.top = function(){

   if(this.stack.length === 0){
     return false;
   }else{
     return this.stack[this.stack.length - 1];
   }

 }

 // removes and returns the last node added to the stack which should always be the first one out
 this.pop = function(){
   return this.stack.pop();
 }

 // return true if the stack in empty and false if not
 this.isEmpty = function(){
   if(this.stack.length === 0){
     return true;
   }else{
     return false;
   }
 }

 // returns ture if the stack has a node who's value matches the value passed to the function
 this.contains = function(val){
   for(var i = 0; i < this.stack.length; i++){
     if(this.stack[i].value === val){
       return true;
     }
   }
   return false;
 }

 // return the size of the stack (how many nodes are inside of the node)
 this.size = function(){
   return this.stack.length;
 }

 // gathers all of the nodes and places them inside of an array which will make it easier to view the entire list
 this.showStack = function(){
  return this.stack;
 }

}
