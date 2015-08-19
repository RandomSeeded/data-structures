var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    size = (size === 0) ? 0 : size-1;
    return storage[size];
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
