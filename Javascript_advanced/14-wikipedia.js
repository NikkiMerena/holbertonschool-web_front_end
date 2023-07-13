function createElement(data) {
    // Create a new paragraph element
    const paragraph = document.createElement('p');
  
    // Set the content of the paragraph to the provided data
    paragraph.textContent = data;
  
    // Append the paragraph to the document body
    document.body.appendChild(paragraph);
  }
  
  function queryWikipedia(callback) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Define the URL to fetch the Stack Overflow article from the Wikipedia API
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  
    // Open the XMLHttpRequest with a GET request to the specified URL
    xhr.open('GET', url, true);
  
    // Define the onload event handler for when the request is complete
    xhr.onload = function() {
      // Check if the status code is 200 (OK)
      if (xhr.status === 200) {
        // Parse the response JSON
        const response = JSON.parse(xhr.responseText);
  
        // Get the page ID of the Stack Overflow article
        const pageId = Object.keys(response.query.pages)[0];
  
        // Get the extract (content) of the article
        const extract = response.query.pages[pageId].extract;
  
        // Call the provided callback function with the extract
        callback(extract);
      }
    };
  
    // Send the XMLHttpRequest
    xhr.send();
  }
  
  // Call queryWikipedia with createElement as the callback function
  queryWikipedia(createElement);
