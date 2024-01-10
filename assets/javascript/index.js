// DEVELOP TEST SECTION
let kanyeQuoteEl = document.querySelector("#kanye-quote");
let chuckQuoteEl = document.querySelector("#chuck-quote");
let gifHolderEl = document.querySelector("#gif-holder");
let selectedQuoteEl = document.querySelector("#selected-quote");

let index = 3;
let holdData;

let dataObjectNames = {
    0: "actions",
    1: "adjectives",
    2: "animals",
    3: "anime",
    4: "art & design",
    5: "cartoons & comics",
    6: "celebrities",
    7: "decades",
    8: "emotions",
    9: "fashion & beauty",
    10: "food & drink",
    11: "gaming",
    12: "greetings",
    13: "holiday",
    14: "identity",
    15: "interests",
    16: "memes",
    17: "movies",
    18: "music",
    19: "nature",
    20: "news & politics",
    21: "reactions",
    22: "science",
    23: "sports",
    24: "stickers",
    25: "transportation",
    26: "tv",
    27: "weird",
};

var chuckNorrisKey = "https://api.kanye.rest";
fetch(chuckNorrisKey, {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    //Kanye quote here
    console.log(data);
    kanyeQuoteEl.textContent = "Kanye Says: " + data.quote;
});

fetch("https://api.chucknorris.io/jokes/random", {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    //Chuck quote here
    console.log(data);
    chuckQuoteEl.textContent = "Chuck Says: " + data.value;
});

/*fetch("https://stoic.tekloon.net/stoic-quote", {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    //forecastEl.textContent = forecastEl.textContent + "\n\n" + data.value;
});
*/
//giphy api key = bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks

var searchCategoriesKey = "https://api.giphy.com/v1/gifs/categories?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";
var searchEndpointKey = "https://api.giphy.com/v1/gifs/search?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks?limit=20?q=" 
+ dataObjectNames[index];

const AppendGifToPage = () => {
    var check = document.querySelector(".gif-parent");
    if(check) { check.remove(); }
    var gifParent = document.createElement("div");
    var gifHolder = document.createElement("img");
    gifParent.classList.add("gif-parent");
    gifHolder.src = holdData.data[index].gif.images.downsized_large.url;
    gifParent.append(gifHolder);
    gifHolderEl.append(gifParent);
}

fetch(searchCategoriesKey, {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    holdData = data;
    AppendGifToPage();
});

let CycleGif = setInterval(function() {
    index++;
    if(index > dataObjectNames.length) {
        index = 0;
    }
    AppendGifToPage();
}, 10000);