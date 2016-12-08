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

  if(this.right && valid != false){
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
   return -1;
  }

  return Math.max(left_sum,right_sum) + 1

 }

 //iterates through the bst and prints out all of the values in order
 this.traverse = function(){
    if(this.left){
      this.left.traverse();
    }
    console.log(this.value);
    if(this.right){
      this.right.traverse();
    }

    return;
  }

 //return the max node
 this.max = function(){
    if(this.right == undefined){
      return this;
    }else{
      this.right.max();
    }
  }
  
  //returns the min node
  this.min = function(){
    if(this.left == undefined){
      return this;
    }else{
      this.right.min();
    }
  }

  //removes the node with value passed in
  this.remove = function(val, parent, side){

      if(this.value == val){
        if(this.left){
          this.left.max().right = this.right;
          if(side == "right"){
            parent.right = this.left;
          }else{
            parent.left = this.left;
          }

        }else{
          if(side == "right"){
            parent.right = this.right;
          }else{
            parent.left = this.right;
          }
        }
        return true;
      }else if(this.value > val && this.left){
        return this.left.remove(val,this, "left");
      }else if(this.value < val && this.right){
        return this.right.remove(val,this, "right");
      }else{
        return false;
      }

  }

 //traverses the bst and returns an array with the numbers in order
 this.toArray = function(arr){

   if(this.left){
     this.left.toArray(arr);
   }

   arr.push(this.value);

   if(this.right){
     this.right.toArray(arr);
   }

   return arr;
 }

 //return the min height from the root node
 this.minHeight = function(){
   var left_height = 1;
   var right_height = 1;

   if(this.left){
     left_height += this.left.minHeight();
   }

   if(this.right){
     right_height += this.right.minHeight();
   }

   if(left_height <= right_height){
     return left_height;
   }else{
     return right_height;
   }

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

 //iterates through the bst and prints out all of the values in order
 this.traverse = function(){
    if(!this.root){
      return undefined;
    }

    return this.root.traverse();
  }

 //removes the node with value passed in
 this.remove = function(val){
    if(!this.root){
      return false;
    }else if (this.root.value == val){
      if(this.root.left){
        this.root.left.max().right = this.root.right;
        this.root = this.root.left;
      }else{
        this.root = this.root.right;
      }
    }else{

      if(this.root.value > val && this.root.left){
        return this.root.left.remove(val,this.root, "left");
      }else if(this.root.value < val && this.root.right) {
        return this.root.right.remove(val,this.root, "right");
      }

    }

  }

 //traverses the bst and returns an array with the numbers in order
 this.toArray = function(){
   if(this.root == undefined){
     return [];
   }

   return this.root.toArray([]);
 }

 //return the min height from the root node
 this.minHeight = function(){
   if(this.root == undefined){
     return 0;
   }

   return this.root.minHeight();
 }
}

var list = new BST();
list.add(30);
list.add(10);
list.add(40);
list.add(38);
list.add(50);
// list.add(5);
console.log(list.minHeight());
