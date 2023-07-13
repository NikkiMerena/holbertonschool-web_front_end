// Function: changeMode
// Accepts size, weight, transform, background, and color as arguments
// Changes the style of the entire page using closure
function changeMode(size, weight, transform, background, color) {
    // Set the style properties of the body element
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
  
  // Function: main
  // Creates different modes and adds buttons to the page for changing the CSS themes
  function main() {
    // Set the spooky mode
    var spooky = function() {
      changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    };
  
    // Set the dark mode
    var darkMode = function() {
      changeMode(12, 'bold', 'capitalize', 'black', 'white');
    };
  
    // Set the scream mode
    var screamMode = function() {
      changeMode(12, 'normal', 'lowercase', 'white', 'black');
    };
  
    // Add a paragraph to the body with the text "Welcome Holberton!"
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    // Add a button for spooky mode
    var spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);
  
    // Add a button for dark mode
    var darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);
  
    // Add a button for scream mode
    var screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
  }
  
  // Call the main function
  main();
  