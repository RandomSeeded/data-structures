// INHERITANCE! Sweet
// Contains and depthfirstlog are inherited

var _root;
function RedBlackTree(value, color, father) {
  this.color = color;
  this.father = father;
  // CASE 1: current node is at the root of the tree
  if (father === null) { _root = this; }
  this.left = null;
  this.right = null;
  this.value = value;
}

RedBlackTree.prototype = Object.create(BinarySearchTree.prototype);

RedBlackTree.prototype.getRoot = function() {
  return _root;
};

// Insert is overwritten
RedBlackTree.prototype.insert = function(value) {
  if (value < this.value && this.left !== null) { this.left.insert(value); }
  else if (value > this.value && this.right !== null) { this.right.insert(value); }
  else {
    debugger;
    var newTree = new RedBlackTree(value, 1, this);
    // CASE 2: the node to be inserted's parent is BLACK
    if (newTree.father && newTree.father.color !== 1) {
      if (value < this.value) { this.left = newTree; }
      else { this.right = newTree; }
    }

    // CASE 3: both the PARENT and GRANDPARENT are RED
  }
};

