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
  const toggleBtn = document.getElementById('toggle-btn');
  const experienceList = document.getElementById('experience-list');

  toggleBtn.addEventListener('click', function() {
      experienceList.classList.toggle('expanded');
      if (experienceList.classList.contains('expanded')) {
          toggleBtn.textContent = 'Afficher moins';
      } else {
          toggleBtn.textContent = 'Afficher plus';
      }
  });


  

})