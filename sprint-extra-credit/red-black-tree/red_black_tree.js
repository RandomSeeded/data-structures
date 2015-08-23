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
}

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
      newTree.getRelationships(); // assigns father, grandfather, uncle
      // For purposes of not retyping
      var father = newTree.father;
      var grandfather = newTree.grandfather;
      var uncle = newTree.uncle;

      // Insertion Case 3: both the PARENT and UNCLE are RED
      if (father && father.color === 1 && uncle && uncle.color === 1) {
        newTree.repaintAncestors();
      }

      // Insertion Cases 4 & 5: the PARENT is red but the UNCLE is black
      if (father.color === 1 && (uncle === null || uncle.color === 1)) {
        // Case 4 rotations (left and right)
        if (newTree === father.right && father === grandfather.left) {
          father.rotateLeft();
          case5(father);
        }
        else if (newTree === father.left && father === grandfather.right) {
          father.rotateRight();
          case5(father);
        }
        else {
          case5(newTree);
        }
      }
    }
  }
  return _root;
};

function case5(node) {
  node.getRelationships();
  var father = node.father;
  var grandfather = node.grandfather;
  var uncle = node.uncle;
  if (father.color === 1 && (uncle === null || uncle.color === 1)) {
    if (node === father.left && father === grandfather.left) {
      grandfather.rotateRight();
    }
    else if (node === father.right && father === grandfather.right) {
      grandfather.rotateLeft();
    }
  }
};

RedBlackTree.prototype.rotateLeft = function() {
  var root = this;
  var pivot = this.right;
  var beta = pivot.left;
  var grandfather = root.father;

  pivot.left = root;
  pivot.father = grandfather;
  root.father = pivot;
  root.right = beta;
  if (grandfather !== null) {
    if (grandfather.right === root) { grandfather.right = pivot; }
    else { grandfather.left = pivot; }
  }
  else { _root = pivot; }
};

RedBlackTree.prototype.rotateRight = function() {
  var root = this;
  var pivot = this.left;
  var beta = pivot.right;
  var grandfather = root.father;

  pivot.right = root;
  pivot.father = grandfather;
  root.father = pivot;
  root.left = beta;
  if (grandfather !== null) {
    if (grandfather.right === root) { grandfather.right = pivot; }
    else { grandfather.left = pivot; }
  }
  else { _root = pivot; }
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

