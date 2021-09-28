console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let images = document.getElementsByClassName("cm-string cm-string-link")

function getImages() {
   return fetch(imgUrl)
   .then(resp => resp.json())
   .then(results => {
       results.message.forEach(image=> renderImage(image))
    });
}

function renderImage(imageUrl) {
    let container = document.querySelector("dog-image-container");
    let newImg = document.createElement('img');
    newImg.src = imageUrl;
    container.appendChild(newImg);
}
  