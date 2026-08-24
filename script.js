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