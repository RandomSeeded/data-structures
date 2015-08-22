// INHERITANCE! Sweet
// Contains and depthfirstlog are inherited

var _root;
function RedBlackTree(value, color, father) {
  this.color = color;
  this.father = father;
  this.left = null;
  this.right = null;
  this.value = value;
  
  // Insertion Case 1: current node is at the root of the tree
  if (father === null) { _root = this; }
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
    var newTree = new RedBlackTree(value, 1, this);

    // Insert node
    if (value < this.value) { this.left = newTree; }
    else { this.right = newTree; }

    // Insertion Case 2: the node to be inserted's parent is BLACK
    if (newTree.father && newTree.father.color !== 1) {
      // (no action, leaving here for conceptual clarity atm)
    }

    else {
      newTree.getRelationships(newTree); // assigns father, grandfather, uncle

      // Insertion Case 3: both the PARENT and UNCLE are RED
      if (newTree.father && newTree.father.color === 1 && newTree.uncle && newTree.uncle.color === 1) {
        debugger;
        newTree.repaintAncestors();
      }
    }
  }
};

RedBlackTree.prototype.getRelationships = function() {
  var father = this.father;
  this.grandfather = (father !== null) ? father.father : null;
  this.uncle;
  var grandfather = this.grandfather; // for purposes of not retyping
  if (grandfather && grandfather.left === father) { this.uncle = grandfather.right; }
  else if (grandfather && grandfather.right === father) { this.uncle = grandfather.left; }
  else { this.uncle = null; }
};

RedBlackTree.prototype.repaintAncestors = function() {
  this.father.color = 0;
  this.uncle.color = 0;
  this.grandfather.color = 1;
  var grandfather = this.grandfather; // for purposes of not retyping
  if (grandfather === _root) {
    grandfather.color = 0;
  }
  else if (grandfather.father && grandfather.father.color === 1) {
    grandfather.repaintAncestors();
  }
};

