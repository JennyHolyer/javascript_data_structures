function Node(){
  this.links = {};
  this.endOfWord = false;

  this.delete = function(word,index,current){
    var letter = word[index - 1];

    //only the last node should pass the condition
    if(index == word.length){

      if(Object.keys(current['links'][letter]['links']).length == 0){
          delete current['links'][letter];

          if(current['endOfWord'] == false && Object.keys(current['links']).length == 0 ){
            return "delete";
          }else{
            return "continue";
          }

        }else{
          current['links'][letter]['endOfWord'] = false;
          return "continue";
        }
    }

    var status =  current['links'][letter].delete(word, index + 1, current['links'][letter]);

    if(status == "delete"){
      delete current['links'][letter];
      if(current['endOfWord'] == false && Object.keys(current['links']).length == 0 ){
        return "delete";
      }else{
        return "continue";
      }
    }

    return status;
  }

}


function Trie(){
  this.root = new Node();

  this.add = function(word){
    var current = this.root;

    for(var i = 0; i < word.length; i++){
      if(!(word[i] in current['links'])){
        current['links'][word[i]] = new Node();
      }
      current = current['links'][word[i]]
    }

    current['endOfWord'] = true;
  }

  this.contains = function(word){
    var current = this.root;

    for(var i = 0; i < word.length; i++){

      if(word[i] in current['links']){
        current = current['links'][word[i]];
      }else{
        return false;
      }

    }
    return current['endOfWord'];
  }

  this.delete = function(word){

    if(!this.contains(word)){
        return false;
      }

    return this.root.delete(word,1,this.root)

  }

}


var trie = new Trie();
trie.add("race");
trie.add("racecar");
trie.delete("race");

console.log(trie.contains("racecar"));
