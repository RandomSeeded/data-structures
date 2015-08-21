describe('test suite', function() {
  it('should have a working test suite', function() {
    expect(true).to.equal(true);
  });
});
describe('bloom_filter', function() {
  var bloomFilter;
  beforeEach(function() {
    bloomFilter = new BloomFilter(18, 3);
  });

  it('should have a bloom filter', function() {
    expect(bloomFilter).to.be.an('object');
  });

  debugger;
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
    found += bloomFilter.lookup('cats');
    found += bloomFilter.lookup('dogs');
    found += bloomFilter.lookup('kangaroos');
    expect(found).to.be.above(0);
    expect(found).to.be.below(3);
  });

  it('should have a reasonable false positive rate', function() {
    const numTrials = 100;
    for (var trial = 0; i < numTrials; i++) {
    }
  }

});
