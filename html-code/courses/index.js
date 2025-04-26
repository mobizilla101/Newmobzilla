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

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const cards = Array.from(track.children);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalCards = cards.length;
    
    let currentIndex = 1; // Start with the second card (index 1) as active/center
    
    function updateCarousel() {
      // Hide all cards first
      cards.forEach(card => {
        card.classList.remove('visible');
      });
      
      // Calculate which cards should be visible (current, prev, next)
      const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
      const nextIndex = (currentIndex + 1) % totalCards;
      
      // Make only three cards visible
      cards[prevIndex].classList.add('visible');
      cards[currentIndex].classList.add('visible');
      cards[nextIndex].classList.add('visible');
      
      // Reset styles for all cards
      cards.forEach(card => {
        card.classList.remove('z-10', 'w-80', 'h-48');
        card.classList.add('w-64', 'h-40', 'opacity-80', 'scale-90');
      });
      
      // Apply specific styles to the center card
      cards[currentIndex].classList.remove('w-64', 'h-40', 'opacity-80', 'scale-90');
      cards[currentIndex].classList.add('z-10', 'w-80', 'h-48');
      
      // Center the cards in the container
      const containerWidth = track.parentElement.offsetWidth;
      const cardWidth = 280; // Approximate width of center card + margins
      const totalWidth = cardWidth * 3; // Width of 3 visible cards
      
      // Position the track
      const offset = (containerWidth - totalWidth) / 2;
      track.style.transform = `translateX(${offset}px)`;
    }
    
    // Circular navigation
    function moveToNext() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateCarousel();
    }
    
    function moveToPrev() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
    
    // Initial setup
    updateCarousel();
  });