// TODO: convert the tuple object to a tuple array. Not hard, maybe not best use of my time
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var replacement = false;
  for (var idx = 0; idx < bucket.length; idx++) {
    if (bucket[idx].key === k) { 
      bucket[idx].value = v;
      replaced = true;
    }
  }
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

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var replaceIdx = bucket.reduce(function(idx, elem, index) {
    if (elem.key === k) { return index; }
    return idx;
  }, -1);
  return bucket.splice(replaceIdx, 1).value;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
