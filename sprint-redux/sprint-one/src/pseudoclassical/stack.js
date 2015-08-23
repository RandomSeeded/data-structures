var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this[this._size++] = value;
}

Stack.prototype.pop = function() {
  if (this._size === 0) { return null; }
  this._size--;
  return this[this._size];
}

Stack.prototype.size = function() {
  return this._size;
}


