//global variables
let dogArray = null;
const dropdown = document.querySelector("#breed-dropdown");
const ul = document.querySelector("ul");
//add images to DOM
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((res) => res.json())
  .then((data) => data.message.forEach((pic) => renderPic(pic)));

function renderPic(pic) {
  const img = document.createElement("img");
  const imgContainer = document.querySelector("#dog-image-container");
  img.src = pic;
  imgContainer.appendChild(img);
}

//add breeds to DOM
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((dogs) => {
    dogArray = dogs;
    listDogs(dogs);
  });

function listDogs(dogs, breed = "all") {
  const doggies = Object.keys(dogs.message);
  ul.innerHTML = "";
  doggies.forEach((dog) => {
    if (breed === "all") {
      renderDog(dog);
    } else {
      if (dog[0] === breed) renderDog(dog);
    }
  });
}

// function that renders the list of dogs to the DOM
function renderDog(dog) {
  let li = document.createElement("li");
  li.textContent = dog;
  ul.appendChild(li);

  //add click event to dom => change li colour
  li.addEventListener("click", (e) => (e.target.style.color = "#69f715"));
}

//add functionality to dropdown options
dropdown.addEventListener("change", function () {
  const letter = this.value;
  if(dogArray) listDogs(dogArray, letter);
});
