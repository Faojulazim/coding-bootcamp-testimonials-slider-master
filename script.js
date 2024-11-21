const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const profiles_images = document.querySelectorAll("[data-profiles]");
const reviews = document.querySelectorAll("[data-para]");
const devName = document.querySelectorAll("[data-name]");
const post = document.querySelectorAll("[data-post]");

let current = 0;

function addHidden(current) {
  profiles_images[current].classList.add("hidden");
  reviews[current].classList.add("hidden");
  devName[current].classList.add("hidden");
  post[current].classList.add("hidden");
}

function removeHidden(current) {
  profiles_images[current].classList.remove("hidden");
  reviews[current].classList.remove("hidden");
  devName[current].classList.remove("hidden");
  post[current].classList.remove("hidden");
}

next.addEventListener("click", (e) => {
  if (current < profiles_images.length - 1) {
    addHidden(current);
    current++;
    removeHidden(current);
  } else {
    current = 0;
    addHidden(profiles_images.length - 1);
    removeHidden(current);
  }
});

previous.addEventListener("click", (e) => {
  if (current > 0) {
    addHidden(current);
    current--;
    removeHidden(current);
  } else {
    current = profiles_images.length - 1;
    addHidden(0);
    removeHidden(current);
  }
});
