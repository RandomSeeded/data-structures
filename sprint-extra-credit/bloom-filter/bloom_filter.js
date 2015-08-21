function BloomFilter(m, k) {
  this.m = m;
  this.k = k;
  this.vector = [];
}

BloomFilter.prototype.add = function(item) {
  for (var seed = 1; seed <= this.k; seed++) {
    this.vector[hashFn(item, this.m, seed)] = 1;
  }
}

BloomFilter.prototype.lookup = function(item) {
  for (var seed = 1; seed <= this.k; seed++) {
    if (this.vector[hashFn(item, this.m, seed)] !== 1) { return false; }
  }
  return true;
}

function hashFn(item, max, seed) {
  // TODO: understand how this code works
  // ALSO: allow this to work for non-strings
  var hash = 0; // running total
  for (var i = 0; i < item.length; i++) { // for each letter
    hash = (hash<<5) + hash + item.charCodeAt(i); // increment total 
    // NOTE: (hash<<5) EQUIV TO HASH * 31
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }

  // THE FOLLOWING IS A DETERMINISTIC PSEUDO-RANDOM NUMBER GENERATOR: see http://stackoverflow.com/questions/521295/javascript-random-seeds
  seed+=hash;
  function random() {
    var x = Math.sin(seed++) * 10000; // returns -1 to 1 * 10k
    return x - Math.floor(x); // Trim to just the decimal. Like math.random()
  }

  var position = Math.floor(random()*max);
  return position;
}

