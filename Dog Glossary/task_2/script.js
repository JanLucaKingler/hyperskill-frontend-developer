const buttonAddDogEl = document.querySelector("#button-random-dog");
const inputButtonEl = document.querySelector("#input-breed");
const showBreedButtonEl = document.querySelector("#button-show-breed");
const contentEl = document.getElementById('content');

function displayDogImage(imageURL, altText) {
    const img = document.createElement('img');
    img.src = imageURL;
    img.alt = altText;
    img.style.maxWidth = '400px';
    img.style.display = 'block';
    img.style.marginTop = '20px';

    contentEl.innerHTML = '';
    contentEl.appendChild(img);
}

function displayError(message) {
    contentEl.innerHTML = `<p style="color:red;">${message}</p>`;
}

async function getRandomDogPicturesFromAPI() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        if (data.status !== "success") {
            throw new Error("Breeds not found!");
        }

        displayDogImage(data.message, 'A random Dog');
    } catch (error) {
        console.error(error);
        displayError(error.message);
    }
}

async function getDogPictureByNameFromAPI() {
    try {
        const dogName = inputButtonEl.value.trim().toLowerCase();

        const response = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`);
        const data = await response.json();

        if (data.status !== "success") {
            throw new Error("Breed not found!");
        }

        displayDogImage(data.message, `Picture of ${dogName}`);
    } catch (error) {
        console.error(error);
        displayError(error.message);
    }
}

buttonAddDogEl.addEventListener("click", getRandomDogPicturesFromAPI);
showBreedButtonEl.addEventListener("click", getDogPictureByNameFromAPI);
