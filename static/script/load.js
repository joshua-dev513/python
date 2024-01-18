document.addEventListener('DOMContentLoaded', function() {
  
    setTimeout(function() {
      document.querySelectorAll('#sr-logo').forEach(logo => {
        logo.style.opacity = '1';
      })
    }, 500);

    setTimeout(function() {
      document.querySelectorAll('#sr-logo').forEach(logo => {
        logo.style.opacity = '0';
      })
      setTimeout(function() {
        document.querySelectorAll('#sr-logo').forEach(logo => {
          window.location.href = "/load";
        })
      }, 2000);
    }, 4000);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var statusElement = document.getElementById('status');

    // Initializing phase
    var initializingInterval = setInterval(function() {
      document.querySelectorAll('#status').forEach(statusElement => {
        var text = statusElement.innerText;
        if (text.length < 15) {
          statusElement.innerText += '.';
        } else {
          statusElement.innerText = 'Initializing.';
        }
      })
    }, 200);

    // Connecting phase
    setTimeout(function() {
      clearInterval(initializingInterval);
      
      var connectingInterval = setInterval(function() {
        document.querySelectorAll('#status').forEach(statusElement => {
          var text = statusElement.innerText;
          if (text.length < 15) {
            statusElement.innerText += '.';
          } else {
            statusElement.innerText = 'Connecting.';
          }
        })
      }, 150);

      // Ready phase
      setTimeout(function() {
        clearInterval(connectingInterval);
        statusElement.innerText = 'Ready!';
        setTimeout(function() {
          window.location.href = "/play";
        }, 2000);
      }, 4000);
    }, 5000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.body.style.cursor = "none";
});