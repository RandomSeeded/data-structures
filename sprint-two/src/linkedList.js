// NOTE: done in FUNCTIONAL STYLE
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // NOTE TO SELF:
    // The reason we need use the new keyword here:
    // var foo = bar(); BAR() is evaluated with THIS = WINDOW.
    // var foo = new bar(); BAR() is evaluated with THIS = a new object
    var node = new Node(value);
    node.prev = list.tail;
    list.tail = node;

    // If this is the first node, it is also the head
    if (list.head === null) { list.head = node; }
    // If it's not the first node, we need to add a pointer from the prev node
    else { node.prev.next = node; }
  };

  list.removeHead = function(){
    debugger;
    var node = list.head;
    list.head = node.next;
    return node.value;
  };

  list.contains = function(target){
    var node = list.head;
    while (node !== null) {
      if (node.value === target) { return true; }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
