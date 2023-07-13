// Function: processPayment
// Takes one argument amount (number)
// Logs to the console Collecting payment of <amount>
function processPayment(amount) {
    console.log('Collecting payment of ' + amount);
  }
  
  // Function: processOrder
  // Takes two arguments orderId (number), and amount (number)
  // Logs to the console <orderId> is being processed
  // Calls the function processPayment
  // Logs to the console <orderId> has been fully processed
  function processOrder(orderId, amount) {
    console.log(orderId + ' is being processed');
    processPayment(amount);
    console.log(orderId + ' has been fully processed');
  }
  
  // Main part of the code
  // Logs to the console Processing orders
  console.log('Processing orders');
  
  // Call processOrder with 12321 and 10.99
  processOrder(12321, 10.99);
  
  // Call processOrder with 12322 and 12.99
  processOrder(12322, 12.99);
  
  // Call processOrder with 12323 and 15.0
  processOrder(12323, 15.0);
  
  // Logs to the console All the orders have been processed
  console.log('All the orders have been processed');
  