// NOTE: not called with NEW keyword in provided fixtures, so we cannot pseudoclassical.
// Prototypal used instead
var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  // Recursive cases: keep looking down the tree
  if (value < this.value && this.left !== null) { this.left.insert(value); }
  else if (value > this.value && this.right !== null) { this.right.insert(value); }
  // Base case: cannot go any further down the tree
  else {
    var newTree = new BinarySearchTree(value);
    if (value < this.value) { this.left = newTree; }
    else { this.right = newTree; }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) { return true; }
  else if (value < this.value && this.left !== null) { return this.left.contains(value); }
  else if (value > this.value && this.right !== null) { return this.right.contains(value); }
  else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) { 
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
