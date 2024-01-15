// DEVELOP TEST SECTION
let kanyeQuoteEl = document.querySelector("#kanye-quote");
let chuckQuoteEl = document.querySelector("#chuck-quote");
let gifHolderEl = document.querySelector("#gif-holder");
//let selectedQuoteEl = document.querySelector("#selected-quote");
let chuckSelectEl = document.querySelector("#chuck-select");
let kanyeSelectEl = document.querySelector("#kanye-select");
let bottomSectionEl = document.querySelector(".bottom-section");
let optionEl = document.querySelector(".download-options");

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
var searchtrendingKey ="https://api.giphy.com/v1/trending/searches?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";

const FetchQuotes = () => {
    fetch(kanyeKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //Kanye quote here
        kanyeQuoteEl.textContent = data.quote;
    });
    
    fetch(chuckKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        //Chuck quote here
        chuckQuoteEl.textContent = data.value;
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
        AppendGifFromSearch();
    });

    /*let CycleGif = setInterval(function() {
        index++;
        if(index > dataCategoryNames.length) { index = 0; }
        AppendGifFromSearch();
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
        AppendGifFromCategory();
    });

    /*let CycleGif = setInterval(function() {
        index++;
        if(index > dataCategoryNames.length) { index = 0; }
        AppendGifFromCategory();
    }, 10000);*/
}

const FetchTrendingData = () => {
    fetch(searchtrendingKey, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        holdData = data;
        HandleTrendingData();
    });
}

const SetSearchParam = (input) => {
    searchQuestion = input;
}

const GenerateContentButtons = () => {
    console.log("GENERATING USER INPUT HANDLERS");
    var userInputDiv = document.createElement("div");
    var selectorContainerEl = document.createElement("div");
    var inputContainerEl = document.createElement("div");
    var trendingContainerEl = document.createElement("div");
    var buttonEl = document.createElement("button");
    var trendingEl = document.createElement("button");
    var labelEl = document.createElement("label");
    var trendingLabelEl = document.createElement("label");
    var inputEl = document.createElement("input");
    var bottomRuleEl = document.createElement("hr");

    inputEl.setAttribute("id", "default-input");
    inputEl.setAttribute("name", "default-input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("placeholder", "animals");
    userInputDiv.classList.add("user-div");
    selectorContainerEl.classList.add("container-div");
    inputContainerEl.classList.add("container-div");

    selectorContainerEl.classList.add("container-div");
    inputContainerEl.classList.add("container-div");
    trendingContainerEl.classList.add("container-div");
    trendingLabelEl.classList.add("label-style");
    labelEl.classList.add("label-style");
    trendingEl.classList.add("custom-button");

    labelEl.setAttribute("for", "default-input");
    labelEl.textContent = "Search: ";
    trendingEl.textContent = "Search Top 10!";
    trendingLabelEl.textContent = "Trending: ";

    buttonEl.textContent = "Search!";
    buttonEl.classList.add("search-button");
    buttonEl.classList.add("custom-button");
    
    //Category Select
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

    //Event Listeners
    buttonEl.addEventListener("click", function() {
        if(inputEl.value == "") { 
            alert("No Search Input Found!");
            return; 
        }
        searchQuestion = inputEl.value;
        HandleUserInput();
    });
    inputEl.addEventListener("keydown", function(event) {
        if(event.key == "Enter") {
            searchQuestion = inputEl.value;
            HandleUserInput(); }
    });
    trendingEl.addEventListener("click", function() {
        FetchTrendingData();
    });
    selectEl.addEventListener("change", function() {
        var passVal = this.value;
        searchQuestion = passVal;
        HandleUserInput();
    });
    
    selectorContainerEl.append(selectLabelEl);
    selectorContainerEl.append(selectEl);
    userInputDiv.append(selectorContainerEl);

    trendingContainerEl.append(trendingLabelEl);
    trendingContainerEl.append(trendingEl);
    userInputDiv.append(trendingContainerEl);

    inputContainerEl.append(labelEl);
    inputContainerEl.append(inputEl);
    inputContainerEl.append(buttonEl);
    userInputDiv.append(inputContainerEl);

    gifHolderEl.prepend(userInputDiv);
    gifHolderEl.append(bottomRuleEl);
}

const HandleTrendingData = () => {
    var randomTrending = Math.floor(Math.random()*10);
    searchQuestion = holdData.data[randomTrending];
    holdTitle = searchQuestion;
    console.log(holdData.data[randomTrending]);
    
    HandleUserInput();
}

const HandleUserInput = () => {
    FetchQuotes();
    FetchSearchData();
}

let storeDataObject = new Object();
let storeNameURLArray = [];
let localStorageEl;

let canvasEl;
let xSize;
let ySize;
const maxStore = 10;
let indexStep = 0;
let saveIndex = 0;
let holdTitle = "";
let saveParam;
let holdQuote = "";

const AppendGifFromCategory = () => {
    var check = document.querySelector(".gif-parent");
    if(check) { check.remove(); }
    var gifParent = document.createElement("div");
    var gifHolder = document.createElement("img");
    var imgSource = holdData.data[index].gif.images.original;
    
    gifParent.classList.add("gif-parent");
    gifHolder.src = imgSource.url;
    gifParent.append(gifHolder);
    gifHolderEl.append(gifParent);
    StoreDataLocally(imgSource);
}

const AppendGifFromSearch = () => {
    var check = document.querySelector(".gif-parent");
    if(check) { check.remove(); }

    var gifParent = document.createElement("div");
    var gifImageEl = document.createElement("img");
    var random = Math.floor(Math.random() * holdData.data.length);
    var imgSource = holdData.data[random].images.original;
    gifImageEl.src = imgSource.url;
    holdTitle = SanitizeString(holdData.data[random].title);
    AppendToCanvas(gifParent, imgSource);

    gifParent.classList.add("gif-parent");
    gifParent.append(gifImageEl);
    gifHolderEl.append(gifParent);
    StoreDataLocally(imgSource);
}

const AppendGifFromStorage = (input) => {
    var check = document.querySelector(".gif-parent");
    if(check) { check.remove(); }

    var gifParent = document.createElement("div");
    var gifHolder = document.createElement("img");
    var imgSource = storeDataObject[input];
    AppendToCanvas(gifParent, imgSource[1]);
    //WriteToCanvas(storeDataObject[input][2], 0);

    gifHolder.src = imgSource[1].url;
    gifParent.classList.add("gif-parent");
    gifParent.append(gifHolder);
    gifHolderEl.append(gifParent);
}

const AppendToCanvas = (parent, source) => {
    //TESTING
    if(source == null) { return; }
    canvasEl = document.createElement("canvas");
    const ctx = canvasEl.getContext("2d");
    let img = new Image();
    let heightScalar = 474.666/source.height;
    
    xSize = heightScalar * source.width;
    ySize = heightScalar * source.height;
    img.src = source.url;

    canvasEl.setAttribute("id", "custom-canvas");
    canvasEl.setAttribute("height", ySize);
    canvasEl.setAttribute("width", xSize);
    img.crossOrigin = "anonymous";
    console.log(img.src);

    //var frames = source.frames;
    //var frameArray = Array(Number(frames));
    //let gifBlob = fetch(source.url).then((r) => r.blob());
    //console.log(frames + " : " + gifBlob);
    //var myGif = new GIF();
    //myGif.load(gifImageEl.src);
    //myGif.addEventListener("load", () => {
    //    ctx.drawImage(myGif, 0, 0, xSize, ySize);
    //});

    img.addEventListener("load", () => {
        ctx.drawImage(img, 0, 0, xSize, ySize);
    });
    //End Testing
    
    parent.append(canvasEl);
}

const WriteToCanvas = (input, index) => {
    if(!canvasEl) { return; }
    console.log(input);
    var ctx = canvasEl.getContext("2d");
    var measure = ctx.measureText(input);
    //var scaleX = xSize / measure.width;
    //var scaleY = ySize / measure.height;
    var backColor;

    if(index == 1) {
        backColor = "#F1B4BB";
    } else {
        backColor = "#72501F";
    }

    ctx.fillStyle = backColor;
    ctx.fillRect(0, ySize*0.8, xSize, ySize*0.2);
    
    ctx.font = "20px Poppins";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseLine = "center";
    //ctx.scale(scaleX, scaleX);
    //console.log(scaleX + " : " + scaleY);
    ctx.fillText(input, xSize*0.5, (ySize*0.95));

    SaveCanvasImage();
}

const SaveCanvasImage = () => {
    var downloadBtnEl = document.querySelector("#download-png-button");
    saveParam = "image/" + optionEl.value;
    var saveIMG = canvasEl.toDataURL(saveParam);
    var saveName = "chuck-yeezy-meme-" + saveIndex;

    downloadBtnEl.href = saveIMG;
    downloadBtnEl.setAttribute("download", saveName);
    
    saveIndex++;
    localStorage.setItem("saveIndex", saveIndex);
}

const GetLocalData = () => {
    if(localStorage.getItem("saveIndex")) {
        saveIndex = localStorage.getItem("saveIndex");
    }

    if(localStorage.getItem("stepIndex")) {
        indexStep = localStorage.getItem("stepIndex");
        indexStep++;
    } else {
        indexStep = 0;
    }

    if(localStorage.getItem("GIFnames")) {
        storeDataObject = JSON.parse(localStorage.getItem("GIFnames"));
        console.log(storeDataObject);
    }

    populateFromStorage(true);
}

const StoreDataLocally = (valuein) => {
    if(indexStep > maxStore) { return; }
    if(holdQuote == "") { holdQuote = kanyeQuoteEl.textContent; }
    if(localStorage.getItem("GIFnames")) {storeDataObject = JSON.parse(localStorage.getItem("GIFnames"));}
    
    storeNameURLArray[0] = holdTitle;
    storeNameURLArray[1] = valuein;
    storeNameURLArray[2] = holdQuote;
    storeDataObject[indexStep] = storeNameURLArray;
    console.log(indexStep + "" + storeDataObject);

    //localStorage.setItem(keyin,valuein);
    localStorage.setItem("stepIndex", indexStep);
    localStorage.setItem("saveIndex", saveIndex);
    localStorage.setItem("GIFnames", JSON.stringify(storeDataObject));
    //populateFromStorage(false);
    addButtonFromStorage();
}

const addButtonFromStorage = () => {
    var storageButtonEl = document.createElement("button");
    var removeButtonEl = document.createElement("button");
    var hyperlinkEl = document.createElement("a");
    var localUrl = storeDataObject[indexStep][1].url;
    var localTitle = SanitizeString(storeDataObject[indexStep][0]);
    var locationIndex = indexStep;

    storageButtonEl.classList.add("storage-button");
    removeButtonEl.classList.add("remove-button");
    hyperlinkEl.setAttribute("href", localUrl);
    hyperlinkEl.textContent = localTitle;
    removeButtonEl.textContent = "X";
    storageButtonEl.append(hyperlinkEl);
    storageButtonEl.append(removeButtonEl);
    localStorageEl.append(storageButtonEl);
    storageButtonEl.addEventListener("click", function() {
        console.log("Storage Pulling From : " + locationIndex);
        AppendGifFromStorage(locationIndex);
    });
    removeButtonEl.addEventListener("click", function() {
        RemoveFromStorage(locationIndex);
    });
    indexStep++;
}

const populateFromStorage = (check) => {
    if (localStorageEl) {localStorageEl.remove();}
    //var placehold = localStorage.length;
    localStorageEl = document.createElement("div");
    localStorageEl.classList.add("local-storage");

    if(check == true) {
        var breakLineEl = document.createElement("hr");
        var localStorageHeadEl = document.createElement("h2");
        localStorageHeadEl.textContent = "Stored GIFs";
        bottomSectionEl.append(localStorageHeadEl);
        bottomSectionEl.append(breakLineEl);
    }
    
    for(let i = 0; i < Object.keys(storeDataObject).length; i ++) {
        console.log("Populating From Storage : " + storeDataObject[i]);
        var storageButtonEl = document.createElement("button");
        var removeButtonEl = document.createElement("button");
        var hyperlinkEl = document.createElement("a");
        var localUrl = storeDataObject[i][1].url;
        var localTitle = "";

        if (!localUrl) {
            continue;
        }
        
        if(storeDataObject) {
            localTitle = storeDataObject[i][0];
            localTitle = SanitizeString(localTitle);
        }
        
        storageButtonEl.classList.add("storage-button");
        removeButtonEl.classList.add("remove-button");
        hyperlinkEl.setAttribute("href", localUrl);
        hyperlinkEl.textContent = localTitle;
        removeButtonEl.textContent = "X";
        storageButtonEl.append(hyperlinkEl);
        storageButtonEl.append(removeButtonEl);
        localStorageEl.append(storageButtonEl);
        storageButtonEl.addEventListener("click", function() {
            console.log("Storage Pulling From : " + i);
            AppendGifFromStorage(i);
        });
        removeButtonEl.addEventListener("click", function(e) {
            event.stopPropagation();
            RemoveFromStorage(i);
        });
    }

    bottomSectionEl.append(localStorageEl);
}

const RemoveFromStorage = (index) => {
    console.log(storeDataObject);
    for(let i = 0; i < Object.keys(storeDataObject).length; i++) {
        var oldKey = i;
        var newKey = i-1;
        console.log(oldKey + " => " + newKey);
        if(i > index) {
            Object.defineProperty(storeDataObject, newKey, Object.getOwnPropertyDescriptor(storeDataObject, oldKey));
        }
    }
    
    delete storeDataObject[Object.keys(storeDataObject).length-1];
    indexStep--;
    if(indexStep < 0) { indexStep = 0; }
    localStorage.setItem("stepIndex", indexStep);
    localStorage.setItem("saveIndex", saveIndex);
    console.log(storeDataObject);
    localStorage.setItem("GIFnames", JSON.stringify(storeDataObject));
    populateFromStorage(false);
}

const SanitizeString = (input) => {
    const splitArray = input.split(" ");
    let build = "";
    for(let i = 0; i < splitArray.length; i++) {
        var piece = splitArray[i].slice(1);
        splitArray[i] = splitArray[i].charAt(0).toUpperCase() + piece;
        build += " " + splitArray[i];
    }
    return build;
}

GenerateContentButtons();

window.onload = () => {
    FetchQuotes();

    var quotesButtonEl = document.createElement("button");
    var quotesButtonTextEl = document.createElement("h2");

    quotesButtonEl.classList.add("custom-button");
    quotesButtonTextEl.textContent = "New Quotes";

    quotesButtonEl.append(quotesButtonTextEl);
    bottomSectionEl.prepend(quotesButtonEl);
    quotesButtonEl.addEventListener("click", () => {
        FetchQuotes();
    });

    GetLocalData();
    console.log(indexStep);
    if(indexStep > 0) { AppendGifFromStorage(0); }
}

optionEl.addEventListener("change", () => {
    saveParam = "image/" + optionEl.value;
});

chuckSelectEl.addEventListener("click", function() {
    //selectedQuoteEl.textContent = chuckQuoteEl.textContent;
    holdQuote = chuckQuoteEl.textContent;
    WriteToCanvas(chuckQuoteEl.textContent, 0);
});

kanyeSelectEl.addEventListener("click", function() {
    //selectedQuoteEl.textContent = kanyeQuoteEl.textContent;
    holdQuote = kanyeQuoteEl.textContent;
    WriteToCanvas(kanyeQuoteEl.textContent, 1);
});