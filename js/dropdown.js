
  document.addEventListener('DOMContentLoaded', function () {
    const productsLink = document.getElementById('productsDropdown');

    // Check if the device is not mobile
    function isMobile() {
      return window.innerWidth <= 768; // Adjust the max-width as needed
    }

    productsLink.addEventListener('click', function (e) {
      if (!isMobile()) {
        window.location.href = 'products.html'; // Navigate if not on mobile
      } else {
        // On mobile, prevent the default click behavior (to show the dropdown)
        e.preventDefault();
      }
    });
  });



