// DEVELOP TEST SECTION
let kanyeQuoteEl = document.querySelector("#kanye-quote");
let chuckQuoteEl = document.querySelector("#chuck-quote");
let gifHolderEl = document.querySelector("#gif-holder");
let selectedQuoteEl = document.querySelector("#selected-quote");
let chuckSelectEl = document.querySelector("#chuck-select");
let kanyeSelectEl = document.querySelector("#kanye-select");

let dataCategoryNames = {
    0: "actions",
    1: "adjectives",
    2: "animals",
    3: "anime",
    4: "art & design",
    5: "cartoons & comics",
    6: "celebrities",
    7: "decades",//?
    8: "emotions",
    9: "fashion & beauty",
    10: "food & drink",
    11: "gaming",
    12: "greetings",
    13: "holiday",
    14: "identity",//?
    15: "interests",
    16: "memes",
    17: "movies",
    18: "music",
    19: "nature",
    20: "news & politics",
    21: "reactions",//?
    22: "science",
    23: "sports",
    24: "stickers",
    25: "transportation",
    26: "tv",
    27: "weird",
    28: "All",
};

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

let holdData;
let index = 4;
let searchLimit = 50;
let searchQuestion = dataCategoryNames[index];

const kanyeKey = "https://api.kanye.rest";
const chuckKey = "https://api.chucknorris.io/jokes/random";
var randomEndpointKey = "https://api.giphy.com/v1/gifs/random"
var searchCategoriesKey = "https://api.giphy.com/v1/gifs/categories?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";
var searchEndpointKey = "https://api.giphy.com/v1/gifs/search?limit=" + searchLimit + "&q=" 
+ searchQuestion + "&api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";

const SetIndex = (input) => {
    index = input;
    console.log("Index Set: " + index);
}

const SetSearchParam = (input) => {
    searchQuestion = input;
}

const FetchQuotes = () => {
    fetch(kanyeKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //Kanye quote here
        kanyeQuoteEl.textContent = "Kanye Says: " + data.quote;
    });
    
    fetch(chuckKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //Chuck quote here
        chuckQuoteEl.textContent = "Chuck Says: " + data.value;
    });
}

const FetchSearchData = () => {
    //randomize category?
    //index = Math.floor(Math.random() * Object.keys(dataCategoryNames).length);
    searchEndpointKey = "https://api.giphy.com/v1/gifs/search?limit=" + searchLimit + "&q=" 
    + searchQuestion + "&api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";

    fetch(searchEndpointKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        holdData = data;
        AppendGifToPageAlt();
    });

    /*let CycleGif = setInterval(function() {
        index++;
        if(index > dataCategoryNames.length) { index = 0; }
        AppendGifToPageAlt();
    }, 10000);*/
}

const FetchCategoryData = () => {
    fetch(searchCategoriesKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        holdData = data;
        AppendGifToPage();
    });

    /*let CycleGif = setInterval(function() {
        index++;
        if(index > dataCategoryNames.length) { index = 0; }
        AppendGifToPage();
    }, 10000);*/
}

const GenerateContentButtons = () => {
    console.log("GENERATING USER INPUT HANDLERS");
    var userInputDiv = document.createElement("div");
    var selectorContainerEl = document.createElement("div");
    var inputContainerEl = document.createElement("div");
    var buttonEl = document.createElement("button");
    var labelEl = document.createElement("label");
    var inputEl = document.createElement("input");

    inputEl.setAttribute("id", "default-input");
    inputEl.setAttribute("name", "default-input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("placeholder", "animals");
    selectorContainerEl.classList.add("container-div");
    inputContainerEl.classList.add("container-div");

    labelEl.setAttribute("for", "default-input");
    labelEl.classList.add("label-style");
    labelEl.textContent = "Search: ";

    buttonEl.textContent = "Search!";
    buttonEl.classList.add("search-button");
    buttonEl.classList.add("custom-button");
    buttonEl.addEventListener("click", function() {
        if(inputEl.value == "") { 
            console.log("No Search Param");
            return; 
        }

        searchQuestion = inputEl.value;
        HandleUserInput();
    });
    inputEl.addEventListener("submit", function(event) {
        event.stopPropagation();
        event.preventDefault();
        searchQuestion = inputEl.value;
        HandleUserInput();
    });
    
    var selectLabelEl = document.createElement("label");
    var selectEl = document.createElement("select");
    selectLabelEl.textContent = "Choose Category: ";

    selectEl.setAttribute("id", "category-selector");
    selectEl.setAttribute("name", "category-selector");
    selectLabelEl.setAttribute("for", "category-selector");
    selectLabelEl.classList.add("label-style");

    for(let i = 0; i < Object.keys(dataCategoryNames).length; i++) {
        var optionEl = document.createElement("option");
        var toUpper = dataCategoryNames[i];
        toUpper = (toUpper.slice(0, 1)).toUpperCase() + toUpper.slice(1);
        
        optionEl.setAttribute("value", dataCategoryNames[i]);
        optionEl.textContent = toUpper;
        selectEl.append(optionEl);
    }

    selectEl.addEventListener("change", function() {
        var passVal = this.value;
        console.log(passVal);

        for(let i = 0; i < Object.keys(dataCategoryNames).length; i++) {
            if(passVal === dataCategoryNames[i]) {
<<<<<<< HEAD
                if(passVal === "all") {
                    //Search all categories
                }
=======
>>>>>>> 38898151d5aaa55438eafc8ad34604e63099ed90
                SetIndex(i);
                HandleUserInput();
            }
        }
    });
    
    selectorContainerEl.append(selectLabelEl);
    selectorContainerEl.append(selectEl);
    userInputDiv.append(selectorContainerEl);

    inputContainerEl.append(labelEl);
    inputContainerEl.append(inputEl);
    inputContainerEl.append(buttonEl);
    userInputDiv.append(inputContainerEl);

    gifHolderEl.prepend(userInputDiv);
}

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

const AppendGifToPageAlt = () => {
    var check = document.querySelector(".gif-parent");
    if(check) { check.remove(); }

    var gifParent = document.createElement("div");
    var gifHolder = document.createElement("img");
    var random = Math.floor(Math.random() * holdData.data.length);
    console.log(index + " : " + random);

    gifHolder.src = holdData.data[random].images.downsized_large.url;

    gifParent.classList.add("gif-parent");
    gifParent.append(gifHolder);
    gifHolderEl.append(gifParent);
}

const HandleUserInput = () => {
    FetchQuotes();
    FetchSearchData();
}

GenerateContentButtons();

chuckSelectEl.addEventListener("click", function() {
    selectedQuoteEl.textContent = chuckQuoteEl.textContent;
});

kanyeSelectEl.addEventListener("click", function() {
    selectedQuoteEl.textContent = kanyeQuoteEl.textContent;
});