//TODO: allow this code to be looped over stacks & queues. As of now is dupliated
$(document).ready(function() {
  const numStructures = 10000;
  const numTests = 1000;
  const numIters = 5;
  const maxValue = 5;

  // Keep track of runtimes
  var stackTimes = [];
  var queueTimes = [];
  // Perform runtime tests multiple times
  for (var iter = 0; iter < numIters; iter++) {
    var stackStart = Date.now();
    var stacks = [];
    for (var i = 0; i < numStructures; i++) {
      stacks.push(new Stack());
    }
    var stackMethods = ['push','pop'];

    // Run random method on all structures with random value
    for (var i = 1; i < numTests; i++) {
      var method = stackMethods[Math.floor(Math.random()*stackMethods.length)];
      var value = Math.ceil(Math.random()*maxValue);
      _.invoke(stacks, method, value);
    };
    var stackEnd = Date.now();
    stackTimes.push(stackEnd-stackStart);

    // REPEATED FOR QUEUES
    var queueStart = Date.now();
    var queues = [];
    for (var i = 0; i < numStructures; i++) {
      queues.push(new Queue());
    }
    var queueMethods = ['enqueue', 'dequeue']
    for (var i = 1; i < numTests; i++) {
      var method = queueMethods[Math.floor(Math.random()*queueMethods.length)];
      var value = Math.ceil(Math.random()*maxValue);
      _.invoke(queues, method, value);
    };
    var queueEnd = Date.now();
    queueTimes.push(queueEnd-queueStart);
  }

  // Calculate and print average runtimes
  var avgStackTime = stackTimes.reduce(function(total, curr) {
    return total+curr;
  }, 0) / numIters;
  console.log("Average stack time: "+avgStackTime+"ms avg over 5 tests to run "+numTests+" random operations on "+numStructures+" structures.");

  var avgQueueTime = queueTimes.reduce(function(total, curr) {
    return total+curr;
  }, 0) / numIters;
  console.log("Average queue time: "+avgQueueTime+"ms avg over 5 tests to run "+numTests+" random operations on "+numStructures+" structures.");
});
