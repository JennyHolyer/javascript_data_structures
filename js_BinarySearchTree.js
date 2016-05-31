function Node(val){
 this.value = val;
 this.left;
 this.right;


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
}

function BST(){
 this.root;

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

 this.isEmpty = function(){
  if(this.root == undefined){
   return true;
  }else{
   return false;
  }
 }

 this.size = function(){
  if(this.root == undefined){
   return 0;
  }
  return this.root.size();
 }

 this.height = function(){
  if(this.root == undefined){
   return 0;
  }else{
   return this.root.height();
  }
 }

}

var list = new BST();
list.add(3);
list.add(8);
list.add(1);
list.add(9);
list.add(15);
list.add(14);

list.add(16);
console.log(list.height());
// console.log(list);
