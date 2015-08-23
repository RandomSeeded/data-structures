var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage._first = 0;
  storage._last = 0;
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this._last++] = value;
  },
  dequeue: function() {
    if (this.size() === 0) { return null; }
    return this[this._first++];
  },
  size: function() {
    return this._last - this._first;
  }
};

