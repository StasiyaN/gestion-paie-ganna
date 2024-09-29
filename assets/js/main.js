document.addEventListener('DOMContentLoaded', function(){
  console.log ('main script ok');

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

  //show more other experience
// Get the elements
const toggleBtn = document.getElementById('toggle-btn');
const experienceList = document.getElementById('experience-list');

// Check if both elements exist before adding the event listener
if (toggleBtn && experienceList) {
    toggleBtn.addEventListener('click', function() {
        // Toggle the 'expanded' class on the experience list
        experienceList.classList.toggle('expanded');

        // Change the button text based on whether the list is expanded
        if (experienceList.classList.contains('expanded')) {
            toggleBtn.textContent = 'Afficher moins'; // Show "Afficher moins" if expanded
        } else {
            toggleBtn.textContent = 'Afficher plus'; // Show "Afficher plus" if collapsed
        }
    });
}


  //burger menu handler
    // Get the burger menu icon and the links container
    const burgerMenu = document.querySelector('.burger-menu-icon');
    const links = document.querySelector('.links');
    

    // Add click event listener to the burger menu
    burgerMenu.addEventListener('click', () => {
        // Toggle the 'active' class on the links container
        links.classList.toggle('active');
        burgerMenu.classList.toggle('open');
    });



})