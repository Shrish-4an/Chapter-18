const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", function(event) {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    ring.style.left = event.clientX + "px";
    ring.style.top = event.clientY + "px";

});

function startStory() {

    document
        .getElementById("chapter1")
        .scrollIntoView({
            behavior: "smooth"
        });

}

// PHOTO LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

const memoryImages = Array.from(
    document.querySelectorAll(".memory-card img")
);

let currentImageIndex = 0;


// OPEN PHOTO

function showImage(index) {

    currentImageIndex = index;

    lightboxImage.src = memoryImages[index].src;

    lightboxImage.alt = memoryImages[index].alt;

    lightbox.classList.add("active");

}


// CLICKING A PHOTO

memoryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        showImage(index);

    });

});


// NEXT PHOTO

lightboxNext.addEventListener("click", function(event) {

    event.stopPropagation();

    currentImageIndex++;

    if (currentImageIndex >= memoryImages.length) {

        currentImageIndex = 0;

    }

    showImage(currentImageIndex);

});


// PREVIOUS PHOTO

lightboxPrev.addEventListener("click", function(event) {

    event.stopPropagation();

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex = memoryImages.length - 1;

    }

    showImage(currentImageIndex);

});


// CLOSE BUTTON

lightboxClose.addEventListener("click", function() {

    lightbox.classList.remove("active");

});


// CLICK OUTSIDE PHOTO

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


// KEYBOARD CONTROLS

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {

        return;

    }

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

    if (event.key === "ArrowRight") {

        lightboxNext.click();

    }

    if (event.key === "ArrowLeft") {

        lightboxPrev.click();

    }

});

// MUSIC

const music = document.getElementById("birthday-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", async function() {

    if (music.paused) {

        try {

            await music.play();

            musicButton.textContent = "🔊";
            musicButton.classList.add("playing");

        } catch (error) {

            console.log("Music could not play:", error);

        }

    } else {

        music.pause();

        musicButton.textContent = "🎵";
        musicButton.classList.remove("playing");

    }

});

// FINAL SURPRISE

const surpriseButton = document.getElementById("surprise-button");
const surpriseMessage = document.getElementById("surprise-message");

surpriseButton.addEventListener("click", function() {

    surpriseMessage.classList.add("show");

    surpriseButton.style.display = "none";

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// ==========================================
// AGE CLOCK ❤️
// Born: 25 August 2008, 8:30 PM
// ==========================================

const birthDate = new Date(2008, 7, 25, 20, 30, 0);

function updateAge() {

    const now = new Date();

    const difference = now - birthDate;

    const totalSeconds = Math.floor(difference / 1000);

    // Days
    const days = Math.floor(totalSeconds / 86400);

    // Hours
    const hours = Math.floor((totalSeconds % 86400) / 3600);

    // Minutes
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // Seconds
    const seconds = totalSeconds % 60;


    // -----------------------------
    // "6574 days old" text
    // -----------------------------

    const daysOldElement = document.getElementById("days-old");

    if (daysOldElement) {
        daysOldElement.textContent = days.toLocaleString();
    }


    // -----------------------------
    // LIVE AGE CLOCK
    // -----------------------------

    const ageDays = document.getElementById("age-days");
    const ageHours = document.getElementById("age-hours");
    const ageMinutes = document.getElementById("age-minutes");
    const ageSeconds = document.getElementById("age-seconds");

    if (ageDays) {
        ageDays.textContent = days.toLocaleString();
    }

    if (ageHours) {
        ageHours.textContent = String(hours).padStart(2, "0");
    }

    if (ageMinutes) {
        ageMinutes.textContent = String(minutes).padStart(2, "0");
    }

    if (ageSeconds) {
        ageSeconds.textContent = String(seconds).padStart(2, "0");
    }
}


// Run immediately
updateAge();

// Update every second
setInterval(updateAge, 1000);