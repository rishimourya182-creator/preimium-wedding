document.addEventListener("DOMContentLoaded", () => {
    // 1. Preloader Fade Out
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.8s ease";
            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }, 1200);
    }

    // 2. Countdown Timer Logic
    const targetDate = new Date("December 2, 2026 00:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days < 10 ? 0${days} : days;
            document.getElementById("hours").innerText = hours < 10 ? 0${hours} : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? 0${minutes} : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? 0${seconds} : seconds;
        }
    };

    setInterval(updateTimer, 1000);
    updateTimer();

    // 3. Audio Toggle Feature
    const musicBtn = document.getElementById("musicBtn");
    const audio = document.getElementById("music");
    let isPlaying = false;

    if (musicBtn && audio) {
        musicBtn.addEventListener("click", () => {
            if (isPlaying) {
                audio.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                audio.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
    }
});
