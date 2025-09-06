const buttonAddDogEl = document.querySelector("#button-random-dog");
const inputButtonEl = document.querySelector("#input-breed");
const showBreedButtonEl = document.querySelector("#button-show-breed");
const showSubBreedButtonEl = document.querySelector("#button-show-sub-breed");
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

function displaySubBreedList(subBreeds) {
    const list = document.createElement("ol");
    contentEl.innerHTML = '';

    subBreeds.forEach(subBreed => {
        const listItem = document.createElement("li");
        listItem.textContent = subBreed;
        list.appendChild(listItem);
    });

    contentEl.appendChild(list);
}

function displayError(message) {
    contentEl.innerHTML = `<p style="color:red;">${message}</p>`;
}

async function getRandomDogPicturesFromAPI() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        if (data.status !== "success") {
            displayError("Breed not found!");
            return;
        }

        if (!data.message || data.message.length === 0) {
            displayError("No sub-breeds found!");
            return;
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
            displayError("Breed not found!");
            return;
        }

        if (!data.message || data.message.length === 0) {
            displayError("No sub-breeds found!");
            return;
        }

        displayDogImage(data.message, `Picture of ${dogName}`);
    } catch (error) {
        console.error(error);
        displayError(error.message);
    }
}

async function getSubBreedNamesFromAPI() {
    try {
        const dogName = inputButtonEl.value.trim().toLowerCase();
        const response = await fetch(`https://dog.ceo/api/breed/${dogName}/list`);
        const data = await response.json();

        if (data.status !== "success") {
            displayError("Breed not found!");
            return;
        }

        if (!data.message || data.message.length === 0) {
            displayError("No sub-breeds found!");
            return;
        }

        displaySubBreedList(data.message);

    } catch (error) {
        console.error(error);
        displayError(error.message);
    }
}

buttonAddDogEl.addEventListener("click", getRandomDogPicturesFromAPI);
showBreedButtonEl.addEventListener("click", getDogPictureByNameFromAPI);
showSubBreedButtonEl.addEventListener("click", getSubBreedNamesFromAPI);
