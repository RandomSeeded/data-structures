// This function is the CONSTRUCTOR
var Stack = function() {
  this.storage = {}; 
  // (note that we CANNOT SIMPLY do this = {}, so we have to modify the other elements to operate on this.storage[] instead of simply this[]
  this.numElements = 0;
};

Stack.prototype.push = function(value) {
  var storage = this.storage;
  storage[this.numElements] = value;
  this.numElements++;
};

Stack.prototype.pop = function() {
  this.numElements = Math.max(this.numElements-1, 0);
  return this.storage[this.numElements];
};

Stack.prototype.size = function() {
  return this.numElements;
};

