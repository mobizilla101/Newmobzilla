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



  // menu button of that side bar
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('content'); // Make sure you have a content div with id="content"
        
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('closed');
            menuToggle.classList.toggle('active');
            
            // Optional: If you want the content to move when sidebar opens
            if (!sidebar.classList.contains('closed')) {
                mainContent.classList.add('ml-64'); // Add margin when sidebar is open
            } else {
                mainContent.classList.remove('ml-64'); // Remove margin when sidebar is closed
            }
        });
    });


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

// last one
 document.addEventListener('DOMContentLoaded', function() {
            const slideContainer = document.getElementById('slide-container');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            const totalSlides = slides.length;
            let currentSlide = 0;
            let slideWidth, activeSlideWidth, inactiveSlideWidth;
            
            // Initialize sizes and positions
            function initializeCarousel() {
                const containerWidth = slideContainer.parentElement.clientWidth;
                
                // Calculate slide widths
                activeSlideWidth = containerWidth * 0.45; // Active slide width - 45% of container
                inactiveSlideWidth = containerWidth * 0.2; // Inactive slide width - 20% of container
                
                // Set slide heights based on whether active or inactive
                slides.forEach((slide, index) => {
                    if (index === currentSlide) {
                        slide.style.width = `${activeSlideWidth}px`;
                        slide.style.height = '16rem'; // Active slide height (h-64)
                        slide.classList.add('z-10');
                    } else {
                        slide.style.width = `${inactiveSlideWidth}px`;
                        slide.style.height = '12rem'; // Inactive slide height
                        slide.classList.remove('z-10');
                    }
                });
                
                // Position slides
                positionSlides();
            }
            
            // Position slides based on current active slide
            function positionSlides() {
                const containerWidth = slideContainer.parentElement.clientWidth;
                const containerCenter = containerWidth / 2;
                const halfActiveWidth = activeSlideWidth / 2;
                
                let translateX = containerCenter - halfActiveWidth;
                
                // Calculate offset for current slide
                for (let i = 0; i < currentSlide; i++) {
                    if (i === currentSlide - 1) {
                        translateX -= inactiveSlideWidth * 0.8; // Partial visibility for adjacent slide
                    } else {
                        translateX -= inactiveSlideWidth;
                    }
                }
                
                slideContainer.style.transform = `translateX(${translateX}px)`;
            }
            
            // Update dots to reflect current slide
            function updateDots() {
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add('bg-emerald-500', 'w-16');
                        dot.classList.remove('bg-gray-300', 'w-4');
                    } else {
                        dot.classList.add('bg-gray-300', 'w-4');
                        dot.classList.remove('bg-emerald-500', 'w-16');
                    }
                });
            }
            
            // Go to specific slide
            function goToSlide(slideIndex) {
                currentSlide = slideIndex;
                
                // Update slide sizes and positions
                slides.forEach((slide, index) => {
                    if (index === currentSlide) {
                        slide.style.width = `${activeSlideWidth}px`;
                        slide.style.height = '16rem';
                        slide.classList.add('z-10');
                    } else {
                        slide.style.width = `${inactiveSlideWidth}px`;
                        slide.style.height = '12rem';
                        slide.classList.remove('z-10');
                    }
                });
                
                positionSlides();
                updateDots();
            }
            
            // Add click events to dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
            });
            
            // Auto-slide functionality
            function autoSlide() {
                const nextSlide = (currentSlide + 1) % totalSlides;
                goToSlide(nextSlide);
            }
            
            // Initialize carousel
            initializeCarousel();
            
            // Set up auto-sliding
            const slideInterval = setInterval(autoSlide, 5000);
            
            // Handle window resize
            window.addEventListener('resize', initializeCarousel);
            
            // Pause auto-slide on hover
            slideContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            // Resume auto-slide when mouse leaves
            slideContainer.addEventListener('mouseleave', () => {
                clearInterval(slideInterval);
                slideInterval = setInterval(autoSlide, 5000);
            });
        });