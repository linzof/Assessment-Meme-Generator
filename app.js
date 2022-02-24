//Bootstrap styling variables
const memeContainer = document.querySelector("div");
const bootstrapRow = document.querySelector("#meme-list");
//Form variables
var imageURL = document.querySelector("#image-url");
var textOnTop = document.querySelector("#text-on-top");
var textOnBottom = document.querySelector("#text-on-bottom");
var submitBtn = document.querySelector("button");
var form = document.querySelector('form');
//space the form section and memes
let spacer = document.createElement('hr');
spacer.setAttribute('class', 'my-4');
//grabbing the information from the form to set each submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (imageURL.value != '' && textOnTop.value != '' || textOnBottom.value != '') {
        //setting up memeContainer space
        let bootstrapCol = document.createElement('div');
        let memeWrapper = document.createElement('div');
        let topText = document.createElement('p');
        let bottomText = document.createElement('p');
        memeContainer.appendChild(spacer);
        bootstrapRow.appendChild(bootstrapCol);
        bootstrapCol.setAttribute('class', 'col m-3');
        bootstrapCol.appendChild(memeWrapper);
        memeWrapper.setAttribute('class', 'meme');
        memeWrapper.appendChild(topText);
        memeWrapper.appendChild(bottomText);
        topText.setAttribute('class', 'top');
        bottomText.setAttribute('class', 'bottom');
        memeWrapper.style.backgroundImage = `url(${imageURL.value})`;
        topText.innerText = `${textOnTop.value}`;
        bottomText.innerText = `${textOnBottom.value}`;
        imageURL.value = '';
        textOnTop.value = '';
        textOnBottom.value = '';
    }
    else if (imageURL.value === '') {
        alert('please enter a proper image URL');
    }
    else {
        alert('please enter top &/or bottom text');
    }
})
//event delagation for deleting the user-created memes
const userCreatedMemes = document.querySelector('#meme-list');
userCreatedMemes.addEventListener('click', function (e) {
    //remove items
    if (e.target.className === 'meme') {
        e.target.parentElement.remove();
    }
})


