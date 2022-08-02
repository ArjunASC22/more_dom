let changeButton = document.getElementById('change_button');
let addButton = document.getElementById('add_button');
let deleteButton = document.getElementById('delete_button');

let imageDiv = document.getElementById('image_div');

changeButton.onclick = function() {
    let firstImage = imageDiv.children[0];
    firstImage.src = 'images/squirtle.png';
}

let images = ["images/bulbasaur.png", "images/charmander.png", "images/pikachu.png", "images/squirtle.png"];

let counter = 0;

addButton.onclick = function() {
    let newImage = document.createElement('img');
    newImage.src = images[counter % 4];
    imageDiv.appendChild(newImage);
    counter++;
}

deleteButton.onclick = function() {
    imageDiv.children[imageDiv.children.length - 1].remove();
}