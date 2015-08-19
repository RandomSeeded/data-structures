// NOTE: done in PSEUDOCLASSICAL style
// Thoughts: we need some way in which we store these nodes
// Option 1: we add the first node as the 'head' and then traverse edges.
//  This is a bad idea, because then we cannot add a node without an edge. It will disappear
// Option 2: We store all of these nodes in an array
//  This could work

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  // Remember: b/c this is called with the New keyword, this is now an empty object
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  debugger;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) { return true; }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



