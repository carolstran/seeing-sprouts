const sproutImagePaths = [
  "images/sprouts/brussels-sprouts-pexels.jpg",
  "images/sprouts/keenan-loo-unsplash.jpg",
  "images/sprouts/hans-braxmeier-pixabay.jpg",
  "images/sprouts/kai-kalhh-pixabay.jpg",
  "images/sprouts/rudy-and-peter-skitterians-pixabay.jpg",
  "images/sprouts/susbany-pixabay.jpg",
  "images/sprouts/ulrike-leone-pixabay-II.jpg",
  "images/sprouts/ulrike-leone-pixabay.jpg"
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

const broccoliImagePaths = [
  "images/broccoli/annie-spratt-unsplash.jpg",
  "images/broccoli/auntmasako-pixabay.jpg",
  "images/broccoli/buenosia-carol-pexels.jpg",
  "images/broccoli/cj-dayrit-unsplash.jpg",
  "images/broccoli/engin-akyurt-pixabay.jpg",
  "images/broccoli/foodism360-unsplash.jpg",
  "images/broccoli/hessam-hojati-unsplash.jpg",
  "images/broccoli/pixabay-general.jpg"
];

const cornImagePaths = [
  "images/corn/buenosia-carol-pexels.jpg",
  "images/corn/charles-deluvio-robot-unsplash.jpg",
  "images/corn/charles-deluvio-unsplash.jpg",
  "images/corn/christina-branco-unsplash.jpg",
  "images/corn/marco-antonio-victorino-unsplash.jpg",
  "images/corn/mohd-hafiz-yahya-unsplash.jpg",
  "images/corn/rawpixel-cob-pexels.jpg",
  "images/corn/rawpixel-pexels.jpg",
  "images/corn/virgil-cayasa-unsplash.jpg"
];

const candyCornImagePaths = [
  "images/candyCorn/dane-deaner-unsplash.jpg",
  "images/candyCorn/sheri-silver-unsplash.jpg",
  "images/candyCorn/skeeze-pixabay.jpg",
  "images/candyCorn/wokandapix-pixabay.jpg"
];

const eggplantImagePaths = [
  "images/eggplants/charles-deluvio-landscape-unsplash.jpg",
  "images/eggplants/charles-deluvio-portrait-unsplash.jpg",
  "images/eggplants/charles-deluvio-teal-unsplash.jpg",
  "images/eggplants/jacqueline-macou-pixabay.jpg",
  "images/eggplants/lino-lombardi-pixabay.jpg",
  "images/eggplants/taken-pixabay.jpg"
];

const potatoImagePaths = [
  "images/potatoes/bowl-1842294_1920.jpg",
  "images/potatoes/potatoes-1866415_1920.jpg",
  "images/potatoes/eat-4239509_1920.jpg",
  "images/potatoes/prince-abid-1139407-unsplash.jpg",
  "images/potatoes/monika-grabkowska-1444098-unsplash.jpg",
  "images/potatoes/ukraine-2652561_1920.jpg"
];

const pumpkinImagePaths = [
  "images/pumpkins/benedikt-geyer-unsplash.jpg",
  "images/pumpkins/colton-sturgeon-unsplash.jpg",
  "images/pumpkins/craig-pattenaude-unsplash.jpg",
  "images/pumpkins/dan-gold-unsplash.jpg",
  "images/pumpkins/karalina-s-unsplash.jpg",
  "images/pumpkins/kerstin-wrba-unsplash.jpg",
  "images/pumpkins/maddy-baker-unsplash.jpg",
  "images/pumpkins/matt-eberle-unsplash.jpg",
  "images/pumpkins/olivia-kulbida-unsplash.jpg",
  "images/pumpkins/rohan-reddy-unsplash.jpg",
  "images/pumpkins/sebastien-lapointe-unsplash.jpg"
];

const tomatoImagePaths = [
  "images/tomatoes/alex-ghizila-UD_j10SKj5g-unsplash.jpg",
  "images/tomatoes/aliona-gumeniuk-CWAargZlesM-unsplash.jpg",
  "images/tomatoes/immo-wegmann-S-de8PboZmI-unsplash.jpg",
  "images/tomatoes/lars-blankers-6Z7Ss9jlEL0-unsplash.jpg",
  "images/tomatoes/marc-mueller-dJHdolN553o-unsplash.jpg",
  "images/tomatoes/thomas-martinsen-iASD5_HpTZc-unsplash.jpg",
  "images/tomatoes/tom-hermans-nM6qrtnVKn8-unsplash.jpg"
];

const map = {
  sprouts: sproutImagePaths,
  avocados: avocadoImagePaths,
  broccoli: broccoliImagePaths,
  corn: cornImagePaths,
  candyCorn: candyCornImagePaths,
  eggplants: eggplantImagePaths,
  potatoes: potatoImagePaths,
  pumpkins: pumpkinImagePaths,
  tomatoes: tomatoImagePaths
};

const restoreOptionsPromise = () => {
  // Use default value veggie = 'sprouts'
  const promise = browser.storage.sync.get({
    preferredVeggie: "sprouts"
  });
  return promise;
};

const getRandomImage = imagePath => {
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
      images[i].setAttribute("src", getRandomImage(imagePath));
      images[i].setAttribute("style", "max-width: 100%; object-fit: cover;");
    }
  });
};

updateImages();
