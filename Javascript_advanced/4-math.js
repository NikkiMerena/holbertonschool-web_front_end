// Function: divideBy
// Takes firstNumber as an argument and returns a function
// The returned function takes secondNumber as an argument and returns the result of dividing secondNumber by firstNumber
function divideBy(firstNumber) {
    return function(secondNumber) {
      return secondNumber / firstNumber;
    };
  }
  
  // Function: addBy
  // Takes firstNumber as an argument and returns a function
  // The returned function takes secondNumber as an argument and returns the sum of firstNumber and secondNumber
  function addBy(firstNumber) {
    return function(secondNumber) {
      return firstNumber + secondNumber;
    };
  }
  
  // Create closures
  var addBy100 = addBy(100);
  var addBy1000 = addBy(1000);
  var divideBy10 = divideBy(10);
  var divideBy100 = divideBy(100);
  
  // Testing
  console.log(addBy100(20));       // Display 120
  console.log(divideBy10(20));     // Display 2
  console.log(divideBy100(200));   // Display 2
  console.log(addBy1000(20));      // Display 1020
