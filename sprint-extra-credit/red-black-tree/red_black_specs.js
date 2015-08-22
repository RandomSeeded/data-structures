describe('test_suite', function() {
  it('should have a working test suite', function() {
  });

  var tree;
  beforeEach(function() {
    tree = new RedBlackTree(18, 0, null);
    bst = new BinarySearchTree(5);
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
    expect(tree.contains(14)).to.equal(false);
  });

  it('should correctly add nodes with fathers who are black', function() {
    tree.insert(12);
    tree.insert(24);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(24)).to.equal(true);
    expect(tree.contains(25)).to.equal(false);
  });

  /*it('should correctly add balanced leaves', function() {
    tree.insert(12);
    tree.insert(24);
    tree.insert(9);
    tree.insert(15);
    tree.insert(21);
    tree.insert(27);
    expect(tree.contains(12)).to.equal(true);
    expect(tree.contains(21)).to.equal(true);
    expect(tree.contains(28)).to.equal(false);
  });*/

});
