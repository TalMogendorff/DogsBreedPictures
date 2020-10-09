const $dogBreed = document.getElementById('dogBreed');
const $searchBtn = document.getElementById('searchBtn');
const $dogPost = document.getElementById('dogBreedImg');

async function dogBreedImport(breed) {

    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`);

    const data = await response.json();

    const dataUrl = data.message; //array

    let clean = '';

    dataUrl.forEach((doggy) => {
        clean += `<img src="${doggy}">`
    })
    $dogPost.innerHTML = clean;
}

$searchBtn.addEventListener('click', () => {
    dogBreedImport($dogBreed.value.toLowerCase().trim());
})