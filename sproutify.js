const imagePaths = [
  "images/brussels-sprouts-pexels.jpg",
  "images/danielle-macinnes-unsplash.jpg",
  "images/keenan-loo-unsplash.jpg",
  "images/hans-braxmeier-pixabay.jpg",
  "images/kai-kalhh-pixabay.jpg",
  "images/rudy-and-peter-skitterians-pixabay.jpg",
  "images/susbany-pixabay.jpg",
  "images/ulrike-leone-pixabay-II.jpg",
  "images/ulrike-leone-pixabay.jpg"
].map(path => browser.runtime.getURL(path));

getRandomSprout = () => {
  return imagePaths[Math.floor(Math.random() * imagePaths.length)];
};

updateImages = () => {
  let images = document.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", getRandomSprout());
  }
};

updateImages();
