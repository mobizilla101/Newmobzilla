gsap.to("#logo", {
    y: -5,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


  const navLinks = document.querySelectorAll("#nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active-nav"));
      this.classList.add("active-nav");
    });
  });

  // made for resp
  document.getElementById("menu-btn").addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("hidden");
  });

  let cartCount = 0;
  function updateCartCount(newCount) {
    cartCount = newCount;
    document.getElementById("cart-count").textContent = cartCount;
  }
  setTimeout(() => {
    updateCartCount(1);
  }, 2000);

  document.addEventListener('DOMContentLoaded', function () {
    // Set initial states for animations
    gsap.set("#icon1, #icon2, #icon3", { opacity: 0, y: 20 });
    gsap.set("#mobizillaText", { opacity: 0, y: -30 });

    // Create animation timeline that plays automatically
    const mainTl = gsap.timeline({ delay: 0.5 });

    // Animation sequence
    mainTl
      // Move the Blender video to the left slowly
      .to("#blenderVideo", {
        x: -10,
        duration: 1.5,
        ease: "power2.out"
      })
      // Animate the MOBIZILLA text from top to bottom
      .to("#mobizillaText", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "<+=0.3")
      // Animate the icons in sequence
      .to("#icon1", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .to("#icon2", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to("#icon3", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");

    // Add hover animations for interactive elements
    const circles = document.querySelectorAll(".rounded-full");
    circles.forEach(circle => {
      circle.addEventListener("mouseenter", () => {
        gsap.to(circle, { scale: 1.1, duration: 0.3 });
      });
      circle.addEventListener("mouseleave", () => {
        gsap.to(circle, { scale: 1, duration: 0.3 });
      });
    });
  });


  gsap.set("#video-container", {
    x: "3cm"
  });

  // Animate from 3cm back to original (0)
  gsap.to("#video-container", {
    x: "0cm",
    duration: 3,
    ease: "power1.inOut"
  });



  // for circular part 
  const row = document.getElementById("tag-row");
  row.innerHTML += row.innerHTML; // duplicate for loop effect

  gsap.to("#tag-row", {
    xPercent: -50,
    duration: 20,
    ease: "linear",
    repeat: -1
  });




  // for brand partner and footer with actual date and map
     // Set current year
     document.getElementById('currentYear').textContent = new Date().getFullYear();
      
      // Load Google Maps API
      function loadGoogleMapsApi() {
          const script = document.createElement('script');
          script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap';
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
      }
      
      // Initialize Google Map
      function initMap() {
          // Kathmandu coordinates (you can replace these later)
          const kathmandu = { lat: 27.7172, lng: 85.3240 };
          
          // Create map
          const map = new google.maps.Map(document.getElementById("map"), {
              zoom: 15,
              center: kathmandu,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: true,
          });
          
          // Add marker
          const marker = new google.maps.Marker({
              position: kathmandu,
              map: map,
              title: "Mobizilla Training & Technical Institute"
          });
          
          // Add click listener to zoom in when marker is clicked
          marker.addListener("click", () => {
              map.setZoom(18);
              map.setCenter(marker.getPosition());
          });
      }
      
      // Load the API when the page is ready
      window.addEventListener('load', loadGoogleMapsApi);
      
      document.getElementById('currentYear').textContent = new Date().getFullYear();  