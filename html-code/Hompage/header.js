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
  x: "-7vw",  // Move full screen to left -100vw
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
// gsap.to("#rotateXGroup", {
//   rotationX: 15,
//   duration: 3,
//   yoyo: true,
//   repeat: -1,
//   ease: "sine.inOut",
// });


// question part 
document.addEventListener('DOMContentLoaded', function() {
  // Initial animations
  gsap.from('.fade-in-left', {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  });
  
  gsap.from('.fade-in-right', {
    duration: 1,
    x: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
  });
  
  gsap.from('.faq-item', {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: 'power2.out'
  });
  
  // Button hover animation
  const button = document.getElementById('touchBtn');
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.in'
    });
  });
  
  // Add pulse animation on page load
  setTimeout(() => {
    button.classList.add('pulse');
    setTimeout(() => {
      button.classList.remove('pulse');
    }, 6000);
  }, 2000);
});

function toggleAnswer(element) {
  const faqItem = element.closest('.faq-item');
  const answer = faqItem.querySelector('.answer');
  const arrow = faqItem.querySelector('.question-arrow');
  
  // Close all other answers
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      const otherAnswer = item.querySelector('.answer');
      const otherArrow = item.querySelector('.question-arrow');
      
      if (otherAnswer.classList.contains('open')) {
        // Use GSAP for closing animation
        gsap.to(otherAnswer, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            otherAnswer.classList.remove('open');
          }
        });
        otherArrow.classList.remove('rotate-arrow');
      }
    }
  });
  
  // Toggle current answer with GSAP
  if (answer.classList.contains('open')) {
    // Close animation
    gsap.to(answer, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        answer.classList.remove('open');
      }
    });
    arrow.classList.remove('rotate-arrow');
  } else {
    // Open animation
    answer.classList.add('open');
    gsap.fromTo(answer, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    arrow.classList.add('rotate-arrow');
  }
}






// chatbot part
const chatbot = document.getElementById('chatbot');
const chatbotIcon = document.getElementById('chatbotIcon');
const messageBubble = document.getElementById('messageBubble');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

let isDragging = false;
let chatOpen = false;
let dragStartTime = 0;
let clickTimeoutId = null;

// Create a variable to track the drag distance
let dragDistance = 0;
let startX = 0;
let startY = 0;

// Make sure the initial position is valid
function ensureValidPosition() {
  const rect = chatbot.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;
  
  if (rect.right > window.innerWidth) {
    chatbot.style.right = '20px';
    chatbot.style.left = 'auto';
  }
  
  if (rect.bottom > window.innerHeight) {
    chatbot.style.bottom = '20px';
    chatbot.style.top = 'auto';
  }
}

// Initialize dragging without GSAP Draggable for more control
chatbotIcon.addEventListener('mousedown', startDrag);
chatbotIcon.addEventListener('touchstart', startDrag, { passive: false });

function startDrag(e) {
  e.preventDefault();
  isDragging = false;
  dragDistance = 0;
  
  // Record start time for distinguishing between click and drag
  dragStartTime = Date.now();
  
  // Get starting positions
  if (e.type === 'touchstart') {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  } else {
    startX = e.clientX;
    startY = e.clientY;
  }
  
  // Add move and end event listeners
  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag, { passive: false });
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
  
  // Add visual feedback
  gsap.to(chatbotIcon, { scale: 0.95, duration: 0.2 });
  hideBubble();
  
  // Clear any pending click timeout
  if (clickTimeoutId) {
    clearTimeout(clickTimeoutId);
    clickTimeoutId = null;
  }
}

function drag(e) {
  // Get current position
  let currentX, currentY;
  if (e.type === 'touchmove') {
    e.preventDefault(); // Prevent scrolling
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
  } else {
    currentX = e.clientX;
    currentY = e.clientY;
  }
  
  // Calculate distance moved
  const dx = currentX - startX;
  const dy = currentY - startY;
  dragDistance = Math.sqrt(dx * dx + dy * dy);
  
  // If moved more than threshold, consider it a drag
  if (dragDistance > 5) {
    isDragging = true;
    
    // Get the chatbot's current position and calculate new position
    const rect = chatbot.getBoundingClientRect();
    let newX = rect.left + dx;
    let newY = rect.top + dy;
    
    // Ensure new position is within bounds
    newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
    
    // Update position
    chatbot.style.left = newX + 'px';
    chatbot.style.top = newY + 'px';
    chatbot.style.right = 'auto';
    chatbot.style.bottom = 'auto';
    
    // Update start position for next move
    startX = currentX;
    startY = currentY;
  }
}

function endDrag(e) {
  // Remove event listeners
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchend', endDrag);
  
  // Restore visual appearance
  gsap.to(chatbotIcon, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
  
  // Snap to edges if close
  const rect = chatbot.getBoundingClientRect();
  const threshold = 50;
  
  if (rect.left < threshold) {
    gsap.to(chatbot, { left: 0, duration: 0.3, ease: "power3.out" });
  } else if (rect.right > window.innerWidth - threshold) {
    gsap.to(chatbot, { left: window.innerWidth - rect.width, duration: 0.3, ease: "power3.out" });
  }
  
  // If it wasn't a significant drag and happened quickly, treat as click
  const dragTime = Date.now() - dragStartTime;
  if (!isDragging && dragTime < 200 && dragDistance < 5) {
    clickTimeoutId = setTimeout(() => {
      toggleChat();
    }, 50);
  }
}

// Initial position setup
window.addEventListener('load', () => {
  // Remove initial inline styles to ensure CSS positioning works
  chatbot.style.left = '';
  chatbot.style.top = '';
  
  // Position at bottom right initially
  chatbot.style.bottom = '20px';
  chatbot.style.right = '20px';
  
  // Initial animation
  gsap.from("#chatbot", { 
    y: 20,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)"
  });
  
  // Animate dots
  animateDots();
  
  // Show message bubble after a delay
  setTimeout(() => {
    showBubble();
    setTimeout(hideBubble, 5000);
  }, 1500);
  
  // Ensure valid position
  ensureValidPosition();
});

// Handle window resize to ensure chatbot stays in visible area
window.addEventListener('resize', ensureValidPosition);

// Show message bubble on hover
chatbot.addEventListener('mouseenter', () => {
  if (!isDragging && !chatOpen) {
    showBubble();
  }
});

chatbot.addEventListener('mouseleave', () => {
  if (!chatOpen) {
    hideBubble();
  }
});

// Close chat
closeChat.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleChat();
});

// Send message
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function toggleChat() {
  chatOpen = !chatOpen;
  
  if (chatOpen) {
    // Open chat window
    chatWindow.classList.add('active');
    
    // Minimize icon
    gsap.to(chatbotIcon, {
      scale: 0.8,
      opacity: 0.7,
      duration: 0.3
    });
    
    hideBubble();
    
    // Focus input
    setTimeout(() => chatInput.focus(), 400);
  } else {
    // Close chat window
    chatWindow.classList.remove('active');
    
    // Restore icon
    gsap.to(chatbotIcon, {
      scale: 1,
      opacity: 1,
      duration: 0.3
    });
  }
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (message !== '') {
    // Add user message
    const userMessageEl = document.createElement('div');
    userMessageEl.className = 'message user-message';
    userMessageEl.textContent = message;
    chatBody.appendChild(userMessageEl);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Simulate bot typing
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot-message';
    typingIndicator.innerHTML = '<div class="typing-indicator"><span>.</span><span>.</span><span>.</span></div>';
    typingIndicator.style.padding = '8px 12px';
    chatBody.appendChild(typingIndicator);
    
    // Scroll to see typing indicator
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Simulate bot response after a delay
    setTimeout(() => {
      // Remove typing indicator
      chatBody.removeChild(typingIndicator);
      
      const botResponses = [
        "I understand. How else can I help you?",
        "Thanks for sharing that. Do you have any questions?",
        "I'll look into that for you. Anything else you need?",
        "Got it! Let me know if you need more information."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      // Add bot message
      const botMessageEl = document.createElement('div');
      botMessageEl.className = 'message bot-message';
      botMessageEl.textContent = randomResponse;
      chatBody.appendChild(botMessageEl);
      
      // Scroll to bottom
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1200);
  }
}

function showBubble() {
  gsap.to(messageBubble, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out"
  });
}

function hideBubble() {
  gsap.to(messageBubble, {
    opacity: 0,
    y: 10,
    duration: 0.3
  });
}

function animateDots() {
  const dots = document.querySelectorAll('.dot');
  
  gsap.to(dots[0], {
    y: -3,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    delay: 0
  });
  
  gsap.to(dots[1], {
    y: -3,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    delay: 0.2
  });
  
  gsap.to(dots[2], {
    y: -3,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    delay: 0.4
  });
}

// Add custom typing indicator animation
const style = document.createElement('style');
style.textContent = `
  .typing-indicator {
    display: flex;
    align-items: center;
  }
  
  .typing-indicator span {
    height: 8px;
    width: 8px;
    margin: 0 1px;
    background-color: #6b7280;
    border-radius: 50%;
    display: inline-block;
    animation: typing-bounce 1.4s infinite ease-in-out both;
  }
  
  .typing-indicator span:nth-child(1) {
    animation-delay: -0.32s;
  }
  
  .typing-indicator span:nth-child(2) {
    animation-delay: -0.16s;
  }
  
  @keyframes typing-bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;
document.head.appendChild(style);




  // Load the API when the page is ready
      window.addEventListener('load', loadGoogleMapsApi);
      