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



//   for category part
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;
  let currentIndex = 0;
  let interval;

  // Initialize slider
  function initSlider() {
      updateSlides();
      startAutoPlay();
      
      // Set initial active state
      dots[0].classList.add('active');
  }

  // Update slide positions
  function updateSlides() {
      slides.forEach((slide, index) => {
          // Remove all classes first
          slide.classList.remove('active', 'next', 'prev', 'hidden-right', 'hidden-left');
          
          if (index === currentIndex) {
              slide.classList.add('active');
          } else if (index === (currentIndex + 1) % totalSlides) {
              slide.classList.add('next');
          } else if (index === (currentIndex + 2) % totalSlides) {
              slide.classList.add('hidden-right');
          } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
              slide.classList.add('prev');
          } else {
              slide.classList.add('hidden-left');
          }
          
          // This ensures the next slide slightly overlaps the active slide
          if (slide.classList.contains('next')) {
              slide.style.left = "62%";
          } else {
              slide.style.left = "";
          }
      });

      // Update active dot
      dots.forEach((dot, index) => {
          if (index === currentIndex) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  // Auto play slides
  function startAutoPlay() {
      interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlides();
      }, 10000); // 10 seconds
  }

  // Click handlers for dots
  dots.forEach(dot => {
      dot.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          currentIndex = index;
          updateSlides();
          
          // Reset autoplay
          clearInterval(interval);
          startAutoPlay();
      });
  });

  // Initialize slider
  initSlider();
});

// feature courses
 // Carousel Navigation
 // Carousel Navigation

 const container = document.getElementById('courses-container');
 const coursesGrid = document.getElementById('courses-grid');
 const viewAllBtn = document.getElementById('view-all-btn');
 
 let isExpanded = false;

 // View All Courses functionality
 viewAllBtn.addEventListener('click', () => {
     if (!isExpanded) {
         coursesGrid.classList.add('show-all');
         viewAllBtn.innerHTML = '<span>Show Less</span><i class="fas fa-chevron-up ml-2"></i>';
         isExpanded = true;
     } else {
         coursesGrid.classList.remove('show-all');
         viewAllBtn.innerHTML = '<span>View all Courses</span><i class="fas fa-chevron-down ml-2"></i>';
         isExpanded = false;
         
         // Scroll back to top of courses section
         container.scrollIntoView({ behavior: 'smooth' });
     }
 });

 // Simple slider functionality with visible course tracking
 const scrollAmount = 300;
 
//  total number students
 // Wait until document is loaded  // Function to initialize and start counters
  // Function to initialize and start counters
  function initCounters(data) {
    // Use data from backend or fallback to default values
    const studentsTotal = data?.studentsEnrolled || 420;
    const coursesTotal = data?.coursesAvailable || 200;
    const instructorsTotal = data?.expertInstructors || 20;
    const ratingTotal = data?.averageRating || 4.5;
    
    // Create CountUp instances
    const studentsCounter = new CountUp('students-count', studentsTotal, {
      duration: 2.5,
      useEasing: true
    });
    
    const coursesCounter = new CountUp('courses-count', coursesTotal, {
      duration: 2,
      useEasing: true
    });
    
    const instructorsCounter = new CountUp('instructors-count', instructorsTotal, {
      duration: 1.5,
      useEasing: true
    });
    
    const ratingCounter = new CountUp('rating-count', ratingTotal, {
      duration: 3,
      decimalPlaces: 1,
      useEasing: true
    });
    
    // Start all counters
    studentsCounter.start();
    coursesCounter.start();
    instructorsCounter.start();
    ratingCounter.start();
  }
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Example of how to fetch data from your backend and start counters
  function fetchDataAndStartCounters() {
    // Replace this with your actual API fetch call
    // fetch('/api/impact-stats')
    //   .then(response => response.json())
    //   .then(data => {
    //     initCounters(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching impact stats:', error);
    //     initCounters({}); // Use default values on error
    //   });
    
    // For now, just use default values (remove this when connecting to backend)
    // initCounters({});
    
    // IMPORTANT: Don't auto-start counters - will be triggered by your backend
    // Uncomment the next line only for testing without backend
    // initCounters({});
  }
  
  // Wait until document is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize but don't start counters yet
    fetchDataAndStartCounters();
    
    // Optional: Start counters when they come into view
    const countersContainer = document.querySelector('.grid');
    
    // Uncomment this section if you want to start counting on scroll
    /*
    function checkScroll() {
      if (isInViewport(countersContainer)) {
        fetchDataAndStartCounters();
        window.removeEventListener('scroll', checkScroll);
      }
    }
    
    window.addEventListener('scroll', checkScroll);
    // checkScroll(); // Check on load in case element is already in view
    */
  });
  
  // Public API for your backend to call
  window.startImpactCounters = function(data) {
    initCounters(data);
  };