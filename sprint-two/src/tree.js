var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // NOTE: because we're using treeMethods, we're going to either have to use functional-shared (extend), or prototypal (object.create); Functional-shared will play better with the provided above code
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  if (target === this.value) { return true; }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) { return true; }
  }
  return false; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
