document.addEventListener('DOMContentLoaded', () => {
    
//add images to DOM
fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => data.message.forEach(pic => renderPic(pic))
    )

function renderPic(pic) {
    const img = document.createElement('img');
    const imgContainer = document.querySelector('#dog-image-container');
    img.src = pic
    imgContainer.appendChild(img)
}

//add breeds to DOM
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(dogs => convertObj(dogs))
    
 function convertObj(dogs) {
    Object.keys(dogs.message).forEach(dog => listDog(dog))
    // Object.entries(dogs.message).forEach(dog => listDog(dog)) ??
 }

 function listDog(dog){
    const li = document.createElement('li')
    const ul = document.querySelector('#dog-breeds')
    li.textContent = dog
    ul.appendChild(li);
    //add click event to dom => change li colour
    li.addEventListener('click', (e) => e.target.style.color = "#69f715")
};

//add functionality to dropdown options


})