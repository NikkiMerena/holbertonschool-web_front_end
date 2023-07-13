// Global variable
var globalVariable = 'Welcome';

// Outer function
function outer() {
  alert(globalVariable); // Display 'Welcome'
  
  var course = 'Holberton';
  
  // Inner function
  function inner() {
    alert(globalVariable + ' ' + course); // Display 'Welcome Holberton'
    
    var exclamation = '!';
    
    // Inception function
    function inception() {
      alert(globalVariable + ' ' + course + exclamation); // Display 'Welcome Holberton!'
    }
    
    inception(); // Call inception function
  }
  
  inner(); // Call inner function
}

outer(); // Call outer function
