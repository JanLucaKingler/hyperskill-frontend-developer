const buttonAddDogEl = document.querySelector("#button-random-dog");

async function getDogPicturesFromAPI() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        const imageURL = data.message;
        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = 'Ein zufälliger Hund';
        img.style.maxWidth = '400px';
        img.style.display = 'block';
        img.style.marginTop = '20px';
        let elementById = document.getElementById('content');
        elementById.appendChild(img);
        elementById.innerHTML = '';
        elementById.appendChild(img);
    } catch (error) {
        console.error('Fehler beim Laden des Hundebildes:', error);
    }
}

buttonAddDogEl.addEventListener("click", getDogPicturesFromAPI);
