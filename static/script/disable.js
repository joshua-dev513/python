document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'a') {
      event.preventDefault();
      alert('Text selection is disabled!');
    }
  });
  
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  image.addEventListener('dragstart', function(event) {
  event.preventDefault();
  });
  document.body.style.cursor = 'default';