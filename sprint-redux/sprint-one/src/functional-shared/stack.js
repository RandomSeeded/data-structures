var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage._size = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    this[this._size++] = value;
  },
  pop: function() {
    if (this._size === 0) { return null; }
    this._size--;
    return this[this._size];
  },
  size: function() {
    return this._size;
  }
};


