const $dogPost = document.getElementById('dogBreedImg');
const $breedNames = document.getElementById('breedNames');
const $breedCont = document.getElementById('dogImgCont');
async function dogBreedName() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
    const dataNames = await response.json();
    const dataBreedName = dataNames.message;
    const dataArrayOfNames = Object.entries(dataBreedName)

    dataArrayOfNames.forEach((abreed) => {
        var capB = abreed[0].charAt(0).toUpperCase() + abreed[0].slice(1)
        if (!abreed[1].length) {
            $breedNames.innerHTML += `<option style="text-align:center;">${capB}</option>`;
        }
        abreed[1].forEach((bbreed) => {
            $breedNames.innerHTML += `<option style="text-align:center;" value="${abreed[0] + "/" + bbreed}">${capB + " " + bbreed}</option>`
        })
    })
}
dogBreedName();
async function dogBreedImport(abreed) {

    const response = await fetch(`https://dog.ceo/api/breed/${abreed}/images/random/6`)


    const data = await response.json();
    return data.message;

}

function dogImgRender(dogImg) {
    $breedCont.style.display = "block";
    dogImg.then(data => {
        $dogPost.innerHTML = '';
        data.forEach((img) => {
            $dogPost.innerHTML += `
                <a class="example-image-link" href="${img}" data-lightbox="example-set" data-title="Click the right half of the image to move forward."><img width=500 height=300 class="example-image" src="${img}" alt=""/></a>`
        })
    });
}


function dogMerge(dogs) {
    const dog = dogBreedImport(dogs);
    dogImgRender(dog);
}

$breedNames.addEventListener('change', () => {
    dogMerge($breedNames.value.toLowerCase().trim());
})