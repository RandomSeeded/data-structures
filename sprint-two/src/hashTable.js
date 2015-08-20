var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var replacement = false;
  /*for (var i = 0; i < bucket.length; i++) {
    if (bucket[i].key === k) { 
      bucket[i].value = v;
      replaced = true;
    }
  }*/
  if (!replacement) { bucket.push({key: k, value: v}); }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i].key === k) { return bucket[i].value; }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  //debugger;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
