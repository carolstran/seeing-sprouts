const sproutImagePaths = [
  "images/sprouts/brussels-sprouts-pexels.jpg",
  "images/sprouts/danielle-macinnes-unsplash.jpg",
  "images/sprouts/keenan-loo-unsplash.jpg",
  "images/sprouts/hans-braxmeier-pixabay.jpg",
  "images/sprouts/kai-kalhh-pixabay.jpg",
  "images/sprouts/rudy-and-peter-skitterians-pixabay.jpg",
  "images/sprouts/susbany-pixabay.jpg",
  "images/sprouts/ulrike-leone-pixabay-II.jpg",
  "images/sprouts/ulrike-leone-pixabay.jpg"
];

const potatoImagePaths = [
  "images/potatoes/bowl-1842294_1920.jpg",
  "images/potatoes/potatoes-1866415_1920.jpg",
  "images/potatoes/eat-4239509_1920.jpg",
  "images/potatoes/prince-abid-1139407-unsplash.jpg",
  "images/potatoes/monika-grabkowska-1444098-unsplash.jpg",
  "images/potatoes/ukraine-2652561_1920.jpg"
];

const avocadoImagePaths = [
  "images/avocados/charles-rnxGtZJl1Q8-unsplash.jpg",
  "images/avocados/FoodieFactor-avocado-pixabay.jpg",
  "images/avocados/irene-kredenets-AWMWcR3hQUg-unsplash.jpg",
  "images/avocados/mali-maeder-avocado-pexels.jpg",
  "images/avocados/nur-afni-setiyaningrum-NIBKggQ-bVM-unsplash.jpg",
  "images/avocados/silverstylus-avocado-pixabay.jpg",
  "images/avocados/thought-catalog-EMX1eJ1BcgU-unsplash.jpg",
  "images/avocados/wixin_56l-avocado-pixabay.png"
];

const eggplantImagePaths = [
  "images/eggplants/charles-deluvio-landscape-unsplash.jpg",
  "images/eggplants/charles-deluvio-portrait-unsplash.jpg",
  "images/eggplants/charles-deluvio-teal-unsplash.jpg",
  "images/eggplants/jacqueline-macou-pixabay.jpg",
  "images/eggplants/lino-lombardi-pixabay.jpg",
  "images/eggplants/taken-pixabay.jpg"
];

const map = {
  sprouts: sproutImagePaths,
  potatoes: potatoImagePaths,
  avocados: avocadoImagePaths,
  eggplants: eggplantImagePaths
};

const restoreOptionsPromise = () => {
  // Use default value veggie = 'sprouts'
  const promise = browser.storage.sync.get({
    preferredVeggie: "sprouts"
  });
  return promise;
};

const getRandomSprout = imagePath => {
  const imagePaths = imagePath.map(path => browser.runtime.getURL(path));
  return imagePaths[Math.floor(Math.random() * imagePaths.length)];
};

const updateImages = () => {
  const promise = restoreOptionsPromise();
  promise.then(items => {
    const { preferredVeggie } = items;
    const imagePath = map[preferredVeggie];
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("src", getRandomSprout(imagePath));
    }
  });
};

updateImages();
