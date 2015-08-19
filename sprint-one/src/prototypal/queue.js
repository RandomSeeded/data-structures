var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.numElements = 0;

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.numElements] = value;
    this.numElements++;
  },
  dequeue: function() {
    var result = this[0];
    for (var i = 0; i < this.numElements-1; i++) {
      this[i] = this[i+1];
    }
    this.numElements = (this.numElements === 0) ? 0 : this.numElements-1;
    return result;
  },
  size: function() {
    return this.numElements;
  }
};


