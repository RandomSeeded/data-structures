describe('test suite', function() {
  it('should have a working test suite', function() {
    expect(true).to.equal(true);
  });
});
describe('bloom_filter', function() {
  var bloomFilter;
  beforeEach(function() {
    bloomFilter = new BloomFilter(18, 3, 1);
  });

  it('should have a bloom filter', function() {
    expect(bloomFilter).to.be.an('object');
  });

  it('should have functions add and lookup', function() {
    expect(bloomFilter.add).to.be.a('function');
  });

  it('should be able to able to add and lookup items', function() {
    bloomFilter.add('kitties');
    expect(bloomFilter.lookup('kitties')).to.equal(true);
  });

  it('should sometimes return false positives', function() {
    var found = 0;
    bloomFilter.add('kitties');
    bloomFilter.add('puppies');
    bloomFilter.add('flowers');
    bloomFilter.add('skulls');
    bloomFilter.add('candy');
    found += bloomFilter.lookup('cats');
    found += bloomFilter.lookup('dogs');
    found += bloomFilter.lookup('kangaroos');
    found += bloomFilter.lookup('dropbears');
    expect(found).to.be.above(0);
    expect(found).to.be.below(4);
  });

  it('should have a reasonable false positive rate', function() {
    const numTrials = 10000;
    var added = ['kitties', 'puppies', 'flowers', 'candy', 'skulls', 'turtles', 'octopi'];
    var notAdded = ['dropbears','manticores','mean people'];
    var lookups = added.concat(notAdded);

    var found = 0;
    for (var i = 0; i < numTrials; i++) {
      // initialize bloomFilter: changing seed so that we're not running same filter each time
      var seed = i+1;
      bloomFilter = new BloomFilter(18, 3, seed);

      // Add elements to filter
      _.each(added, function(value) {
        bloomFilter.add(value);
      });
      // Lookup elements: count the number of total finds
      _.each(lookups, function(value) {
        found+=bloomFilter.lookup(value);
      });
    }

    // Calculate actual and expected bloom filter false positive percentages
    var actualPct = added.length / lookups.length;
    var foundPct = found / (lookups.length * numTrials); 
    var expectedFalsePct = Math.pow((1 - Math.pow(Math.E,(-1 * 3 * 7 / 18))),3);
    var actualFalsePct = (foundPct - actualPct) * (lookups.length / notAdded.length);
    expect(Math.abs(expectedFalsePct-actualFalsePct)).to.be.below(.05);
  });

});
