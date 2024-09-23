// Function to load the header and footer
function includeHTML() {
    let elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(function(el) {
      let file = el.getAttribute('data-include');
      
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => console.error('Error loading file: ', err));
    });
  }
  
  // Call the function after DOM is loaded
  window.onload = includeHTML;
  