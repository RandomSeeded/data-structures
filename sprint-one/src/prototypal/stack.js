var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // key to prototypal: we won't extend, but we will create a separate object (as a prototype) which has the appropriate functions. Here that separate object will be stackMethods

  var storage = Object.create(stackMethods);
  storage.numElements = 0;

  return storage;
};

var stackMethods = {
  push: function(value) {
    this[this.numElements] = value;
    this.numElements++;
  },
  pop: function() {
    this.numElements = (this.numElements === 0 ) ? 0 : this.numElements-1;
    return this[this.numElements];
  },
  size: function() {
    return this.numElements;
  }
};


