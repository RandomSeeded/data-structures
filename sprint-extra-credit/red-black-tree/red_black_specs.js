describe('test_suite', function() {
  it('should have a working test suite', function() {
  });

  var tree;
  beforeEach(function() {
    tree = new RedBlackTree(18, 0, null);
    //bst = new BinarySearchTree(5);
    debugger;
  });

  it('should inherit methods contains and depthFirstLog', function() {
    expect(tree.contains).to.be.a('function');
    expect(tree.depthFirstLog).to.be.a('function');
  });

  it('should not overwrite BST insert', function() {
    expect(bst.insert(5)).to.not.equal(true);
  });

  it('should initialize root', function() {
    expect(tree.getRoot()).to.not.equal(null);
  });

  it('should correctly add an initial node', function() {
    expect(tree.contains(18)).to.equal(true);
  });

});
