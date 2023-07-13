// Define a function named welcomeMessage that accepts one argument fullName (string)
function welcomeMessage(fullName) {
    // Return a function (closure) that will display an alert with the message 'Welcome' concatenated with the fullName argument
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create three variables and assign them the result of calling the welcomeMessage function with different fullName arguments
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
  // Testing
  // Call the guillaume function, which will display an alert with the message 'Welcome Guillaume'
  guillaume();
  // Call the alex function, which will display an alert with the message 'Welcome Alex'
  alex();
  // Call the fred function, which will display an alert with the message 'Welcome Fred'
  fred();
  