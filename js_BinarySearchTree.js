function Node(val){
 this.value = val;
 this.left;
 this.right;

 //returns the total number of nodes in the bst
 this.size = function(){
  size = 1
  if(this.left != undefined){
   size += this.left.size();
  }
  if(this.right != undefined){
   size += this.right.size();
  }
  return size;
 }

 //returns the height, which is the longest sequence of nodes from the root to leaf node
 this.height = function(){

  var right = 0;
  var left = 0;

  if(this.left != undefined){
   left += this.left.height();
  }

  if(this.right != undefined){
   right += this.right.height();
  }

  if(right >= left){
   return 1 + right;
  }else{
   return 1 + left;
  }
 }

 //boolean check to see if the structure of the bst is valid
 this.valid = function(min,max){
  if(min == undefined){
   min = 0;
   max = 100;
  }

  if(this.value > max || this.value < min){
   return false;
  }
  var valid = true;

  if(this.left){
   valid = this.left.valid(min, this.value);
  }

  if(this.right){
   valid = this.right.valid(this.value, max);
  }

  return valid;

 }

 //boolean check to see if the bst is balanced correctly
 this.balanced = function(){
  var left_sum = 0;
  var right_sum = 0;

  if(this.left != undefined){
   left_sum += this.left.balanced();
  }

  if(this.right != undefined){
   right_sum += this.right.balanced();
  }

  if(left_sum == -1 || right_sum == -1 || Math.abs(left_sum - right_sum) > 1){
   console.log(this.value);
   return -1;
  }

  return Math.max(left_sum,right_sum) + 1

 }

}


function BST(){
 this.root;

 //adds a new node to the bst
 this.add = function(val){
  var node = new Node(val);
  if(this.root == undefined){
   this.root = node;
   return this;
  }else{
   var current = this.root;
   while(true){
    if(current.value > val){
     if(current.left != undefined){
      current = current.left;
     }else{
      current.left = node;
      return this;
     }
    }else if(current.value < val){
     if(current.right != undefined){
      current = current.right;
     }else{
      current.right = node;
      return this;
     }
    }
   }
  }
 }

 //boolean check to see if a particular node is inside of the bst
 this.contains = function(val){
  if(this.root == undefined){
   return false;
  }else{
   var current = this.root;
   while(true){
    if(current.value < val){
     if(current.right == undefined){
      return false;
     }else{
      current = current.right;
     }
    }else if(current.value > val){
     if(current.left == undefined){
      return false;
     }else{
      current = current.left;
     }
    }else{
     return true;
    }
   }

  }
 }

 //returns the node with the smallest value
 this.min = function(){
  if(this.root == undefined){
   return false;
  }else{
   var current = this.root;
   while(current.left != undefined){
    current = current.left;
   }
   return current.value;
  }
 }

 //returns the node with the largest value
 this.max = function(){
  if(this.root == undefined){
   return false;
  }else{
   var current = this.root;
   while(current.right != undefined){
    current = current.right;
   }
   return current.value;
  }
 }

 //boolean check to see if the bst is empty
 this.isEmpty = function(){
  if(this.root == undefined){
   return true;
  }else{
   return false;
  }
 }

 //returns the total number of nodes in the bst
 this.size = function(){
  if(this.root == undefined){
   return 0;
  }
  return this.root.size();
 }

 //returns the height, which is the longest sequence of nodes from the root to leaf node
 this.height = function(){
  if(this.root == undefined){
   return 0;
  }else{
   return this.root.height();
  }
 }

 //boolean check to see if the structure of the bst is valid
 this.valid = function(){
  if(this.root == undefined){
   return true;
  }else{
   return this.root.valid();
  }
 }

 //boolean check to see if the bst is balanced correctly
 this.balanced = function(){
  if(this.root == undefined){
   return true;
  }else{
   return this.root.balanced() >= 0;
  }
 }

}

// var list = new BST();
// list.add(3);
// list.add(8);
// list.add(1);
// list.add(9);
//
// list.add(2);
//
//
// console.log(list.balanced());
