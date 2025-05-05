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


  // for circular part 
  const row = document.getElementById("tag-row");
  row.innerHTML += row.innerHTML; // duplicate for loop effect

  gsap.to("#tag-row", {
    xPercent: -50,
    duration: 20,
    ease: "linear",
    repeat: -1
  });
      
      // // Initialize Google Map



gsap.to("#Video", {
  x: "-15vw",  // Move full screen to left -100vw
  duration: 3,  // 30 seconds slow
  repeat: 0,    // infinite loop
  ease: "power1.inOut"
});

// for inner section of mobizilla need to move little bit down from up with slow animation
gsap.to("#mobizilla",{
  y:'1vw',
  duration:5,
  ease:"linear"
})

gsap.to("#icon1", { opacity: 1, y: -20, duration: 1, delay: 0.5, ease: "power2.out" });
gsap.to("#icon2", { opacity: 1, y: -20, duration: 1, delay: 1.5, ease: "power2.out" });
gsap.to("#icon3", { opacity: 1, y: -20, duration: 1, delay: 2.5, ease: "power2.out" });




// review from our customer
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const textSlides = document.querySelectorAll('[data-type="text"]');
  const videoSlides = document.querySelectorAll('[data-type="video"]');
  let textCurrentSlide = 0;
  let videoCurrentSlide = 0;
  let textTimer;
  let videoTimer;

  // Function to show a specific text slide
  function showTextSlide(index) {
      // Hide all text slides
      document.querySelectorAll('.testimonial-container:first-child .testimonial-slide').forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Show the selected text slide
      document.querySelectorAll('.testimonial-container:first-child .testimonial-slide')[index].classList.add('active');
      
      // Update dot indicators
      document.querySelectorAll('[data-type="text"]').forEach(dot => {
          dot.classList.remove('active');
          dot.classList.add('rounded-full');
          dot.classList.remove('rounded-md');
          dot.style.width = '0.5rem';
          dot.style.backgroundColor = 'rgb(209, 213, 219)'; // gray-300
      });
      
      document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.add('active');
      document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.remove('rounded-full');
      document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.add('rounded-md');
      document.querySelector(`[data-type="text"][data-index="${index}"]`).style.width = '2rem';
      document.querySelector(`[data-type="text"][data-index="${index}"]`).style.backgroundColor = 'rgb(37, 99, 235)'; // blue-600
      
      textCurrentSlide = index;
  }

  // Function to show a specific video slide
  function showVideoSlide(index) {
      // Hide all video slides
      document.querySelectorAll('.testimonial-container:last-child .testimonial-slide').forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Pause all videos before switching
      document.querySelectorAll('.testimonial-container:last-child video').forEach(video => {
          video.pause();
          video.currentTime = 0;
          
          // Show play button overlay for all videos
          const videoId = video.id;
          document.getElementById(`play-overlay-${videoId.split('-')[1]}`).style.display = 'flex';
      });
      
      // Show the selected video slide
      document.querySelectorAll('.testimonial-container:last-child .testimonial-slide')[index].classList.add('active');
      
      // Update dot indicators
      document.querySelectorAll('[data-type="video"]').forEach(dot => {
          dot.classList.remove('active');
          dot.classList.add('rounded-full');
          dot.classList.remove('rounded-md');
          dot.style.width = '0.5rem';
          dot.style.backgroundColor = 'rgb(209, 213, 219)'; // gray-300
      });
      
      document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.add('active');
      document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.remove('rounded-full');
      document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.add('rounded-md');
      document.querySelector(`[data-type="video"][data-index="${index}"]`).style.width = '2rem';
      document.querySelector(`[data-type="video"][data-index="${index}"]`).style.backgroundColor = 'rgb(37, 99, 235)'; // blue-600
      
      videoCurrentSlide = index;
  }

  // Function to advance to the next text slide
  function nextTextSlide() {
      let nextIndex = (textCurrentSlide + 1) % document.querySelectorAll('.testimonial-container:first-child .testimonial-slide').length;
      showTextSlide(nextIndex);
  }

  // Function to advance to the next video slide
  function nextVideoSlide() {
      let nextIndex = (videoCurrentSlide + 1) % document.querySelectorAll('.testimonial-container:last-child .testimonial-slide').length;
      showVideoSlide(nextIndex);
  }

  // Set up click event listeners for text dots
  textSlides.forEach(dot => {
      dot.addEventListener('click', function() {
          clearInterval(textTimer);
          showTextSlide(parseInt(this.getAttribute('data-index')));
          textTimer = setInterval(nextTextSlide, 5000);
      });
  });

  // Set up click event listeners for video dots
  videoSlides.forEach(dot => {
      dot.addEventListener('click', function() {
          clearInterval(videoTimer);
          showVideoSlide(parseInt(this.getAttribute('data-index')));
          videoTimer = setInterval(nextVideoSlide, 5000);
      });
  });
  
  // Add click event to play buttons to play video
  document.querySelectorAll('.play-button').forEach(button => {
      button.addEventListener('click', function() {
          const videoId = this.getAttribute('data-video');
          const video = document.getElementById(videoId);
          const overlay = this.parentElement;
          
          // Hide the play button overlay
          overlay.style.display = 'none';
          
          // Play the video
          video.play();
          
          // Pause the auto-sliding for videos while a video is playing
          clearInterval(videoTimer);
          
          // Set event listener for when video ends
          video.addEventListener('ended', function() {
              // Show the play button overlay again
              overlay.style.display = 'flex';
              
              // Resume auto-sliding
              videoTimer = setInterval(nextVideoSlide, 5000);
          });
      });
  });

  // Add event listeners for videos
  document.querySelectorAll('.testimonial-container:last-child video').forEach(video => {
      // When video is clicked while playing, pause it
      video.addEventListener('click', function() {
          if (!this.paused) {
              this.pause();
              const videoId = this.id;
              document.getElementById(`play-overlay-${videoId.split('-')[1]}`).style.display = 'flex';
              
              // Resume auto-sliding
              videoTimer = setInterval(nextVideoSlide, 5000);
          }
      });
  });

  // Start automatic sliding
  textTimer = setInterval(nextTextSlide, 5000);
  videoTimer = setInterval(nextVideoSlide, 5000);

  // Initialize first slides
  showTextSlide(0);
  showVideoSlide(0);
});


// new content rotation part
gsap.to("#rotateXGroup", {
  rotationX: 15,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
});





  // Load the API when the page is ready
      window.addEventListener('load', loadGoogleMapsApi);
      