  var myBloom = new BloomFilter(18, 3);
  myBloom.add('kitties');
  myBloom.add('puppies');
  myBloom.add('flowers');
  myBloom.add('skulls');
  console.log(myBloom.lookup('kitties'));
  console.log(myBloom.lookup('bones'));
  console.log(myBloom.lookup('dogs'));
  console.log(myBloom.lookup('cats')); // FALSE POSITIVE
