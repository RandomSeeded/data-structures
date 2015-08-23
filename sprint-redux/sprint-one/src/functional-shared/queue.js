var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.first = 0;
  storage.last = 0;
  _.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.last++] = value;
  },
  dequeue: function() {
    if (this.size() === 0) { return null; }
    return this[this.first++];
  },
  size: function() {
    return this.last - this.first;
  }
};

