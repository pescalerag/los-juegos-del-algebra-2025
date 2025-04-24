var targetDate = new Date("2025-04-20T17:40:00");
var countdownInterval;

function updateCountdown() {
    var now = new Date();
    var difference = targetDate - now;

    if (difference <= 0) {
        document.querySelector('.countdown-boxes').innerHTML = '<div class="countdown-box"><span class="countdown-number">Los juegos han finalizado</span></div>';
        clearInterval(countdownInterval);
        return;
    }

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Añadir cero inicial si es necesario
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Llamar inmediatamente para evitar retraso inicial
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    // Actualizar cada segundo
    countdownInterval = setInterval(updateCountdown, 1000);
});
