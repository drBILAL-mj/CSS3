const more_info = document.getElementById('more_info');
//  initiating animation on click
circle.addEventListener('click', () => {
   circle.classList.add('animate');

    // resetting animation - remove class after animation ends
    circle.addEventListener('animationend', () => {
      circle.classList.remove('animate'); 
    }, { once: true });   
    });
