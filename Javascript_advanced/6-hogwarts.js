// Module: studentHogwarts
var studentHogwarts = (function() {
    // Private variables
    var privateScore = 0;
    var name = null;
  
    // Private method
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // Public methods
    return {
      // Public method: setName
      // Takes newName as an argument and sets the private variable name
      setName: function(newName) {
        name = newName;
      },
      // Public method: rewardStudent
      // Calls the private method changeScoreBy with 1 to reward the student
      rewardStudent: function() {
        changeScoreBy(1);
      },
      // Public method: penalizeStudent
      // Calls the private method changeScoreBy with -1 to penalize the student
      penalizeStudent: function() {
        changeScoreBy(-1);
      },
      // Public method: getScore
      // Returns the name and privateScore as a string (ex: Harry: 14)
      getScore: function() {
        return name + ': ' + privateScore;
      }
    };
  })();
  
  // Create instance: harry
  var harry = Object.create(studentHogwarts);
  harry.setName('Harry');
  
  // Reward the student four times
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // Log the name and score
  console.log(harry.getScore());
  
  // Create instance: draco
  var draco = Object.create(studentHogwarts);
  draco.setName('Draco');
  
  // Reward the student one time and penalize three times
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // Log the name and score
  console.log(draco.getScore());
  