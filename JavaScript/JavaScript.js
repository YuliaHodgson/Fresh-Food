function showFormData(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form field values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Display an alert with form field contents
    const alertMessage = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    `;
    alert(alertMessage);
    alert(`Thank you for registering, ${firstName} ${lastName}!`);
}

document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    showSlides();
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(-36.616036, 174.670931),zoom: 15
        };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    }
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsEvAruwEv27qZrdco2-N46ik4EZY8F6o&callback=myMap" async defer></script>        
          