// DEVELOP TEST SECTION
var chuckNorrisKey = "https://api.kanye.rest";
fetch(chuckNorrisKey, {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    forecastEl.textContent = data.quote;
});

fetch("https://api.chucknorris.io/jokes/random", {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    forecastEl.textContent = forecastEl.textContent + "\n\n" + data.value;
});

fetch("https://stoic.tekloon.net/stoic-quote", {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    //forecastEl.textContent = forecastEl.textContent + "\n\n" + data.value;
});

//giphy api key = bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks
//request url : https://api.giphy.com/v1/gifs/categories?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks


var searchKey = "https://api.giphy.com/v1/gifs/categories?api_key=bKFrNvQBG7WJdUKyt4cnTcta9Q84q8ks";
fetch(searchKey, {
    method: 'GET',
}).then(function(response) {
    return response.json();
}).then(function(data) {
    var gifParent = document.createElement("div");
    var gifHolder = document.createElement("img");
    //var link = document.createElement("a");
    gifHolder.src = data.data[21].gif.embed_url;

    gifParent.append(gifHolder);
    //forecastEl.append(gifParent);
    console.log(data.data);
});