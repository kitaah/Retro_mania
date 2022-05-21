document.addEventListener('DOMContentLoaded', function(event) {
    console.log("domReady");
    console.log(event);
    });

// HOME HEADER PAGE

// Retrowave hat brand title 
let homeTitle = document.getElementById("redirection-top__title");

let typewriter = new Typewriter(homeTitle, {
    deleteSpeed: 50
});

typewriter.changeDelay(80)
    .typeString('Retrowave ')
    .pauseFor(500)
    .typeString('Hat Brand ')
    .pauseFor(500)
    .typeString('<span style="color:red">❤❤❤</span>')
    .pauseFor(2000)
    .deleteChars(4)
    .start();

// Shop now button -- Changing text on click
function displayPhrase() {
    let textHomeButton = document.getElementById("redirection-top__button");
    textHomeButton.innerHTML = "<p style='color: lightpink'>Let's go ! 🚀</p>";
    textHomeButton.style.backgroundColor = "rgb(83, 18, 83)";
}

// The Funky animal hat collection -- Changing image on hover 
function setNewImageFunkyAnimal() {
    document.getElementById("redirection-bottom__funky-animal-img").src="../img/collections/home_collections/funky_animal_collection.gif";
}

function setOldImageFunkyAnimal() {
    document.getElementById("redirection-bottom__funky-animal-img").src="../img/collections/home_collections/funky_animal_collection.png";
}

// The japan wave hat collection -- Changing image on hover 
function setNewImageJapanWave() {
    document.getElementById("redirection-bottom__japan-wave-img").src="../img/collections/home_collections/japan_wave_collection.gif";
}

function setOldImageJapanWave() {
    document.getElementById("redirection-bottom__japan-wave-img").src="../img/collections/home_collections/japan_wave_collection.png";
}

// The mystical sunset hat collection -- Changing image on hover 
function setNewImageMysticalSunset() {
    document.getElementById("redirection-bottom__mystical-sunset-img").src="../img/collections/home_collections/mystical_sunset_collection.gif";
}

function setOldImageMysticalSunset() {
    document.getElementById("redirection-bottom__mystical-sunset-img").src="../img/collections/home_collections/mystical_sunset_collection.png";
}

