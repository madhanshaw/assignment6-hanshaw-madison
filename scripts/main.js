$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Array
      var members = [
        "Dave Grohl",
        "Nate Mendel",
        "Pat Smear",
        "Taylor Hawkins",
        "Rami Jaffee",
        "Chris Shiflett"
      ];

      // Object
      var tour = {
        chicago: "July 29 & 30th, 2018",
        seattle: "September 1st, 2018",
        edmonton: "September 4th, 2018"

      };

      // While Loop
      var i = 0

      while (i < 5) {
        console.log('Times running through the loop: ' + i);

        i++;

      };





      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
