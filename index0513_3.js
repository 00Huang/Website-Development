document.addEventListener("DOMContentLoaded", function () {
  const asideLinks = document.querySelectorAll('aside a');
  const article = document.querySelector('article');

  asideLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          const linkText = this.innerText.trim().toLowerCase();
          switch (linkText) {
              case 'mountain':
                  article.style.backgroundImage = "url('mountains-190055_640.jpg')";
                  break;
              case 'sea':
                  article.style.backgroundImage = "url('beach-8563083_640.jpg')";
                  break;
              case 'desert':
                  article.style.backgroundImage = "url('road-3856796_640.jpg')";
                  break;
              default:
                  article.style.backgroundImage = "";
          }
      });
  });
});

$(document).ready(function () {
  $('#loginForm').submit(function (e) {
    e.preventDefault(); // Prevent form submission

    var username = $('#username').val();
    var password = $('#password').val();

    // Check if username and password are not empty
    if (username && password) {
      alert('Username: ' + username + '\nPassword: ' + password);
    } else {
      alert('Please enter username and password.');
    }
  });
});


