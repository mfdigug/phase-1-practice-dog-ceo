document.addEventListener('DOMContentLoaded', () => {
    

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
})

