var Queue = function() {
  this.storage = {};
  this.numElements = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.numElements] = value;
  this.numElements++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  for (var i = 0; i < this.numElements-1; i++) {
    this.storage[i] = this.storage[i+1];
  }
  this.numElements = Math.max(this.numElements-1,0);
  return result;
};

Queue.prototype.size = function() {
  return this.numElements;
};


