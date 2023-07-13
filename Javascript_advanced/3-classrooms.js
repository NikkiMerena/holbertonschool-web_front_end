// Define a function named createClassRoom that takes an argument numberOfStudents (number)
function createClassRoom(numberOfStudents) {
    // Define a function named studentSeat that takes an argument seat (number)
    function studentSeat(seat) {
      // Return a function that returns the seat number
      return function() {
        return seat;
      };
    }
  
    // Create an empty array to store the students
    var students = [];
  
    // Use a loop to populate the students array
    for (var i = 0; i < numberOfStudents; i++) {
      // Calculate the seat number
      var seatNumber = i + 1;
      // Call the studentSeat function with the seatNumber and store the returned function in a variable
      var student = studentSeat(seatNumber);
      // Add the student function to the students array
      students.push(student);
    }
  
    // Return the students array
    return students;
  }
  
  // Call the createClassRoom function with 10 as the numberOfStudents argument and store the result in a variable named classRoom
  var classRoom = createClassRoom(10);
  
  // Testing
  // Call the function at index 0 of the classRoom array and display the returned seat number (1)
  console.log(classRoom[0]());
  // Call the function at index 3 of the classRoom array and display the returned seat number (4)
  console.log(classRoom[3]());
  // Call the function at index 9 of the classRoom array and display the returned seat number (10)
  console.log(classRoom[9]());
  