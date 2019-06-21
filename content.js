const imagePaths = [
  "images/brussels-sprouts-pexels.jpg",
  "images/danielle-macinnes-unsplash.jpg",
  "images/keenan-loo-unsplash.jpg"
].map(path => chrome.extension.getURL(path));

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
