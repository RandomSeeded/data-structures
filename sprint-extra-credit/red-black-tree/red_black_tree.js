// INHERITANCE! Sweet
// Contains and depthfirstlog are inherited

var _root;
function RedBlackTree(value, color, father) {
  this.color = color;
  this.father = father;
  if (father === null) { _root = this; }
  tree.left = null;
  tree.right = null;
}

RedBlackTree.prototype = Object.create(BinarySearchTree.prototype);

RedBlackTree.prototype.getRoot = function() {
  return _root;
};

// Insert is overwritten
RedBlackTree.prototype.insert = function(value) {
};

