// NOTE: done in PSEUDOCLASSICAL style
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = {edges: {}, value: node};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return (this.storage[node] !== undefined);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  // NOTE: you didnt remove the node from other nodes' edges
  var returnNode = this.storage[node];
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return (this.storage[fromNode].edges[toNode] !== undefined)
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // could put in a node-doesnt-exist check here
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // again, an existence check
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var node in this.storage) {
    if (this.storage.hasOwnProperty(node)) {
      cb(this.storage[node].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



