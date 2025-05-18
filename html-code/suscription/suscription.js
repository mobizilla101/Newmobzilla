document.addEventListener('DOMContentLoaded', () => {
    // === Cloud animations ===
    const cloudLeftAnimation = gsap.timeline({ repeat: -1 });
    cloudLeftAnimation
        .to("#cloudLeft", { opacity: 0, duration: 0 })
        .to("#cloudLeft", { opacity: 1, x: 70, duration: 4, ease: "power2.inOut" })
        .to("#cloudLeft", { opacity: 1, x: 70, duration: 2 })
        .to("#cloudLeft", { opacity: 0, x: 140, duration: 4, ease: "power2.inOut" });

    const cloudRightAnimation = gsap.timeline({ repeat: -1 });
    cloudRightAnimation
        .to("#cloudRight", { opacity: 0, duration: 0 })
        .to("#cloudRight", { opacity: 1, x: -70, duration: 4, ease: "power2.inOut", delay: 2 })
        .to("#cloudRight", { opacity: 1, x: -70, duration: 2 })
        .to("#cloudRight", { opacity: 0, x: -140, duration: 4, ease: "power2.inOut" });

    // === Hidden Dino Animation ===
    gsap.set("#hiddenDino", { opacity: 0 });
    function animateHiddenDino() {
        const tl = gsap.timeline({
            onComplete: () => setTimeout(animateHiddenDino, 5000)
        });
        tl.to("#hiddenDino", {
            opacity: 1,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to("#hiddenDino", {
            y: -60,
            duration: 1.5,
            ease: "power1.inOut"
        })
        .to("#hiddenDino", {
            opacity: 0,
            y: 0,
            duration: 0.8,
            delay: 0.5
        });
    }
    setTimeout(animateHiddenDino, 5000);

    // === Visible Dino Animation (Intermediate) ===
    const visibleDinoAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    visibleDinoAnimation.to("#visibleDino", {
        y: -5,
        duration: 0.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1
    });

    // === Get Started Button Hover Logic ===
    const buttons = document.querySelectorAll('.get-started-btn');
    const intermediateBtn = document.querySelector('.intermediate-btn');
    const intermediateDino = document.querySelector('#visibleDino');

    // Activate Intermediate Dino & hover style by default
    intermediateBtn.classList.add('hover-active');
    intermediateDino.style.display = 'block';

    buttons.forEach(btn => {
        if (!btn.classList.contains('intermediate-btn')) {
            btn.addEventListener('mouseenter', () => {
                // Deactivate intermediate
                intermediateBtn.classList.remove('hover-active');
                intermediateDino.style.display = 'none';

                // Activate hover state for this button
                btn.classList.add('hover-active');

                // Add dino
                const dino = document.createElement('img');
                dino.src = '../suscription/images/dino button.png';
                dino.classList.add('temp-dino');
                dino.alt = 'Temp Dino';

                const container = btn.closest('.get-started-container');
                container.appendChild(dino);

                gsap.fromTo(dino,
                    { y: 0 },
                    {
                        y: -5,
                        duration: 0.5,
                        ease: "power1.inOut",
                        yoyo: true,
                        repeat: -1
                    });
            });

            btn.addEventListener('mouseleave', () => {
                // Remove hover from current
                btn.classList.remove('hover-active');

                // Remove dino
                const container = btn.closest('.get-started-container');
                const tempDino = container.querySelector('.temp-dino');
                if (tempDino) {
                    gsap.killTweensOf(tempDino);
                    tempDino.remove();
                }

                // Reactivate Intermediate button dino & style
                intermediateBtn.classList.add('hover-active');
                intermediateDino.style.display = 'block';
            });
        }
    });
});
