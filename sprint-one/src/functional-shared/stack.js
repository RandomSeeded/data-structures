var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};
  storage.numElements = 0;

  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  size: function() {
    return this.numElements;
  },
  push: function(value) {
    this[this.numElements] = value;
    this.numElements++;
  },
  pop: function() {
    this.numElements = (this.numElements === 0) ? 0 : this.numElements-1;
    return this[this.numElements];
  }
};

