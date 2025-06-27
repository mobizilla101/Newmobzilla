//upper logo animation
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

// made for responsive
document.getElementById("menu-btn").addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("hidden");
});

//cart count upper part
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
    const mainContent = document.getElementById('content');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
        menuToggle.classList.toggle('active');
        
        if (!sidebar.classList.contains('closed')) {
            mainContent.classList.add('ml-64');
        } else {
            mainContent.classList.remove('ml-64');
        }
    });
});

// blender video at main part
document.addEventListener('DOMContentLoaded', function () {
    gsap.set("#icon1, #icon2, #icon3", { opacity: 0, y: 20 });
    gsap.set("#mobizillaText", { opacity: 0, y: -30 });

    const mainTl = gsap.timeline({ delay: 0.5 });

    mainTl
        .to("#blenderVideo", {
            x: -10,
            duration: 1.5,
            ease: "power2.out"
        })
        .to("#mobizillaText", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "<+=0.3")
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

gsap.to("#Video", {
    x: "-7vw",
    duration: 3,
    repeat: 0,
    ease: "power1.inOut"
});

gsap.to("#mobizilla", {
    y: '1vw',
    duration: 5,
    ease: "linear"
});

gsap.to("#icon1", { opacity: 1, y: -20, duration: 1, delay: 0.5, ease: "power2.out" });
gsap.to("#icon2", { opacity: 1, y: -20, duration: 1, delay: 1.5, ease: "power2.out" });
gsap.to("#icon3", { opacity: 1, y: -20, duration: 1, delay: 2.5, ease: "power2.out" });

// review from our customer
document.addEventListener('DOMContentLoaded', function() {
    const textSlides = document.querySelectorAll('[data-type="text"]');
    const videoSlides = document.querySelectorAll('[data-type="video"]');
    let textCurrentSlide = 0;
    let videoCurrentSlide = 0;
    let textTimer;
    let videoTimer;

    function showTextSlide(index) {
        document.querySelectorAll('.testimonial-container:first-child .testimonial-slide').forEach(slide => {
            slide.classList.remove('active');
        });
        
        document.querySelectorAll('.testimonial-container:first-child .testimonial-slide')[index].classList.add('active');
        
        document.querySelectorAll('[data-type="text"]').forEach(dot => {
            dot.classList.remove('active');
            dot.classList.add('rounded-full');
            dot.classList.remove('rounded-md');
            dot.style.width = '0.5rem';
            dot.style.backgroundColor = 'rgb(209, 213, 219)';
        });
        
        document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.add('active');
        document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.remove('rounded-full');
        document.querySelector(`[data-type="text"][data-index="${index}"]`).classList.add('rounded-md');
        document.querySelector(`[data-type="text"][data-index="${index}"]`).style.width = '2rem';
        document.querySelector(`[data-type="text"][data-index="${index}"]`).style.backgroundColor = 'rgb(37, 99, 235)';
        
        textCurrentSlide = index;
    }

    function showVideoSlide(index) {
        document.querySelectorAll('.testimonial-container:last-child .testimonial-slide').forEach(slide => {
            slide.classList.remove('active');
        });
        
        document.querySelectorAll('.testimonial-container:last-child video').forEach(video => {
            video.pause();
            video.currentTime = 0;
            const videoId = video.id;
            document.getElementById(`play-overlay-${videoId.split('-')[1]}`).style.display = 'flex';
        });
        
        document.querySelectorAll('.testimonial-container:last-child .testimonial-slide')[index].classList.add('active');
        
        document.querySelectorAll('[data-type="video"]').forEach(dot => {
            dot.classList.remove('active');
            dot.classList.add('rounded-full');
            dot.classList.remove('rounded-md');
            dot.style.width = '0.5rem';
            dot.style.backgroundColor = 'rgb(209, 213, 219)';
        });
        
        document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.add('active');
        document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.remove('rounded-full');
        document.querySelector(`[data-type="video"][data-index="${index}"]`).classList.add('rounded-md');
        document.querySelector(`[data-type="video"][data-index="${index}"]`).style.width = '2rem';
        document.querySelector(`[data-type="video"][data-index="${index}"]`).style.backgroundColor = 'rgb(37, 99, 235)';
        
        videoCurrentSlide = index;
    }

    function nextTextSlide() {
        let nextIndex = (textCurrentSlide + 1) % document.querySelectorAll('.testimonial-container:first-child .testimonial-slide').length;
        showTextSlide(nextIndex);
    }

    function nextVideoSlide() {
        let nextIndex = (videoCurrentSlide + 1) % document.querySelectorAll('.testimonial-container:last-child .testimonial-slide').length;
        showVideoSlide(nextIndex);
    }

    textSlides.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(textTimer);
            showTextSlide(parseInt(this.getAttribute('data-index')));
            textTimer = setInterval(nextTextSlide, 5000);
        });
    });

    videoSlides.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(videoTimer);
            showVideoSlide(parseInt(this.getAttribute('data-index')));
            videoTimer = setInterval(nextVideoSlide, 5000);
        });
    });
    
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const video = document.getElementById(videoId);
            const overlay = this.parentElement;
            
            overlay.style.display = 'none';
            video.play();
            clearInterval(videoTimer);
            
            video.addEventListener('ended', function() {
                overlay.style.display = 'flex';
                videoTimer = setInterval(nextVideoSlide, 5000);
            });
        });
    });

    document.querySelectorAll('.testimonial-container:last-child video').forEach(video => {
        video.addEventListener('click', function() {
            if (!this.paused) {
                this.pause();
                const videoId = this.id;
                document.getElementById(`play-overlay-${videoId.split('-')[1]}`).style.display = 'flex';
                videoTimer = setInterval(nextVideoSlide, 5000);
            }
        });
    });

    textTimer = setInterval(nextTextSlide, 5000);
    videoTimer = setInterval(nextVideoSlide, 5000);

    showTextSlide(0);
    showVideoSlide(0);
});

// question part from company 
document.addEventListener('DOMContentLoaded', function() {
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
    
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.answer');
            const otherArrow = item.querySelector('.question-arrow');
            
            if (otherAnswer.classList.contains('open')) {
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
    
    if (answer.classList.contains('open')) {
        gsap.to(answer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                answer.classList.remove('open');
            }
        });
        arrow.classList.remove('rotate-arrow');
    } else {
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
let dragDistance = 0;
let startX = 0;
let startY = 0;

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

chatbotIcon.addEventListener('mousedown', startDrag);
chatbotIcon.addEventListener('touchstart', startDrag, { passive: false });

function startDrag(e) {
    e.preventDefault();
    isDragging = false;
    dragDistance = 0;
    dragStartTime = Date.now();
    
    if (e.type === 'touchstart') {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    } else {
        startX = e.clientX;
        startY = e.clientY;
    }
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
    
    gsap.to(chatbotIcon, { scale: 0.95, duration: 0.2 });
    hideBubble();
    
    if (clickTimeoutId) {
        clearTimeout(clickTimeoutId);
        clickTimeoutId = null;
    }
}

function drag(e) {
    let currentX, currentY;
    if (e.type === 'touchmove') {
        e.preventDefault();
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
    } else {
        currentX = e.clientX;
        currentY = e.clientY;
    }
    
    const dx = currentX - startX;
    const dy = currentY - startY;
    dragDistance = Math.sqrt(dx * dx + dy * dy);
    
    if (dragDistance > 5) {
        isDragging = true;
        
        const rect = chatbot.getBoundingClientRect();
        let newX = rect.left + dx;
        let newY = rect.top + dy;
        
        newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
        
        chatbot.style.left = newX + 'px';
        chatbot.style.top = newY + 'px';
        chatbot.style.right = 'auto';
        chatbot.style.bottom = 'auto';
        
        startX = currentX;
        startY = currentY;
    }
}

function endDrag(e) {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchend', endDrag);
    
    gsap.to(chatbotIcon, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
    
    const rect = chatbot.getBoundingClientRect();
    const threshold = 50;
    
    if (rect.left < threshold) {
        gsap.to(chatbot, { left: 0, duration: 0.3, ease: "power3.out" });
    } else if (rect.right > window.innerWidth - threshold) {
        gsap.to(chatbot, { left: window.innerWidth - rect.width, duration: 0.3, ease: "power3.out" });
    }
    
    const dragTime = Date.now() - dragStartTime;
    if (!isDragging && dragTime < 200 && dragDistance < 5) {
        clickTimeoutId = setTimeout(() => {
            toggleChat();
        }, 50);
    }
}

window.addEventListener('load', () => {
    chatbot.style.left = '';
    chatbot.style.top = '';
    chatbot.style.bottom = '20px';
    chatbot.style.right = '20px';
    
    gsap.from("#chatbot", { 
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)"
    });
    
    animateDots();
    
    setTimeout(() => {
        showBubble();
        setTimeout(hideBubble, 5000);
    }, 1500);
    
    ensureValidPosition();
});

window.addEventListener('resize', ensureValidPosition);

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

closeChat.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleChat();
});

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChat() {
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatWindow.classList.add('active');
        gsap.to(chatbotIcon, {
            scale: 0.8,
            opacity: 0.7,
            duration: 0.3
        });
        hideBubble();
        setTimeout(() => chatInput.focus(), 400);
    } else {
        chatWindow.classList.remove('active');
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
        const userMessageEl = document.createElement('div');
        userMessageEl.className = 'message user-message';
        userMessageEl.textContent = message;
        chatBody.appendChild(userMessageEl);
        
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
        
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message';
        typingIndicator.innerHTML = '<div class="typing-indicator"><span>.</span><span>.</span><span>.</span></div>';
        typingIndicator.style.padding = '8px 12px';
        chatBody.appendChild(typingIndicator);
        
        chatBody.scrollTop = chatBody.scrollHeight;
        
        setTimeout(() => {
            chatBody.removeChild(typingIndicator);
            
            const botResponses = [
                "I understand. How else can I help you?",
                "Thanks for sharing that. Do you have any questions?",
                "I'll look into that for you. Anything else you need?",
                "Got it! Let me know if you need more information."
            ];
            
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            
            const botMessageEl = document.createElement('div');
            botMessageEl.className = 'message bot-message';
            botMessageEl.textContent = randomResponse;
            chatBody.appendChild(botMessageEl);
            
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

//foter with dino hii
document.getElementById('year').textContent = new Date().getFullYear();

const dinoImage = document.getElementById('dino-image');
const hiMessage = document.getElementById('hi-message');

let timeoutId;

dinoImage.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    hiMessage.classList.add('show');
    timeoutId = setTimeout(() => {
        hiMessage.classList.remove('show');
    }, 4000);
});




// Circular tags animation - updated version
document.addEventListener('DOMContentLoaded', function() {
  // Debugging: Log when script starts
  console.log('Initializing circular tags animation...');

  // 1. Check if required elements exist
  const row = document.getElementById("tag-rowws");
  const wrapper = document.getElementById("tags-wrapperrs");
  
  if (!row || !wrapper) {
    console.error('Missing required elements: #tag-rowws or #tags-wrapperrs');
    return;
  }

  // Debugging: Log element found
  console.log('Found required elements:', { row, wrapper });

  // 2. Duplicate tags for seamless animation (5 copies)
  console.log('Duplicating tags...');
  const originalHTML = row.innerHTML;
  row.innerHTML = originalHTML.repeat(5);

  // 3. Initialize GSAP animation
  console.log('Initializing GSAP animation...');
  const scrollAnimation = gsap.to("#tag-rowws", {
    xPercent: -100,
    duration: 80,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0)
    },
    onStart: () => console.log('Animation started'),
    onUpdate: () => console.log('Animation updating')
  });

  // 4. Verify dino elements exist
  const dinoUnder = document.getElementById('hover-under');
  const dinoOver = document.getElementById('hover-over');
  const dinoUnderContainer = document.getElementById('hover-under-container');
  const dinoOverContainer = document.getElementById('hover-over-container');

  if (!dinoUnder || !dinoOver || !dinoUnderContainer || !dinoOverContainer) {
    console.error('Missing dino elements. Check these IDs exist:',
      '#hover-under, #hover-over, #hover-under-container, #hover-over-container');
    return;
  }

  console.log('All dino elements found');

  // 5. Responsive configuration
  function getDinoConfig() {
    const isMobile = window.innerWidth < 768;
    return {
      under: {
        xOffset: isMobile ? -158 : -700,
        yOffset: isMobile ? -490 : -435,
        zIndex: 5,
        scale: isMobile ? 0.7 : 0.9
      },
      over: {
        xOffset: isMobile ? -158 : -690,
        yOffset: isMobile ? -445 : -380,
        zIndex: 15,
        scale: isMobile ? 0.8 : 1.1
      }
    };
  }

  // 6. Animation state
  let activeTag = null;
  let animationFrame;
  let hoverTimeout;

  // 7. Position update function
  function updateDinoPosition() {
    if (!activeTag) return;

    const rect = activeTag.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const config = getDinoConfig();

    // Under dino position
    dinoUnderContainer.style.transform = `
      translate(${centerX + config.under.xOffset}px, ${rect.bottom + config.under.yOffset}px)
      translateX(-50%) scale(${config.under.scale})
    `;
    dinoUnderContainer.style.zIndex = config.under.zIndex;

    // Over dino position
    dinoOverContainer.style.transform = `
      translate(${centerX + config.over.xOffset}px, ${rect.top + config.over.yOffset}px)
      translateX(-50%) scale(${config.over.scale})
    `;
    dinoOverContainer.style.zIndex = config.over.zIndex;

    animationFrame = requestAnimationFrame(updateDinoPosition);
  }

  // 8. Hover effect setup
  function setupTagHover(tag) {
    tag.addEventListener('mouseenter', function() {
      console.log('Mouse entered tag:', tag.textContent);
      
      // Reset previous active tag
      if (activeTag && activeTag !== tag) {
        resetPreviousTag();
      }

      scrollAnimation.pause();
      activeTag = tag;

      // Change tag style
      tag.style.background = '#089AC7';
      tag.style.color = 'white';

      // Position dinos
      const rect = tag.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const config = getDinoConfig();

      // Initial positioning (hidden)
      dinoUnderContainer.style.transform = `
        translate(${centerX + config.under.xOffset}px, ${rect.bottom + config.under.yOffset}px)
        translateX(-50%) scale(0.5)
      `;
      dinoOverContainer.style.transform = `
        translate(${centerX + config.over.xOffset}px, ${rect.top + config.over.yOffset}px)
        translateX(-50%) scale(0.5)
      `;

      // Reset dino states
      dinoUnder.style.opacity = '0';
      dinoOver.style.opacity = '0';
      dinoUnder.style.transform = 'scale(0.5) translateY(20px)';
      dinoOver.style.transform = 'scale(0.5) translateY(20px)';

      // Animate in sequence
      setTimeout(() => {
        // Show under dino
        dinoUnderContainer.style.opacity = '1';
        setTimeout(() => {
          dinoUnder.style.opacity = '1';
          dinoUnder.style.transform = 'scale(0.9) translateY(0)';
        }, 50);

        // Show over dino after delay
        hoverTimeout = setTimeout(() => {
          dinoOverContainer.style.opacity = '1';
          setTimeout(() => {
            dinoOver.style.opacity = '1';
            dinoOver.style.transform = 'scale(1.1) translateY(0)';
            dinoUnder.style.opacity = '0';
          }, 50);
        }, 300);

        updateDinoPosition();
      }, 100);
    });

    tag.addEventListener('mouseleave', function() {
      console.log('Mouse left tag');
      scrollAnimation.play();
      
      // Reset tag style
      tag.style.background = '';
      tag.style.color = '';

      // Animate out
      dinoOver.style.transform = 'scale(0.7) translateY(20px)';
      dinoOver.style.opacity = '0';
      
      setTimeout(() => {
        dinoUnderContainer.style.opacity = '0';
        dinoOverContainer.style.opacity = '0';
      }, 300);

      // Clean up
      activeTag = null;
      clearTimeout(hoverTimeout);
      cancelAnimationFrame(animationFrame);
    });
  }

  function resetPreviousTag() {
    activeTag.style.background = '';
    activeTag.style.color = '';
  }

  // 9. Initialize all tags
  console.log('Setting up hover effects for tags...');
  document.querySelectorAll('.tag-itemms').forEach(tag => {
    // Ensure basic styles are set
    tag.style.transition = 'all 0.3s ease';
    tag.style.cursor = 'pointer';
    tag.style.margin = '0 15px';
    tag.style.padding = '12px 24px';
    tag.style.borderRadius = '8px';
    tag.style.background = 'linear-gradient(to right, #4ade80, #3b82f6)';
    tag.style.color = 'white';
    tag.style.fontWeight = '600';
    
    setupTagHover(tag);
  });

  // 10. Responsive adjustments
  function adjustAnimationSpeed() {
    const speed = window.innerWidth < 768 ? 80 : 50;
    scrollAnimation.duration(speed);
    console.log('Adjusted animation speed:', speed);
  }
  
  window.addEventListener('resize', adjustAnimationSpeed);
  adjustAnimationSpeed();

  console.log('Circular tags initialization complete');
});

// mobizilla animation in main content




// Load the API when the page is ready
window.addEventListener('load', loadGoogleMapsApi);