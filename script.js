const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
let timeoutId;

envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    heartSeal.style.opacity = 0;
});

envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1;
    }, 1500); 
});

heartSeal.style.transition = 'opacity 0.3s ease';

document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("valentineMusic");
    let musicButton = document.getElementById("musicButton");
    let confettiButton = document.getElementById("confettiButton");

    // Ensure autoplay works
    audio.volume = 0.8;
    audio.play().catch(error => console.log("Autoplay prevented:", error));

    // Toggle Play/Pause
    musicButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            musicButton.innerHTML = "⏸ Pause";
        } else {
            audio.pause();
            musicButton.innerHTML = "▶ Play";
        }
    });

    // Confetti Effect
    confettiButton.addEventListener("click", function () {
        let duration = 5 * 1000;
        let animationEnd = Date.now() + duration;
        let colors = ["#ff4d6d", "#ff85a1", "#ffb3c6", "#ffdae1", "#fff"];

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            let timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return;

            let particleCount = 50 * (timeLeft / duration);
            confetti({
                particleCount,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: { x: Math.random(), y: Math.random() - 0.2 },
                colors: colors
            });

            requestAnimationFrame(frame);
        })();
    });
});
