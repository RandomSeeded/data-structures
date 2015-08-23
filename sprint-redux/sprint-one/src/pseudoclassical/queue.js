var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._first = 0;
  this._last = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this._last++] = value;
}

Queue.prototype.dequeue = function(value) {
  if (this.size() === 0) { return null; }
  return this[this._first++];
}

Queue.prototype.size = function(value) {
  return this._last - this._first;
}


