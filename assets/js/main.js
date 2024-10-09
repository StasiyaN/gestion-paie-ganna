document.addEventListener('DOMContentLoaded', function(){
  console.log ('main script ok');

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
    
    // Check if the 'active' class is applied
    if (links.classList.contains('active')) {
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling on the body when the menu is closed
        document.body.style.overflow = '';
    }
});

 // Get the current year and update the span with id="year"
 document.getElementById("year").textContent = new Date().getFullYear();

})